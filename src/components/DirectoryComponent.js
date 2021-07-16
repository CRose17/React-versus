import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Directory(props) {

    const directory = props.obstacles.map(obstacle => {
        return (
                <div className="col">
                    <img src={obstacle.image} alt={obstacle.name} />
                </div>
            );
        });
        
        return ( 
            <div className= "container">
                <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
                <div className="row">
                    {directory}
                </div>
            </div>
         );
    }
 
export default Directory;