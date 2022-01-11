<script setup>
import { onMounted } from 'vue';
import { useAirConditionerStore } from '@/stores/AirConditioner';

const airConditioner = useAirConditionerStore();

onMounted(() => {
  airConditioner.getStatus();
});
</script>

<template>
  <div class="ac_dashboard">
    <div class="status fade">
      <div class="status__item">
        <div class="status__item__name">狀態</div>
        <div class="status__item__value">
          {{ airConditioner.status.isOpen ? '開' : '關' }}
          <q-icon
            class="q-ml-xs"
            name="fas fa-check-circle"
            v-if="airConditioner.status.isOpen"
            color="green-4"
            size="20px"
          ></q-icon>
          <q-icon
            class="q-ml-xs"
            name="fas fa-times-circle"
            color="red-4"
            size="20px"
            v-else
          ></q-icon>
        </div>
      </div>
      <div class="status__item">
        <div class="status__item__name">自動開啟溫度</div>
        <div class="status__item__value">
          {{ airConditioner.status.autoOpenTemperature }}°C
        </div>
      </div>
      <div class="status__item" v-if="airConditioner.status.isOpen">
        <div class="status__item__name">冷氣溫度</div>
        <div class="status__item__value">
          {{ airConditioner.status.temperature }}°C
        </div>
      </div>
      <div class="status__item" v-if="airConditioner.status.isOpen">
        <div class="status__item__name">定時關閉倒數</div>
        <div class="status__item__value">{{ airConditioner.countdown }}</div>
      </div>
    </div>
    <div class="room_temperature fade">
      <div class="setting" @click="airConditioner.isOpenControl = true">
        <q-icon class="icon_cog" name="fas fa-cog" size="36px" />
      </div>
      <div class="room_temperature__inner">
        <div class="room_temperature__title">室內溫度</div>
        <div class="room_temperature__value">26.0 °C</div>
      </div>
      <div class="room_temperature__bg"></div>
    </div>
  </div>
</template>

<style lang="scss">
.ac_dashboard {
  .status {
    width: 100%;
    max-width: 360px;
    border-radius: 12px;
    overflow: hidden;
    padding: 0 16px;
    background-color: $blue-grey-10;
    margin: 0 auto 60px;

    &__item {
      padding: 5px 0px;
      justify-content: center;
      display: flex;
      align-items: center;
      color: #ccc;
      height: 60px;
      border-bottom: 1px solid #888;
      &__name {
        width: 50%;
        text-align: left;
      }
      &__value {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        line-height: 20px;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
  .room_temperature {
    width: 260px;
    height: 260px;
    margin: 0 auto 20px;
    position: relative;
    &__inner {
      width: 260px;
      height: 260px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      flex-direction: column;
      position: relative;
      z-index: 2;
      background-color: $grey-10;
    }
    &__title {
      font-size: 24px;
      text-align: center;
      color: #fff;
      margin-bottom: 20px;
    }
    &__value {
      font-size: 56px;
      color: #fff;
      font-weight: 700;
    }
    &__bg {
      width: 300px;
      height: 300px;
      background-image: linear-gradient(to right, $blue-grey-2, $blue-grey-7);
      position: absolute;
      top: -20px;
      left: -20px;
      border-radius: 100%;
    }
    .setting {
      position: absolute;
      color: $blue-grey-4;
      top: -20px;
      right: -20px;
      width: 36px;
      height: 36px;
      cursor: pointer;
      display: none;
    }
  }
  @media (max-width: $breakpoint-sm) {
    .room_temperature {
      .setting {
        display: block;
      }
    }
  }
}
</style>
