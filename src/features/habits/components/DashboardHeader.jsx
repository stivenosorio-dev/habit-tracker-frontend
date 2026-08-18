function DashboardHeader({ user }) {
  return (
    <header className="mb-8 rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-brand-600">Tu progreso</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Hola, {user.displayName}
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm sm:min-w-64">
          <div className="rounded-xl bg-brand-50 p-3">
            <p className="text-ink-600">Nivel</p>
            <p className="mt-1 text-2xl font-bold text-brand-600">{user.level}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-ink-600">XP total</p>
            <p className="mt-1 text-2xl font-bold text-ink-900">{user.xpTotal}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader