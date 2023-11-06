<template>
    <div class="block">
        <div class="profil">
            <div class="user__main__title">
                <h1>PROFILE</h1>
                <hr>
            </div>
            <div class="main">
                <div class="user__info" v-if="userData">
                    <div class="user__email">
                        <h4>Avatar</h4>
                        <img :src="userData.avatar" alt="avatar">
                    </div>
                    <div class="user__username">
                        <h4>Pseudonime</h4>
                        <p>{{ userData.username }}</p>
                    </div>
                    <div class="user__email">
                        <h4>E-mail</h4>
                        <p>{{ userData.email }}</p>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>


<script lang="ts" setup>

/* import { storeToRefs } from "pinia";
import { useConnectionStore } from '@/stores/connection';
const { userData } = storeToRefs(useConnectionStore())
const { user } = useConnectionStore()
user() */
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const { userData } = storeToRefs(useUserStore())
const { user } = useUserStore()
user()
</script>

<style scoped>
.main {
    width: 100%;
    height: calc(100vh - 135px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.main p {
    font-size: 20px;
    font-weight: bold;
    color: var(--base-color);
}
</style>