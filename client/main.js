import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players } from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

// const players = [{
//     _id:'1',
//     name: 'Cindy',
//     score: 99
// }, {
//     _id:'2',
//     name: 'Pete',
//     score: 74
// }, {
//     _id:'3',
//     name: 'Nicholas',
//     score: 26
// }];

const renderPlayers = (playersList) => {
    return playersList.map((player) => {
        return (
            <p key={player._id}>
                {player.name} has {player.score} point(s).
                <button onClick={() => {
                        Players.update({_id: player._id}, {$inc: {score: -1}});
                    }}>-1</button>
                <button onClick={() => {
                        Players.update({_id: player._id}, {$inc: {score: 1}});
                    }}>1</button>
                <button onClick={() => {
                        Players.remove({_id: player._id});
                    }}>X</button>
            </p>
        );
    });
}

const handleSubmit = (e) => {
    e.preventDefault();
    let playerName = e.target.playerName.value;
    if (playerName) {
        e.target.playerName.value = '';
        Players.insert({
            name: playerName,
            score: 0
        });
    }
}

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find().fetch();
        let title = 'Score Keep';
        let jsx = (
            <div>
                <TitleBar/>
                {renderPlayers(players)}
                <AddPlayer/>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="player name"/>
                    <button>Add Player</button>
                </form>
            </div>
        )
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});
