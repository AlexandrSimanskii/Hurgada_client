import { nextTick, ref, watch, type Ref } from 'vue'

export function useFetchCard<T>(id: Ref<string>) {
  const loading = ref(false)
  const error = ref('')
  const card = ref<T>()

  const fetchData = async () => {
    loading.value = true

    try {
      const data = await fetch(id.value)

      if (!data.ok) {
        error.value = 'Ошибка при получении данных'
        loading.value = false
        return
      }

      card.value = await data.json()
    } catch (err) {
      console.log(error.value)
    } finally {
      loading.value = false
    }
  }

  watch(id, fetchData, { immediate: true })

  return { loading, error, card }
}
