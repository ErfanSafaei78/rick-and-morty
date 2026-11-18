export type PaginationItem =
  | { kind: 'page'; page: number }
  | { kind: 'ellipsis'; key: 'leading' | 'trailing' }
