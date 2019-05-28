import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header'
import * as serviceWorker from './serviceWorker';

let spaceForHeaderStyle =
    {
        paddingTop: '5em'
    };

ReactDOM.render(
    <div>
        <Header />
        <div id="ListViewContainer" style={spaceForHeaderStyle}>
            <App />
        </div>
    </div>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
