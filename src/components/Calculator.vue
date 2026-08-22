/*=============================++++ HTML ++++=================================*/
<template>
    <div class="main__content">
        <div class="calculator">
            <div class="calculator__content">
                <div class="calculator__top">
                    <div class="calculation__head">
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
                    <SimpleCalculation @show="simpleMath" @anglemode="setAngleMode" @undo="undo" @redo="redo" />
                    <BtnOther @delete="clear" @percent="percent" @backspace="backspace" @equals="simpleMath('=')"/>
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
/*================== ANGLE MODE ===============*/
const isDegMode = ref(false)
function setAngleMode(mode: 'rad' | 'deg') {
    isDegMode.value = mode === 'deg'
}
function toRadians(value: number) {
    return isDegMode.value ? value * (Math.PI / 180) : value
}
function fromRadians(value: number) {
    return isDegMode.value ? value * (180 / Math.PI) : value
}
function factorial(n: number): number {
    if (n < 0 || !Number.isInteger(n)) return NaN
    let result = 1
    for (let i = 2; i <= n; i++) result *= i
    return result
}

/*================== UNDO / REDO ===============*/
const history = ref<{ calculation: string, calculate: any }[]>([])
const future = ref<{ calculation: string, calculate: any }[]>([])

function pushHistory() {
    history.value.push({ calculation: calculation.value, calculate: calculate.value })
    future.value = []
}

function undo() {
    if (!history.value.length) return
    future.value.push({ calculation: calculation.value, calculate: calculate.value })
    const prev = history.value.pop()!
    calculation.value = prev.calculation
    calculate.value = prev.calculate
}

function redo() {
    if (!future.value.length) return
    history.value.push({ calculation: calculation.value, calculate: calculate.value })
    const next = future.value.pop()!
    calculation.value = next.calculation
    calculate.value = next.calculate
}

/*================== CALCULATION AND PUSH IN CALCULATIONDB ===============*/
let calculation = ref('')
let calculate = ref()
let result = ''
function simpleMath(element:string) {
    pushHistory()
    if (element != '=' ) {
        calculation.value += (element)
        calculate.value = eval(calculation.value)
    }
    else {
        if (!calculation.value) return
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
    pushHistory()

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
        calculate.value = Math.sin(toRadians(eval(calculation.value)))

    }else if((item == 'cos')){
        calculate.value = Math.cos(toRadians(eval(calculation.value)))

    }else if((item == 'tan')){
        calculate.value = Math.tan(toRadians(eval(calculation.value)))

    }else if((item == '|a|')){
       calculate.value = Math.abs(eval(calculation.value))

    }else if((item == 'tanh')){
        calculate.value = Math.tanh(eval(calculation.value))

    }else if((item == 'atan')){
        calculate.value = fromRadians(Math.atan(eval(calculation.value)))

    }else if((item == 'sinh')){
        calculate.value = Math.sinh(eval(calculation.value))

    }else if((item == 'cosh')){
        calculate.value = Math.cosh(eval(calculation.value))

    }else if((item == 'asinh')){
        calculate.value = Math.asinh(eval(calculation.value))

    }else if((item == 'acosh')){
        calculate.value = Math.acosh(eval(calculation.value))

    }else if((item == 'atanh')){
        calculate.value = Math.atanh(eval(calculation.value))

    }else if((item == 'x³')){
        calculate.value = Math.pow(eval(calculation.value), 3)

    }else if((item == '∛x')){
        calculate.value = Math.cbrt(eval(calculation.value))

    }else if((item == '10ˣ')){
        calculate.value = Math.pow(10, eval(calculation.value))

    }else if((item == '2ˣ')){
        calculate.value = Math.pow(2, eval(calculation.value))

    }else if((item == 'log₂')){
        calculate.value = Math.log2(eval(calculation.value))

    }else if((item == '1/x')){
        calculate.value = 1 / eval(calculation.value)

    }else if((item == 'x!')){
        calculate.value = factorial(eval(calculation.value))

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
    pushHistory()
    calculate.value = ''
    calculation.value = ''
}

function backspace(){
    pushHistory()
    calculation.value = calculation.value.slice(0, -1)
    calculate.value = calculation.value ? eval(calculation.value) : ''
}

function percent(){
    if (!calculation.value) return
    pushHistory()
    calculate.value = eval(calculation.value) / 100
    calculation.value = String(calculate.value)
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
    justify-content: flex-end;
    align-items: center;
    padding: 4px 4px 8px;
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
    min-height: 72px;
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
    overflow-wrap: break-word;
    word-break: break-all;
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
