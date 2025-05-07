import { defineStore } from "pinia";
import { ref } from "vue";

export const userStore = defineStore('userStore', () => {
  const username = ref('dreamk')

  return {
    username
  }
})