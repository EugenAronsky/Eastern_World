import React from 'react';
import "./slider.css"
import SliderCard from "./SliderCard.js"

class Slider extends React.Component{

    constructor(){
        super();
        this.state = {slider : 1};
    }

    chengeSlide = (slideNumber) =>{
        this.setState({slider : slideNumber});
    };

    render() {
        return(
            <div className="SliderBox">
                <div className="selection">
                        <div onClick={() => this.chengeSlide(1)} className ={this.state.slider === 1 ? "selection-active" : "selection-not-active"}></div>
                        <div onClick={() => this.chengeSlide(2)} className ={this.state.slider === 2 ? "selection-active" : "selection-not-active"}></div>
                        <div onClick={() => this.chengeSlide(3)} className ={this.state.slider === 3 ? "selection-active" : "selection-not-active"}></div>
                </div>

                <div className ={this.state.slider === 1 ? "backgroundMask slide1" : this.state.slider === 2 ? "backgroundMask slide2" : "backgroundMask slide3"}>
                    <SliderCard/>
                    <SliderCard/>
                    <SliderCard/>
                </div>
            </div>
        );
    }
}

export default Slider;