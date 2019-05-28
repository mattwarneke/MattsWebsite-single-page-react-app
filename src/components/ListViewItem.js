import React from 'react';
import './../css/Home.css'

class ListViewItem extends React.Component {
    
    render() {
        
        return (
            <div className="row-900">
                <div className="HeadingRow">
                    <span className="ContainerHeading">
                        {this.props.heading}
                    </span>
                </div>

                <div className="ContentContainer">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ListViewItem;