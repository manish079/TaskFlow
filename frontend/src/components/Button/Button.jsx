import './Button.css'

export default function Button({ type = 'button', variant = 'primary', onClick, children, fullWidth = true }) {
  const className = `tf-btn ${variant} ${fullWidth ? 'full' : ''}`
  return (
    <button type={type} onClick={onClick} className={className}>
      {variant === 'google' && (
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.592 32.617 29.172 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.957 3.043l5.657-5.657C34.727 6.053 29.627 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"/>
          <path fill="#FF3D00" d="M6.306 14.691l6.571 4.817C14.655 16.108 18.961 13 24 13c3.059 0 5.842 1.154 7.957 3.043l5.657-5.657C34.727 6.053 29.627 4 24 4 16.318 4 9.709 8.337 6.306 14.691z"/>
          <path fill="#4CAF50" d="M24 44c5.095 0 9.735-1.955 13.244-5.146l-6.11-5.165C29.172 36 24 36 24 36c-5.13 0-9.557-3.377-11.292-8.012l-6.545 5.046C9.51 39.545 16.227 44 24 44z"/>
          <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.111 3.035-3.396 5.466-6.166 6.818l.005-.003 6.11 5.165C33.92 40.05 40 35 40 24c0-1.341-.138-2.651-.389-3.917z"/>
        </svg>
      )}
      {children}
    </button>
  )
}
