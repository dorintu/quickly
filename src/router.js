import VueRouter from "vue-router";
import Home from "./pages/Home";
import Games from "./pages/Games";
import MatchGame from "./pages/MatchGame";
import EncycloGame from "./pages/EncycloGame";
import MemoryGame from "./pages/MemoryGame";
import SituGame from "./pages/SituGame";

const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/games',
            component: Games
        },
        {
            path: '/matchGame',
            component: MatchGame
        },
        {
            path: '/encycloGame',
            component: EncycloGame
        },
        {
            path: '/memoryGame',
            component: MemoryGame
        },
        {
            path: '/situGame',
            component: SituGame
        }
    ]
})

export default router;
