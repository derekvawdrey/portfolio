import React, { Component } from 'react';
import Hero from "../components/Hero/Hero";

class HomeView extends Component {
    render(){
        return (
            <div id="home-view">
                <Hero/>
            </div>
        );
    }
}

export default HomeView;