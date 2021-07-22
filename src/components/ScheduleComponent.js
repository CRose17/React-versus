import React, { Component } from 'react';
import { Scheduler } from 'devextreme-react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Schedule extends Component {    
    render() {
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
                        <Scheduler />                                                        
                    </div>
                </div>
            </div>
        );
    }    
}

export default Schedule;