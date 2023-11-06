/*=============================++++ HTML ++++=================================*/
<template>
    <div class="calculation__bottom__right">
        <div class="bottom__right__top">
            <p @click="clear">effacer tout</p>
            <div class="mode__dark">
                <span class="mdi mdi-wrench"></span>
            </div>
        </div>
        <OtherFunction/>
    </div>
</template>



/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import OtherFunction from '@/components/OtherFunction.vue'
const emits = defineEmits(['delete'])
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
}

.bottom__right__top p:hover {
    background-color: var(--color-gray-primary);
    border-radius: var(--border-radius-primary);
}

.bottom__right__top .mode__dark {
    padding: 5px;
    width: 100%;
    text-align: center;
}

.bottom__right__top .mode__dark:hover {
    background-color: var(--color-gray-primary);
    border-radius: var(--border-radius-primary);
}
</style>