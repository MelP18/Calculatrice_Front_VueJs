/*=============================++++ HTML ++++=================================*/
<template>
    <div class="block">
        <div class="block__content">
            <Sidebar/>
            <div class="header">
                    <div class="container__header">
                      <div class="header__content">
                            <div class="header__logo">
                                <div class="icon">
                                    <IconPlatform />
                                </div>
                            </div>
                            <div class="user__connect">
                                <div class="user__connect__img">
                                    <span class="mdi mdi-account-circle"></span>
                                </div>
                                <span class="line"></span>
                                <div class="user__connect__username">
                                    <h4 id="username" v-if="userData">{{ userData.username }}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="main">
                <div class="main__content__bottom">
                    <div class="container">
                        <RouterView />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import IconPlatform from '@/components/IconPlatform.vue'
import Sidebar from '@/components/Sidebar.vue';
import { RouterView } from "vue-router";
import {ref} from "vue";

import {useUserStore} from '@/stores/user'
import { storeToRefs } from 'pinia'

const { userData } = storeToRefs(useUserStore())
const { user } = useUserStore()
user()

</script>
/*=============================++++ CSS ++++=================================*/

<style scoped>
.block{
    overflow-x: hidden;
}
.block__content {
    display: flex;
    
}
.icon {
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu__logo{
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
}
.main {
    width: calc(100% - 65px);
    height: 100vh;
    background-color: var(--rgba-background);
}

.main__content__bottom {
    width: 100%;
    height: calc(100vh - 62px);
    margin-top: 62px;
    background-color: var(--rgba-background);
    overflow-y: scroll;
}
.main__content__bottom::-webkit-scrollbar{
    width: 8px;
}
.main__content__bottom::-webkit-scrollbar-thumb{
    background-color: var(--secondary-color);
    border-radius: var(--border-radius-base);
}
.header {
    background-color: var(--secondary-color);
    z-index: 10;
    box-shadow: 0 0 5px var(--secondary-color);
    position: fixed;
    width: 100%;
}

.header__content {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.container__header{
    padding: 0 25px;
}
.user__connect {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 10px;
    padding: 5px 15px;
    border: 1px solid var(--base-color);
    background-color:var(--base-color) ;
    border-radius: 35px;
    box-shadow: 25px 25px 35px rgba(0, 0, 0, 0.25),10px 10px 70px rgba(0, 0, 0, 0.25),
    inset 5px 5px 10px rgba(0, 0, 0, 0.5),
    inset 5px 5px 20px rgba(255, 255, 255, 0.2),
    inset -2px -2px 10px rgba(0, 0, 0, 0.75);
}

.user__connect span.line {
    background-color: var(--color-white);
    height: 20px;
    width: 3px
}

.user__connect__img {
    width: 30px;
    height: 30px;
}

.user__connect__img span.mdi-account-circle {
    font-size: 25px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    color: var(--secondary-color);
    
}

.user__connect__username h4 {
    color: var(--color-white);
    font-weight: bold;
}

;</style>




