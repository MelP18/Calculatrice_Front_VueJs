/*=============================++++ HTML ++++=================================*/
<template>
    <div class="block">
        <div class="block__content">
            <Sidebar/>
            <div class="header">
                    <div class="container__header">
                      <div class="header__content">
                            <div class="header__logo">
                                <Logo />
                            </div>
                            <div class="header__right">
                                <ThemeToggle />
                                <div class="user__connect">
                                    <div class="user__connect__img">
                                        <span class="mdi mdi-account-circle"></span>
                                    </div>
                                    <span class="line"></span>
                                    <div class="user__connect__username">
                                        <h4 id="username" v-if="userData">{{ userData.username }}</h4>
                                    </div>
                                </div>
                                <button type="button" class="header__logout" aria-label="Se déconnecter" @click="showLogoutModal = true">
                                    <span class="mdi mdi-logout"></span>
                                </button>
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

        <LogoutModal v-if="showLogoutModal" @cancel="showLogoutModal = false" @confirm="signOut" />
    </div>
</template>
/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import Logo from '@/components/Logo.vue'
import Sidebar from '@/components/Sidebar.vue';
import ThemeToggle from '@/components/ThemeToggle.vue';
import LogoutModal from '@/components/LogoutModal.vue';
import { RouterView, useRouter } from "vue-router";
import { ref } from "vue";

import {useUserStore} from '@/stores/user'
import { storeToRefs } from 'pinia'

const { userData } = storeToRefs(useUserStore())
const { user } = useUserStore()
user()

const router = useRouter()
const showLogoutModal = ref(false)

function signOut() {
    localStorage.removeItem('tokenUser')
    showLogoutModal.value = false
    router.replace('/signin')
}
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
    flex: 1;
    min-width: 0;
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
    background-color: var(--header-bg-scrolled);
    z-index: 10;
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
    max-width: 1400px;
    margin: 0 auto;
}
.header__right {
    display: flex;
    align-items: center;
    gap: 16px;
}
.header__logout {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: var(--white);
    border: none;
    border-radius: 50%;
    color: var(--hero-bg);
    cursor: pointer;
    transition: background .15s ease, color .15s ease;
}
.header__logout:hover {
    background: var(--accent-coral);
    color: var(--hero-bg);
}
.header__logout .mdi {
    font-size: 1.125rem;
}
.user__connect {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 10px;
    padding: 5px 15px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background-color: rgba(255, 255, 255, 0.06);
    border-radius: 35px;
}

.user__connect span.line {
    background-color: rgba(255, 255, 255, 0.2);
    height: 20px;
    width: 2px
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
    color: var(--accent-green);

}

.user__connect__username h4 {
    color: var(--color-white);
    font-weight: bold;
}

@media (max-width: 560px) {
    .container__header{
        padding: 0 14px;
    }
    .header__right {
        gap: 10px;
    }
    .user__connect {
        padding: 5px 10px;
        gap: 6px;
    }
    .user__connect span.line,
    .user__connect__username {
        display: none;
    }
}

;</style>




