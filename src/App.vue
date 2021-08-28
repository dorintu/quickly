<template>
  <div>
      <div id="app">
          <div class="main-container">
             <vue-confirm-dialog></vue-confirm-dialog>
              <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>
import categories from "./config";
const soundSuccess = require("./assets/sounds/sound-success.mp3");
const soundError = require("./assets/sounds/sound-error.mp3");


export default {
  data() {
    return {
      isLoaded: false,
      soundSuccess,
      soundError,
    }
  },
  async created() {
    document.title = 'קוייכלי';
    await this.getData();
    setTimeout( () => {
      this.isLoaded = true;
    }, 10 );
  },
  methods: {
    async getData() {

      let volumeSetting = window.localStorage.volumeSetting;
      let speedSetting = window.localStorage.speedSetting;
      let levelSetting = window.localStorage.levelSetting;

      if (volumeSetting === undefined || volumeSetting === "undefined") {
        volumeSetting = 100;
        window.localStorage.volumeSetting = volumeSetting;
      }
      if (speedSetting === undefined || speedSetting === "undefined") {
        speedSetting = 100;
        window.localStorage.speedSetting = speedSetting;
      }
      if (levelSetting === undefined || levelSetting === "undefined") {
        levelSetting = "hearing";
        window.localStorage.levelSetting = levelSetting;
      }

      window.app = {
        playSoundSuccess: this.playSoundSuccess,
        playSoundError: this.playSoundError,
        stopAllSounds: this.stopAllSounds,
        categories,
        getRandomCategory: this.getRandomCategory,
        getCategoryByName: this.getCategoryByName,
        getRandomElementsFromArray: this.getRandomElementsFromArray,
        settings: {
          volumeSetting,
          speedSetting,
          levelSetting,
        }
      }
    },
    stopAllSounds() {
      var sounds = document.getElementsByTagName('audio');
      for(let i=0; i<sounds.length; i++) { sounds[i].pause(); sounds[i].currentTime = 0; }
    },
    playSoundSuccess() {
      let audio = new Audio(this.soundSuccess); // path to file
      audio.play();
    },
    playSoundError() {
      let audio = new Audio(this.soundError); // path to file
      audio.play();
    },
    getRandomCategory() {
      let randomCategoryIndex = this.getRandomInt(0, categories.length - 1);
      return window.app.categories[ randomCategoryIndex ];
    },
    getCategoryByName(name) {
      let categoryFound = false;
      window.app.categories.forEach(category => {
        if (name === category.name) {
          categoryFound = category;
        }
      });
      return categoryFound;
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomElementsFromArray(arr, n) {
    var result = new Array(n),
          len = arr.length,
          taken = new Array(len);
      if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
      while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
      }
      return result;
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');
html, body, input, button, a {
    font-family: 'Rubik', sans-serif;
    direction: rtl;
    text-align: right;
}
.main-container {
  width: 1024px;
  height: 768px;
  margin: 0 auto;
  display: flex;
  position: relative;
}
#app .vc-overlay {
  position: absolute;
}
.page-wrapper {
  width:100%;
}
body {
    margin:0;
    padding:0;
}
*, *:before, *:after{
    box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app .vc-container {
  width: 450px;
}
#app .vc-text-grid {
  padding: 3rem 0;
  --font-size-m: 24px;
  --font-size-s: 18px;
}
#app .vc-btn.left {
  border-right:0;
  border-left: 1px solid var(--button-border-color);
}
#app  .vc-btn {
  text-align: center;
}
</style>
