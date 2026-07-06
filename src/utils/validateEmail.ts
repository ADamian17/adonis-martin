interface ValidateEmailParams {
  value: string
  message?: string
}

export const validateEmail = ({ value, message }: ValidateEmailParams) => {
  const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

  return emailRe.test(value.trim()) ? undefined : message ?? 'Please enter a valid email address.'
}
