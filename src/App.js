import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let PLAYERS = [
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

let nextId = 4;

class Stopwatch extends Component {
    getInitialState() {
        return {
            running: false
        };
    }
    render() {
        let startStop;
        if (this.state.running) {
            startStop = <button>Stop</button>;
        } else {
            startStop = <button>Start</button>;
        }
        return (
            <div className="stopwatch">
                <h2>StopWatch</h2>
                <div className="stopwatch-time">0</div>
                {startStop}
                <button>reset</button>
            </div>
        );
    }
}

class AddPlayerForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.name);
        this.setState({ name: '' });
    }

    getInitialState() {
        return { name: '' };
    }
    onNameChange(e) {
        // e.target.value
        this.setState({ name: e.target.value });
    }
    render() {
        return (
            <div className="addPlayerForm">
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

AddPlayerForm.propTypes = {
    onAdd: PropTypes.func.isRequired
};

const Stats = () => {
    let totalPlayers = props.player.length;
    let totalPoints = props.players.reduce(function(total, player) {
        return total + player.score;
    }, 0);

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players: </td>
                    <td>{totalPlayers}</td>
                </tr>
                <tr>
                    <td>Total Points: </td>
                    <td>{totalPoints}</td>
                </tr>
            </tbody>
        </table>
    );
};

Stats.propTypes = {
    players: PropTypes.array.isRequired
};

function Header(props) {
    return (
        <div className="header">
            <Stats players={props.players} />
            <h1>{props.title}</h1>
            <Stopwatch />
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
};

// Old Syntax
// function Counter(props) {
//     return (
//         <div className="counter">
//             <button className="counter-action decrement" onClick={funciton(){props.onChange(-1)}}> - </button>
//             <div className="counter-score">{props.score}</div>
//             <button className="counter-action decrement"> + </button>
//         </div>
//     );
// }
//NEW SYNTAX
const Counter = ({ onChange, score }) => (
    <div className="counter">
        <button className="counter-action decriment">
            {' '}
            onClick=
            {onChange(-1)}> -{' '}
        </button>
        <div className="counter-score">{score}</div>
        <button className="counter-action decriment"> + </button>
    </div>
);

// Usage
// <Counter onChange={onChangeFunction} score={0} />;

Counter.propTypes = {
    score: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

function Player(props) {
    return (
        <div className="player">
            <div className="player-name">
                <a className="removePLayer" onClick={props.onRemove}>
                    X
                </a>
                {props.name}>
                <div className="player-score">
                    <Counter
                        score={props.score}
                        onChange={props.onScoreChange}
                    />
                </div>
            </div>
        </div>
    );
}

Player.PropTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    onScoreChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
};

class Application extends Component {
    getDefaultProps() {
        return {
            title: 'Scoreboard'
        };
    }

    getInitialState() {
        return {
            players: this.props.initialPlayers
        };
    }

    // delta is what we're changing the score by
    onScoreChange(index, delta) {
        this.setState((this.state.players[index].score += delta));
    }

    onPlayerAdd(name) {
        this.state.players.push({ name: name, score: 0, id: nextId });
        this.setState(this.state);
        nextId += 1;
    }

    OnRemovePLayer(index) {
        // removes player
        this.state.players.splice(index, 1);
        this.setState(this.setState);
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title={this.props.title} players={this.state.players} />
                <div className="players">
                    {this.state.players.map(player => {
                        return (
                            <Player
                                onScoreChange={this.onScoreChange(index, delta)}
                                onRemove={this.onRemovePlayer(index)}
                                key={player.key}
                                name={player.name}
                                score={player.score}
                            />
                        );
                    })}
                    <Counter score={props.score} />
                </div>
                <AddPlayerForm onAdd={this.onPlayerAdd} />
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
            name: PropTypes.string.isRequired,
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
