/*=============================++++ HTMl ++++=================================*/
<template>
    <div class="calculation__bottom__center">
        <div class="bottom__center__top">
            <div class="center__top__left">
                <button class="active" @click="">RAD</button>
                <button @click="">DEG</button>
            </div>
            <div class="center__top__right">
                <span class="mdi mdi-undo active" @click=""></span>
                <span class="mdi mdi-redo" @click=""></span>
            </div>
        </div>
        <OperationNumber @get="view"/>
    </div>
</template>



/*=============================++++ jS ++++=================================*/
<script lang="ts" setup>
import OperationNumber from '@/components/OperationNumber.vue'
import type {Number} from '@/Types/numbers'
import { onMounted } from 'vue';
/* import {} from '@/components/OperationNumber.vue' */
const emits = defineEmits(['show'])

function view(element:Number){ 
    console.log(element);
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
    border-radius: var(--border-radius-primary);
    background-color: var(--color-gray);
}

.center__top__left button {
    width: 100%;
    height: 100%;
    border: none;
    background-color: var(--color-gray);
    color: var(--color-gray);
    border-radius: var(--border-radius-primary);
}

.center__top__left button.active {
    width: 100%;
    height: 100%;
    background-color: var(--color-white);
    border-top-left-radius: var(--border-radius-primary);
    border-bottom-left-radius: var(--border-radius-primary);
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
    font-size: 18px;
}
.center__top__right span:hover {
    background-color: var(--color-gray-primary);
    border-radius: var(--border-radius-primary);
}
.center__top__right span.active {
    text-align: center;
    width: 100%;
    color: var(--color-gray);
    font-weight: bold;
}
</style>