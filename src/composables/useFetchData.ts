import { ref, watchEffect, onMounted } from 'vue'
import type { Ref } from 'vue'

export function useFetchData<T>(baseUrl: string, params: Ref<string>) {
  const data = ref<T[]>([])
  const totalCount = ref(0)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchData = async () => {
    loading.value = true
    error.value = null

    try {
      const url = `${baseUrl}?${params.value}`
      const response = await fetch(url)
      if (!response.ok) throw new Error(`Ошибка: ${response.status}`)

      const jsonData = await response.json()
      data.value = jsonData.data
      totalCount.value = jsonData.totalCount
    } catch (err) {
      error.value = (err as Error).message
    } finally {
      loading.value = false
    }
  }

  watchEffect(fetchData)
  return { data, totalCount, loading, error, fetchData }
}
