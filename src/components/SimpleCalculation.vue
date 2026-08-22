/*=============================++++ HTMl ++++=================================*/
<template>
    <div class="calculation__bottom__center">
        <div class="bottom__center__top">
            <div class="center__top__left">
                <button :class="{active: mode === 'rad'}" @click="setMode('rad')">RAD</button>
                <button :class="{active: mode === 'deg'}" @click="setMode('deg')">DEG</button>
            </div>
            <div class="center__top__right">
                <span class="mdi mdi-undo" @click="$emit('undo')"></span>
                <span class="mdi mdi-redo" @click="$emit('redo')"></span>
            </div>
        </div>
        <OperationNumber @get="view"/>
    </div>
</template>



/*=============================++++ jS ++++=================================*/
<script lang="ts" setup>
import { ref } from 'vue'
import OperationNumber from '@/components/OperationNumber.vue'
import type {Number} from '@/Types/numbers'
const emits = defineEmits(['show', 'anglemode', 'undo', 'redo'])

const mode = ref<'rad' | 'deg'>('rad')
function setMode(m: 'rad' | 'deg') {
    mode.value = m
    emits('anglemode', m)
}

function view(element:Number){
    emits('show',element)
}

</script>



/*=============================++++ CSS ++++=================================*/
<style scoped>
.calculation__bottom__center {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
}
.bottom__center__top {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}
.center__top__left {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 7px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.06);
}

.center__top__left button {
    width: 100%;
    height: 100%;
    padding: 6px 0;
    border: none;
    background-color: transparent;
    font-family: var(--font-SMono-regular);
    font-size: 0.6875rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.45);
}

.center__top__left button.active {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.12);
    color: var(--white);
}

.center__top__right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    width: 100%;
}
.center__top__right span {
    text-align: center;
    padding: 3px;
    width: 100%;
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
}
.center__top__right span:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    color: var(--white);
}
</style>
