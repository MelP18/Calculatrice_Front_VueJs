import { defineStore} from "pinia";
import { ref } from "vue";
import type { Calculation } from "@/Types/calculation";
import { addCalculation as addCalculationRequest, getHistory } from "@/services/home.service";
import { toast } from 'vue3-toastify';
export const userOpeationStore = defineStore("calculations", () => {

    //const usercalculation = ref<Calculation[]>([])

    async function addCalculation(calculation:Calculation) {
        if(calculation){
            addCalculationRequest(calculation)
            .then((data)=>{
                toast.info(data)
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
        try {
            userCalculation.value = await getHistory()
            return userCalculation.value
        } catch (error) {
            toast.error('Erreur !')
        }
    }
  
    return {
        addCalculation,
        getCalculation,
        userCalculation
    }
}) 