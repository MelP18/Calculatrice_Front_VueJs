/*=============================++++ HTML ++++=================================*/
<template>
    <footer class="home-footer">
        <div class="landing-container footer-row">
            <Logo />
            <div class="home-footer-links">
                <RouterLink to="/signin">Se connecter</RouterLink>
                <RouterLink to="/signup">Créer un compte</RouterLink>
                <a href="#features">Fonctionnalités</a>
            </div>
            <div class="home-socials">
                <a href="#"><span class="mdi mdi-twitter"></span></a>
                <a href="#"><span class="mdi mdi-github"></span></a>
                <a href="#"><span class="mdi mdi-linkedin"></span></a>
            </div>
        </div>
    </footer>
</template>

/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import Logo from '@/components/Logo.vue'
import { RouterLink } from 'vue-router'
</script>

/*=============================++++ CSS ++++=================================*/
<style scoped>
.home-footer {
    background: var(--hero-bg);
    padding: 20px 0;
}

.footer-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.home-footer :deep(.home-logo span) {
    color: rgba(255, 255, 255, 0.7);
}

.home-footer :deep(.home-logo svg) {
    fill: rgba(255, 255, 255, 0.7);
}

.home-footer-links {
    display: flex;
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 22px;
}

.home-footer-links a {
    color: rgba(255, 255, 255, 0.45);
    font-size: 0.78125rem;
    font-family: var(--font-semibold);
    white-space: nowrap;
}

.home-footer-links a:hover {
    color: var(--white);
}

.home-socials {
    display: flex;
    gap: 10px;
}

.home-socials a {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
}

.home-socials a .mdi {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9375rem;
}

.home-socials a:hover {
    background: rgba(255, 255, 255, 0.16);
}
</style>
