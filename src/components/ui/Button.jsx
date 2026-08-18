const variants = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-500 focus-visible:outline-brand-600',
  secondary:
    'border border-slate-300 bg-surface text-ink-900 hover:bg-slate-50 focus-visible:outline-slate-400',
  danger:
    'bg-danger-600 text-white hover:bg-red-500 focus-visible:outline-danger-600',
}

function Button({
  children,
  type = 'button',
  disabled = false,
  onClick,
  variant = 'primary',
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]}`}
    >
      {children}
    </button>
  )
}

export default Button