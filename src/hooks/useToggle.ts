import { ref } from "vue"

export function useToggle(initValue = false) {
  const value = ref(initValue)

  function setValue(val: boolean) {
    value.value = val
  }
  function toggle() {
    value.value = !value.value
  }

  return {
    value,
    toggle,
    setValue
  }
}