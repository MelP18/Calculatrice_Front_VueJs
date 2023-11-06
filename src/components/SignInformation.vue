/*=============================++++ HTML ++++=================================*/
<template>
    <!-- <div class="main__foreground__content__left"> -->
        <div class="main__foreground__content__left__top">
            <div class="foreground__icon__left">
                <div class="link">
                    <span class="mdi mdi-facebook"></span>
                    <p>Prisca GSN</p>
                </div>
                <div class="link">
                    <span class="mdi mdi-whatsapp"></span>
                    <p>+229 61 76 68 64</p>
                </div>
                <div class="link">
                    <span class="mdi mdi-linkedin"></span>
                    <p>Prisca GNANSOUNOU</p>
                </div>
                <div class="link">
                    <span class="mdi mdi-telegram"></span>
                    <p>@endurcie</p>
                </div>
            </div>
            <div class="foreground__mail">
                <p>melpcalcul@gmail.com</p>
            </div>
        </div>
        <div class="main__foreground__content__left__bottom">
            <h4>Nous ferons les maths pour vous</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perspiciatis temporibus
                dolorum magni!
            </p>
        </div>
   <!--  </div> -->
</template>

/*=============================++++ CSS ++++=================================*/
<style scoped>
.main__foreground__content__left__top{
    display: flex;
    flex-direction: column;
    gap: 15px; 
}
.foreground__icon__left{
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    color: var(--color-white);
}
.link{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:15px
}

.link p{
    color: var(--base-color);
    font-weight: 900;
}
.foreground__icon__left span{
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 8px;
    color: var(--color-white);
    background-color: var(--secondary-color);
    border-radius: 50%; 
}
.foreground__mail p{
    cursor: pointer;
    color: var(--color-white);
    font-weight: bold;
}
.main__foreground__content__left__bottom{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.main__foreground__content__left__bottom h4{
    color: var(--base-color);
    font-weight: bold;
}
.main__foreground__content__left__bottom p{
    color: var(--color-white);
    line-height: 20px;
    font-family: var(--font-family-italic);
}

</style>