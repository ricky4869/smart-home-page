import { defineStore } from 'pinia';
import { useLocalStorage } from '@/lib/useLocalStorage';

export const useAirConditionerStore = defineStore({
  id: 'control',
  state: () => ({
    // 冷氣溫度
    temperature: 26,
    // 冷氣是否開啟
    isOpen: false,
    // 自動開啟溫度
    autoOpenTemperature: 0,
    // 定時時間
    closeTime: 0,
    // 定時計時器
    closeTimer: 0,

    status: {
      isOpen: false,
      temperature: 26,
      autoOpenTemperature: 0,
      closeTimer: 0,
    },
    countdown: 0,
    countdownTimer: null,
    isOpenControl: false,
  }),
  getters: {},
  actions: {
    // 打開冷氣
    openAirConditioner() {
      this.isOpen = true;
    },

    // 關閉冷氣
    closeAirConditioner() {
      this.isOpen = false;
      this.status.isOpen = false;
    },

    // 溫度調整
    trunTemperature(value) {
      this.temperature += value;
      if (this.temperature < 16) {
        this.temperature = 16;
      }

      if (this.temperature > 30) {
        this.temperature = 30;
      }

      this.setStatus('temperature', this.temperature);
    },

    // 定時關閉
    setCloseTimer() {
      // 如果冷氣沒開不執行
      if (!this.isOpen) {
        return;
      }
      clearInterval(this.countdownTimer);
      let nowTime = new Date().getTime();
      this.closeTimer = nowTime + this.closeTime * 1000;
      this.closeTime = 0;
      this.setStatus('closeTimer', this.closeTimer);
      this.setCountdown();
      setTimeout(() => {
        this.closeAirConditioner();
      }, this.closeTimer - nowTime);
    },
    saveAutoOpen() {
      this.setStatus('autoOpenTemperature', this.autoOpenTemperature);
      this.autoOpenTemperature = 0;
    },
    setCountdown() {
      this.countdownTimer = setInterval(() => {
        let nowTime = new Date().getTime();
        let timeDiff = this.status.closeTimer - nowTime;

        if (timeDiff > 0) {
          let hour = timeDiff >= 3600000 ? Math.floor(timeDiff / 3600000) : 0;
          let min =
            timeDiff - 3600000 * hour >= 60000
              ? Math.floor((timeDiff - 3600000 * hour) / 60000)
              : 0;
          let sec =
            timeDiff - 3600000 * hour - 60000 * min >= 1000
              ? Math.floor((timeDiff - 3600000 * hour - 60000 * min) / 1000)
              : 0;

          this.countdown = `${hour < 10 ? '0' + hour : hour}:${
            min < 10 ? '0' + min : min
          }:${sec < 10 ? '0' + sec : sec}`;
        } else {
          this.countdown = 0;
          clearInterval(this.countdownTimer);
        }
      }, 1000);
    },
    getStatus() {
      console.log(useLocalStorage().get('status'));
      if (!useLocalStorage().get('status')) {
        return;
      }
      this.status = JSON.parse(useLocalStorage().get('status'));
      this.isOpen = this.status.isOpen;
      this.temperature = this.status.temperature;
      this.setCountdown();
    },
    setStatus(name, value) {
      this.status[name] = value;
      useLocalStorage().set('status', JSON.stringify(this.status));
    },
  },
});
