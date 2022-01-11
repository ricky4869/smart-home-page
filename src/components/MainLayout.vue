<template>
  <div class="layout">
    <div class="layout__header">
      <div class="header">
        <router-link
          :to="{ name: 'ViewHome' }"
          class="header__logo"
        ></router-link>
        <div class="header__menu">
          <router-link
            :to="{ name: 'ViewAirConditioner' }"
            class="header__menu__item"
          >
            <div class="header__menu__item__link">冷氣</div>
          </router-link>
          <router-link :to="{ name: 'ViewMember' }" class="header__menu__item">
            <div class="header__menu__item__link">專題組員</div>
          </router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="layout__footer"></div>
  </div>
</template>
<style lang="scss">
.layout {
  overflow-x: hidden;
  min-height: 100vh;
  &__header {
    height: 60px;
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    border-bottom: 1px $grey-8 solid;
    background-color: #161f32;
  }

  .header {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
    &__logo {
      width: 32px;
      height: 36px;
      background-image: url('/snowflake-solid.svg');
      background-size: cover;
      margin-right: 48px;
    }
    &__menu {
      display: flex;
      height: 100%;
      align-items: center;
      &__item {
        color: #ccc;
        line-height: 60px;
        text-align: center;
        width: 100px;
      }
    }
  }
}
</style>
