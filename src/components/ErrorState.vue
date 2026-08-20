<template>
    <div class="error-page">
        <RouterLink to="/" class="error-logo">
            <Logo />
        </RouterLink>

        <div class="error-content">
            <div class="error-eyebrow">{{ eyebrow }}</div>
            <h1 class="error-code">{{ code }}</h1>
            <h2>{{ title }}</h2>
            <p>{{ message }}</p>
            <div class="error-actions">
                <RouterLink to="/" class="btn-primary">
                    <span class="mdi mdi-home-outline"></span> Retour à l'accueil
                </RouterLink>
                <slot name="secondary-action" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Logo from '@/components/Logo.vue'
import { RouterLink } from 'vue-router'

defineProps<{
    eyebrow: string
    code: string
    title: string
    message: string
}>()
</script>

<style scoped>
.error-page {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;
    padding: 40px;
    text-align: center;
    background:
        radial-gradient(circle at 18% 12%, rgba(123, 111, 143, 0.35), transparent 45%),
        linear-gradient(120deg, #433a58 0%, #514a6b70 40%, #6a708950 75%, #8b91a880 100%),
        var(--canvas-dark);
}

.error-logo :deep(.home-logo span) {
    color: var(--white);
}

.error-logo :deep(.home-logo svg) {
    fill: var(--white);
}

.error-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 460px;
}

.error-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-SMono-regular);
    font-size: 0.6875rem;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.55);
    text-transform: uppercase;
    margin-bottom: 18px;
}

.error-eyebrow::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent-coral);
    box-shadow: 0 0 8px var(--accent-coral);
}

.error-code {
    font-family: var(--font-Fraunces-semibold);
    font-size: clamp(4rem, 12vw, 8rem);
    line-height: 1;
    color: var(--white);
    letter-spacing: -2px;
    margin-bottom: 10px;
}

.error-content h2 {
    font-family: var(--font-Fraunces-semibold);
    font-size: 1.6rem;
    color: var(--white);
    margin-bottom: 14px;
}

.error-content p {
    color: rgba(255, 255, 255, 0.62);
    font-size: 0.90625rem;
    line-height: 1.7;
    margin-bottom: 32px;
}

.error-actions {
    display: flex;
    align-items: center;
    gap: 22px;
    flex-wrap: wrap;
    justify-content: center;
}

.error-actions .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--white);
    color: var(--hero-bg);
    border: none;
    padding: 14px 28px;
    border-radius: 8px;
    font-family: var(--font-bold);
    font-size: 0.875rem;
}

.error-actions .btn-primary .mdi {
    font-size: inherit;
    color: inherit;
}

.error-actions .btn-primary:hover {
    background: rgba(255, 255, 255, 0.88);
}
</style>
