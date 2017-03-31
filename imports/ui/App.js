import React from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends React.Component {
    render() {
        let { title, players} = this.props;
        return (
            <div>
                <TitleBar title={title} subtitle={'by Rye Crowen'}/>
                <PlayerList players={players}/>
                <AddPlayer/>
            </div>
        );
    }
}

App.propTypes = {
    title: React.PropTypes.string.isRequired,
    players: React.PropTypes.array.isRequired
}