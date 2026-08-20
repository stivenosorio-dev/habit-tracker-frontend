function SelectField({ label, name, register, options, error }) {
  const errorId = `${name}-error`

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-semibold text-ink-900">
        {label}
      </label>

      <select
        id={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="w-full rounded-lg border border-slate-300 bg-surface px-3 py-2 text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
        {...register(name)}
      >
        <option value="">Selecciona una categoría</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && (
        <p id={errorId} role="alert" className="text-sm text-danger-600">
          {error.message}
        </p>
      )}
    </div>
  )
}

export default SelectField