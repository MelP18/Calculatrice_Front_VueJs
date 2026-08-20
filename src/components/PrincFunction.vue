/*=============================++++ HTML ++++=================================*/
<template>
    <div class="bottom__left__bottom">
        <div class="calcultion__fonction" v-for="element in functionValue">
            <button @click="showfunct(element)">{{ element.functionval }}</button>
        </div>
    </div>
</template>


<script setup lang="ts">
import {ref} from 'vue'
import type {FunctionValue} from '@/Types/functionValue'
const emits = defineEmits(['seefunction'])
const functions = ref([
    {
        functionval:'a²',
        color:'#eaeaeaee'
    },
    {
        functionval:'|a|',
        color:'#eaeaeaee'
    },
    {
        functionval:'π',
        color:'#eaeaeaee'
    },
    {
        functionval:'ln',
        color:'#eaeaeaee'
    },
    {
        functionval:'log',
        color:'#eaeaeaee'
    },
    {
        functionval:'√',
        color:'#eaeaeaee'
    },
    {
        functionval:'sin',
        color:'#eaeaeaee'
    },
    {
        functionval:'cos',
        color:'#eaeaeaee'
    },
    {
        functionval:'tan',
        color:'#eaeaeaee'
    },
    {
        functionval:'tanh',
        color:'#eaeaeaee'
    },
    {
        functionval:'atan',
        color:'#eaeaeaee'
    },
    {
        functionval:'E',
        color:'#eaeaeaee'
    } 
])
const functionValue = functions.value
console.log(functionValue);

function showfunct(item:FunctionValue){
  emits('seefunction',item.functionval)
  console.log(item.functionval);
}
</script>
/*=============================++++ CSS ++++=================================*/
<style scoped>
.bottom__left__bottom {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
}
.calcultion__fonction button {
    cursor: pointer;
    width: 100%;
    padding: 8px 2px;
    font-family: var(--font-SMono-regular);
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--white);
    background: rgba(255, 255, 255, 0.06);
    border: none;
    border-radius: 7px;
    transition: background .12s ease;
}
.calcultion__fonction button:hover {
    background-color: rgba(255, 255, 255, 0.12);
}

sup {
    font-size: 8px;
}</style>