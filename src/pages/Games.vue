<template>
    <div class="page-wrapper">
        <app-header />
        <h1 class="title">משחקים</h1>
        <div class="games">
          <div class="games-column">
            <router-link to="/matchGame">
                <img src="../assets/images/games/match_game.png">
            </router-link>
            <router-link to="/situGame">
                <img src="../assets/images/games/situ_game.png">
            </router-link>
          </div>

          <div class="games-column">
            <router-link to="/encycloGame">
                <img src="../assets/images/games/encyc_game.png">
            </router-link>
            <router-link to="/memoryGame">
                <img src="../assets/images/games/memory_game.png">
            </router-link>
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
}
</script>

<style scoped>
    .page-wrapper {
        background: url('../assets/images/bg1.png');
    }
 .title {
   color:#fff;
   font-size: 100px;
   text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   margin-bottom: 20px;
    }

.games {
  display: flex;
  justify-content: space-between;
  width: 900px;
  height: 430px;
  margin:0 auto;
}
.games-column{
  display: grid;
  grid-template-columns: 1fr;
}
.games-column img {
  max-height: 200px;
  cursor: pointer;
  transition: .2s;
}
.games-column img:hover {
  transform: scale(1.05);
}
</style>
