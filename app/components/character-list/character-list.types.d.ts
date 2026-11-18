import type { CharacterView } from '~/types/view.types'

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
