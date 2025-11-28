import './Logo.css'

export default function Logo() {
  return (
    <div className="tf-logo" aria-label="TaskFlow">
      <div className="mark" aria-hidden>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L9 10h4l-1 12 7-14h-5l2-6z" fill="currentColor" opacity="0.95" />
        </svg>
      </div>
      <span className="word">TaskFlow</span>
    </div>
  )
}
