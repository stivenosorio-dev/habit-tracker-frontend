import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import HabitSummary from './HabitSummary.jsx'

describe('HabitSummary', () => {
  it('muestra cantidad activa y mejor racha visible', () => {
    const habits = [
      {
        id: 'habit-1',
        name: 'Leer',
        currentStreak: 3,
        longestStreak: 7,
        active: true,
      },
      {
        id: 'habit-2',
        name: 'Caminar',
        currentStreak: 0,
        longestStreak: 4,
        active: false,
      },
    ]

    render(<HabitSummary habits={habits} />)

    expect(screen.getByText('Hábitos activos')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('7 días')).toBeInTheDocument()
  })
})