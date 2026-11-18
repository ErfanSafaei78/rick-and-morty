export interface ApiInfo {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface Paginated<T> {
  info: ApiInfo
  results: T[]
}
