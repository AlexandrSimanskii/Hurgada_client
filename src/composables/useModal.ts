import { ref } from 'vue'
import { useSidebarStore } from '@/stores/sidebarStore'

export function useModal() {
  const store = useSidebarStore()

  function showModal() {
    store.toggle()

    document.body.style.overflow = 'hidden'
  }

  function hideModal() {
    store.toggle()
   
    document.body.style.overflow = ''
  }

  return {
    showModal,
    hideModal
  }
}
