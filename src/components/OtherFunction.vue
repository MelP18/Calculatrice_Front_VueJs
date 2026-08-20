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

.calulation__other button:hover {
    background-color: rgba(255, 255, 255, 0.12);
}

.bottom__right_bottom .remove__rear {
    grid-column: span 2;
    cursor: pointer;
}

.bottom__right_bottom .remove__rear button {
    cursor: pointer;
    width: 100%;
    padding: 8px 2px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 7px;
}

.bottom__right_bottom .remove__rear button:hover {
    background-color: rgba(255, 255, 255, 0.18);
}

.bottom__right_bottom .calulation__enter {
    grid-column: span 2;
    cursor: pointer;
    width: 100%;
}

.bottom__right_bottom .calulation__enter button {
    cursor: pointer;
    width: 100%;
    padding: 8px 2px;
    color: var(--hero-bg);
    font-weight: 700;
    border-radius: 7px;
    background-color: var(--accent-green);
    border: none;
}

.bottom__right_bottom .calulation__enter button:hover {
    background-color: #93e0b6;
}
</style>