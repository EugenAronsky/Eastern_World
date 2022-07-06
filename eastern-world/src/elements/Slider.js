import React from 'react';
import "./slider.css"
import SliderCard from "./SliderCard.js"

let time = 7000;

class Slider extends React.Component{

    constructor(){
        super();
        this.state = {
            slider : 1,
            slidMeRight : true,
            sliderState : false,
            clik : false,
        };
    }

    chengeSlide = (slideNumber) =>{
        this.setState({slider : slideNumber});
    };

    timer = () => {
        if(this.state.slidMeRight){
            if(this.state.slider === 3) {
                this.setState({slidMeRight : false})
                this.setState({slider : this.state.slider - 1});
            }
            else{
                this.setState({slider : this.state.slider + 1});
            }
        }
        else if(!this.state.slidMeRight){
            if(this.state.slider === 1){
                this.setState({slidMeRight : true});
                this.setState({slider : this.state.slider + 1});
            } 
            else{
                this.setState({slider : this.state.slider - 1});
            }
        }
    }

    render() {
        if(!this.state.sliderState){
            this.setState({sliderState : true});
            setTimeout( () => this.timer(), time);
        } 

        return(
            <div className={this.state.slider === 1 ? "SliderBox img1" : this.state.slider === 2 ? "SliderBox img2" : "SliderBox img3"}>
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