import { useState } from 'react'
import AuthLayout from '../components/AuthLayout/AuthLayout.jsx'
import Logo from '../components/Logo/Logo.jsx'
import TextField from '../components/TextField/TextField.jsx'
import Button from '../components/Button/Button.jsx'
import { toast } from 'react-toastify'
import { validateEmail } from '../utils/validation.js'
import './auth.css'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const emailErr = validateEmail(email)
    if (emailErr) { toast.error(emailErr); return }
    // TODO: call backend to send reset link
    toast.success('If that email exists, a reset link has been sent.')
  }

  return (
    <AuthLayout variant="dark">
      <Logo />
      <header className="auth-header">
        <h2 className="auth-title">Reset your password</h2>
        <p className="auth-subtitle">Enter your email and we'll send you a reset link.</p>
      </header>

      <form className="tf-form" onSubmit={onSubmit} noValidate>
        <TextField
          id="fp-email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); e.currentTarget.form?.requestSubmit() } }}
        />
        <Button type="submit">Send reset link</Button>
      </form>

      <div className="tf-form">
        <a className="tf-btn secondary full" href="/login">Back to Login</a>
      </div>
    </AuthLayout>
  )
}
