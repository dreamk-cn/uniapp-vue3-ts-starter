<template>
  <div class="screen flex-col gap-20rpx text-blue text-38 font-600 center">
    <div>Hello Uniapp</div>
    <div class="flex gap-20rpx">
      <span>Base on</span>
      <span class="text-green">Vue3+Ts+Vite+Unocss！</span>
    </div>
    <button @click="handleStart">开始！</button>
  </div>
</template>

<script setup lang="ts">

function handleStart() {
  uni.showToast({
    title: '开始！'
  })
}
</script>
