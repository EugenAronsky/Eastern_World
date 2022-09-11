import React, {useState} from "react";
import "./slider-card.css"
import Button from "../Common Elements/Button.js";
import"./slider-card-adaptive.css"
import UnpackDescription from "../Common Elements/UnpackUpdate";
const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

const SliderCard = ({info}) =>{
    const {title, date, link, intro} = info;
    const newDate = date.split(" ").splice(0, 3);
    newDate[1] = `0${months.findIndex((element)=>element === newDate[1]) + 1}`;
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", ()=>{
        setScreenWidth(window.innerWidth)
    })
    return (
        <div className="SliderCard">
            <div className="SliderCardMask"></div>
            <div className="SlideTitle">
                <h1>{title}</h1>
            </div>
            <div className="SmallText">{UnpackDescription(intro)}</div>
                {screenWidth <= 540 ? <div className ="slidButton"><Button content="ПРОЧЕСТЬ" width = "37.500vw" height = "9.375vw"/></div> : <div className ="slidButton"><Button content="ПРОЧЕСТЬ" width = "12.500vw" height = "3.125vw"/></div>}
            <div className="SliderFooter">
                <div className="Author">Влада Гольдштейн</div>
                <div className="published-date">Публикация датируется {newDate.join('.')}</div>
                <div className="publisher">Источник:<br/><a href={link}>{link}</a></div>
            </div> 
        </div>
    );
}

export default SliderCard;