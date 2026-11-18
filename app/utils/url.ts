/** Extract a numeric id without treating the supplied URL as a request destination. */
export const idFromResourceUrl = (
  raw: string,
  resource: string,
): number | null => {
  try {
    const segments = new URL(raw, 'https://rickandmortyapi.com').pathname
      .split('/')
      .filter(Boolean)
    const id = segments.at(-1)

    if (segments.at(-2) !== resource || !id || !/^\d+$/.test(id)) return null

    const parsed = Number(id)
    return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : null
  } catch {
    return null
  }
}

export const idFromUrl = (raw: string): number | null =>
  idFromResourceUrl(raw, 'character')
