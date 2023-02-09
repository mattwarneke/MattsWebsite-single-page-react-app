import React from 'react';
import './App.css';
import ListViewItem from './components/ListViewItem';
import JoJosAdventure from './components/JoJosAdventure';
import LabyrinthTD from './components/LabyrinthTD';
import ScoreBoard from './components/Scoreboard';
import ScoreboardGraphql from './components/ScoreboardGraphql';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faTree, faCube } from '@fortawesome/free-solid-svg-icons';
import { faReact, faHtml5, faCss3Alt, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://localhost:8085/graphql'
    }),
    connectToDevTools: true,
    fetchOptions: {
        mode: 'no-cors',
    },
});

let rightAlign =
    {
        textAlign: 'right',
        float: 'right'
    };

let ContentArray =
[
        {
            name: "JoJosAdventure",
            ContentHeader: "JoJos Marvelous Adventure",
            ComponentToRender: <JoJosAdventure ContentBlurb=
            {
                <div>
                    <p>As Jojo(cat) save Princess Paige from her trapped state!</p>
                    <p>Click to move - JoJo will walk in a straight line to the clicked spot. Move her around obstacles.</p>
                    <p>Pay attention to the prompts coming from Matt(me) to make it to Paige.</p>
                </div>
            } />
        },

        {
            name: "LabyrinthTD",
            ContentHeader: "Labyrinth Tower Defense",
            ComponentToRender: <LabyrinthTD ContentBlurb=
            {
                <div>
                    <p>Protect your sacred tree from the invaders!</p>
                    <p>Drag the defenders from the bottom on to a square - the defenders will automatically shoot approaching enemies.</p>
                    <p>Zoom the camera with the mousewheel, move the camera by holding left click and dragging</p>
                    <p>Try to create a maze so the enemies must run as long as possible - see the dirt path for enemy path.</p>
                </div>
            }/>
        }
];

class App extends React.Component {
    constructor(props) {
        super(props)
        const startIndex = 1;
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
            <ApolloProvider client={apolloClient}>

                <ListViewItem heading="Navigation">
                    <div>
                        <b>{ContentArray[0].ContentHeader}</b>
                        <span style={rightAlign}>
                        {
                            this.state.CurrentIndex !== 0 &&
                            <button onClick={() => this.changeContent(0)}>
                                <FontAwesomeIcon icon={faCat} /> Play Game
                            </button>
                        }
                        </span>
                    </div>
                    <p>Unity 2D Game built with C#</p>
                    
                    <div><br /></div>
                    <div>
                        <b>{ContentArray[1].ContentHeader}</b>
                        <span style={rightAlign}>
                        {
                            this.state.CurrentIndex !== 1 &&
                            <button onClick={() => this.changeContent(1)}>
                                <FontAwesomeIcon icon={faTree} /> Play Game
                            </button>
                        }
                        </span>
                    </div>
                    <div>Unity 2D Game built with C#</div>
                    <div>WebGL, also available on android (closed beta)</div>
                </ListViewItem>

                <ListViewItem ID="mainContent" heading={this.state.ContentHeader}>
                    {this.state.ComponentToRender}
                </ListViewItem>

                <ListViewItem ID="scoreboard" heading="Games Scoreboard">
                    {/*<ScoreBoard /> <ScoreboardGraphql /> */}
                    
                </ListViewItem>

                <ListViewItem heading="About">
                    <div className="flex-container">
                        <span style={{ textAlign: "center" }}>
                            <div>
                                <FontAwesomeIcon icon={faReact} className="big-icon" />
                            </div>
                            ReactJS
                        </span>
                        <span style={{ textAlign: "center" }}>
                            <div>
                                <FontAwesomeIcon icon={faHtml5} className="big-icon" />
                            </div>
                            HTML5
                        </span>
                        <span style={{ textAlign: "center" }}>
                            <div>
                                <FontAwesomeIcon icon={faCss3Alt} className="big-icon" />
                            </div>
                            CSS3
                        </span>
                        <span style={{ textAlign: "center" }}>
                            <div>
                                <FontAwesomeIcon icon={faNodeJs} className="big-icon" />
                            </div>
                            JavaScript ES6
                        </span>
                        <span style={{ textAlign: "center" }}>
                            <div>
                                <FontAwesomeIcon icon={faCube} className="big-icon" />
                            </div>
                            Unity
                        </span>
                    </div>
                </ListViewItem>

            </ApolloProvider>
        );
    }
}

export default App;
