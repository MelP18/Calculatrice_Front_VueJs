/*=============================++++ HTML ++++=================================*/
<template>

    <form class="auth-card" @submit.prevent="connection" id="card-signin">
        <RouterLink to="/" class="auth-mark"><img :src="logo" alt="Logo CALMELP" /></RouterLink>
        <h3>Se connecter</h3>
        <p class="subtitle">Accède à ta calculatrice CalMelp</p>
        <div class="auth__field__list">
            <div class="field">
                <label>E-mail</label>
                <div class="field-input">
                    <span class="mdi mdi-email-outline"></span>
                    <input type="email" id="signin-email" v-model="userConnectData.email" placeholder="toi@exemple.com">
                </div>
                <span class="error" 
                    v-for="error in isLoginDataValid.email.$errors" :key="error.$uid">
                    {{ error.$message }}
                </span>
            </div>

            <div class="field">
                <label>Mot de passe</label>
                <div class="field-input">
                    <span class="mdi mdi-lock-outline"></span>
                    <input :type="showPassword ? 'text' : 'password'" id="signin-password" v-model="userConnectData.password"
                        placeholder="••••••••">
                    <span @click="showPassword = !showPassword" :class="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"  class="mdi toggle-eye" data-target="signin-password"></span>
                </div>
                <span class="error" 
                    v-for="error in isLoginDataValid.password.$errors" :key="error.$uid">
                    {{ error.$message }}
                </span>
            </div>

            <div class="field-row-end">
                <RouterLink class="link-muted" id="go-forgot" to="/forgot-password">Mot de passe oublié ?</RouterLink>
            </div>

            <button class="auth-submit" id="auth-submit">Se connecter</button>

            <p class="auth-switch">
                Pas encore de compte ? <RouterLink to="/signup" >S'inscrire</RouterLink>
            </p>

        </div>
    </form>

</template>

/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import { toast } from 'vue3-toastify'
import { computed, ref, onMounted } from 'vue'
import { required, email } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { signIn } from "@/services/auth.service";
import router from "@/router";
import logo from "@/assets/images/logo.svg";
const showPassword = ref(false)

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

const connection = async () => {
    const dataValid = await isLoginDataValid.value.$validate()
    if (dataValid) {
        signIn(userConnectData.value)
            .then((accessToken) => {
                localStorage.setItem('tokenUser', accessToken)
                toast.success('Connexion Etablie !')
                let timeoutId = 3000
                setTimeout(() => {
                    router.replace('/user')
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
