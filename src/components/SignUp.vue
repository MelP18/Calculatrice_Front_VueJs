
/*=============================++++ HTML ++++=================================*/
<template>
    <form @submit.prevent="registration" enctype="multipart/form-data">
        <h3>Inscription</h3>
        <div class="auth__field__list">
            <div class="auth__field__list__item__two">
                <div class="auth__field__list__item">
                    <div class="auth__field__list__item__input">
                        <span class="mdi mdi-account-circle-outline"></span>
                        <input type="file" @change="file" ref="userRegistredData.avatar">
                    </div>
                    <span style="color: rgb(156, 18, 18);" v-for="error in isSigninDataValid.avatar.$errors"
                        :key="error.$uid">
                        {{ error.$message }}
                    </span>
                </div>
                <div class="auth__field__list__item">
                    <div class="auth__field__list__item__input">
                        <span class="mdi mdi-account"></span>
                        <input type="text" v-model="userRegistredData.username" placeholder="pseudonime : qwerty8@5">
                    </div>
                    <span style="color: rgb(156, 18, 18);" v-for="error in isSigninDataValid.username.$errors"
                        :key="error.$uid">
                        {{ error.$message }}
                    </span>
                </div>
            </div>
            <div class="auth__field__list__item">
                <div class="auth__field__list__item__input">
                    <span class="mdi mdi-email-outline"></span>
                    <input type="email" v-model="userRegistredData.email" placeholder="email : no_reply@gmail.com">
                </div>
                <span style="color: rgb(156, 18, 18);" v-for="error in isSigninDataValid.email.$errors" :key="error.$uid">
                    {{ error.$message }}
                </span>
            </div>
            <div class="auth__field__list__item__two">
                <div class="auth__field__list__item">
                    <div class="auth__field__list__item__input">
                        <span class="mdi mdi-lock"></span>
                        <input type="password" v-model="userRegistredData.password" placeholder="mot de passse">
                    </div>
                    <span style="color: rgb(156, 18, 18);" v-for="error in isSigninDataValid.password.$errors"
                        :key="error.$uid">
                        {{ error.$message }}
                    </span>
                </div>
                <div class="auth__field__list__item">
                    <div class="auth__field__list__item__input">
                        <span class="mdi mdi-lock"></span>
                        <input type="password" v-model="userRegistredData.confirm_password"
                            placeholder="confirmez mot de passe">
                    </div>
                    <span style="color: rgb(156, 18, 18);" v-for="error in isSigninDataValid.confirm_password.$errors"
                        :key="error.$uid">
                        {{ error.$message }}
                    </span>
                </div>
            </div>
            <div class="btn__submit">
                <button type="submit">S'inscrire</button>
            </div>
        </div>

    </form>
</template>

/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>

import { toast } from 'vue3-toastify'
import { ref, computed} from 'vue'
import { required, email, sameAs } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import http from "@/libs/http";
import router from "@/router";

const userRegistredData = ref({
    avatar: '',
    username: '',
    email: '',
    password: '',
    confirm_password: ''
})


const userRegistredRequired = computed(() => {
    return {
        avatar: {
            required
        },
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
        confirm_password: {
            required,
            sameAs: sameAs(userRegistredData.value.password)
        }
    }
})

const file = (event: any) => {
    console.log(userRegistredData.value.avatar);
    //get the file input value 
    const file = event.target.files
    console.log(file);
    //checking file 
    if (file[0].type !== "image/jpeg"
        && file[0].type !== "image/jpg"
        && file[0].type !== "image/png") {
        toast.error('Fichier Invalid! Format accepté .png, .jpeg, .jpg, .pdf, .docx, .csv')
    } else if (file[0].size > 5000000) {//checking file length
        toast.error('Fichier trop lourd! Taille maximale accepté 5MB')
    } else {
        userRegistredData.value.avatar = file[0]
        console.log(userRegistredData.value.avatar);

        return userRegistredData.value.avatar
    }
}

const isSigninDataValid = useVuelidate(userRegistredRequired, userRegistredData)

const registration = async () =>{
    const dataValid = await isSigninDataValid.value.$validate()
        if(dataValid){
            http.post('/auth/signup', userRegistredData.value,{
                headers: {
                    'Content-Type': 'multipart/form-data' // Spécifiez le type de contenu comme 'multipart/form-data'
                }
            })
            .then((response)=>{
               
                toast.info(response.data) 
                let timeoutId = 4000
                setTimeout(() => { 
                    router.replace('/activate-account')
                }, timeoutId )
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
        }else {
            toast.error('Oops... Données Indisponibles !')
        }  
    }
</script>


