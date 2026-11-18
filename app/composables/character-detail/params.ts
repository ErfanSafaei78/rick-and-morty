/** Accept only positive decimal ids that JavaScript can represent exactly. */
export const parseId = (raw: unknown): number | null => {
  if (typeof raw !== 'string' || !/^\d+$/.test(raw)) return null
  const id = Number(raw)
  return Number.isSafeInteger(id) && id > 0 ? id : null
}
