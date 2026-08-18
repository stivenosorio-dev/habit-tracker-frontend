import DashboardHeader from '../components/DashboardHeader.jsx'
import HabitList from '../components/HabitList.jsx'
import HabitSummary from '../components/HabitSummary.jsx'

const demoUser = {
  id: 'user-demo',
  displayName: 'Ana',
  email: 'ana@example.com',
  xpTotal: 40,
  level: 1,
  createdAt: '2026-08-17T20:00:00Z',
}

const demoHabits = [
  {
    id: 'habit-1',
    name: 'Leer',
    description: 'Leer 20 páginas',
    category: 'Estudio',
    currentStreak: 3,
    longestStreak: 7,
    active: true,
  },
  {
    id: 'habit-2',
    name: 'Caminar',
    description: 'Caminar durante 30 minutos',
    category: 'Salud',
    currentStreak: 1,
    longestStreak: 4,
    active: true,
  },
]

function DashboardPage() {
  return (
    <main>
      <DashboardHeader user={demoUser} />
      <HabitSummary habits={demoHabits} />
      <HabitList habits={demoHabits} />
    </main>
  )
}

export default DashboardPage