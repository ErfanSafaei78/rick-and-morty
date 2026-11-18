/** Extract a numeric resource id without treating the supplied URL as a request destination. */
export const idFromUrl = (raw: string): number | null => {
  try {
    const segments = new URL(raw, 'https://rickandmortyapi.com').pathname
      .split('/')
      .filter(Boolean)
    const id = segments.at(-1)

    if (segments.at(-2) !== 'character' || !id || !/^\d+$/.test(id)) return null

    const parsed = Number(id)
    return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : null
  } catch {
    return null
  }
}
