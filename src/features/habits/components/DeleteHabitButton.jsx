import { useNavigate } from 'react-router-dom'
import Button from '../../../components/ui/Button.jsx'
import { useDeleteHabitMutation } from '../hooks/useDeleteHabitMutation.js'

function DeleteHabitButton({ habitId }) {
  const navigate = useNavigate()
  const mutation = useDeleteHabitMutation()

  async function handleDelete() {
    const confirmed = window.confirm(
      '¿Seguro que quieres eliminar este hábito? Esta acción no se puede deshacer.',
    )

    if (!confirmed) {
      return
    }

    try {
      await mutation.mutateAsync(habitId)
      navigate('/', { replace: true })
    } catch {
      // El mensaje visible se obtiene desde mutation.error.
    }
  }

  return (
    <div>
      <Button variant="danger" onClick={handleDelete} disabled={mutation.isPending}>
        {mutation.isPending ? 'Eliminando...' : 'Eliminar'}
      </Button>
      {mutation.isError && (
        <p role="alert" className="mt-2 text-sm text-danger-600">
          {mutation.error.message}
        </p>
      )}
    </div>
  )
}

export default DeleteHabitButton


