function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-page text-ink-900">
      <header className="border-b border-slate-200 bg-surface">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-lg font-semibold tracking-tight">Habit Tracker</p>
          <span className="text-sm text-ink-600">Tu progreso diario</span>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}

export default AppLayout