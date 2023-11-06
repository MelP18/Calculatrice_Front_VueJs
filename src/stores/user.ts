import { defineStore } from "pinia";
import { ref } from 'vue'
import http from "@/libs/http";
import { toast } from 'vue3-toastify';
import router from "@/router";
import type {User} from '@/Types/user'
export const useUserStore = defineStore("users", () => {

const userData = ref({
    _id: '',
    username: '',
    email: '',
    avatar: ''
})

    const token = localStorage.getItem('tokenUser')
    const user = async () => {
        if (token) {
            try {
                const response = await http.get('/home', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if (response.status === 200) {
                    userData.value = response.data
                }
            } catch (error: any) {
                toast.error(error.message)
            }
        } else {
            router.replace('/signin')
        }
    }

    return {user,userData}
})