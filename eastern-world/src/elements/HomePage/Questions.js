import React, {useState} from 'react';
import Button from '../Common Elements/Button.js';
import UpdateManeger from '../Common Elements/UnpackUpdate.js';
import { Transition } from 'react-transition-group';
import "./questions.css"
import "./questions-adaptive.css"

const Questions = ({upDate}) => {
    upDate = Object.values(upDate);
    
    const [slide, setSlide] = useState(false);
    const [coefficient, setCoefficient] = useState(0);
    const QuestionsList = upDate.map((upDate, index) => <div key={index} style={{transform : "translateX(" + index * 100 + "%)" }} >{ UpdateManeger(upDate.question).length > 300 ? UpdateManeger(upDate.question).slice(0, 300 - UpdateManeger(upDate.question).length ) + "...": UpdateManeger(upDate.question) }</div>);
    
    const PhoneQuestionsList = upDate.map((upDate, index) => 
        <div key={index} className='q-full-content'>
            <div className='p-person'>{upDate.person}</div>
            <div className='q-content'>{UpdateManeger(upDate.question)}</div>
            <div className='q-date'>{upDate.date}</div>
            <div className='p-q-line'></div>
        </div>
    );

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", ()=>{
        setScreenWidth(window.innerWidth)
    })

    return(
        <div className='Questions'>
            <div className = "q-bg"></div>
            
            {screenWidth > 540 ? 
                <>
                    <Transition in={slide} timeout={1000}>
                        {state => <div className={`q-persone ${state}`}>{upDate[Math.abs(coefficient)].person}</div>}
                    </Transition>
                    <div className='q-line'></div>

                    <div onClick={()=>{if(coefficient < 0){setCoefficient(coefficient + 1); setSlide(slide => !slide) }}} className='q-box-arrow-left q-box-arrow'></div>
                        <div className='q-box'>
                            <div className='q-slider' style={{transform: "translateX(" + coefficient * 100 + "%)"}}>
                                {QuestionsList}
                            </div>
                        </div>
                    <div onClick={()=>{if( Math.abs(coefficient) < upDate.length - 1   ){setCoefficient(coefficient - 1); setSlide(slide => !slide) }}} className='q-box-arrow-right q-box-arrow'></div>
                </>
            : 
            <div className='q-phone-box'>
                <div className='q-phone-slider'>
                    {PhoneQuestionsList}
                </div>
            </div>
            }


            <div className = "question-button">
                {screenWidth <= 540 ? <Button content = "ПЕРЕЙТИ К РАЗДЕЛУ" width = "46.875vw" height = "9.375vw" link={''}/> : <Button content = "ПЕРЕЙТИ К РАЗДЕЛУ" width = "15.625vw" height = "3.125vw" link={''}/>}
            </div>
        </div>
    );
}

export default Questions;