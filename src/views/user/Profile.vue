<template>
    <div class="block">
        <div class="profil">
            <div class="user__main__title">
                <h1>PROFIL</h1>
                <hr>
            </div>
            <div class="user__info" v-if="userData">
                <div class="user__username">
                    <h4>Pseudonyme</h4>
                    <p>{{ userData.username }}</p>
                </div>
                <div class="user__email">
                    <h4>E-mail</h4>
                    <p>{{ userData.email }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const { userData } = storeToRefs(useUserStore())
const { user } = useUserStore()
user()
</script>

<style scoped>
.user__info {
    display: flex;
    flex-wrap: wrap;
    gap: 34px;
    background: var(--background-button);
    border-radius: var(--border-radius-base);
    padding: 20px;
    box-shadow: var(--box-shadow);
}

.user__info h4 {
    font-family: var(--font-SMono-regular);
    font-size: 0.6875rem;
    text-transform: uppercase;
    letter-spacing: .5px;
    color: var(--text-muted);
    margin-bottom: 6px;
}

.user__info p {
    font-weight: 700;
    color: var(--text-color);
}
</style>