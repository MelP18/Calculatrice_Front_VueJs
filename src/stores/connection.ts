import { defineStore } from "pinia";
import { ref} from 'vue'
import { signIn } from "@/services/auth.service";
import { getCurrentUser } from "@/services/home.service";
import { toast } from 'vue3-toastify';
import router from "@/router";
import type { Login } from "@/Types/login";
export const useConnectionStore = defineStore("users", () => {

    const connection = async (loginData:Login) => {
        if(loginData){
            signIn(loginData)
            .then((accessToken)=>{
                localStorage.setItem('tokenUser', accessToken)
                toast.success('Connexion Etablie !')
                let timeoutId = 3000
                setTimeout(() => { 
                    router.replace('/user') 
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

    const userData = ref({
        _id:'',
        username: '',
        email: '',
        avatar:''
    })

    const user = async () => {
        const token = localStorage.getItem('tokenUser')
        if (token) {
            try {
                userData.value = await getCurrentUser()
            }catch(error:any) {
                toast.error(error.message)
            }
        }else{
            router.replace('/signin')
        }
    }
    return { connection, userData, user }
})