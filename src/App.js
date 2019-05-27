import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListViewItem from './components/ListViewItem';
import JoJosAdventure from './components/JoJosAdventure';
import LabyrinthTD from './components/LabyrinthTD';
import Header from './components/Header'
import * as serviceWorker from './serviceWorker';


let rightAlign =
    {
        textAlign: 'right',
        alignSelf: 'stretch',
        float: 'right'
    };

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ComponentToRender: < JoJosAdventure />
        }
        this.changeContent = this.changeContent.bind(this);
    }
    changeContent()
    {
        console.log("test");
        this.setState({
            ComponentToRender: <LabyrinthTD />
        });
    }
    render() {
        const componentRendered = this.state.ComponentToRender;
        return (
            <React.Fragment>
                <ListViewItem heading="Navigation, Click to navigate">
                    <div><b>JoJos Marvelous Adventure</b> <span style={rightAlign}>February 2019 - present</span></div>
                    <p>Unity 2D Game built with C#</p>
                    <p>Load Game</p>
                    <div><br /></div>
                    <div><b>Labyrinth TD</b> <span style={rightAlign}>January 2017 - present</span></div>
                    <div>Unity 2D Game built with C#</div>
                    <div>WebGL, also available on android (closed beta)</div>
                    <button onClick={this.changeContent}>Load Game</button>
                </ListViewItem>
                <ListViewItem ID="mainContent" heading="Content">
                    {componentRendered}
                </ListViewItem>
                <ListViewItem heading="About">
                    Website built with react.js
                </ListViewItem>
            </React.Fragment>
        );
    }
}

export default App;
