import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { OBSTACLES } from '../Shared/obstacleImages';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obstacles: OBSTACLES,            
        };
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Versus Obstacle</NavbarBrand>
                    </div>
                </Navbar>
                <Directory obstacles={this.state.obstacles} onClick={obstaclesId => this.onObstacleSelect(obstaclesId)}/>                
            </div>
        );
    };
}

export default Main;