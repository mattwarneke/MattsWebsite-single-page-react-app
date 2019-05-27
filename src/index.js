import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header'
import * as serviceWorker from './serviceWorker';

let spacerDivStyle =
    {
        marginTop: '4em'
    };

ReactDOM.render(
    <body>
        <Header />
        <div ID="spacerDiv" style={spacerDivStyle} />
        <App />
    </body>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
