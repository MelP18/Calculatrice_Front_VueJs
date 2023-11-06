/*=============================++++ HTML ++++=================================*/
<template>
   
    <form @submit.prevent="activateAccount">
        <h3>Activation de Compte</h3>
        <div class="auth__field__list" style="height: 111px;">
            <div class="auth__field__list__item">
                <div class="auth__field__list__item__input">
                    <span class="mdi mdi-email-outline"></span>
                    <input type="email" v-model="activateAccountData.email" placeholder="email : no_reply@gmail.com">
                </div>
            </div>
            <span style="color: rgb(156, 18, 18); font-weight: bold;" v-for="error in isCodeValid.email.$errors" :key="error.$uid">
                        {{ error.$message }}
            </span>
            <div class="auth__field__list__item">
                <div class="auth__field__list__item__input">
                    <span class="mdi mdi-mail"></span>
                    <input type="text" v-model="activateAccountData.code" placeholder="code : aq6zd2g1r9">
                </div>
            </div>
            <span style="color: rgb(156, 18, 18); font-weight: bold;" v-for="error in isCodeValid.code.$errors" :key="error.$uid">
                        {{ error.$message }}
            </span>
            
            <div class="btn__submit">
                <button type="submit">Envoyez</button>
            </div>
        </div>

    </form>                
</template>

/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import { ref,computed} from 'vue'
import { toast } from 'vue3-toastify';
import { required, email, minLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import http from "@/libs/http";
import router from "@/router";

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
            http.post('/auth/verify-code', activateAccountData.value)
                .then((response) => {
                    toast.info(response.data)
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



