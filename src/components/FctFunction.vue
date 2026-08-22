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
    { functionval:'sinh', color:'#eaeaeaee' },
    { functionval:'cosh', color:'#eaeaeaee' },
    { functionval:'asinh', color:'#eaeaeaee' },
    { functionval:'acosh', color:'#eaeaeaee' },
    { functionval:'atanh', color:'#eaeaeaee' },
    { functionval:'x³', color:'#eaeaeaee' },
    { functionval:'∛x', color:'#eaeaeaee' },
    { functionval:'10ˣ', color:'#eaeaeaee' },
    { functionval:'2ˣ', color:'#eaeaeaee' },
    { functionval:'log₂', color:'#eaeaeaee' },
    { functionval:'1/x', color:'#eaeaeaee' },
    { functionval:'x!', color:'#eaeaeaee' },
])
const functionValue = functions.value

function showfunct(item:FunctionValue){
  emits('seefunction',item.functionval)
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
</style>
