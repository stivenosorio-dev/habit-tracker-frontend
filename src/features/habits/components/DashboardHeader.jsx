function DashboardHeader({ user }) {
    return (
        <header>
            <p>Hola, {user.displayName}</p>
            <h1>Mis habitos</h1>
            <p>Nivel {user.level}</p>
            <p>XP total: {user.xpTotal}</p>
        </header>
    );
}

export default DashboardHeader;