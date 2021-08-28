<template>
    <div class="page-wrapper">
       <img src="../assets/images/logo.png">
        <h1 class="sub_title">אפליקציה לתרגול שמיעתי
        <br>עבור ילדים חירשים
        </h1>
        <router-link class="enter_button" to="/games">כניסה</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    .page-wrapper {
        background: url('../assets/images/bg1.png');
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .sub_title {
        color:#fff;
        font-size: 40px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding-bottom: 90px;
    }

    .enter_button {
        display:inline-block;
        font-size: 40px;
        padding: 20px 70px;
        background: rgba(85, 51, 156, 0.9);
        border-radius: 15px;
        color: #FFFFFF;
        text-decoration: none;
    }

</style>
