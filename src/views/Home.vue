/*=============================++++ HTML ++++=================================*/
<template>
    <div class="block">
        <div class="main__background">
            <!-- <Header /> -->
            <div class="main__background__left">
                <!--  <img :src="image" alt=""> -->
            </div>
            <div class="main__background__right">

            </div>
        </div>
        <!-- <div class="container"> -->
        <div class="main__foreground"> 
            <div class="main__foreground__img">
                <img :src="image" alt="">
                <Header />
            </div>
            <div class="main__foreground__content">
                <div class="main__foreground__content__left">
                    <div class="main__foreground__content__left__top">
                        <div class="foreground__icon__left">
                            <span class="mdi mdi-facebook"></span>
                            <span class="mdi mdi-whatsapp"></span>
                            <span class="mdi mdi-linkedin"></span>
                            <span class="mdi mdi-telegram"></span>
                        </div>
                        <div class="foreground__mail">
                            <a href="#">melpcalcul@gmail.com</a>
                        </div>
                    </div>
                    <div class="main__foreground__content__left__bottom">
                        <h4>Nous ferons les maths pour vous</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perspiciatis temporibus
                           dolorum magni!
                        </p>
                    </div>
                </div>
                <div class="main__foreground__content__right">
                    <div class="main__foreground__content__right__top">
                        <div class="foreground__icon__right">
                            <IconPlatform/>
                        </div>
                    </div>
                    <div class="main__foreground__content__right__bottom">
                        <h4>Nous vous aidons avec notre calculatrice</h4>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>




/*=============================++++ JS ++++=================================*/

<script lang="ts"  setup>
import Header from '@/components/Header.vue'
import image from '@/assets/images/impots2_1.jpg'
import IconPlatform from '@/components/IconPlatform.vue';
</script>

/*=============================++++ CSS ++++=================================*/
<style scoped>
.block {
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    overflow: hidden;
}
.main__background {
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
}
.main__background .main__background__left {
    padding: 15px;
   background-color: var(--rgba-background);
    width: 70%;
    height: 100%;
}
.main__background .main__background__right {
    padding: 15px;
    background-color: var(--secondary-color);
    width: 30%;
    height: 100%;
}
.main__background img {
    position: absolute;
    opacity: 0.3;
    width: 100%;
    height: 100%;
}

.main__foreground {
    background-color: var(--color-black);
    width: 80%;
    height: 80vh;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;  
}
.main__foreground__img {
    width: 100%;
    height: 60%;
}
.main__foreground__img img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
}
.main__foreground__content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px ;
    overflow-y: scroll; 
    width: 100%;
    height: 40%;
}
.main__foreground__content::-webkit-scrollbar{
    width: 8px;
}
.main__foreground__content::-webkit-scrollbar-thumb{
    background-color: var(--color-black);
}
.main__foreground__content__left{
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
}
.main__foreground__content__left__top{
    display: flex;
    flex-direction: column;
   gap: 10px; 
}
.foreground__icon__left{
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--color-white);
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
.foreground__mail a{
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
    color: var(--color-white);
    font-weight: bold;
}
.main__foreground__content__left__bottom p{
    color: var(--color-white);
    line-height: 20px;
    font-family: var(--font-family-italic);
}
.main__foreground__content__right{
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
}
.main__foreground__content__right__top{
    display: flex;
    justify-content: right;
    align-items: center;
}
.foreground__name{
    display: flex;
    align-items: center; 
}
.foreground__name p{
    color: var(--color-white);
    font-size: 20px;
}
.foreground__name strong{
    color: var(--color-white);
    font-size: 20px;
}
.main__foreground__content__right__bottom{
    display: flex;
    justify-content: right;
}
.main__foreground__content__right__bottom h4{
    font-size: 30px;
    text-align: right;
    color: var(--color-white);
}
@media(max-width:525px){
    .main__foreground__content{
        flex-direction: column;
        gap: 15px;
    }
}
</style>