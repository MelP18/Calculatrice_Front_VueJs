/*=============================++++ HTML ++++=================================*/
<template>
    <header class="header__bar" :class="{ 'header__bar--scrolled': isScrolled }">
        <div class="landing-container header__content">
            <Logo />
            <div class="header__right">
                <nav class="header__menu" :class="{ 'header__menu--open': isMenuOpen }">
                    <ul class="header__menu__list">
                        <li class="header__menu__list__item">
                            <RouterLink to="/" class="menu" @click="closeMenu">Accueil</RouterLink>
                            <!-- <a href="/" class="active">Home</a> -->
                        </li>
                        <li class="header__menu__list__item">
                            <a href="#features" class="menu" @click="closeMenu">Fonctionnalités</a>
                        </li>

                        <li class="header__menu__list__item">
                            <RouterLink to="/signin" class="menu" @click="closeMenu">Se connecter</RouterLink>
                            <!-- <a href="/login">Login</a> -->
                        </li>
                        <li class="header__menu__list__item">
                            <RouterLink to="/signup" class="cta" @click="closeMenu">S'inscrire</RouterLink>
                            <!-- <a href="/signup"> Sign up</a> -->
                        </li>
                    </ul>
                </nav>
                <ThemeToggle />
                <button
                    class="header__burger"
                    type="button"
                    :aria-expanded="isMenuOpen"
                    aria-label="Ouvrir le menu"
                    @click="isMenuOpen = !isMenuOpen"
                >
                    <span class="mdi" :class="isMenuOpen ? 'mdi-close' : 'mdi-menu'"></span>
                </button>
            </div>
        </div>
    </header>
</template>



/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Logo from '@/components/Logo.vue'
import ThemeToggle from './ThemeToggle.vue';

const isScrolled = ref(false)
const isMenuOpen = ref(false)

function handleScroll() {
    isScrolled.value = window.scrollY > 10
}

function closeMenu() {
    isMenuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>



/*=============================++++ CSS ++++=================================*/
<style scoped>
.header__bar {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 30;
    background: var(--header-bg);
    backdrop-filter: blur(10px);
    transition: background .25s ease;
}

.header__bar--scrolled {
    background: var(--header-bg-scrolled);
    backdrop-filter: blur(10px);
}

.header__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 21.5px;
    padding-bottom: 21.5px;
}

.header__right {
    display: flex;
    align-items: center;
    gap: 22px;
}

.header__menu__list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
}

.header__menu__list__item .menu{
    font-size: 0.8125rem;
    font-family: var(--font-semibold);
    white-space: nowrap;
    letter-spacing: .5px;
    transition: color 0.3s ease;
    color: rgba(255,255,255,0.6);
}
.header__menu__list__item a:hover {
    color: var(--white);
}

.cta{
background: var(--white); color: var(--base-color); padding:9px 20px; border-radius:7px; transition: all 0.5s ease; font-family: var(--font-bold);
}
.cta:hover{ background:var(--primary-color); }

.header__burger {
    display: none;
    background: none;
    border: none;
    padding: 4px;
    line-height: 0;
    color: rgba(255,255,255,0.85);
}
.header__burger .mdi {
    font-size: 1.5rem;
    color: inherit;
}

.router-link-exact-active {
    color: var(--white) !important;
    padding-bottom: 1px;
    border-bottom: 2px solid var(--white);
}

@media (max-width: 900px) {
    .header__burger {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .header__menu {
        position: fixed;
        top: 69px;
        left: 0;
        right: 0;
        background: var(--header-bg-scrolled);
        backdrop-filter: blur(10px);
        box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-6px);
        transition: opacity .2s ease, transform .2s ease, visibility .2s;
        pointer-events: none;
    }

    .header__menu--open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
        pointer-events: auto;
    }

    .header__menu__list {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        padding: 8px 40px 28px;
    }

    .header__menu__list__item + .header__menu__list__item {
        border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    .header__menu__list__item .menu {
        display: block;
        padding: 15px 0;
    }

    .header__menu__list__item .cta {
        display: inline-block;
        margin-top: 14px;
    }
}
</style>
