import { useForm } from 'react-hook-form'
import Button from '../../../components/ui/Button.jsx'
import FormField from '../../../components/ui/FormField.jsx'

function AuthForm({ mode, onSubmit, isPending, error }) {
  const isRegister = mode === 'register'
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      displayName: '',
      email: '',
      password: '',
    },
  })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
    >
      {isRegister && (
        <FormField
          label="Nombre"
          name="displayName"
          register={register}
          rules={{ required: 'El nombre es obligatorio' }}
          error={errors.displayName}
        />
      )}

      <FormField
        label="Correo electrónico"
        name="email"
        type="email"
        register={register}
        rules={{
          required: 'El correo es obligatorio',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Escribe un correo válido',
          },
        }}
        error={errors.email}
      />

      <FormField
        label="Contraseña"
        name="password"
        type="password"
        register={register}
        rules={{
          required: 'La contraseña es obligatoria',
          minLength: {
            value: 6,
            message: 'Debe tener al menos 6 caracteres',
          },
        }}
        error={errors.password}
      />

      {error && (
        <p role="alert" className="text-sm text-danger-600">
          {error}
        </p>
      )}

      <Button type="submit" disabled={isPending}>
        {isPending ? 'Procesando...' : isRegister ? 'Crear cuenta' : 'Iniciar sesión'}
      </Button>
    </form>
  )
}

export default AuthForm