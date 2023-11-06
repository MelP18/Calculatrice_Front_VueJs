<template>
    <div class="logout">
        <div class="user__main__title">
            <h1>LOGOUT</h1>
            <hr>
        </div>
       <div class="logout__content">
                <p>Voulez-vous vraiment vous deconnecter?</p>
                <button @click="signOut">Logout</button>
       </div>
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router';
const errorText = ref('')
const router = useRouter()
async function signOut() {
    localStorage.removeItem('tokenUser')
    router.replace('/signin')
}

</script>
<style scoped>
.logout{
    width: 100%;
    height: 100%;
}
.logout__content{
    height: calc(100vh - 135px);
    display: flex;
    flex-direction: column;
    gap:25px;
    justify-content: center;
    align-items: center;
    background-color: var(--rgba-background);
    transition: 1s; 
    border-radius: var(--border-radius-base);
}   
.logout__content button{
    cursor: pointer;
    padding: 8px 25px;
    background-color: var(--base-color);
    border-radius: var(--border-radius-base);
    color: var(--color-white);
    font-weight: bold;
    font-size: 16px;
}
</style>