import { defineStore } from "pinia";
import { ref } from 'vue'
import { getCurrentUser } from "@/services/home.service";
import { toast } from 'vue3-toastify';
import router from "@/router";
//import type {User} from '@/Types/user'
export const useUserStore = defineStore("users", () => {

const userData = ref<any>({})

    const user = async () => {
        const token = localStorage.getItem('tokenUser')
        if (token) {
            try {
                userData.value = await getCurrentUser()
            } catch (error: any) {
                toast.error(error.message)
            }
        } else {
            // router.replace('/signin')
        }
    }

    return {user,userData}
})