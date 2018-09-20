function Application() {
    return (
        <div className="application">
            <div className="header">
                <h1>ScoreBoard</h1>
            </div>
            <div className="players" />
            <div className="player-name">Jim Hoskins</div>
            <div className="player-score">
                <div className="counter" />
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> 31 </div>
                <button className="counter-action decrement"> + </button>
            </div>
        </div>
    );
}

ReactDOM.render(<Application />, document.querySelector('#container'));
