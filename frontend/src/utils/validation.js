export function validateEmail(email) {
  if (!email || typeof email !== 'string') return 'Email is required.'
  // Simple, practical email check
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  if (!re.test(email.trim())) return 'Please enter a valid email address.'
  return null
}

export function validatePassword(pw, { min = 8 } = {}) {
  if (!pw || typeof pw !== 'string') return 'Password is required.'
  if (pw.length < min) return `Password must be at least ${min} characters.`
  return null
}
