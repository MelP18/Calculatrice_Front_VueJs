/*=============================++++ HTML ++++=================================*/
<template>
    <div class="calculation__bottom__right">
        <div class="bottom__right__top">
            <p @click="clear">effacer tout</p>
        </div>
        <OtherFunction @percent="$emit('percent')" @backspace="$emit('backspace')" @equals="$emit('equals')"/>
    </div>
</template>



/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import OtherFunction from '@/components/OtherFunction.vue'
const emits = defineEmits(['delete', 'percent', 'backspace', 'equals'])
function clear(){
    emits('delete')
}

</script>


/*=============================++++ CSS ++++=================================*/
<style scoped>
.calculation__bottom__right {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
}

.bottom__right__top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 25px;
    width: 100%;
}

.bottom__right__top p {
    padding: 5px;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.6);
    transition: color .15s ease;
}

.bottom__right__top p:hover {
    background-color: rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    color: var(--white);
}
</style>