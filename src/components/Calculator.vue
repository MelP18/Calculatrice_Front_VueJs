/*=============================++++ HTML ++++=================================*/
<template>
    <div class="main__content">
        <div class="calculator">
            <div class="calculator__content">
                <div class="calculator__top">
                    <div class="calculation__head">
                        <div class="calculator__name">
                            <h2>CalMelp</h2>
                            <p>Toute fonction</p>
                        </div>
                        <div class="day__info">
                            <ul class="day__info__list">
                                <li class="day__info__list__item">
                                    <span class="mdi mdi-calendar-month-outline"></span>
                                    <p v-text="dayDate"></p>
                                </li>
                                <li class="day__info__list__item">
                                    <span class="mdi mdi-hours-24"></span>
                                    <p v-text="DayTime"></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="calculation__result">
                        <p> {{ calculation }}</p>
                        <p> {{ calculate }} </p>
                    </div>
                </div>
                <div class="calculator__bottom">
                   <Function @showfunction="scientificMath"/> 
                    <SimpleCalculation @show="simpleMath" />
                    <BtnOther @delete="clear"/>
                </div>
            </div>
        </div>
    </div>
</template>



/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>

import Function from '@/components/Function.vue'
import SimpleCalculation from '@/components/SimpleCalculation.vue'
import BtnOther from '@/components/BtnOther.vue'
import { storeToRefs } from 'pinia'
import { userOpeationStore } from '@/stores/operation'
import { useUserStore } from '@/stores/user';
const { userData } = storeToRefs(useUserStore())
const { user } = useUserStore()
user()


const { addCalculation } = userOpeationStore()
import { ref } from 'vue'
/*================== CALCULATION AND PUSH IN CALCULATIONDB ===============*/
let calculation = ref('')
let calculate = ref()
let result = ''
function simpleMath(element:string) {
    if (element != '=' ) {
        calculation.value += (element)
        calculate.value = eval(calculation.value)
    }
    else {
        calculate.value = eval(calculation.value)
        result = calculation.value + ' = ' +  calculate.value
        calculation.value = ''
        const dataCalculation = {
            id_calculation:userData.value._id,
            calculation: result,
            date: dayDate,
            hours:DayTime.value,
            
        }
        addCalculation(dataCalculation)
    }

    return {result }
}

function scientificMath(item:string){
   
    if(item == '√'){
     calculate.value = Math.sqrt(eval(calculation.value))

    }else if((item == 'π')){
        calculate.value = Math.PI *(eval(calculation.value))

    }else if((item == 'a²')){
        calculate.value =(eval(calculation.value))*(eval(calculation.value))

    }else if((item == 'ln')){
        calculate.value = Math.log(eval(calculation.value))

    }else if((item == 'log')){
        calculate.value = Math.log10(eval(calculation.value))

    }else if((item == 'E')){
        calculate.value = Math.exp(eval(calculation.value))

    }else if((item == 'sin')){
        calculate.value = Math.sin(eval(calculation.value))

    }else if((item == 'cos')){
        calculate.value = Math.cos(eval(calculation.value))

    }else if((item == 'tan')){
        calculate.value = Math.tan(eval(calculation.value))

    }else if((item == '|a|')){
       calculate.value = Math.abs(eval(calculation.value))

    }else if((item == 'tanh')){
        calculate.value = Math.tanh(eval(calculation.value))

    }else if((item == 'atan')){
        calculate.value = Math.atan(eval(calculation.value))

    }

    calculation.value = item + ' ( ' + calculation.value + ' ) ';
    result = calculation.value + ' = ' +  calculate.value
    const dataCalculation = {
        id_calculation:userData.value._id,
        calculation: result,
        date: dayDate,
        hours:DayTime.value,   
    }
    addCalculation(dataCalculation)
}

function clear(){
    calculate.value = ''
    calculation.value = ''
} 


/*==================== DAY ===============*/
let dayDate = ''
function date() {
    let date = new Date()
    let newDate = date.toLocaleString('fr-Fr', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    })
    dayDate = newDate
}
const DayDate = date()

/*=================== HOURS =================*/
let DayTime = ref('')

async function time() {
    let date = new Date()
    let time = date.toLocaleString('fr-Fr', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
    DayTime.value = time
}
const TimeR = time()
setInterval(time, 1000)

</script>

/*=============================++++ CSS ++++=================================*/
<style scoped>
.main__content {
    z-index: -1;
    height: calc(100vh - 135px);
}
.calculator {
    width: 100%;
    padding: 5px 0 15px;
    border-radius: 16px;
    background: linear-gradient(165deg, var(--calc-gradient-start), var(--calc-gradient-end));
    box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.07);
}

.calculator__content {
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.calculator__top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
}

.calculation__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 4px 8px;
}

.calculator__name {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.calculator__name h2 {
    font-family: var(--font-Fraunces-semibold);
    font-size: 1.15rem;
    color: var(--white);
}

.calculator__name p {
    font-family: var(--font-SMono-regular);
    font-size: 0.6875rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.4);
}

.day__info {
    display: flex;
    align-items: center;
    gap: 5px;
}
.day__info__list{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
}
.day__info__list__item{
    display: flex;
    align-items: center;
    gap: 5px;

}
.day__info__list__item p{
    font-family: var(--font-SMono-regular);
    font-size: 0.6875rem;
    color: rgba(255, 255, 255, 0.5);
}
.day__info__list__item span{
    color: var(--accent-green);
    font-size: 0.875rem;
}

.calculation__result {
    display: flex;
    height: 72px;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.28);
    border-radius: 10px;
}

sup {
    font-size: 8px;
}

.calculation__result p {
    font-family: var(--font-SMono-regular);
    text-align: right;
    color: rgba(255, 255, 255, 0.45);
    font-size: 0.8125rem;
    overflow: hidden;
    white-space: nowrap;
}

.calculation__result p:last-child {
    font-size: 1.5625rem;
    font-weight: bold;
    color: var(--white);
}

.calculator__bottom {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 18px;
    width: 100%;
    background: rgba(0, 0, 0, 0.18);
    border-radius: 12px;
}
@media(max-width:767px){
    .calculator__bottom {
        flex-direction: column;
    }
}
</style>