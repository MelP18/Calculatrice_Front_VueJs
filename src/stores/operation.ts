import { defineStore} from "pinia";
import { ref } from "vue";
import type { Calculation } from "@/Types/calculation";
import http from "@/libs/http";
import { toast } from 'vue3-toastify';
export const userOpeationStore = defineStore("calculations", () => {

    //const usercalculation = ref<Calculation[]>([])
    
    async function addCalculation(calculation:Calculation) {
        if(calculation){
            http.post('/home/calculation', calculation)
            .then((response)=>{
                toast.info(response.data) 
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
            toast.error('Erreur !')
        }  
        
    }
    
    const userCalculation = ref<Calculation[]>([])
    async function getCalculation() {
        const calculation = await http.get('/home/history')
        if(calculation){
            userCalculation.value = calculation.data
            console.log(userCalculation.value);
            
          return userCalculation.value   

        }else {
            toast.error('Erreur !')
        }  
        
    }
  
    return {
        addCalculation,
        getCalculation,
        userCalculation
    }
}) 