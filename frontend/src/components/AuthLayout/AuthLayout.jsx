import './AuthLayout.css'

function AuthIllustration() {
  return (
    <aside className="auth-art" aria-hidden>
      <div className="halo" />
      <div className="frame">
        <div className="badge">Automation • Workers</div>
        <svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="60%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="8" stdDeviation="10" floodOpacity="0.2" />
            </filter>
          </defs>
          <rect x="80" y="240" width="440" height="6" rx="3" fill="#e2e8f0" />
          <g filter="url(#softShadow)">
            <circle cx="140" cy="243" r="16" fill="white" stroke="#cbd5e1" />
            <circle cx="300" cy="243" r="16" fill="white" stroke="#cbd5e1" />
            <circle cx="460" cy="243" r="16" fill="white" stroke="#cbd5e1" />
          </g>
          <path d="M156 243h112" stroke="url(#g1)" strokeWidth="3" />
          <path d="M316 243h112" stroke="url(#g1)" strokeWidth="3" />
          <g filter="url(#softShadow)">
            <rect x="110" y="80" width="120" height="64" rx="12" fill="#ffffff" stroke="#cbd5e1" />
            <rect x="370" y="80" width="120" height="64" rx="12" fill="#ffffff" stroke="#cbd5e1" />
            <rect x="240" y="360" width="120" height="64" rx="12" fill="#ffffff" stroke="#cbd5e1" />
          </g>
          <path d="M170 144 L140 227" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 6" />
          <path d="M430 144 L460 227" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 6" />
          <path d="M300 360 L300 260" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 6" />
          <g>
            <circle cx="170" cy="110" r="6" fill="#10b981" />
            <circle cx="430" cy="110" r="6" fill="#f59e0b" />
            <circle cx="300" cy="390" r="6" fill="#6366f1" />
          </g>
          <text x="300" y="320" textAnchor="middle" fill="#334155" fontFamily="Inter, system-ui" fontSize="12">
            Schedule • Retry • Webhooks • Alerts
          </text>
        </svg>
      </div>
    </aside>
  )
}

export default function AuthLayout({ children, variant = 'dark' }) {
  const isDark = variant === 'dark'
  return (
    <div className={`auth-wrapper ${isDark ? 'dark' : ''}`}>
      <section className="auth-panel">
        <div className={`auth-card ${isDark ? 'dark' : ''}`} role="region" aria-label="Authentication">
          {children}
        </div>
      </section>
      {!isDark && <AuthIllustration />}
    </div>
  )
}
