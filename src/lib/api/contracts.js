export const registerRequestExample = {
  email: "ana@example.com",
  password: "secreto123",
  displayName: "Ana",
};

export const userResponseExample = {
  id: "firebase-user-uid",
  displayName: "Ana",
  email: "ana@example.com",
  xpTotal: 0,
  level: 1,
  createdAt: "2026-08-17T20:00:00Z",
};

export const habitRequestExample = {
  name: 'Leer',
  description: 'Leer 20 páginas',
  category: 'Estudio',
}

export const habitResponseExample = {
  id: 'habit-id',
  name: 'Leer',
  description: 'Leer 20 páginas',
  category: 'Estudio',
  currentStreak: 3,
  longestStreak: 7,
  active: true,
}

export const completeHabitResponseExample = {
  currentStreak: 4,
  xpEarned: 14,
  userXpTotal: 54,
  userLevel: 1,
  leveledUp: false,
}

export const habitLogResponseExample = {
  id: 'log-id',
  habitId: 'habit-id',
  date: '2026-08-17',
  completed: true,
  xpEarned: 11,
}