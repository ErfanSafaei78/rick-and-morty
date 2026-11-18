import type { CharacterView } from './view.types'

export interface CharacterPageView {
  characters: CharacterView[]
  currentPage: number
  totalPages: number
}

export interface CharacterCardProps extends CharacterView {
  priority?: boolean
}

export interface CharacterSearchProps {
  modelValue: string
}

export interface CharacterGridProps {
  characters: CharacterView[]
}

export interface CharacterSearchEmits {
  'update:modelValue': [value: string]
  submit: []
}

export interface CharacterListErrorEmits {
  retry: []
}

export interface CharacterPaginationProps {
  currentPage: number
  totalPages: number
  name: string
}

export type PaginationItem =
  | { kind: 'page'; page: number }
  | { kind: 'ellipsis'; key: 'leading' | 'trailing' }
