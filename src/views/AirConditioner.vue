<script setup>
import AcControl from '@/components/AcControl.vue';
import AcDashboard from '@/components/AcDashboard.vue';
import { useAirConditionerStore } from '@/stores/AirConditioner';

const airConditioner = useAirConditionerStore();
</script>

<template>
  <div class="air_conditioner">
    <div class="container">
      <div class="dashboard">
        <ac-dashboard />
      </div>
      <div
        class="control"
        :class="{ 'control--open': airConditioner.isOpenControl }"
      >
        <div
          class="control__close_btn"
          @click="airConditioner.isOpenControl = false"
        >
          <q-icon name="fas fa-times" size="36px"></q-icon>
        </div>
        <ac-control />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.air_conditioner {
  width: 100%;
  padding: 100px 20px 20px;
  .container {
    width: 100%;
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dashboard {
    width: 50%;
  }
  .control {
    width: 50%;
    &__close_btn {
      display: none;
    }
  }
  @media (max-width: $breakpoint-sm) {
    padding: 100px 20px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    .dashboard {
      width: 100%;
    }
    .control {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: -100%;
      z-index: 200;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #111832;
      transition: 0.5s left;
      &--open {
        left: 0;
      }
      &__close_btn {
        display: block;
        width: 36px;
        height: 36px;
        position: absolute;
        top: 20px;
        right: 20px;
        color: $blue-grey-4;
      }
    }
  }
}
</style>
