import { defineStore } from "pinia";
import { ref, computed, reactive } from 'vue'
import axios from "axios";
import { required, email, sameAs, minLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import http from "@/libs/http";
import { toast } from 'vue3-toastify';
import router from "@/router";
import type { Code } from "@/Types/code";
export const useActivateAccountStore = defineStore("users", () => {

    const activateAccount = async (code: Code) => {
        if (code) {
            http.post('/auth/verify-code', code)
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

    return { activateAccount }
})