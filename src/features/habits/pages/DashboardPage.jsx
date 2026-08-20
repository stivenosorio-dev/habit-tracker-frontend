import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Button from '../../../components/ui/Button.jsx'
import FormField from '../../../components/ui/FormField.jsx'
import SelectField from '../../../components/ui/SelectField.jsx'
import { useCreateHabitMutation } from '../hooks/useCreateHabitMutation.js'

const categories = ['Salud', 'Estudio', 'Trabajo', 'Finanzas', 'Personal']

function HabitFormPage() {
  const navigate = useNavigate()
  const createMutation = useCreateHabitMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { name: '', description: '', category: '' } })

  async function onSubmit(values) {
    await createMutation.mutateAsync(values)
    navigate('/')
  }

  return (
    <main className="mx-auto w-full max-w-2xl">
      <h1 className="mb-8 text-3xl font-bold text-ink-900">Crear hábito</h1>

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
        {createMutation.isError && (
          <p role="alert" className="text-sm text-danger-600">
            {createMutation.error.message}
          </p>
        )}
        <div className="flex justify-end">
          <Button type="submit" disabled={createMutation.isPending}>
            {createMutation.isPending ? 'Guardando...' : 'Guardar hábito'}
          </Button>
        </div>
      </form>
    </main>
  )
}

export default HabitFormPage