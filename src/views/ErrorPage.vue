<template>
    <ErrorState
        eyebrow="Erreur 404"
        code="404"
        title="Cette page n'existe pas."
        message="Le lien que tu as suivi est peut-être cassé, ou la page a été déplacée. Vérifie l'adresse ou retourne à l'accueil."
    >
        <template #secondary-action>
            <RouterLink to="/signin" class="link-muted">Se connecter</RouterLink>
        </template>
    </ErrorState>
</template>

<script lang="ts" setup>
import ErrorState from '@/components/ErrorState.vue'
import { RouterLink } from 'vue-router'
</script>
