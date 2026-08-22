const variants = {
  info: 'bg-slate-100 text-ink-900',
  error: 'bg-red-50 text-red-700',
  success: 'bg-emerald-50 text-emerald-700',
}

function StatusMessage({ variant = 'info', title, children, action }) {
  return (
    <section
      role={variant === 'error' ? 'alert' : 'status'}
      className={`rounded-2xl p-6 ${variants[variant]}`}
    >
      <h2 className="font-bold">{title}</h2>
      {children && <p className="mt-2 text-sm">{children}</p>}
      {action && <div className="mt-4">{action}</div>}
    </section>
  )
}

export default StatusMessage