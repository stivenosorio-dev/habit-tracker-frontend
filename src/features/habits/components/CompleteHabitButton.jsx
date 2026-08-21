import { useState } from 'react'
import Button from '../../../components/ui/Button.jsx'
import { useCompleteHabitMutation } from '../hooks/useCompleteHabitMutation.js'

function CompleteHabitButton({ habitId }) {
  const mutation = useCompleteHabitMutation()
  const [feedback, setFeedback] = useState(null)

  async function handleComplete() {
    setFeedback(null)

    try {
      const result = await mutation.mutateAsync(habitId)
      setFeedback(result)
    } catch {
      // El mensaje visible se obtiene de mutation.error.
    }
  }

  return (
    <div className="space-y-2">
      <Button
        onClick={handleComplete}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Registrando...' : 'Completar hoy'}
      </Button>

      {mutation.isError && (
        <p role="alert" className="text-sm text-danger-600">
          {mutation.error.message}
        </p>
      )}

      {feedback && (
        <p role="status" className="text-sm text-emerald-700">
          +{feedback.xpEarned} XP. Racha actual: {feedback.currentStreak}.
          {feedback.leveledUp && ' ¡Subiste de nivel!'}
        </p>
      )}
    </div>
  )
}

export default CompleteHabitButton