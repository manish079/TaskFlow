import './TextField.css'

export default function TextField({ id, label, type = 'text', placeholder, value, onChange, autoComplete, required = true, onKeyDown }) {
  return (
    <div className="tf-field">
      {label && <label htmlFor={id} className="tf-label">{label}</label>}
      <input
        id={id}
        className="tf-input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        required={required}
        onKeyDown={onKeyDown}
      />
    </div>
  )
}
