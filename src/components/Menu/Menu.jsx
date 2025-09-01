function Menu({ startGame, openSettings }) {
    return (
        <main>
            <h1>Meny</h1>
            <button onClick={startGame}>Starta spel</button>
            <button onClick={openSettings}>Inställningar</button>
        </main>
    );
}

export default Menu;