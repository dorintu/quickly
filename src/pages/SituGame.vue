<template>
    <div class="page-wrapper">
        <app-header />
        <h1 class="title">משחק סיטואציות</h1>

      <div v-if="isGameOn" class="game-wrapper">
          <div class="options" :class="{ 'can-guess': canGuess }">
            <div v-for="(option,optionIndex) in gameOptions" :key="optionIndex" class="option" @click="guessOption(option)">
              <img class="option-img" :src="require(`../assets/images/situ_game/${option.image}`)" alt="">
            </div>
          </div>
          <div class="playBox">
            <h4 class="howToPlay">לחצו על התיבה לניגון הצליל</h4>
            <img @click="playBoxSound" src="../assets/images/situ_game/musicBox.png">
          </div>

          <audio ref="playBoxSoundElement">
            <source :src="require(`../assets/sounds/situ_game/${gamePlayBoxResult.sound}`)" type="audio/mpeg">
          </audio>

        </div>

    </div>
</template>

<script>
import AppHeader from '../components/AppHeader';
export default {
  components: {
    AppHeader
  },
  data() {
    return {
      isGameOn: false,
      canGuess: false,
      optionsList: [
        { name: 'sheep_eat', image: 'sheep_eat.png', sound: 'sheep_eat.mp3' },
        { name: 'monkey_play_drums', image: 'monkey_play_drums.png', sound: 'monkey_play_drums.mp3' },
        { name: 'pig_play_drums', image: 'pig_play_drums.png', sound: 'pig_play_drums.mp3' },
        { name: 'deer_play_drums', image: 'deer_play_drums.png', sound: 'deer_play_drums.mp3' },
        { name: 'cat_eat', image: 'cat_eat.png', sound: 'cat_eat.mp3' },
        { name: 'cat_play', image: 'cat_play.png', sound: 'cat_play.mp3' },
        { name: 'chicken_eat', image: 'chicken_eat.png', sound: 'chicken_eat.mp3' },
        { name: 'chicken_play', image: 'chicken_play.png', sound: 'chicken_play.mp3' },
        { name: 'cow_eat', image: 'cow_eat.png', sound: 'cow_eat.mp3' },
        { name: 'cow_play', image: 'cow_play.png', sound: 'cow_play.mp3' },
        { name: 'dog_eat', image: 'dog_eat.png', sound: 'dog_eat.mp3' },
        { name: 'dog_play', image: 'dog_play.png', sound: 'dog_play.mp3' },
        { name: 'donkey_play', image: 'donkey_play.png', sound: 'donkey_play.mp3' },
        { name: 'fox_play', image: 'fox_play.png', sound: 'fox_play.mp3' },
        { name: 'line_play', image: 'line_play.png', sound: 'line_play.mp3' },
        { name: 'monkey_play', image: 'monkey_play.png', sound: 'monkey_play.mp3' },
        { name: 'pig_eat', image: 'pig_eat.png', sound: 'pig_eat.mp3' },
        { name: 'snake_play', image: 'snake_play.png', sound: 'snake_play.mp3' },
      ],
      gameOptions: [],
      gamePlayBoxResult: false
    }
  },
  methods: {
    resetGame() {
      this.canGuess = false;
      this.isGameOn = false;

      this.gameOptions = [];

      this.optionsList.forEach((option) => {
        this.gameOptions.push({ ... option })
      });

      this.gameOptions = this.shuffle( this.gameOptions );

      this.gameOptions = window.app.getRandomElementsFromArray(this.gameOptions, 4);

      let gamePlayBoxResultIndex = this.getRandomInt(0,3);
      this.gamePlayBoxResult = this.gameOptions[gamePlayBoxResultIndex];


      setTimeout(() => {
        this.isGameOn = true;
        this.$forceUpdate();
      }, 400);
    },
    guessOption(option) {

      if (option.name === this.gamePlayBoxResult.name) {
        window.app.playSoundSuccess();
        this.$confirm({
          title: 'כל הכבוד! ניצחתם 🥇',
          message: 'מה תרצו לעשות עכשיו?',
          button: {
            yes: 'להתחיל משחק חדש',
            no: 'לחזור לדף המשחקים'
          },
          callback: confirm => {
            console.log(confirm);
            if (confirm === true) {
              this.resetGame();
            } else if (confirm === false) {
              this.$router.push('games')
            }
          }
        })
      } else {
        window.app.playSoundError();
        this.$confirm({
          title: 'זו לא התשובה הכונה 🙁',
          message: 'בואו ננסה שוב',
          button: {
            yes: 'אני רוצה לנסות שוב'
          }
        })
      }

    },
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    playBoxSound() {
      this.canGuess = true;
      let audio = this.$refs['playBoxSoundElement'];
      audio.playbackRate = window.app.settings.speedSetting / 100;
      audio.volume = window.app.settings.volumeSetting / 100;
      audio.play();
    }
  },
  created() {
    this.resetGame();
  }
}
</script>

<style scoped>
  .page-wrapper {
    background: url('../assets/images/bg2.png');
  }

  .howToPlay{
    font-size: 20px;
  }

  .game-wrapper{
    padding:10px 0;
    margin: 0 auto;
    width: 931px;
    height: 550px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
  }

  .top-part{
    width: 800px;
    height: 150px;
    margin:0 auto;
  }
  .down-part{
    width: 800px;
    height: 350px;
    margin:0 auto;
  }

 .title {
   color:#fff;
   font-size: 75px;
   text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   margin-bottom: 20px;
   margin-top: 10px;
  }

 .options {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-gap:20px;
   padding: 0 30px;
 }
 .options:not(.can-guess) .option { opacity: .7; pointer-events: none; }
 .option {
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   transition: .2s;
   box-shadow: 1px 3px 1px rgba(0,0,0,.15);
   border:5px solid #fff;
   background:rgba(255,255,255,.3);
   padding: 10px;
   box-sizing: border-box;
   cursor: pointer;
 }
 .option:hover {
   background:rgba(255,255,255,.8);
   transform: translateY(-6px);
 }
 .option img {
   max-width: 100%;
   max-height:190px;
 }
 .playBox { margin-top:10px; display: flex; align-items: center; justify-content: center; flex-direction: column-reverse; }
 .playBox h4 { color: #fff; text-shadow: -1px 1px #000; }
 .playBox img {
   max-width: 100%;
   max-height:250px;
   margin-right:80px;
   cursor: pointer;
   transition: .2s;
 }
 .playBox img:hover { transform:scale(1.1); }

 .button {
   padding:8px 17px;
   font-size:16px;
   border-radius:6px;
   border:0;
   cursor: pointer;
   background:#fff;
   box-shadow: 1px 3px rgba(0,0,0,.15);
 }
</style>
