
/*=============================++++ HTML ++++=================================*/
<template>
    <div class="block">
        <div class="main__background">
            <div class="main__background__left">
                <!-- left rrgba vilet -->
            </div>
            <div class="main__background__right">
                <!-- right violet -->
            </div>
        </div>
        <div class="main__foreground">
            <div class="main__foreground__img">
                <img :src="image2" alt="">
                <div class="auth">
                    <Header />
                    <div class="auth__form">
                        <div class="auth__field">
                            <RouterView/>
                        </div>
                    </div>
                   
                </div>
                <div class="main__foreground__content__left">
                    <SignInformation />
                </div>
            </div>
        </div>
    </div>
</template>

/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import image2 from '@/assets/images/remboursement-notes-de-frais.jpg'
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router';

import Header from '@/components/Header.vue'
import SignInformation from '../components/SignInformation.vue';

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
    display: flex;
    
}

.main__foreground__content__left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    width: 25%;
    padding: 15px;
    background: rgba(255, 255, 255, 0.25);
    background-color: var( --rgba-color-white);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
}

.main__foreground__img img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
}
.main__foreground__content__left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    width: 25%;
    padding: 15px;
    background: rgba(255, 255, 255, 0.25);
    background-color: var( --rgba-color-white);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
}

.auth {
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

@media(max-width: 992px){
    .main__foreground__content__left{
        display: none;
    }
    .auth{
        width: 100%;
    }
}
 
/*    gap: 25px;
    background: rgba(255, 255, 255, 0.25);
    background-color: var(--rgba-background);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
}

.auth__form{
    width: 100%;
    height: calc(100% - 49px);
    display: flex;
    justify-content: center;
}
.auth__field {
    width: 90%;
    height: 100%;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    overflow-x: hidden;
    overflow-y: scroll;
}

.auth__field::-webkit-scrollbar {
    width: 5px;
}
.auth__field::-webkit-scrollbar-thumb {
    border-radius:15px ;
    background-color: white;
}
.auth__field h3 {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: var(--color-white);
    font-family: var(--font-family-italic);
}

.error__part {
    display: flex;
    justify-content: center;
    align-items: center;
}

.error {
    border-radius: var(--border-radius-primary);
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: rgb(237, 17, 17);
}

.auth__field__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.auth__field__list__item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
}

.auth__field__list__item label {
    font-weight: bold;
    color: var(--color-white);
    font-size: 13px;
}

.auth__field__list__item__input {
    display: flex;
}

.auth__field__list__item__input span {
    font-size: 15px;
    padding: 4px;
    color: var(--color-white);
    background-color: var(--base-color);
    border-top-left-radius: var(--border-radius-primary);
    border-bottom-left-radius: var(--border-radius-primary);
}

.auth__field__list__item__input input {
    padding-left: 8px;
    width: 100%;
    outline: 0;
    border: none;
    background-color: var(--color-white);
    border-top-right-radius: var(--border-radius-primary);
    border-bottom-right-radius: var(--border-radius-primary);
}

.auth__field__list__item__input input::placeholder {
    color: var(--secondary-color);
}

.auth__field__list__item__input__pass {
    display: flex;
}

.auth__field__list__item__input__pass span.mdi-lock {
    font-size: 15px;
    padding: 4px;
    color: var(--color-white);
    background-color: var(--base-color);
    border-top-left-radius: var(--border-radius-primary);
    border-bottom-left-radius: var(--border-radius-primary);
}

.auth__field__list__item__input__pass input {
    padding-left: 8px;
    width: 100%;
    outline: 0;
    background-color: none;
    border: none;
    border-top-right-radius: var(--border-radius-primary);
    border-bottom-right-radius: var(--border-radius-primary);
}


.btn__submit {
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn__submit button {
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    padding: 5px 25px;
    color: var(--color-white);
    background-color: var(--base-color);
    border-radius: var(--border-radius-primary);
}

.auth__field__list__item__two {
    display: flex;
    gap: 15px;
    align-items: center;
}
@media(max-width: 768px){
    .auth__field__list__item__two{
        flex-direction: column;
    } 
}*/
</style>
