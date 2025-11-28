import { useState } from 'react'
import './PasswordField.css'

export default function PasswordField({ id = 'password', label = 'Password', placeholder = 'Enter your password', value, onChange, autoComplete = 'current-password', onForgot, onKeyDown }) {
  const [visible, setVisible] = useState(false)
  return (
    <div className="tf-field tf-password">
      <div className="tf-label-row">
        <label htmlFor={id} className="tf-label">{label}</label>
        {onForgot && (
          <button type="button" className="tf-link tf-forgot" onClick={onForgot}>Forgot Password?</button>
        )}
      </div>
      <div className="tf-input-wrap">
        <input
          id={id}
          className="tf-input"
          type={visible ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          onKeyDown={onKeyDown}
          required
        />
        <button
          type="button"
          aria-label={visible ? 'Hide password' : 'Show password'}
          className="tf-eye"
          onClick={() => setVisible((v) => !v)}
        >
          {visible ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3l18 18" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
              <path d="M10.58 10.58A2 2 0 0012 14a2 2 0 001.42-3.42" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
              <path d="M9.9 5.1A10.48 10.48 0 0121 12c-1.8 3.4-5.3 6-9 6a9.9 9.9 0 01-4-.85" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
              <path d="M6.1 6.1A10.48 10.48 0 003 12c1.8 3.4 5.3 6 9 6 .8 0 1.6-.1 2.3-.28" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" stroke="#94a3b8" strokeWidth="2" />
              <circle cx="12" cy="12" r="3" stroke="#94a3b8" strokeWidth="2" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
