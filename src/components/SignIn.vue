
/*=============================++++ HTML ++++=================================*/
<template>
    
    <form @submit.prevent="login">
        <h3>Connexion</h3>
        <div class="auth__field__list" style="height: 111px;">
            <div class="auth__field__list__item">
                <div class="auth__field__list__item__input">
                    <span class="mdi mdi-email-outline"></span>
                    <input type="email" v-model="userConnectData.email" placeholder="email : no_reply@gmail.com">
                </div>
                <span style="color: rgb(156, 18, 18); font-weight: bold;" v-for="error in isLoginDataValid.email.$errors" :key="error.$uid">
                        {{ error.$message }}
                </span>
            </div>
            <div class="auth__field__list__item">
                <div class="auth__field__list__item__input">
                    <span class="mdi mdi-lock"></span>
                    <input type="password" v-model="userConnectData.password" placeholder="mot de passe">
                </div>
                <span style="color: rgb(156, 18, 18); font-weight: bold;" v-for="error in isLoginDataValid.password.$errors" :key="error.$uid">
                        {{ error.$message }}
                </span>
            </div>
            <div class="btn__submit">
                <button type="submit">Connexion</button>
            </div>
        </div>
    </form>
                    
</template>

/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import{toast} from 'vue3-toastify'
import { useConnectionStore } from '@/stores/connection'
import { computed, ref } from 'vue'
import { required, email} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
const { connection } = useConnectionStore()
const userConnectData = ref({
    email: '',
    password: '',
})

const userConnectRequired = computed(() => {
    return {
        email: {
            required,
            email
        },
        password: {
            required,
        }
    }
})

const isLoginDataValid = useVuelidate(userConnectRequired, userConnectData)
async function login() {
    if (isLoginDataValid) {
        const dataValid  = await isLoginDataValid.value.$validate()
        if(dataValid){
            await connection(userConnectData.value)
        }else{
            toast.error('Oops... Erreur !')
        }
    }
}
</script>
