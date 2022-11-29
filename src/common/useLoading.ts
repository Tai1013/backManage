import { ref, computed } from 'vue'

export const useLoading = () => {
  const loadTimes = ref(0)

  const isLoading = computed(() => loadTimes.value > 0)

  const load = () => {
    loadTimes.value ++
  }

  const unload = () => {
    loadTimes.value --
  }

  return {
    load,
    unload,
    isLoading
  }
}