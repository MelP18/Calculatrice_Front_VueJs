/*=============================++++ HTML ++++=================================*/
<template>
  <div class="block">
    <div class="main__background">
      <div class="main__background__left">
        <!-- left rrgba vilet -->
      </div>
      <div class="main__background__right">
        <!-- right violet -->
      </div>
    </div>
    <div class="main__foreground">
      <div class="main__foreground__img">
        <img :src="image2" alt="" />
        <div class="auth">
          <Header />
          <div class="auth__form">
            <div class="auth__field">
              <RouterView />
            </div>
            <div class="main__foreground__content__left">
              <SignInformation />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import image2 from "@/assets/images/remboursement-notes-de-frais.jpg";
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";

import Header from "@/components/Header.vue";
import SignInformation from "../components/SignInformation.vue";
</script>

/*=============================++++ CSS ++++=================================*/
<style scoped>
.block {
  display: flex;
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
  width:100%;
  height: 100%;
}

.main__background .main__background__right {
  padding: 15px;
  background-color: var(--secondary-color);
  width: 35%;
  height: 100%;
}

.main__foreground {
  background-color: var(--color-black);
  width: 90%;
  height: 85vh;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}

.main__foreground__img {
  width: 100%;
  height: 100%;
  display: flex;
}

.main__foreground__content__left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding:0px 15px;
  /* padding-bottom: 50px; */
}

.main__foreground__img img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
}
.auth__form {
  width: 100%;
  height: calc(100% - 49px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
  
}
@media (max-width: 1300px) {
    .auth__form {
        flex-direction: column;
        align-items: center;
        gap: 50px;
        overflow-y: auto;
          justify-content: flex-start;

    }
}


.auth {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

@media (max-width: 1300px) {
  .main__foreground__content__left {
    padding-bottom: 50px;
  }
  
  .auth__field{
    width: 100%;
    padding-top: 50px;
  }
}

</style>