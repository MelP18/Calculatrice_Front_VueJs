<template>
    <div class="error__page">
        <div class="page__not__found">
            <h1>Page Not Found</h1>
            <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site</p>
            <hr>
            <div class="home">
                <span class="mdi mdi-chevron-left"></span>
                <RouterLink to="/" class="home__page">Back to our site</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.error__page {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--rgba-background);
}

.page__not__found {
    background-color: var(--base-color);
    border-radius: var(--border-radius-base);
    width: 30%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.page__not__found h1 {
    color: var(--color-white);
    font-weight: bold;
    font-size: 25px;
}
.page__not__found p {
    color: var(--color-white);
    letter-spacing: 1px;
    line-height: 25px;
}
.page__not__found hr {
    background-color: var(--color-white);
    height: 2px;
}
.home{
    display: flex;
    align-items: center;
}
.home span.mdi-chevron-left{
    font-size: 20px;
    color: var(--color-white);
}
.home__page{
   color: var(--color-white);
   font-weight: bold;
   padding-bottom:3px;
}
.home__page:hover{
   border-bottom: 2px solid var(--color-white);
}
</style>