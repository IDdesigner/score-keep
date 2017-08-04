import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players, calculatePlayerPosition } from './../imports/api/players';

import App from './../imports/ui/App';

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

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find({}, {sort: {score: -1, name: 1}}).fetch();
        let positionedPlayers = calculatePlayerPosition(players);
        let title = 'Score Keep';
        ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));
    });
});
