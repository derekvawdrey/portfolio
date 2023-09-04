import React, { Component } from 'react';
import "./styles.scss";

class Hero extends Component {
    componentDidMount() {
        this.handleParallax = () => {
            const topDistance = window.pageYOffset;
            const layers = document.querySelectorAll("[data-type='parallax']");
            for (let i = 0; i < layers.length; i++) {
                const layer = layers[i];
                const depth = parseFloat(layer.getAttribute('data-depth'));
                const movement = -(topDistance * depth);
                const translate3d = `translate3d(0, ${movement}px, 0)`;
                layer.style.transform = translate3d;
            }
        };

        window.addEventListener('scroll', this.handleParallax);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleParallax);
    }

    render() {
        return (
            <div id='hero'>
                <div class="colored-layer layer"></div>
                <div class='layer-bg layer' data-depth='0.8' data-type='parallax'></div>
                <div class='layer-1 layer' data-depth='0.20' data-type='parallax'></div>
                <div class='layer-2 layer' data-depth='0.50' data-type='parallax'></div>
                <div class='layer-3 layer' data-depth='0.6' data-type='parallax'></div>
                <div class='layer-overlay layer' data-depth='0.7' data-type='parallax'></div>
            </div>
        );
    }
}

export default Hero;
