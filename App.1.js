import React, { Component, PropTypes } from 'react';

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

// Component class... used only when something has a State
class Counter extends Component {
    constructor(props) {
        super(props);
    }
    getInitialState = () => {
        return {
            score: 0
        };
    };

    render(props) {
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score">{this.props.score}</div>
                <button className="counter-action decrement"> + </button>
            </div>
        );
    }
}

Counter.propTypes = {
    score: PropTypes.number.isRequired
};
// Stateless Functional Component
function Player(props) {
    return (
        <div className="players">
            {props.players.map(player => {
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
    );
}

Player.propTypes = {
    name: PropTypes.string.isRequired
};

function Application(props) {
    return (
        <div className="scoreboard">
            <Header title={props.title} />
            <Player name="Jim Hoskins" score={31} />
            <Player name="Andrew Something" score={45} />
            <Player name="Melody hi" score={35} />
        </div>
    );
}
//always have a propType to ensure type safety
Application.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: Proptypes.string.isRequired,
            score: PropTypes.number.isRequired
        })
    ).isRequired
};

// by no means required but a nice thing to have With something that you know needs a value
Application.defaultProps = {
    title: 'Scoreboard'
};

ReactDOM.render(
    <Application players={PLAYERS} />,
    document.querySelector('#container')
);
