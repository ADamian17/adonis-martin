/**
 * Merges defined, correctly-typed values from a raw Builder group into a store group,
 * leaving defaults in place for missing or blank fields.
 */
export const hydrateGroup = <T extends Record<string, string | number>>(
  target: T,
  source: unknown,
): void => {
  if (typeof source !== 'object' || source === null) return

  const raw = source as Record<string, unknown>

  for (const key of Object.keys(target) as (keyof T)[]) {
    const value = raw[key as string]

    if (typeof target[key] === 'number') {
      if (typeof value === 'number' && Number.isFinite(value)) {
        target[key] = value as T[keyof T]
      }
    } else if (typeof value === 'string' && value.trim()) {
      target[key] = value as T[keyof T]
    }
  }
}
