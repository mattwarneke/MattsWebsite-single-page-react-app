import React from 'react';
import './../css/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

class Header extends React.Component {
    
    render() {
        
        return (
            <header>
                <div className="headerMenuItem">
                    <FontAwesomeIcon icon={faReact} className="icon-header" />
                </div>
                <div className="headerText">
                    Matt Warneke
                </div>
            </header>
        );
    }
}

export default Header;