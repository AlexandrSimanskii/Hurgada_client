import router from '@/router'

export function useCardClickHandler(e: MouseEvent, id: string, path: string) {
  const target = e.target as HTMLElement
  if (target.dataset.icon) return

  router.push(`${path}/${id}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })

  
}
