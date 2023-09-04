import React, { Component } from 'react';
import "./styles.scss";

class Hero extends Component {
    constructor(props) {
        super(props);
    
        this.layerData = [];
        this.handleParallax = this.handleParallax.bind(this);
      }
    
      componentDidMount() {
        this.cacheLayers();
        this.handleParallax(); // Initial call to set the initial position
    
        window.addEventListener('scroll', this.handleParallax);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleParallax);
      }
    
      cacheLayers() {
        this.layerData = Array.from(document.querySelectorAll("[data-type='parallax']")).map(layer => ({
          element: layer,
          depth: parseFloat(layer.getAttribute('data-depth'))
        }));
      }
    
      handleParallax() {
        const topDistance = window.pageYOffset;
    
        // Use requestAnimationFrame for smoother animations
        requestAnimationFrame(() => {
          for (let i = 0; i < this.layerData.length; i++) {
            const { element, depth } = this.layerData[i];
            const movement = -(topDistance * depth);
            const translate3d = `translate3d(0, ${movement}px, 0)`;
            element.style.transform = translate3d;
          }
        });
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
