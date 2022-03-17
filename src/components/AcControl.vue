<script setup>
import { watch, ref, reactive } from 'vue';
import { useAirConditionerStore } from '@/stores/AirConditioner';
import axios from "axios"

// axios.create({
//   headers: { 'content-type': 'application/x-www-form-urlencoded' },
// })
const airConditioner = useAirConditionerStore();
const apiUrl = ref('https://api.thingspeak.com/update')
const apiKey = ref('L5E4PBI15XH5L0S5')

const writeKey = ref('L5E4PBI15XH5L0S5')
const readKey = ref('W555MP54SDJP3N0O')
const channelId = ref('1669841')
console.log(import.meta.env.API_URL)
watch(
  () => airConditioner.isOpen,
  () => {
    airConditioner.setStatus('isOpen', airConditioner.isOpen);
    axios.get(apiUrl.value, {api_key:writeKey.value, field1:airConditioner.isOpen}, {
    headers:{
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
}).then(resp => {
      console.log(resp.data)
    })
  },
);


// const value = ref(true);
</script>
<template>
  <div class="ac_control fade">
    <div class="ac_control__item">
      <div class="ac_control__item__name">冷氣開/關</div>
      <q-toggle
        v-model="airConditioner.isOpen"
        color="light-blue-12"
        unchecked-icon="clear"
        checked-icon="check"
      />
    </div>
    <div class="ac_control__item">
      <div class="ac_control__item__name">自動開啟</div>
      <div class="ac_control__item__action">
        <div class="input">
          <div class="input__unit">溫度°C</div>
          <div class="input__value">
            <q-input
              borderless
              v-model="airConditioner.autoOpenTemperature"
              dense
              dark
            >
              <template v-slot:append>
                <q-btn
                  color="light-blue-4"
                  unelevated
                  dense
                  label="設定"
                  class="q-px-sm"
                  @click="airConditioner.saveAutoOpen()" /></template
            ></q-input>
          </div>
        </div>
      </div>
    </div>
    <div
      class="ac_control__item"
      :class="{ 'ac_control__item--disabled': !airConditioner.isOpen }"
    >
      <div class="ac_control__item__name">溫度調整</div>
      <div class="ac_control__item__action">
        <div class="input_number">
          <div
            class="input_number__trun_btn"
            :class="{
              'input_number__trun_btn--disabled':
                airConditioner.temperature === 16,
            }"
            @click="airConditioner.trunTemperature(-1)"
          >
            <q-icon
              name="fas fa-minus-square"
              color="red-4"
              size="20px"
            ></q-icon>
          </div>
          <div class="input_number__value">
            {{ airConditioner.temperature }}°C
          </div>
          <div
            class="input_number__trun_btn"
            :class="{
              'input_number__trun_btn--disabled':
                airConditioner.temperature === 30,
            }"
            @click="airConditioner.trunTemperature(1)"
          >
            <q-icon
              name="fas fa-plus-square"
              color="green-4"
              size="20px"
            ></q-icon>
          </div>
        </div>
      </div>
    </div>
    <div
      class="ac_control__item"
      :class="{ 'ac_control__item--disabled': !airConditioner.isOpen }"
    >
      <div class="ac_control__item__name">定時關閉</div>
      <div class="ac_control__item__action">
        <div class="input">
          <div class="input__unit">小時</div>
          <div class="input__value">
            <q-input borderless v-model="airConditioner.closeTime" dense dark>
              <template v-slot:append>
                <q-btn
                  color="light-blue-4"
                  unelevated
                  dense
                  label="設定"
                  class="q-px-sm"
                  @click="airConditioner.setCloseTimer" /></template
            ></q-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ac_control {
  max-width: 640px;
  width: 100%;
  padding: 10px;
  &__item {
    padding: 5px 16px;
    height: 60px;
    border-radius: 12px;
    background-color: $blue-grey-10;
    margin-bottom: 20px;
    transition: 0.3s background-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;
      .ac_control__item__action {
        pointer-events: none;
      }
    }
    &__name {
      color: #ccc;
      font-size: 18px;
      width: 30%;
    }
    &__action {
      width: 70%;

      .input_number {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        &__value {
          color: #ccc;
          font-weight: 500;
          font-size: 20px;
          line-height: 20px;
          margin: 0 10px;
        }
        &__trun_btn {
          cursor: pointer;
          padding: 10px;
          opacity: 1;
          transition: 0.3s opacity;
          &--disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          &:not(&--disabled):hover {
            opacity: 0.8;
          }
        }
      }
      .input {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        &__unit {
          color: #ccc;
          display: inline-block;
          margin-right: 10px;
        }
        &__value {
          border-radius: 5px;
          padding: 0px 5px 0px 10px;
          background-color: $blue-grey-8;
          width: 100px;
        }
      }
    }
  }
  @media (max-width: $breakpoint-sm) {
    padding: 20px;
  }
}
</style>
