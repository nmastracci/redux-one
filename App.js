import React, { PropTypes } from 'react';

const PLAYERS = [
    {
        id: 1,
        name: 'Natalie',
        score: 100
    },
    {
        id: 2,
        name: 'Ian',
        score: 100
    },
    {
        id: 3,
        name: 'Elizabeth',
        score: 70
    },
    {
        id: 4,
        name: 'Blake',
        score: 50
    }
];

function Header(props) {
    return (
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

function Counter(props) {
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={funciton(){props.onChange(-1)}}> - </button>
            <div className="counter-score">{props.score}</div>
            <button className="counter-action decrement"> + </button>
        </div>
    );
}

Counter.propTypes = {
    score: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

function Player(props) {
    return (
        <div className="player">
            <div className="player-name">{props.name}>
            <div className="player-score">
                <Counter score={props.score} onChange={props.onScoreChange}/>
                </div>
            </div>
        </div>
    )
}

Player.PropTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    onScoreChange: PropTypes.func.isRequired
}


class Application extends Component {
    getDefaultProps = () => {
        return {
            title: 'Scoreboard'
        };
    };

    getInitialState = () => {
        return {
            players: this.props.initialPlayers
        };
    };

    render() {
        return (
            <div className="scoreboard">
                <Header title={this.props.title} />
                <div className="players">
                    {this.state.players.map(player => {
                        return (
                            <Player
                                key={player.key}
                                name={player.name}
                                score={player.score}
                            />
                        );
                    })}
                    <Counter score={props.score} />
                </div>
            </div>
        );
    }
}

//always have a propType to ensure type safety
Application.propTypes = {
    title: PropTypes.string,
    initialPlayers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: Proptypes.string.isRequired,
            score: PropTypes.number.isRequired
        })
    ).isRequired
};

// by no means required but a nice thing to have With something that you know needs a value
// Application.defaultProps = {
//     title: 'Scoreboard'
// };

ReactDOM.render(
    <Application initialPlayers={PLAYERS} />,
    document.querySelector('#container')
);
