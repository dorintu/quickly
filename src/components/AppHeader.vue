<template>
    <div>

      <div class="app-header">

        <div class="app-header-menu">
             <router-link to="/games">
               <img src="../assets/images/menu_logos/home_logo.png">
             </router-link>

            <img @click="openSettings" src="../assets/images/menu_logos/setting_logo.png">
        </div>

        <div class="app-header-logo">
            <img src="../assets/images/logo.png">
        </div>
      </div>

      <div v-if="isSettingsOpen" class="app-settings">
        <div class="app-settings-box">
          <div @click="closeSettings" class="app-settings-close">X</div>
          <h1 class="app-settings-title">הגדרות</h1>

          <div class="app-settings-range">
            <div class="app-settings-range-name">עוצמת הדיבור</div>
            <div class="app-settings-range-input">
              <input class="app-settings-range-input-slider" v-model="volumeSetting" type="range" min="0" max="100">
            </div>
            <div class="app-settings-range-value">{{ volumeSetting }}%</div>
          </div>

          <div class="app-settings-range">
            <div class="app-settings-range-name">מהירות הדיבור</div>
            <div class="app-settings-range-input">
              <input class="app-settings-range-input-slider" v-model="speedSetting" type="range" min="0" max="100">
            </div>
            <div class="app-settings-range-value">{{ speedSetting }}%</div>
          </div>

          <div v-if="showLevelOption" class="app-settings-radio">
            <div class="app-settings-radio-name">רמת קושי</div>
            <div class="app-settings-radio-input">
              <label for="lls">
                <input @change="updateSettings" type="radio" id="lls" name="level" v-model="levelSetting" value="lls">
                רמה 1 - LLS
              </label>
              <label for="easy">
                <input @change="updateSettings" type="radio" id="easy" name="level" v-model="levelSetting" value="hearing">
                רמה 2 - צלילים
              </label>
              <label for="hard">
                <input @change="updateSettings" type="radio" id="hard" name="level" v-model="levelSetting" value="reading">
                רמה 3 -הקראה
              </label>
            </div>
          </div>


          <button  @click="closeSettings" class="save-button">
            אישור
          </button>

        </div>
      </div>


    </div>
</template>

<script>
export default {
  data() {
    return {
      isSettingsOpen: false,
      isHelpOpen: false,
      volumeSetting: window.localStorage.volumeSetting,
      speedSetting: window.localStorage.speedSetting,
      levelSetting: window.localStorage.levelSetting,
    }
  },
  updated() {
    this.updateSettings();
  },
  created() {
    this.updateSettings();
  },
  computed: {
    showLevelOption() {
      return (this.$router.currentRoute.fullPath === "/games");
    }
  },
  methods: {
    updateSettings() {
      window.app.settings = {
        volumeSetting: this.volumeSetting,
        speedSetting: this.speedSetting,
        levelSetting: this.levelSetting,
      };
      window.localStorage.volumeSetting = this.volumeSetting;
      window.localStorage.speedSetting = this.speedSetting;
      window.localStorage.levelSetting = this.levelSetting;
    },
    openSettings() {
      this.isSettingsOpen = true;
    },
    closeSettings() {
      this.isSettingsOpen = false;
    },
    openHelp(){
      this.isHelpOpen = true;
    },
    closeHelp(){
      this.isHelpOpen = false;
    }
  }
}
</script>


<style>
    .app-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
    }
    .app-header-menu {
        display: flex;
        align-items: center;
    }
    .app-header-menu img {
      margin-left:15px;
      cursor: pointer;
    }
    .app-header-logo img {
        max-height: 60px;
    }
    .app-settings {
      position:  absolute;
      bottom:0;
      right:0;
      top:0;
      left:0;
      background:rgba(0,0,0,.7);
      width: 1024px;
      height: 768px;
      margin:0 auto;
      z-index:10;
    }
    .app-settings-box {
      background:rgba(85,51,156,.95);
      height:600px;
      width:900px;
      margin:100px auto 0 auto;
      border-radius:12px;
      position: relative;
    }
    .app-settings-title {
      color:#fff;
      font-size: 80px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin-bottom: 80px;
      margin-top:50px;
    }
    .app-settings-close {
      color: #fff;
      font-size:22px;
      font-weight:bold;
      position: absolute;
      border: 3px solid #fff;
      border-radius:100px;
      width:50px;
      height:50px;
      padding: 6px;
      right:10px;
      top:10px;
      cursor: pointer;
    }
    .app-settings-range, .app-settings-radio {
      display: flex;
      color: #fff;
      justify-content: space-between;
      padding-right: 50px;
      padding-left: 50px;
      padding-bottom: 50px;
      font-size:30px;
    }
    .app-settings-radio { padding-bottom: 60px; }
    .app-settings-range-value {
      width:100px;
    }

    .app-settings-range-input input {
      width: 100%;
    }
    .app-settings-range-input {
      flex: 1;
      padding:0 50px;
    }
    .app-settings-range-input-slider {
      -webkit-appearance: none;
      width: 500px;
      height: 25px;
      background: #fff;
      outline: none;
      border-radius:30px;
      transition: opacity .2s;
    }

    .app-settings-range-input-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 45px;
      height: 45px;
      background: #fff;
      cursor: pointer;
      border-radius:100px;
      border:5px solid #55339C;
      box-shadow:0 0 2px rgba(0,0,0,0.3);
    }
    .app-settings-radio-input label:not(:last-child) { margin-bottom:10px; }
    .app-settings-radio-input label {
      display: flex;
      align-items: center;
    }
    .app-settings-radio-input label input {
      width: 23px;
      height: 23px;
      margin-left:10px;
    }
    .app-settings-radio-input {
      display: flex;
      flex-direction: column;
      padding-left: 280px;
    }

    .save-button {
      background:#fff;
      border-radius:8px;
      border:0;
      padding:15px 30px;
      font-size:30px;
      cursor: pointer;
      margin-top:-30px;
    }
</style>
