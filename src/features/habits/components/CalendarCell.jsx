function CalendarCell({ day, log }) {
  const completed = log?.completed === true

  return (
    <div
      title={completed ? `${day} — completado` : `${day} — sin registro`}
      aria-label={completed ? `${day}, completado` : `${day}, sin registro`}
      className={`flex aspect-square items-center justify-center rounded-md text-xs font-semibold ${
        completed
          ? 'bg-brand-600 text-white'
          : 'bg-slate-100 text-slate-500'
      }`}
    >
      {day}
    </div>
  )
}

export default CalendarCell