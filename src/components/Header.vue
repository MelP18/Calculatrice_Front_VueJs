/*=============================++++ HTML ++++=================================*/
<template>
    <header>
        <div class="container">
            <div class="header__content">
                <!-- <div class="header__logo">
                    <IconPlatform />
                </div> -->
                <nav class="header__menu">
                    <ul class="header__mebu__list">
                        <li class="header__menu__list__item">
                            <RouterLink to="/" class="menu">Accueil</RouterLink>
                            <!-- <a href="/" class="active">Home</a> -->
                        </li>
                        <li class="header__menu__list__item">
                            <RouterLink to="/signup" class="menu">S'inscrire</RouterLink>
                            <!-- <a href="/signup"> Sign up</a> -->
                        </li>
                        <li class="header__menu__list__item">
                            <RouterLink to="/signin" class="menu">Se connecter</RouterLink>
                            <!-- <a href="/login">Login</a> -->
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>



/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import IconPlatform from '@/components/IconPlatform.vue';
import base from '@/assets/base.css'
</script>



/*=============================++++ CSS ++++=================================*/
<style scoped>
.header__content {
    display: flex;
    justify-content:right;
    align-items: center;
    padding: 15px;
}

.header__mebu__list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
}
.header__menu__list__item .menu{
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
    color: var(--color-white); 
}

.header__menu__list__item a:hover {
    color: var(--primary-color);
    padding-bottom: 2px;
    border-bottom: 2px solid var(--base-color);

}
.router-link-exact-active {
    color: var(--primary-color) !important; 
    padding-bottom: 3px;
    border-bottom: 2px solid var(--base-color);
}</style>