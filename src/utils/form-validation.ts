interface ValidationParams {
  value: string
  message?: string
}

/**
 * Validates that a value is a well-formed email address.
 *
 * @param params - The validation parameters.
 * @param params.value - The field value to validate; surrounding whitespace is ignored.
 * @param params.message - Optional custom error message to return when validation fails.
 * @returns `undefined` when the value is a valid email, otherwise the error message.
 */
export const validateEmail = ({ value, message }: ValidationParams) => {
  const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

  return emailRe.test(value.trim()) ? undefined : message ?? 'Please enter a valid email address.'
}

/**
 * Validates that a value is present (non-empty once trimmed).
 *
 * @param params - The validation parameters.
 * @param params.value - The field value to validate; surrounding whitespace is ignored.
 * @param params.message - Optional custom error message to return when validation fails.
 * @returns `undefined` when the value is non-empty, otherwise the error message.
 */
export const required = ({ value, message }: ValidationParams) => value.trim() ? undefined : message ?? 'This field is required.'
