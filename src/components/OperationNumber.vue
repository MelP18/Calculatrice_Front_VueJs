/*=============================++++ HTML ++++=================================*/
<template>
    <div class="bottom__centre__bottom">
        <div class="calculation__number" v-for="element in  numbers">
            <button @click="show(element)" :class="{ op: !/^[0-9]$/.test(element.number) }">{{ element.number }}</button>
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
    padding: 9px 2px;
    font-family: var(--font-SMono-regular);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--white);
    background: rgba(255, 255, 255, 0.06);
    border: none;
    border-radius: 7px;
    transition: background .12s ease;
}

.calculation__number button:hover {
    background-color: rgba(255, 255, 255, 0.12);
}

.calculation__number button:active {
    background-color: rgba(255, 255, 255, 0.2);
}

.calculation__number button.op {
    background: rgba(127, 217, 168, 0.14);
    color: var(--accent-green);
}

.calculation__number button.op:hover {
    background-color: rgba(127, 217, 168, 0.24);
}
</style>