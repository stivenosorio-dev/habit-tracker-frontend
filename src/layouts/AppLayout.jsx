function AppLayout({ children }) {
  return (
    <div>
      <header>
        <p>Habit Tracker</p>
      </header>
      <div>{children}</div>
    </div>
  )
}

export default AppLayout