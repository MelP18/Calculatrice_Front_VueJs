/*=============================++++ HTML ++++=================================*/
<template>
    <form id="card-signup" class="auth-card" @submit.prevent="registration">
        <RouterLink to="/" class="auth-mark"><img :src="logo" alt="Logo CALMELP" /></RouterLink>
        <h3>S'inscrire</h3>
        <p class="subtitle">Crée ton compte CalMelp</p>

        <div class="auth__field__list">
            <div class="field">
                <label>Pseudonyme</label>
                <div class="field-input">
                    <span class="mdi mdi-account-outline"></span>
                    <input type="text" id="signup-username" v-model="userRegistredData.username"
                        placeholder="ex : melp42">
                </div>
                <span class="error" v-for="error in isSigninDataValid.username.$errors" :key="error.$uid">
                    {{ error.$message }}
                </span>
            </div>
            <div class="field">
                <label>E-mail</label>
                <div class="field-input">
                    <span class="mdi mdi-email-outline"></span>
                    <input type="email" id="signup-email" v-model="userRegistredData.email"
                        placeholder="toi@exemple.com">
                </div>
                <span class="error" 
                    v-for="error in isSigninDataValid.email.$errors" :key="error.$uid">
                    {{ error.$message }}
                </span>
            </div>
            <div class="field">
                <label>Mot de passe</label>
                <div class="field-input">
                    <span class="mdi mdi-lock-outline"></span>
                    <input  :type="showPassword ? 'text' : 'password'" id="signup-password" v-model="userRegistredData.password"
                        placeholder="••••••••">
                    <span @click="showPassword = !showPassword" :class="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'" class="mdi toggle-eye" data-target="signup-password"></span>
                </div>
                <span class="field-hint">8 caractères minimum</span>
                <span class="error"
                    v-for="error in isSigninDataValid.password.$errors" :key="error.$uid">
                    {{ error.$message }}
                </span>
            </div>

            <button class="auth-submit" id="signup-submit">S'inscrire</button>

    <p class="auth-switch">
      Déjà un compte ? <RouterLink to="/signin">Se connecter</RouterLink>
    </p>
        </div>

    </form>
</template>

/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>

import { toast } from 'vue3-toastify'
import { ref, computed } from 'vue'
import { required, email, sameAs } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import http from "@/libs/http";
import router from "@/router";
import logo from "@/assets/images/logo.svg";
const showPassword = ref(false)

const userRegistredData = ref({
    username: '',
    email: '',
    password: '',
})


const userRegistredRequired = computed(() => {
    return {

        username: {
            required
        },
        email: {
            required,
            email
        },
        password: {
            required
        },
    }
})

const isSigninDataValid = useVuelidate(userRegistredRequired, userRegistredData)

const registration = async () => {
    const dataValid = await isSigninDataValid.value.$validate()
    if (dataValid) {
        http.post('/auth/signup', userRegistredData.value)
            .then((response) => {

                toast.info(response.data)
                let timeoutId = 4000
                setTimeout(() => {
                    router.replace('/activate-account')
                }, timeoutId)
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    // Extrait le message d'erreur de la réponse.
                    const errorResponse = error.response.data
                    toast.error(errorResponse)

                } else {
                    toast.error(error.message)
                }
            })
    } else {
        toast.error('Oops... Données Indisponibles !')
    }
}

</script>
