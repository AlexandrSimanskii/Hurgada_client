import { watchEffect, ref } from 'vue'

export function useFetchCategories<T>(url: string) {
  const categories = ref<T[]>([])
  const error = ref('')

  async function fetchData() {
    try {
      error.value = ''
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Ошибка при получении категорий')
      }

      categories.value = await response.json()
    } catch (err) {
      error.value = 'Ошибка при загрузке данных'
      console.error(err)
    }
  }

  watchEffect(fetchData)

  return { categories }
}
