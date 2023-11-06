/*=============================++++ HTML ++++=================================*/
<template>
    <div class="bottom__centre__bottom">
        <div class="calculation__number" v-for="element in  numbers">
            <button @click="show(element)" :style="{'background-color':element.color}" >{{ element.number }}</button>
        </div>
    </div>
</template>


/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
/* import { fileURLToPath } from 'url'; */
import {ref} from 'vue'
import type { Number } from '@/Types/numbers';
const emits = defineEmits(['get'])

const numbers = ref([
    {
        number:'7',
        color:'#aaaaaa'
    },
    {
        number:'8',
        color:'#aaaaaa'
    },
    {
        number:'9',
        color:'#aaaaaa'
    },
    {
        number:'/',
        color:'#eaeaeaee'
    },
    {
        number:'4',
        color:'#aaaaaa'
    },
    {
        number:'5',
        color:'#aaaaaa'
    },
    {
        number:'6',
        color:'#aaaaaa'
    },
    {
        number:'*',
        color:'#eaeaeaee'
    },
    {
        number:'1',
        color:'#aaaaaa'
    },
    {
        number:'2',
        color:'#aaaaaa'
    },
    {
        number:'3',
        color:'#aaaaaa'
    },
    {
        number:'-',
        color:'#eaeaeaee'
    }, 
    {
        number:'0',
        color:'#aaaaaa'
    },
    {
        number: '.',
        color:'#eaeaeaee'
    },
    {
        number:'=',
        color:'#eaeaeaee'
    },
    {
        number:'+',
        color:'#eaeaeaee'
    }
])

const numberValue = numbers.value
console.log(numberValue);

function show(element:Number){
  //console.log(element.number);
  emits('get',element.number)
}
</script>



/*=============================++++ CSS ++++=================================*/
<style scoped>
.bottom__centre__bottom {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
}

.calculation__number button {
    cursor: pointer;
    width: 100%;
    padding: 6px;
   /*  background-color: var(--background-button-number); */
    border: 2px solid var(--background-button-number);
    border-radius: var(--border-radius-primary);
}

.calculation__number button:hover {
    background-color: var(--background-button);
    border: 2px solid var(--background-button);
}

.calculation__operation button {
    cursor: pointer;
    width: 100%;
    padding: 6px;
    font-weight: bold;
    background-color: var(--background-button);
    border: 2px solid var(--background-button);
    border-radius: var(--border-radius-primary)
}

.calculation__operation button:hover {
    background-color: var(--background-button-hover);
    border: 1px solid var(--background-button-hover);
    border: 2px solid var(--background-button-hover);
}
</style>