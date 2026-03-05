/*=============================++++ HTML ++++=================================*/
<template>
  <!-- <div class="main__foreground__content__left"> -->
  <div class="main__foreground__content__left__top">
    <div class="foreground__icon__left">
         <RouterLink to="" class="link">
        <span class="mdi mdi-facebook"></span>
        <p>Prisca GSN</p>
      </RouterLink>
      <RouterLink to="" class="link">
        <span class="mdi mdi-whatsapp"></span>
        <p>+229 01 61 76 68 64</p>
      </RouterLink>
      <RouterLink to="" class="link">
        <span class="mdi mdi-linkedin"></span>
        <p>Prisca GNANSOUNOU</p>
      </RouterLink>
      
      <RouterLink to="" class="link">
        <span class="mdi mdi-email"></span>
        <p>gsnmelp@gmail.com</p>
      </RouterLink>
      
      
    </div>
  </div>
  <div class="main__foreground__content__left__bottom">
    <h4>Nous faisons les calculs pour vous, simplement et efficacement</h4>
    <p>
     Une calculatrice intuitive conçue pour vous offrir des résultats rapides, précis et fiables, afin de vous faire gagner du temps au quotidien et de simplifier tous vos calculs, du plus simple au plus complexe.
    </p>
  </div>
  <!--  </div> -->
</template>

/*=============================++++ CSS ++++=================================*/
<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>
<style scoped>
.main__foreground__content__left__top {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.foreground__icon__left {
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  color: var(--color-white);
}


@media (max-width: 1300px) {
  .foreground__icon__left {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}
@media (max-width: 700px) {
  .foreground__icon__left {
    display: flex;
  align-items: center;
  flex-direction: column;
  }
}
.link {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 15px;
}

.link span.mdi {
  font-size: 1.5rem;
}

.link p {
  color: var(--color-white);
  font-family: var(--font-family-light);
  font-size: 1.2rem;
}
.foreground__icon__left span {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
  color: var(--color-white);
  background-color: var(--tertiary-color);
  border-radius: 50%;
}
.foreground__mail p {
  cursor: pointer;
  color: var(--color-white);
  font-weight: bold;
}
.main__foreground__content__left__bottom {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.main__foreground__content__left__bottom h4 {
  color: var(--base-color);
  font-weight: bold;
}
.main__foreground__content__left__bottom p {
    max-width: 700px;;
  color: var(--color-white);
  line-height: 20px;
  font-family: var(--font-family-italic);
     font-size: 1.1rem;
    letter-spacing: 1px;
}
</style>
