import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './router/router.jsx'
import { AuthBootstrap } from './features/auth/components/AuthBootstrap.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthBootstrap>
      <RouterProvider router={router} />
    </AuthBootstrap>
  </StrictMode>,
)


