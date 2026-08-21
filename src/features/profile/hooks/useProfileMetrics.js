import { useMemo } from 'react'

export function useProfileMetrics(habits) {
  return useMemo(() => {
    const activeHabits = habits.filter((habit) => habit.active)
    const longestVisibleStreak = activeHabits.reduce(
      (longest, habit) => Math.max(longest, habit.longestStreak),
      0,
    )

    return {
      activeHabitsCount: activeHabits.length,
      longestVisibleStreak,
    }
  }, [habits])
}