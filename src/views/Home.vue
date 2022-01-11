<script setup></script>

<template>
  <div class="home">
    <div class="home__logo fade"></div>
    <div class="home__sub_title fade">專題報告</div>
    <div class="home__title fade">智慧家電</div>
    <div class="home__btn fade">
      <q-btn
        color="light-blue-9"
        class="q-mr-lg"
        unelevated
        label="開始"
        style="width: 120px; height: 56px; font-size: 20px"
        :to="{ name: 'ViewAirConditioner' }"
      />
      <q-btn
        color="white"
        outline
        unelevated
        label="專題組員"
        style="width: 120px; height: 56px; font-size: 20px"
        :to="{ name: 'ViewAirConditioner' }"
      />
    </div>
  </div>
</template>

<style lang="scss">
.home {
  color: $blue-grey-3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 60px;

  &__logo {
    width: 252px;
    height: 288px;
    background-image: url('/snowflake-solid.svg');
    background-size: cover;
    margin-bottom: 48px;
  }
  &__sub_title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  &__title {
    font-size: 72px;
    font-weight: bold;
  }
  &__btn {
    margin-top: 32px;
  }
}
</style>
