function Button({ children, type = 'button', disabled = false, onClick, variant = 'primary' }) {
  const variantClass = variant === 'danger'
    ? 'bg-danger-600 text-white hover:bg-red-500 focus-visible:outline-danger-600'
    : 'bg-brand-600 text-white hover:bg-brand-500 focus-visible:outline-brand-600'

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${variantClass}`}
    >
      {children}
    </button>
  )
}

export default Button