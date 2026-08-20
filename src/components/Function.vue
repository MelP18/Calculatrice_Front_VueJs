/*=============================++++ HTML ++++=================================*/
<template>
    <div class="calculation__bottom__left">
        <div class="bottom__left__top">
            <p class="active">princ.</p>
            <p>abc</p>
            <p>fct</p>
        </div>
        <PrincFunction @seefunction="viewfunction"/>
    </div>
</template>



/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import PrincFunction from '@/components/PrincFunction.vue';
import type { FunctionValue } from '@/Types/functionValue';

const emits = defineEmits(['showfunction'])

function viewfunction(item:FunctionValue){ 
    console.log(item);
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