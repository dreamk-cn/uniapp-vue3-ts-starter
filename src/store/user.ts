export const useUserStore = defineStore('userStore', () => {
  const username = ref('dreamk')

  return {
    username
  }
})