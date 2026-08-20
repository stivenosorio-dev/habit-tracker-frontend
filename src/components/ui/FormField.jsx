function FormField({
  label,
  name,
  type = 'text',
  register,
  rules,
  error,
  placeholder,
}) {
  const errorId = `${name}-error`

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-semibold text-ink-900">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="w-full rounded-lg border border-slate-300 bg-surface px-3 py-2 text-ink-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
        {...register(name, rules)}
      />
      {error && (
        <p id={errorId} role="alert" className="text-sm text-danger-600">
          {error.message}
        </p>
      )}
    </div>
  )
}

export default FormField