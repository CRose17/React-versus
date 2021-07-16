import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div className="container">
            <div className="hero-content">
                <h1 className="hero-title">Unlock your potential</h1>
                <h2 className="hero-subtitle">At versus, it's you against you</h2>
                <img className="hero" src="/assets/images/obstaclecourse.jpg" alt="Obstacle Course" />
                <Link to='/aboutus'>
                    <Button className="hero-button" color="primary">Learn More!</Button>
                </Link>
            </div>
        </div>        
    );
}

export default Home;