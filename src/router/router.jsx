import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from '../features/auth/ProtectedRoute.jsx'
import LoginPage from '../features/auth/pages/LoginPage.jsx'
import DashboardPage from '../features/habits/pages/DashboardPage.jsx'
import HabitDetailPage from '../features/habits/pages/HabitDetailPage.jsx'
import HabitFormPage from '../features/habits/pages/HabitFormPage.jsx'
import ProfilePage from '../features/profile/pages/ProfilePage.jsx'
import AppLayout from '../layouts/AppLayout.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { index: true, element: <DashboardPage /> },
          { path: 'habits/new', element: <HabitFormPage /> },
          { path: 'habits/:id', element: <HabitDetailPage /> },
          { path: 'habits/:id/edit', element: <HabitFormPage /> },
          { path: 'profile', element: <ProfilePage /> },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])