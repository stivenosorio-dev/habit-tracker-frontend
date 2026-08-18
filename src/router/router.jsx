import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute />, // envuelve las rutas privadas
    children: [
      {
        element: <AppLayout />, // header/nav compartido
        children: [
          { path: '/', element: <HabitsPage /> },
          { path: '/habits/:id', element: <HabitDetailPage /> },
          { path: '/profile', element: <ProfilePage /> },
        ],
      },
    ],
  },
]);