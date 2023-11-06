/*=============================++++ HTML ++++=================================*/
<template>
    
    <Login/>  
                 
</template>




/*=============================++++ JS ++++=================================*/

<script lang="ts"  setup>
import Header from '@/components/Header.vue'
import image2 from '@/assets/images/remboursement-notes-de-frais.jpg'
import IconPlatform from '@/components/IconPlatform.vue';
import Login from '@/components/SignIn.vue'


</script>


/*=============================++++ CSS ++++=================================*/
<style scoped>
.block {
    display: flex;
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    overflow: hidden;
}

.main__background {
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
}

.main__background .main__background__left {
    padding: 15px;
  background-color: var(--rgba-background);
    width: 70%;
    height: 100%;
}

.main__background .main__background__right {
    padding: 15px;
    background-color: var(--secondary-color);
    width: 30%;
    height: 100%;
}

.main__foreground {
    background-color: var(--color-black);
    width: 80%;
    height: 80vh;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    
}

.main__foreground__img {
    width: 100%;
    height: 100%;
}

.main__foreground__img img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
}

.login {
    padding: 25px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba( 255, 255, 255, 0.25 );
    background-color: var(--rgba-background);
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.login__field {
    width: 70%;
    height: 100%;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    overflow-x: hidden;
}



.login__field h3 {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: var(--color-white);
    font-family: var(--font-family-italic);
}


</style>