<template>
    <div v-if="isLoaded" class="page-wrapper">
        <app-header />
        <h1 class="title">אנציקלופדיה</h1>

        <div class="game-wrapper">

          <div class="categories">
            <div v-for="(category,categoryIndex) in currentLevelCategories" :key="categoryIndex" class="category" @click="changeSubject(category)" :class="{ 'active': (category.name === selectedSubjectName) }">
              <img class="category-img" :src="require(`../assets/${category.image}`)" alt="">
              <span class="category-name">
                {{ category.hebrewName }}
              </span>
            </div>
          </div>

          <div v-if="showWords" class="words">
            <div v-for="(word,wordIndex) in currentSubjectWords" :key="wordIndex" class="word">
              <img @click="playWordSoundByIndex(wordIndex)" class="word-img" :src="require(`../assets/${word.image}`)" alt="">
              <span class="word-name">
                {{ word.hebrewName }}
              </span>


              <span class="word-play" style="display:none;">
                <audio :ref="`word-audio-${selectedSubjectName}-${wordIndex}`">
                  <source :src="require(`../assets/${word['sound_' + currentLevel]}`)" type="audio/mpeg">
                </audio>
                <img @click="playWordSoundByIndex(wordIndex)" src="../assets/images/encyclo_game/sound.png">
              </span>


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
      currentLevel: 'hearing',
      selectedSubjectName: 'vehicles',
      categories: window.app.categories,
      showWords: true,
    }
  },
  computed: {
    currentSubjectWords() {
      let words = [];
      this.categories.forEach(category => {
        if (category.name === this.selectedSubjectName) {
          words = category.words.filter(word => {
            if (word['sound_' + this.currentLevel] !== undefined) {
              return true;
            }
          });
        }
      })
      return words;
    },
    currentLevelCategories() {
      return this.categories.filter(category => {
        let words = category.words.filter(word => {
          if (word['sound_' + this.currentLevel] !== undefined) {
            return true;
          }
        });
        return (words.length);
      })
    }
  },
  mounted() {
    this.currentLevel = window.app.settings.levelSetting;
    setTimeout(() => {
      this.isLoaded = true;
      this.$forceUpdate();
    }, 10);
  },
  methods: {
    changeSubject(category) {
      this.selectedSubjectName = category.name;
      this.showWords = false;
      setTimeout(() => {
        this.showWords = true;
        this.$forceUpdate();
      }, 10);
    },
    playWordSoundByIndex(wordIndex) {
      window.app.stopAllSounds();
      let audio = this.$refs[`word-audio-${this.selectedSubjectName}-${wordIndex}`][0];
      audio.playbackRate = window.app.settings.speedSetting / 100;
      audio.volume = window.app.settings.volumeSetting / 100;
      audio.play();
    },
  }
}
</script>

<style scoped>
  .page-wrapper {
    background: url('../assets/images/bg1.png');
  }

  .game-wrapper{
    margin: 0 auto;
    width: 931px;
    height: 550px;
    background: rgba(85, 51, 156, 0.85);
    border-radius: 20px;
  }

  .words {
    overflow: scroll;
    height:390px;
  }
 .title {
   color:#fff;
   font-size: 75px;
   text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   margin-bottom: 20px;
   margin-top: 10px;
  }

  .categories {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding:15px 20px;
  }
  .category {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    font-weight:bold;
    border-radius: 10px;
    transition: .2s;
    box-shadow: 1px 3px 1px rgba(0,0,0,.15);
    /* border:2px solid #fff; */
    background:rgba(255,255,255,.3);
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    margin:0 10px;
  }
  .category:hover, .category.active {
    background:rgba(255,255,255,.99);
    transform: translateY(-6px);
  }
  .category:hover .category-name, .category.active .category-name {
    color: #000;
  }
  .category img {
    max-width: 100%;
    max-height:100px;
    height:90px;
    object-fit: contain;
  }
  .category-name {
    margin-top:8px;
  }
  .word {
    padding: 20px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    color: #fff;
    font-size:30px;
    grid-gap: 20px;
  }
  .word-img {
    max-width:130px;
    max-height:90px;
    cursor: pointer;
  }
  .word:nth-child(2n) {
    background:rgba(255,255,255,.09);
  }
  .word-name { text-align: left; padding-left:30px; }
  .word-play{
    text-align: left;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
</style>
