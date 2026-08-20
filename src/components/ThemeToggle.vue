<template>
    <div class="theme-toggle" id="theme-toggle" @click="toggleTheme">
        <div class="track">
            <div class="thumb">
                <span :class="isDark ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny'" class="mdi" id="theme-icon" 
                :style="{color: isDark ? '#2b2233' : '#d9a441'}"></span>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'

const isDark = ref(false)

onMounted(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
        isDark.value = savedTheme === 'dark'
    }

    document.documentElement.setAttribute(
        'data-theme',
        isDark.value ? 'dark' : 'light'
    )
})

watch(isDark, (value) => {
    const theme = value ? 'dark' : 'light'

    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
})

const toggleTheme = () => {
    isDark.value = !isDark.value
}
</script>

<style scoped>
/* THEME TOGGLE */
.theme-toggle {
    display: flex;
    align-items: center;
    background: var(--background-button);
    border-radius: 20px;
    padding: 2px;
    cursor: pointer;
    border: 1px solid var(--background-button-hover);
}

.theme-toggle .track {
    width: 38px;
    height: 20px;
    border-radius: 20px;
    background: var(--tertiary-color);
    display: flex;
    align-items: center;
    padding: 2px;
    transition: background .2s ease;
}

.theme-toggle .thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--white);
    transition: transform .2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.thumb span{
    font-size: 0.625rem
}
html[data-theme="dark"] .theme-toggle .thumb {
    transform: translateX(18px);
}
</style>