import React from 'react';
import './../css/Home.css'

class ListViewItem extends React.Component {
    
    render() {
        
        return (
            <div class="row-900">
                <div class="HeadingRow">
                    <span class="ContainerHeading">
                        {this.props.heading}
                    </span>
                </div>

                <div class="ContentContainer">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ListViewItem;