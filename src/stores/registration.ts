import { defineStore } from "pinia";
import { ref, computed, reactive } from 'vue'
import axios from "axios";
import { required, email, sameAs } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import http from "@/libs/http";
import { toast } from 'vue3-toastify';
import router from "@/router";
import type { Signup } from "@/Types/signup";
export const useRegistrationsStore = defineStore("users", () => {

    const registration = async (registrationData:Signup) =>{
        if(registrationData){
            http.post('/auth/signup', registrationData,{
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

    return { registration}
})