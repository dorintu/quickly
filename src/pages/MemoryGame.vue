<template>
  <div class="page-wrapper">
    <app-header />
    <h1 class="title">משחק הזיכרון</h1>

    <div v-if="isGameOn && isLoaded">
      <audio v-for="(card, cardIndex) in cardsList" :key="cardIndex"  :ref="'sound-' + card.name">
        <source v-if="card.sound_reading && currentLevel === 'reading'" :src="require(`../assets/${card.sound_reading}`)" type="audio/mpeg">
        <source v-if="card.sound_hearing && currentLevel === 'hearing'" :src="require(`../assets/${card.sound_hearing}`)" type="audio/mpeg">
        <source v-if="card.sound_lls && currentLevel === 'lls'" :src="require(`../assets/${card.sound_lls}`)" type="audio/mpeg">
      </audio>

      <div class="game-data">
        <button class="button" @click="restartGame">התחילו מחדש</button>
        <div class="game-data-type">
          <button class="button" :class="{ 'active': (gameType === 12) }" @click="changeGameType(12)">משחק קטן</button>
          <button class="button" :class="{ 'active': (gameType === 16) }" @click="changeGameType(16)">משחק גדול</button>
        </div>
        <div class="game-data-category">
          קטגוריה:
          <select name="category" v-model="currentCategoryName" @change="resetGame">
            <option v-for="(category, categoryIndex) in currentLevelCategories" :value="category.name" :key="categoryIndex">
              {{ category.hebrewName }}
            </option>
          </select>
        </div>
      </div>

      <div class="game-wrapper">
        <div :class="'game-board game-type-' + gameType">

          <div v-for="(card,cardIndex) in gameCards" :key="cardIndex" class="flip-card" :class="{ 'is-disabled': cardTypeToFlip === 'all', 'is-disabled': cardTypeToFlip !== card.type, 'image': card.type === 'image', 'sound': card.type === 'sound' , 'flipped': card.isFlipped, 'matched': card.isMatched }">
            <div class="flip-card-inner">
              <div class="flip-card-front" @click="flipCard(card)">
                <span>?</span>
                <img v-if="card.type === 'sound'" class="card-img" src="../assets/images/memory_game/sound.svg">
                <img v-if="card.type === 'image'" class="card-img" src="../assets/images/memory_game/picture.svg">
              </div>
              <div class="flip-card-back">
                <img v-if="card.type === 'sound'" class="card-img" src="../assets/images/memory_game/sound-waves.svg">
                <span v-if="card.isMatched && card.type === 'sound'">{{ card.hebrewName }}</span>
                <img v-if="card.type === 'image'" class="card-img" :src="require(`../assets/${card.image}`)">
              </div>
            </div>
          </div>

        </div>
      </div>
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
      isLoaded: false,
      isGameOn: false,
      currentCategoryName: 'vehicles',
      currentCategory: false,
      currentLevel: "hearing",
      categories: window.app.categories,
      gameType: 12,
      cardsList: [],
      gameCards: [],
      flippedCards: [],
    }
  },
  computed: {
    currentLevelCategories() {
      return this.categories.filter(category => {
        let words = category.words.filter(word => {
          if (word['sound_' + window.app.settings.levelSetting] !== undefined) {
            return true;
          }
        });
        return (words.length);
      })
    },
    cardTypeToFlip() {

      if (this.flippedCards.length === 1) { return 'image'; }
      if (this.flippedCards.length === 2) { return 'all'; }

      return 'sound';
    }
  },
  created() {
    this.currentLevel = window.app.settings.levelSetting;
    setTimeout(() => {
      this.isLoaded = true;
      this.resetGame();
      this.$forceUpdate();
    }, 10);
  },
  methods: {
    resetGame() {
      this.isGameOn = false;

      let category = window.app.getCategoryByName(this.currentCategoryName);

      let categoryWords = category.words.filter(word => {
        if (word['sound_' + window.app.settings.levelSetting] !== undefined) {
          return true;
        }
      });

      this.cardsList = window.app.getRandomElementsFromArray(categoryWords, (this.gameType / 2));

      this.flippedCards = [];
      this.gameCards = [];

      this.cardsList.forEach((card) => {
        this.gameCards.push({ ... card, type: 'image' })
      });

      this.cardsList.forEach((card) => {
        this.gameCards.push({ ... card, type: 'sound' })
      });

      this.gameCards.forEach((card) => {
        card.isFlipped = false;
        card.isMatched = false;
      });

      this.gameCards = this.shuffle( this.gameCards );

      setTimeout(() => {
        this.isGameOn = true;
        this.$forceUpdate();
      }, 400);
    },
    flipCard(card){
      card.isFlipped = true;
      this.$forceUpdate();

      if (card.type === 'sound') {
        this.playCardSound(card);
      }

      if(this.flippedCards.length < 2)
        this.flippedCards.push(card);
      if(this.flippedCards.length === 2)
        this._match();

    },
    _match(){
      if(this.flippedCards[0].name === this.flippedCards[1].name){
        this.flippedCards.forEach(card => card.isMatched = true);
        this.flippedCards = [];

        this.checkWin();
      }
      else{
        setTimeout(() => {
          this.flippedCards.forEach((card) => {card.isFlipped = false});
          this.flippedCards = [];
        }, 3000);
      }
    },
    restartGame() {
      this.$confirm({
        title: 'רוצים להתחיל מחדש?',
        message: 'לחצו כן כדי להתחיל מחדש את המשחק',
        button: {
          yes: 'כן',
          no: 'לא'
        },
        callback: confirm => {
          if (confirm) {
            this.resetGame();
          }
        }
      })
    },
    checkWin() {
      let hasNotMatchedCard = false;
      this.gameCards.forEach((card) => {
        if (!card.isMatched) {
          hasNotMatchedCard = true;
        }
      });
      if (!hasNotMatchedCard) {
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
      }
    },
    playCardSound(card) {
      window.app.stopAllSounds();
      let audio = this.$refs['sound-' + card.name][0];
      audio.playbackRate = window.app.settings.speedSetting / 100;
      audio.volume = window.app.settings.volumeSetting / 100;
      audio.play();
    },
    changeGameType(type) {
      if (this.gameType === type) { return; }
      this.gameType = type;
      this.resetGame();
    },
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },

  }
}
</script>

<style scoped>
.page-wrapper {
  background: url('../assets/images/bg1.png');
}

.game-wrapper{
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin: 0 auto;
  width: 931px;
  height: 500px;
  background: rgba(85, 51, 156, 0.85);
  border-radius: 20px;
}

.game-board {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap:20px;
  padding:30px;
}

.game-board.game-type-16 {
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap:10px;
}

.game-board.game-type-16 .flip-card-back img {
  max-height:65px;
}

.game-board.game-type-16 .flip-card {
  height:105px;
}

.title {
  color:#fff;
  font-size: 75px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  margin-top: 10px;
}

.flip-card {
  background-color: transparent;
  perspective: 1000px;
  height:135px;
}

.flip-card.is-disabled:not(.flipped) {
  opacity: .75;
  pointer-events: none;
  filter: grayscale(100%);
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.4s;
  transform-style: preserve-3d;
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card.flipped .flip-card-front img {
  opacity:0;
}

.flip-card.matched .flip-card-back {
  opacity: .95;
  background: #5ae0b6;
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}


.flip-card-front {
  background-color: #4672C6;
  border-radius:10px;
  transition: .2s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color:#F9A7A7;
  border: 5px solid #3763CC;
  box-shadow: 1px 3px 1px rgba(0,0,0,.15);
}

.flip-card-front span { font-size:80px; }
.flip-card-front img {
  position: absolute;
  left:10px;
  top:10px;
  background: #fff;
  border-radius:100px;
  padding:6px;
  max-width: 45px;
  box-shadow: 1px 3px rgba(0,0,0,.15);
  height:auto;
}

.flip-card-back {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  border-radius:10px;
  transform: rotateY(180deg);
  border: 5px solid #1d9e76;
  box-shadow: 1px 3px 1px rgba(0,0,0,.15);
  color: #fff;
  text-shadow: -1px 1px 2px #000;
  font-size:24px;
  font-weight:bold;
}

.flip-card-back img {
  max-width: 110px;
  max-height:88px;
}

.game-data {
  display: flex;
  justify-content: space-between;
  margin: 0 auto 20px auto;
  width: 931px;
}

.button {
  padding:8px 17px;
  font-size:16px;
  border-radius:6px;
  cursor: pointer;
  border: 3px solid transparent;
}

select {
  padding:8px 17px;
  font-size:16px;
  border-radius:6px;
  cursor: pointer;
  border: 3px solid transparent;
}

.button.active {
  background: #24b98b;
  color: #fff;
  border-color: #1d9e76;
  box-shadow: 1px 3px 1px rgba(0,0,0,.15);
  text-shadow: -1px 1px 2px #000;
}

.game-data .button:not(:last-child) {
  margin-left:10px;
}

.game-data-type {
  margin-right:20px;
}

.game-data-category {
  margin-right:20px;
  color: #fff;
  display: flex;
  align-items: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 600;
}
.game-data-category select { margin-right:10px; }
</style>
