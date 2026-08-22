import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import EmptyHabitsState from './EmptyHabitsState.jsx'

describe('EmptyHabitsState', () => {
  it('ofrece crear el primer hábito', () => {
    render(
      <MemoryRouter>
        <EmptyHabitsState />
      </MemoryRouter>,
    )

    expect(screen.getByText('Todavía no tienes hábitos')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Crear primer hábito' })).toHaveAttribute(
      'href',
      '/habits/new',
    )
  })
})