import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import Button from './Button.jsx'

describe('Button', () => {
  it('ejecuta la acción al hacer clic', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(<Button onClick={onClick}>Completar hoy</Button>)

    await user.click(screen.getByRole('button', { name: 'Completar hoy' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('no permite interacción cuando está deshabilitado', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(
      <Button onClick={onClick} disabled>
        Completar hoy
      </Button>,
    )

    await user.click(screen.getByRole('button', { name: 'Completar hoy' }))

    expect(onClick).not.toHaveBeenCalled()
  })
})