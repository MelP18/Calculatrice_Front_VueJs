/*=============================++++ HTML ++++=================================*/
<template>
   
    <form class="auth-card" @submit.prevent="activateAccount">
        <RouterLink to="/" class="auth-mark"><img :src="logo" alt="Logo CALMELP" /></RouterLink>
        <h3>Activation de Compte</h3>
        <p class="subtitle">Active ton compte CalMelp</p>

        <div class="auth__field__list">
            <div class="field">
                <label>E-mail</label>
                <div class="field-input">
                    <span class="mdi mdi-email-outline"></span>
                    <input type="email" id="signin-email" v-model="activateAccountData.email" placeholder="email : no_reply@gmail.com">
                </div>
                <span class="error" 
                    v-for="error in isCodeValid.email.$errors" :key="error.$uid">
                    {{ error.$message }}
                </span>
            </div>
            <div class="field">
                <label>Code</label>
                <div class="field-input">
                    <span class="mdi mdi-mail"></span>
                    <input type="text" v-model="activateAccountData.code" placeholder="code : aq6zd2g1r9">
                </div>
                <span class="error" 
                    v-for="error in isCodeValid.code.$errors" :key="error.$uid">
                    {{ error.$message }}
                </span>
            </div>
            <button class="auth-submit" id="signup-submit">Envoyer</button>
        </div>

    </form>                
</template>

/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import { ref,computed} from 'vue'
import { toast } from 'vue3-toastify';
import { required, email, minLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { verifyCode } from "@/services/auth.service";
import router from "@/router";
import logo from "@/assets/images/logo.svg";

const activateAccountData = ref({
        email:'',
        code:'',
}) 
const activateAccountRequired = computed(() => {
    return { 
        email: {
            required,
            email
        },
        code: {
            required,
            minLength:minLength(10)
        }
    }
})

const isCodeValid = useVuelidate(activateAccountRequired, activateAccountData)

const activateAccount = async () => {
    const validCode = await isCodeValid.value.$validate()
        if (validCode) {
            verifyCode(activateAccountData.value)
                .then((message) => {
                    toast.info(message)
                    let timeoutId = 4000
                    setTimeout(() => {
                        router.replace('/signin')
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



