import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Schedule(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Schedule</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Upcoming Events</h2>
                    <hr />                    
                </div>
            </div>
        </div>
    );
}

export default Schedule;