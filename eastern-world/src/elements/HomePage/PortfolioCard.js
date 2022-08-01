import React from "react";
import "./portfolioCard.css";
import "./portfolioCard-adaptive.css";
import UpdateManeger from '../Common Elements/UnpackUpdate.js';

const PortfolioCard = ({data}) => {
    const {title, date, articleImage, text} = data;
    return(
        <div className="PortfolioCard">
            <h1>{title}</h1>
            <span>{date}</span>
            <div className="cardImg" style={{backgroundImage: "url(" + articleImage.fields.file.url + ")"}}></div>
            <div className="cardDescription">{UpdateManeger(text)}</div>
            <a href=""><span>ПРОЧЕСТЬ</span></a>
        </div>
    );
}

export default PortfolioCard;
