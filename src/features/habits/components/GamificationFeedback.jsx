function GamificationFeedback({ result }) {
  if (!result) {
    return null
  }

  return (
    <div role="status" className="rounded-xl bg-brand-50 p-4 text-brand-600">
      <p className="font-semibold">+{result.xpEarned} XP</p>
      <p className="mt-1 text-sm">
        Racha actual: {result.currentStreak} días. XP total: {result.userXpTotal}.
      </p>
      {result.leveledUp && (
        <p className="mt-2 font-bold">¡Subiste al nivel {result.userLevel}!</p>
      )}
    </div>
  )
}

export default GamificationFeedback


