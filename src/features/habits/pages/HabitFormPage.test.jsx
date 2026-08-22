import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../../test/renderWithProviders.jsx'
import HabitFormPage from './HabitFormPage.jsx'

describe('HabitFormPage', () => {
  it('muestra el error cuando falta el nombre', async () => {
    const user = userEvent.setup()

    renderWithProviders(
      <MemoryRouter>
        <HabitFormPage />
      </MemoryRouter>,
    )

    await user.click(screen.getByRole('button', { name: /guardar/i }))

    expect(screen.getByText('El nombre es obligatorio')).toBeInTheDocument()
  })
})
