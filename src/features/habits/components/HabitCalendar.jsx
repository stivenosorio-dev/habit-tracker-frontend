import { useMemo } from 'react'
import CalendarCell from './CalendarCell.jsx'
import { getMonthDays } from '../utils/calendar.js'
import { logsByDate } from '../utils/logs.js'

function HabitCalendar({ logs, year, monthIndex }) {
  const days = useMemo(
    () => getMonthDays(year, monthIndex),
    [year, monthIndex],
  )
  const logsMap = useMemo(() => logsByDate(logs), [logs])

  return (
    <section aria-labelledby="calendar-title" className="rounded-2xl bg-surface p-6 ring-1 ring-slate-200">
      <div className="mb-4">
        <h2 id="calendar-title" className="text-xl font-bold text-ink-900">
          Historial mensual
        </h2>
        <p className="mt-1 text-sm text-ink-600">
          Las celdas moradas representan cumplimientos registrados.
        </p>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map(({ day, isoDate }) => (
          <CalendarCell key={isoDate} day={day} log={logsMap.get(isoDate)} />
        ))}
      </div>
    </section>
  )
}

export default HabitCalendar