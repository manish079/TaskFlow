import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { validateEmail, validatePassword } from '../utils/validation.js'
import AuthLayout from '../components/AuthLayout/AuthLayout.jsx'
import Logo from '../components/Logo/Logo.jsx'
import TextField from '../components/TextField/TextField.jsx'
import PasswordField from '../components/PasswordField/PasswordField.jsx'
import Button from '../components/Button/Button.jsx'
import './auth.css'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const emailErr = validateEmail(email)
    if (emailErr) {
      toast.error(emailErr)
      return
    }
    const pwErr = validatePassword(password)
    if (pwErr) {
      toast.error(pwErr)
      return
    }
    // TODO: Wire to API
    toast.success('Login successful')
  }

  const onGoogle = () => {
    // TODO: Wire to backend OAuth endpoint
    window.location.href = '/auth/google'
  }

  return (
    <AuthLayout variant="dark">
      <Logo />
      <header className="auth-header">
        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-subtitle">Sign in to manage your automated jobs.</p>
      </header>

      <form className="tf-form" onSubmit={onSubmit} noValidate>
        <TextField
          id="email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); e.currentTarget.form?.requestSubmit() } }}
        />
        <PasswordField
          id="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          onForgot={() => navigate('/forgot-password')}
          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); e.currentTarget.form?.requestSubmit() } }}
        />
        <Button type="submit">Login</Button>
      </form>

      <div className="tf-form">
        <Link to="/signup" className="tf-btn secondary full">Register</Link>
      </div>

      <div className="tf-form">
        <div className="tf-sep">Or continue with</div>
        <Button variant="google" onClick={onGoogle}>Continue with Google</Button>
      </div>

      <p className="tf-footnote">By continuing, you agree to TaskFlow's <a className="tf-link" href="#">Terms of Service</a> and <a className="tf-link" href="#">Privacy Policy</a>.</p>
    </AuthLayout>
  )
}
