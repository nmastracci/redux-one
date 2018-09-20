import * as React from 'react';

const INITIAL_STATE = {
    players: [
        {
            name: 'Natalie',
            score: 100
        },
        {
            name: 'Ian',
            score: 100
        },
        {
            name: 'Elizabeth',
            score: 70
        },
        {
            name: 'Blake',
            score: 50
        }
    ]
};

const Scoreboard = React.createClass({
    getInitialState: function() {
        return INITIAL_STATE;
    },
    onScoreChange: function(index, delta) {
        this.state.players[index].score += delta;
        this.setState(this.state);
    },
    onSubmit: function(e) {
        if (e) e.preventDefault();
        this.props.onAdd(this.state.name);
        this.setstate({ name: '' });
    },
    render: function() {
        return (
            <div className="add-player-form">
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.onNameChange}
                        placeholder="Player Name"
                    />
                    <input type="submit" value="Add PLayer" />
                </form>
            </div>
        );
    }
});

export default Scoreboard;
