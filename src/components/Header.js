import React from 'react';
import './../css/Home.css'

class Header extends React.Component {
    
    render() {
        
        return (
            <header>
                <div className="headerMenuItem">
                    <span className="icon-menu3"></span>
                </div>
                <div className="headerText">
                    Matt Warneke
                </div>
            </header>
        );
    }
}

export default Header;