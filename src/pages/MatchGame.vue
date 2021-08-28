<template>
  <div class="page-wrapper">
    <app-header />
    <h1 class="title">משחק התאמות</h1>


    <div v-if="isGameOn && isLoaded">

      <audio v-for="(card, cardIndex) in cardsList" :key="cardIndex"  :ref="'sound-' + card.name">
        <source v-if="card.sound_reading && currentLevel === 'reading'" :src="require(`../assets/${card.sound_reading}`)" type="audio/mpeg">
        <source v-if="card.sound_hearing && currentLevel === 'hearing'" :src="require(`../assets/${card.sound_hearing}`)" type="audio/mpeg">
        <source v-if="card.sound_lls && currentLevel === 'lls'" :src="require(`../assets/${card.sound_lls}`)" type="audio/mpeg">
      </audio>

      <div class="game-data">
        <button class="button" @click="restartGame">התחילו מחדש</button>
        <div class="game-data-type">
          לחצו על הקופסא ואז על התמונה
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
        <div class="game-images">
          <div v-for="(word,wordIndex) in gameWordsImages" :key="wordIndex" class="word-image" :class="{ 'selected': word.isSelected, 'matched': word.isMatched }">
            <img class="word-image-img" @click="selectWordImage(word)" :src="require(`../assets/${word.image}`)">
          </div>
        </div>
        <div class="game-sounds">
          <div v-for="(word,wordIndex) in gameWordsSounds" :key="wordIndex" class="word-sound" :class="{ 'selected': word.isSelected, 'matched': word.isMatched }">
            <img v-if="word.type === 'sound'" class="word-sound-img" @click="selectWordBox(word)" :src="require(`../assets/images/match_game/box${word.imageBoxId}.png`)">
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
      gameSize: 4,
      cardsList: [],
      gameWords: [],
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
  computed: {
    currentSelectedWord() {
      let currentSelectedWord = false;
      this.gameWords.forEach(word => {
        if (word.isSelected) {
          console.log('found word', word);
          currentSelectedWord = word;
        }
      });
      return currentSelectedWord;
    },
    gameWordsImages() {
      return this.gameWords.filter(word => {
        return word.type === 'image'
      })
    },
    gameWordsSounds() {
      return this.gameWords.filter(word => {
        return word.type === 'sound'
      })
    },
    currentLevelCategories() {
      return this.categories.filter(category => {
        let words = category.words.filter(word => {
          if (word['sound_' + window.app.settings.levelSetting] !== undefined) {
            return true;
          }
        });
        return (words.length);
      })
    }
  },
  methods: {
    selectWordBox(word){
      this.gameWords.forEach(word => {
        word.isSelected = false;
      });
      word.isSelected = true;
      this.playWordSound(word);
      setTimeout( () => {
        this.$forceUpdate();
      }, 10);
    },
    selectWordImage(word) {

      let currentSelectedWord = false;

      this.gameWords.forEach(word => {
        if (word.isSelected) {
          currentSelectedWord = word;
        }
      });

      if (!currentSelectedWord) { return false; }

      if (word.name === currentSelectedWord.name) {
        window.app.playSoundSuccess();

        word.isMatched = true;
        currentSelectedWord.isMatched = true;
        currentSelectedWord.isSelected = false;

        this.$forceUpdate();

        this.checkWin();
      } else {
        window.app.playSoundError();
      }

    },
    resetGame() {
      this.isGameOn = false;

      let category = window.app.getCategoryByName(this.currentCategoryName);

      let categoryWords = category.words.filter(word => {
        if (word['sound_' + window.app.settings.levelSetting] !== undefined) {
          return true;
        }
      });

      this.cardsList = window.app.getRandomElementsFromArray(categoryWords, this.gameSize);

      this.gameWords = [];

      this.cardsList.forEach((card) => {
        this.gameWords.push({ ... card, type: 'image' })
      });

      this.cardsList.forEach((card) => {
        this.gameWords.push({ ... card, type: 'sound' })
      });

      this.gameWords.forEach((card) => {
        card.isSelected = false;
        card.isMatched = false;
      });

      this.gameWords = this.shuffle( this.gameWords );

      let i = 1;
      this.gameWords.forEach((card) => {
        if (card.type === 'sound') {
          card.imageBoxId = i;
          i++;
        }
      });

      setTimeout(() => {
        this.isGameOn = true;
        this.$forceUpdate();
      }, 400);
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
    playWordSound(word) {
      window.app.stopAllSounds();
      let audio = this.$refs['sound-' + word.name][0];
      audio.playbackRate = window.app.settings.speedSetting / 100;
      audio.volume = window.app.settings.volumeSetting / 100;
      audio.play();
    },
    checkWin() {
      let hasNotMatchedWord = false;
      this.gameWords.forEach((word) => {
        if (!word.isMatched) {
          hasNotMatchedWord = true;
        }
      });
      if (!hasNotMatchedWord) {
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
    background: url('../assets/images/bg2.png');
  }

  .game-wrapper{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 931px;
    height: 500px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
  }
  .game-column{
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

 .title {
   color:#fff;
   font-size: 75px;
   text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   margin-bottom: 20px;
   margin-top: 10px;
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
    margin-right:70px;
    font-size: 20px;
  }

  .selected {
    /*border:2px solid #fff;*/
    /*border-radius:5px;*/
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


  .word-sound.matched, .word-image.matched {
    pointer-events: none;
    opacity: 0;
  }
  .word-image {
    text-align: right;
  }
  .word-image img {
    margin-bottom: 13px;
    margin-top: 13px;
    margin-right: 32px;
    cursor: pointer;
    max-height:100px;
    max-width:205px;
  }
  .word-sound-img {
    cursor: pointer;
    margin-left: 15px;
  }
</style>
