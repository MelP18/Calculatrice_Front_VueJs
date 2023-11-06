/*=============================++++ HTML ++++=================================*/
<template>
    <div class="bottom__left__bottom">
        <div class="calcultion__fonction" v-for="element in functionValue">
            <button @click="showfunct(element)" :style="{'background-color':element.color}">{{ element.functionval }}</button>
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
    padding: 6px;
    border: 2px solid var(--background-button);
    border-radius: var(--border-radius-primary);
}
.calcultion__fonction button:hover {
    background-color: var(--background-button-hover);
    border: 2px solid var(--background-button-hover);
}

sup {
    font-size: 8px;
}</style>