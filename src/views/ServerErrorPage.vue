<template>
    <ErrorState
        eyebrow="Erreur 500"
        code="500"
        title="Une erreur est survenue."
        message="Quelque chose s'est mal passé de notre côté. Réessaie dans quelques instants, ou retourne à l'accueil."
    >
        <template #secondary-action>
            <a class="link-muted" @click="reload">Réessayer</a>
        </template>
    </ErrorState>
</template>

<script lang="ts" setup>
import ErrorState from '@/components/ErrorState.vue'

function reload() {
    window.location.reload()
}
</script>
