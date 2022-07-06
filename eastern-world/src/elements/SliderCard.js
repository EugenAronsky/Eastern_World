import React from "react";
import "./slider-card.css"
import Button from "./Button";

const SliderCard = () =>{
    return (
        <div className="SliderCard">
            <div className="SliderCardMask"></div>
            <h1>По ту сторону <span>континента</span></h1>
            <div className="SmallText">Какие вызовы национальной безопасности несут<br></br>особый риск и из-за чего повышается градус напряжённости в израильском обществе сегодня?</div>
            <div className ="slidButton"><Button content="ПРОЧЕСТЬ" w = "12.500vw" h = "3.125vw"/></div>
            <div className="SliderFooter">
                <div className="Author">Влада Гольдштейн</div>
                <div className="published-date">Публикация датируется 14.05.2022</div>
                <div className="publisher">Источник:<br/><a href="http://www.isrageo.com">http://www.isrageo.com</a></div>
            </div> 
        </div>
    );
}

export default SliderCard;