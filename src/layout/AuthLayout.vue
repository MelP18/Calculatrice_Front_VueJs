/*=============================++++ HTML ++++=================================*/
<template>
  <div class="auth">
    <RouterLink to="/" class="auth-back-top">
        <span class="mdi mdi-arrow-left"></span> Retour à l'accueil
    </RouterLink>

    <div class="switch">
       <ThemeToggle />
    </div>

    <RouterView />
  </div>
</template>

/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import ThemeToggle from "@/components/ThemeToggle.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<style>
.switch{
    position: absolute;
    top: 10px;
    right: 10px;
}

.auth-back-top{
    position: absolute;
    top: 14px;
    left: 14px;
    display: flex;
    align-items: center;
    gap: 6px;
    color: rgba(255,255,255,0.7);
    font-family: var(--font-semibold);
    font-size: 0.78125rem;
    transition: color .2s ease;
}
.auth-back-top .mdi{ font-size: 0.9375rem; color: inherit; }
.auth-back-top:hover{ color: var(--white); }
</style>