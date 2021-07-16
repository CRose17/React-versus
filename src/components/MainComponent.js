import React, { Component } from 'react';
 // import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Pricing from './PricingComponent';
import Schedule from './ScheduleComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { OBSTACLES } from '../Shared/obstacleImages';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obstacles: OBSTACLES          
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    {/* <Route exact path='/directory' render={() => <Directory obstacles={this.state.obstacles} />} /> */}
                    <Route exact path='/contactus' component={Contact} />
                    <Route path='/aboutus' component={About} />
                    <Route path='/schedule' component={Schedule} />
                    <Route path='/pricing' component={Pricing} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />                
            </div>
        );
    };
}

export default Main;