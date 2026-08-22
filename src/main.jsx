import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AppProviders from './app/AppProviders.jsx'
import AuthBootstrap from './features/auth/components/AuthBootstrap.jsx'
import ErrorBoundary from './app/ErrorBoundary.jsx'
import { router } from './router/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <AppProviders>
        <AuthBootstrap>
          <RouterProvider router={router} />
        </AuthBootstrap>
      </AppProviders>
    </ErrorBoundary>
  </StrictMode>,
)


