import React from 'react';
import './../css/Home.css'

class Header extends React.Component {
    
    render() {
        
        return (
            <header>
                <div class="headerMenuItem">
                    <span class="icon-menu3"></span>
                </div>
                <div class="headerText">
                    Matt Warneke
                </div>
            </header>
        );
    }
}

export default Header;