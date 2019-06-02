import React from 'react';
import './App.css';
import ListViewItem from './components/ListViewItem';
import JoJosAdventure from './components/JoJosAdventure';
import LabyrinthTD from './components/LabyrinthTD';

let rightAlign =
    {
        textAlign: 'right',
        float: 'right'
    };

let ContentArray =
[
        {
            name: "JoJosAdventure",
            ComponentToRender: <JoJosAdventure />,
            ContentHeader: "JoJos Marvelous Adventure",
            ContentBlurb:
                <div>
                    <p>As Jojo(cat) save Princess Paige from her trapped state!</p>
                    <p>Click to move - JoJo will walk in a straight line to the clicked spot. Move her around obstacles.</p>
                    <p>Pay attention to the prompts coming from Matt(me) to make it to Paige.</p>
                </div>
        },

        {
            name: "LabyrinthTD",
            ComponentToRender: <LabyrinthTD />,
            ContentHeader: "Labyrinth TD",
            ContentBlurb:
                <div>
                    <p>Protect your sacred tree from the invaders!</p>
                    <p>Choose a level and start, drag the defenders from the bottom on to a square - the defenders will automatically shoot approaching enemies.</p>
                    <p>Zoom the camera with the mousewheel, move the camera by holding left click and dragging</p>
                    <p>Try to create a maze so the enemies must run as long as possible - see the dirt path for enemy path. The path is recalculated when placing a defender.</p>
                </div>
        }
];

class App extends React.Component {
    constructor(props) {
        super(props)
        const startIndex = 0;
        this.state = {
            CurrentIndex: startIndex,
            ComponentToRender: ContentArray[startIndex].ComponentToRender,
            ContentHeader: ContentArray[startIndex].ContentHeader,
            ContentBlurb: ContentArray[startIndex].ContentBlurb
        }
        this.changeContent = this.changeContent.bind(this);
    }
    changeContent(indexOfContent)
    {
        this.setState({
            CurrentIndex: indexOfContent,
            ComponentToRender: ContentArray[indexOfContent].ComponentToRender,
            ContentHeader: ContentArray[indexOfContent].ContentHeader,
            ContentBlurb: ContentArray[indexOfContent].ContentBlurb
        });
    }
    render() {
        return (
            <React.Fragment>
                <ListViewItem heading="Navigation">
                    <div><b>{ContentArray[0].ContentHeader}</b> <span style={rightAlign}>February 2019 - present</span></div>
                    <p>Unity 2D Game built with C#</p>
                    {
                        this.state.CurrentIndex !== 0
                        && <button onClick={() => this.changeContent(0)}>Load Game</button>
                    }
                    <div><br /></div>
                    <div><b>{ContentArray[1].ContentHeader}</b> <span style={rightAlign}>January 2017 - present</span></div>
                    <div>Unity 2D Game built with C#</div>
                    <div>WebGL, also available on android (closed beta)</div>
                    {
                        this.state.CurrentIndex !== 1
                        && <button onClick={() => this.changeContent(1)}>Load Game</button>
                    }
                </ListViewItem>
                <ListViewItem ID="mainContent" heading={this.state.ContentHeader}>
                    {this.state.ContentBlurb}
                    {this.state.ComponentToRender}
                </ListViewItem>
                <ListViewItem heading="About">
                    Single page application built with ReactJS, ES6, HTML5 and CSS3
                </ListViewItem>
            </React.Fragment>
        );
    }
}

export default App;
