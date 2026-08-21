import { useProfileMetrics } from '../hooks/useProfileMetrics.js'
import MetricCard from '../components/MetricCard.jsx'
import { useProfileQuery } from '../hooks/useProfileQuery.js'
import { useHabitsQuery } from '../../habits/hooks/useHabitsQuery.js'

function ProfilePage() {
  const profileQuery = useProfileQuery()
  const habitsQuery = useHabitsQuery()
  const habits = habitsQuery.data || []
  const metrics = useProfileMetrics(habits)

  if (profileQuery.isLoading || habitsQuery.isLoading) {
    return <p className="py-8 text-center text-ink-600">Cargando perfil...</p>
  }

  if (profileQuery.isError || habitsQuery.isError) {
    const error = profileQuery.error || habitsQuery.error
    return (
      <main className="rounded-2xl bg-red-50 p-6 text-red-700">
        <h1 className="text-xl font-bold">No se pudo cargar el perfil</h1>
        <p className="mt-2">{error.message}</p>
      </main>
    )
  }

  const profile = profileQuery.data

  return (
    <main className="mx-auto w-full max-w-4xl space-y-8">
      <header>
        <p className="text-sm font-medium text-brand-600">Tu cuenta</p>
        <h1 className="mt-1 text-3xl font-bold text-ink-900">{profile.displayName}</h1>
        <p className="mt-2 text-ink-600">{profile.email}</p>
      </header>

      <section aria-labelledby="progress-title">
        <h2 id="progress-title" className="mb-4 text-xl font-bold text-ink-900">
          Progreso
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <MetricCard label="Nivel" value={profile.level} />
          <MetricCard label="XP total" value={profile.xpTotal} />
        </div>
      </section>

      <section aria-labelledby="habit-metrics-title">
        <h2 id="habit-metrics-title" className="mb-4 text-xl font-bold text-ink-900">
          Hábitos
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <MetricCard
            label="Hábitos activos"
            value={metrics.activeHabitsCount}
          />
          <MetricCard
            label="Mejor racha visible"
            value={`${metrics.longestVisibleStreak} días`}
            detail="Calculada con los hábitos activos disponibles"
          />
        </div>
      </section>
    </main>
  )
}

export default ProfilePage


