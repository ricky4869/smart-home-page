<script setup>
import { ref } from 'vue';

const memberList = ref([
  {
    avatar: '',
    name: '蘇郁文',
    student_id: 'A070E109',
  },
  {
    avatar: '',
    name: '楊朝淵',
    student_id: 'A070E124',
  },
  {
    avatar: '',
    name: '吳柔旻',
    student_id: 'A070E117',
  },
  {
    avatar: '',
    name: '高譽甄',
    student_id: 'A070E102',
  },
  {
    avatar: '',
    name: '劉德賢',
    student_id: 'A070D103',
  },
]);
</script>

<template>
  <div class="member">
    <div class="member__list">
      <div
        class="member__item fade"
        v-for="member in memberList"
        :key="member.student_id"
      >
        <div class="member__item__avatar"></div>
        <div class="member__item__name">
          {{ member.name }}
        </div>
        <div class="member__item__student_id">
          {{ member.student_id }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.member {
  padding: 60px 0 20px;
  &__list {
    width: 900px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  &__item {
    width: 33.33%;
    padding: 0 20px;
    color: #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    &__avatar {
      width: 200px;
      height: 200px;
      background-size: auto 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url('/avatar.svg');
      margin-bottom: 20px;
    }
    &__name {
      margin-bottom: 10px;
      font-size: 32px;
      font-weight: bold;
    }
    &__student_id {
      font-size: 20px;
    }
  }
  @media (max-width: $breakpoint-sm) {
    &__list {
      width: 600px;
    }
    &__item {
      width: 50%;
      margin-bottom: 40px;
    }
  }
  @media (max-width: $breakpoint-xs) {
    &__list {
      width: 300px;
    }
    &__item {
      width: 100%;
    }
  }
}
</style>
