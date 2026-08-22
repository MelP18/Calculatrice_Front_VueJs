<script lang="ts" setup>
import logo from '@/assets/images/logo.svg';
</script>

<template>
    <div class="home-logo" id="home-logo-click">
        <img :src="logo" alt="Logo CALMELP" class="home-logo-icon" />
        <span>CALMELP</span>
    </div>
</template>

<style scoped>
.home-logo {
    display: flex;
    align-items: center;
    gap: 9px;
    cursor: pointer;
}

.home-logo-icon {
    width: 20px;
    height: 20px;
}

.home-logo span {
    font-size: 0.9375rem;
    font-family: var(--font-extrabold);
    color: var(--white);
    letter-spacing: .5px;
}
</style>