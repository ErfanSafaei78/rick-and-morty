import type { Ref } from 'vue'
import type { PaginationItem } from './character-list.types'

export const getPaginationItems = (
  currentPage: number,
  totalPages: number,
): PaginationItem[] => {
  if (totalPages <= 1) return []

  const start = Math.max(1, Math.min(currentPage - 2, totalPages - 4))
  const end = Math.min(totalPages, start + 4)
  const items: PaginationItem[] = []

  if (start > 1) {
    items.push({ kind: 'page', page: 1 })
    if (start > 2) items.push({ kind: 'ellipsis', key: 'leading' })
  }

  for (let page = start; page <= end; page += 1) {
    items.push({ kind: 'page', page })
  }

  if (end < totalPages) {
    if (end < totalPages - 1) items.push({ kind: 'ellipsis', key: 'trailing' })
    items.push({ kind: 'page', page: totalPages })
  }

  return items
}

export const usePagination = (
  currentPage: Ref<number>,
  totalPages: Ref<number>,
) => computed(() => getPaginationItems(currentPage.value, totalPages.value))
