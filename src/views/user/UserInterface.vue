/*=============================++++ HTML ++++=================================*/
<template>
    <div class="bien" >
        <div class="user__main__title">
            <h1>CALCULATRICE</h1>
            <hr>
        </div>
        <div class="calculatrice">
            <Calculator/>
        </div>
        
    </div>
</template>

/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import Calculator from '@/components/Calculator.vue';

</script>
<style>
.calculatrice{
    width: 100%;
    height: calc(100vh - 135px);
    text-align: center;
    /* display: flex;
    justify-content: center;
    align-items: center; */
}
</style>