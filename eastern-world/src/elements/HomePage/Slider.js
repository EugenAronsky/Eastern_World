import React, {useState} from 'react';
import "./slider.css"
import "./slider_adaptive.css"
import SliderCard from "./SliderCard.js"

let time = 7000;
let work = false;

const Slider = ({upDate}) =>{
    upDate = Object.values(upDate);
    const [sliderState, setSliderState] = useState ({slider : 1, slidMeRight : true})
    
    const chengeSlide = (slideNumber) =>{
        setSliderState({slider : slideNumber});
    };

    const timer = () => {
        return new Promise((resolve) => {
            if(sliderState.slidMeRight){
                if(sliderState.slider === 3) {
                    setSliderState({slidMeRight : false})
                    setSliderState({slider : sliderState.slider - 1});
                }
                else{
                    setSliderState({slider : sliderState.slider + 1});
                }
            }
            else if(!sliderState.slidMeRight){
                if(sliderState.slider === 1){
                    setSliderState({slidMeRight : true});
                    setSliderState({slider : sliderState.slider + 1});
                } 
                else{
                    setSliderState({slider : sliderState.slider - 1});
                }
            }
        })
    }

    const up_Date = () => {
        if(!work){
            setInterval( async() => await timer(), time);
            work = !work;
        };
    }

    up_Date();

    return(
        <div className={sliderState.slider === 1 ? "SliderBox img1" : sliderState.slider === 2 ? "SliderBox img2" : "SliderBox img3"}>
            <div className="selection">
                    <div onClick={() => chengeSlide(1)} className ={sliderState.slider === 1 ? "selection-active" : "selection-not-active"}></div>
                    <div onClick={() => chengeSlide(2)} className ={sliderState.slider === 2 ? "selection-active" : "selection-not-active"}></div>
                    <div onClick={() => chengeSlide(3)} className ={sliderState.slider === 3 ? "selection-active" : "selection-not-active"}></div>
            </div>

            <div className ={sliderState.slider === 1 ? "backgroundMask slide1" : sliderState.slider === 2 ? "backgroundMask slide2" : "backgroundMask slide3"}>
                <SliderCard info = {upDate[upDate.length - 1]} />
                <SliderCard info = {upDate[upDate.length - 2]}/>
                <SliderCard info = {upDate[upDate.length - 3]}/>
            </div>
        </div>
    );
}
export default Slider;