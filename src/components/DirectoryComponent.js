import React, { Component } from 'react';

class Directory extends Component {

    render() {
        const directory = this.props.obstacles.map(obstacle => {
            return (
                <div className="col">
                    <img src={obstacle.image} alt={obstacle.name} />
                </div>
            );
        });
        
        return ( 
            <div className= "container">
                <div className="row">
                    {directory}
                </div>
            </div>
         );
    }
}
 
export default Directory;