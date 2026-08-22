/*=============================++++ HTML ++++=================================*/
<template>
    <div class="calculation__bottom__left">
        <div class="bottom__left__top">
            <p :class="{active: tab === 'princ'}" @click="tab = 'princ'">princ.</p>
            <p :class="{active: tab === 'fct'}" @click="tab = 'fct'">fct</p>
        </div>
        <PrincFunction v-if="tab === 'princ'" @seefunction="viewfunction"/>
        <FctFunction v-else @seefunction="viewfunction"/>
    </div>
</template>



/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import { ref } from 'vue'
import PrincFunction from '@/components/PrincFunction.vue';
import FctFunction from '@/components/FctFunction.vue';
import type { FunctionValue } from '@/Types/functionValue';

const emits = defineEmits(['showfunction'])
const tab = ref<'princ' | 'fct'>('princ')

function viewfunction(item:FunctionValue){
    emits('showfunction',item)
}
</script>




/*=============================++++ CSS ++++=================================*/
<style scoped>
.calculation__bottom__left {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
}
.bottom__left__top {
    display: flex;
    align-items: center;
    width: 100%;
}
.bottom__left__top p {
    width: 100%;
    text-align: center;
    padding: 5px;
    font-size: 0.75rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.4);
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: color .2s ease, border-color .2s ease;
}
.bottom__left__top p:hover {
    border-bottom: 2px solid var(--accent-green);
    color: var(--white);
}

.bottom__left__top p.active {
    border-bottom: 2px solid var(--accent-green);
    color: var(--white);
}
</style> 