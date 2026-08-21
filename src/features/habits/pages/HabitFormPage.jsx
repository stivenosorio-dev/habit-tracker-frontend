import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from '../../../components/ui/Button.jsx'
import FormField from '../../../components/ui/FormField.jsx'
import SelectField from '../../../components/ui/SelectField.jsx'
import { useHabitsQuery } from '../hooks/useHabitsQuery.js'
import { useCreateHabitMutation } from '../hooks/useCreateHabitMutation.js'
import { useUpdateHabitMutation } from '../hooks/useUpdateHabitMutation.js'

const categories = ['Salud', 'Estudio', 'Trabajo', 'Finanzas', 'Personal']
const emptyValues = { name: '', description: '', category: '' }

function HabitFormPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = Boolean(id)
  const habitsQuery = useHabitsQuery()
  const createMutation = useCreateHabitMutation()
  const updateMutation = useUpdateHabitMutation()
  const mutation = isEditing ? updateMutation : createMutation

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: emptyValues })

  const habit = habitsQuery.data?.find((item) => item.id === id)

  useEffect(() => {
    if (habit) {
      reset({
        name: habit.name,
        description: habit.description || '',
        category: habit.category || '',
      })
    }
  }, [habit, reset])

  if (isEditing && habitsQuery.isLoading) {
    return <p className="py-8 text-center text-ink-600">Cargando hábito...</p>
  }

  if (isEditing && !habit) {
    return (
      <main className="space-y-4">
        <h1 className="text-3xl font-bold text-ink-900">Hábito no encontrado</h1>
        <Link to="/" className="font-semibold text-brand-600">Volver al dashboard</Link>
      </main>
    )
  }

  async function onSubmit(values) {
    if (isEditing) {
      await updateMutation.mutateAsync({ id, payload: values })
    } else {
      await createMutation.mutateAsync(values)
    }

    navigate('/')
  }

  return (
    <main className="mx-auto w-full max-w-2xl">
      <p className="text-sm font-medium text-brand-600">Hábitos</p>
      <h1 className="mt-1 mb-8 text-3xl font-bold text-ink-900">
        {isEditing ? 'Editar hábito' : 'Crear hábito'}
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
      >
        <FormField
          label="Nombre"
          name="name"
          register={register}
          rules={{ required: 'El nombre es obligatorio' }}
          error={errors.name}
        />

        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-semibold text-ink-900">
            Descripción
          </label>
          <textarea
            id="description"
            rows="4"
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
            {...register('description')}
          />
        </div>

        <SelectField
          label="Categoría"
          name="category"
          options={categories}
          register={register}
          error={errors.category}
        />

        {mutation.isError && (
          <p role="alert" className="text-sm text-danger-600">
            {mutation.error.message}
          </p>
        )}

        <div className="flex justify-end">
          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? 'Guardando...' : 'Guardar cambios'}
          </Button>
        </div>
      </form>
    </main>
  )
}

export default HabitFormPage