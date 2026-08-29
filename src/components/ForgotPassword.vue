/*=============================++++ HTML ++++=================================*/
<template>

    <form v-if="step === 1" class="auth-card" @submit.prevent="requestCode" id="card-forgot-request">
        <RouterLink to="/" class="auth-mark"><img :src="logo" alt="Logo CALMELP" /></RouterLink>
        <h3>Mot de passe oublié</h3>
        <p class="subtitle">On t'envoie un code par e-mail</p>
        <div class="auth__field__list">
            <div class="field">
                <label>E-mail</label>
                <div class="field-input">
                    <span class="mdi mdi-email-outline"></span>
                    <input type="email" id="forgot-email" v-model="forgotData.email" placeholder="toi@exemple.com">
                </div>
                <span class="error"
                    v-for="error in isForgotDataValid.email.$errors" :key="error.$uid">
                    {{ error.$message }}
                </span>
            </div>

            <button class="auth-submit" id="forgot-submit">Envoyer le code</button>

            <p class="auth-switch">
                <RouterLink to="/signin">Retour à la connexion</RouterLink>
            </p>
        </div>
    </form>

    <form v-else class="auth-card" @submit.prevent="resetPassword" id="card-forgot-reset">
        <RouterLink to="/" class="auth-mark"><img :src="logo" alt="Logo CALMELP" /></RouterLink>
        <h3>Nouveau mot de passe</h3>
        <p class="subtitle">Code envoyé à {{ forgotData.email }}</p>
        <div class="auth__field__list">
            <div class="field">
                <label>Code</label>
                <div class="field-input">
                    <span class="mdi mdi-mail"></span>
                    <input type="text" id="forgot-code" v-model="resetData.code" placeholder="code : aq6zd2g1r9">
                </div>
                <span class="error"
                    v-for="error in isResetDataValid.code.$errors" :key="error.$uid">
                    {{ error.$message }}
                </span>
            </div>

            <div class="field">
                <label>Nouveau mot de passe</label>
                <div class="field-input">
                    <span class="mdi mdi-lock-outline"></span>
                    <input :type="showPassword ? 'text' : 'password'" id="forgot-password" v-model="resetData.password"
                        placeholder="••••••••">
                    <span @click="showPassword = !showPassword" :class="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'" class="mdi toggle-eye"></span>
                </div>
                <span class="field-hint">8 caractères minimum</span>
                <span class="error"
                    v-for="error in isResetDataValid.password.$errors" :key="error.$uid">
                    {{ error.$message }}
                </span>
            </div>

            <button class="auth-submit" id="reset-submit">Réinitialiser le mot de passe</button>

            <p class="auth-switch">
                <RouterLink to="/signin">Retour à la connexion</RouterLink>
            </p>
        </div>
    </form>

</template>

/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import { toast } from 'vue3-toastify'
import { computed, ref } from 'vue'
import { required, email, minLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { forgotPassword, resetPassword as resetPasswordRequest } from "@/services/auth.service";
import router from "@/router";
import logo from "@/assets/images/logo.svg";

const step = ref(1)
const showPassword = ref(false)

const forgotData = ref({
    email: '',
})

const forgotRequired = computed(() => {
    return {
        email: {
            required,
            email
        },
    }
})

const isForgotDataValid = useVuelidate(forgotRequired, forgotData)

const requestCode = async () => {
    const dataValid = await isForgotDataValid.value.$validate()
    if (dataValid) {
        forgotPassword(forgotData.value)
            .then((message) => {
                toast.info(message)
                step.value = 2
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
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

const resetData = ref({
    code: '',
    password: '',
})

const resetRequired = computed(() => {
    return {
        code: {
            required,
            minLength: minLength(10)
        },
        password: {
            required,
            minLength: minLength(8)
        },
    }
})

const isResetDataValid = useVuelidate(resetRequired, resetData)

const resetPassword = async () => {
    const dataValid = await isResetDataValid.value.$validate()
    if (dataValid) {
        resetPasswordRequest({
            email: forgotData.value.email,
            code: resetData.value.code,
            password: resetData.value.password,
        })
            .then((message) => {
                toast.success(message)
                let timeoutId = 3000
                setTimeout(() => {
                    router.replace('/signin')
                }, timeoutId)
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
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
