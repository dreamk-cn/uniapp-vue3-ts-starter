<template>
  <div class="screen flex-col gap-20rpx text-blue text-38 font-600 center">
    <div>Hello Uniapp</div>
    <div class="flex gap-20rpx">
      <span>Base on</span>
      <span class="text-green">Vue3+Ts+Vite+Unocss！</span>
    </div>
    <div>
      username: {{ userStore.username }}
    </div>
    <button @click="handleStart">开始！</button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

function handleStart() {
  uni.showToast({
    title: '开始！',
    mask: true
  })
}
</script>
