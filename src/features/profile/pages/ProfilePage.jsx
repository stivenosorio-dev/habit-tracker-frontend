import { useAuthStore } from '../../auth/store/authStore.js'

function ProfilePage() {
  const profile = useAuthStore((state) => state.profile)

  if (!profile) {
    return <p className="text-ink-600">No se encontró el perfil.</p>
  }

  return (
    <main className="mx-auto w-full max-w-2xl">
      <p className="text-sm font-medium text-brand-600">Tu cuenta</p>
      <h1 className="mt-1 text-3xl font-bold text-ink-900">{profile.displayName}</h1>
      <p className="mt-2 text-ink-600">{profile.email}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-surface p-5 ring-1 ring-slate-200">
          <p className="text-sm text-ink-600">Nivel</p>
          <p className="mt-1 text-3xl font-bold text-brand-600">{profile.level}</p>
        </div>
        <div className="rounded-2xl bg-surface p-5 ring-1 ring-slate-200">
          <p className="text-sm text-ink-600">XP total</p>
          <p className="mt-1 text-3xl font-bold text-ink-900">{profile.xpTotal}</p>
        </div>
      </div>
    </main>
  )
}

export default ProfilePage