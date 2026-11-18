const POSITIVE_INT = /^[1-9]\d*$/

/** Missing page means the first page; invalid or unsafe values produce the empty state. */
export const parsePage = (raw: unknown): number | null => {
  if (raw === undefined) return 1
  if (typeof raw !== 'string' || !POSITIVE_INT.test(raw)) return null

  const page = Number(raw)
  return Number.isSafeInteger(page) ? page : null
}

/** Query values are trimmed and only a single string is accepted. */
export const parseName = (raw: unknown): string =>
  typeof raw === 'string' ? raw.trim() : ''
