/*=============================++++ HTML ++++=================================*/
<template>
    <div class="bottom__right_bottom">
        <div class="calulation__other">
            <button>%</button>
        </div>
        <div class="calulation__other">
            <button>a/b</button>
        </div>
        <div class="calulation__other">
            <button>
                <span class="mdi mdi-arrow-left"></span>
            </button>
        </div>
        <div class="calulation__other">
            <button>
                <span class="mdi mdi-arrow-right"></span>
            </button>
        </div>
        <div class="remove__rear">
            <button>⌫</button>
        </div>
        <div class="calulation__enter">
            <button>%</button>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>

/*=============================++++ CSS ++++=================================*/
<style scoped>
.bottom__right_bottom {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
}

.calulation__other button {
    padding: 5px;
    cursor: pointer;
    width: 100%;
    padding: 6px;
    font-weight: bold;
    background-color: var(--background-button);
    border: 2px solid var(--background-button);
    border-radius: var(--border-radius-primary);
}

.calulation__other button:hover {
    background-color: var(--color-gray-primary);
    border: 1px solid var(--background-button-hover);
}

.bottom__right_bottom .remove__rear {
    grid-column: span 2;
    width: 80%;
    left: 20%;
    cursor: pointer;
    /* background-color: var(--background-button-number); */
}

.bottom__right_bottom .remove__rear button {
    padding: 5px;
    cursor: pointer;
    width: 100%;
    font-weight: bold;
    padding: 6px;
    color: white;
    background-color: var(--base-color);
    border: 2px solid var(--background-button-number);
    border-radius: var(--border-radius-primary);
}

.bottom__right_bottom .remove__rear button:hover {
    background-color: var(--primary-color);
    border: 2px solid var(--primary-color);
    border-radius: var(--border-radius-primary);
    
}

.bottom__right_bottom .calulation__enter {
    grid-column: span 2;
    cursor: pointer;
    width: 100%;
}

.bottom__right_bottom .calulation__enter button {
    padding: 5px;
    cursor: pointer;
    width: 100%;
    padding: 6px;
    color: var(--color-white);
    font-weight: bold;
    border-radius: var(--border-radius-primary);
    background-color: var(--base-color);
    border: 2px solid var(--base-color);
}

.bottom__right_bottom .calulation__enter button:hover {
    border: 2px solid var(--primary-color);
    background-color: var(--primary-color);
    border-radius: var(--border-radius-primary);
}
</style>