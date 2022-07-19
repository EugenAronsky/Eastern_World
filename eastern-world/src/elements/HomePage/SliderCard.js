import React, {useState} from "react";
import "./slider-card.css"
import Button from "../Common Elements/Button.js";
import"./slider-card-adaptive.css"

const SliderCard = () =>{
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", ()=>{
        setScreenWidth(window.innerWidth)
    })
    return (
        <div className="SliderCard">
            <div className="SliderCardMask"></div>
            <h1>По ту сторону <span>континента</span></h1>
            <div className="SmallText">Какие вызовы национальной безопасности несут особый риск и из-за чего повышается градус напряжённости в израильском <br></br>обществе сегодня?</div>
                {screenWidth <= 540 ? <div className ="slidButton"><Button content="ПРОЧЕСТЬ" width = "37.500vw" height = "9.375vw"/></div> : <div className ="slidButton"><Button content="ПРОЧЕСТЬ" width = "12.500vw" height = "3.125vw"/></div>}
            <div className="SliderFooter">
                <div className="Author">Влада Гольдштейн</div>
                <div className="published-date">Публикация датируется 14.05.2022</div>
                <div className="publisher">Источник:<br/><a href="http://www.isrageo.com">http://www.isrageo.com</a></div>
            </div> 
        </div>
    );
}

export default SliderCard;