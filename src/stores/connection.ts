import { defineStore } from "pinia";
import { ref} from 'vue'
import http from "@/libs/http";
import { toast } from 'vue3-toastify';
import router from "@/router";
import type { Login } from "@/Types/login";
export const useConnectionStore = defineStore("users", () => {

    const connection = async (loginData:Login) => {
        if(loginData){
            http.post('/auth/signin', loginData)
            .then((response)=>{
                const accessToken = response.data
                http.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
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

    const token = localStorage.getItem('tokenUser')
    const user = async () => {
        if (token) {
            try {
                const response = await http.get('/home',{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                if (response.status === 200) {
                    userData.value = response.data
                }
            }catch(error:any) {
                toast.error(error.message)
            }
        }else{
            router.replace('/signin')
        }
    }
    return { connection, userData, user }
})