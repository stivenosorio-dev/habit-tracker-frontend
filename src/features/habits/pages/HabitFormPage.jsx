import { useForm } from "react-hook-form";
import Button from "../../../components/ui/Button.jsx";
import FormField from "../../../components/ui/FormField.jsx";
import SelectField from "../../../components/ui/SelectField.jsx";

const categories = ["Salud", "Estudio", "Trabajo", "Finanzas", "Personal"];

function HabitFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "",
    },
  });

  function onSubmit(values) {
    console.log("Datos listos para enviar:", values);
  }

  return (
    <main className="mx-auto w-full max-w-2xl">
      <div className="mb-8">
        <p className="text-sm font-medium text-brand-600">Nuevo hábito</p>
        <h1 className="mt-1 text-3xl font-bold text-ink-900">Crear hábito</h1>
        <p className="mt-2 text-ink-600">
          Define una actividad concreta que puedas repetir y medir.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 rounded-2xl bg-surface p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
      >
        <FormField
          label="Nombre"
          name="name"
          placeholder="Ej. Leer 20 páginas"
          register={register}
          rules={{
            required: "El nombre es obligatorio",
            maxLength: {
              value: 100,
              message: "El nombre no puede superar 100 caracteres",
            },
          }}
          error={errors.name}
        />

        <div className="space-y-2">
          <label
            htmlFor="description"
            className="block text-sm font-semibold text-ink-900"
          >
            Descripción
          </label>
          <textarea
            id="description"
            rows="4"
            placeholder="Describe cómo realizarás este hábito"
            className="w-full resize-y rounded-lg border border-slate-300 bg-surface px-3 py-2 text-ink-900 outline-none placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            {...register("description")}
          />
        </div>

        <SelectField
          label="Categoría"
          name="category"
          options={categories}
          register={register}
          error={errors.category}
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Validando..." : "Guardar hábito"}
          </Button>
        </div>
      </form>
    </main>
  );
}

export default HabitFormPage;


