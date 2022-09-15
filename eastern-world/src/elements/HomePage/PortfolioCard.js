import React, {memo} from "react";
import "./portfolioCard.css";
import "./portfolioCard-adaptive.css";
import UpdateManeger from '../Common Elements/UnpackUpdate.js';

const PortfolioCard = ({data}) => {
    const {title, date, articleImage, text, link} = data;

    return(
        <div className="PortfolioCard">
            <h1>{title}</h1>
            <span>{date}</span>
            <div className="cardImg" style={{backgroundImage: "url(" + articleImage.fields.file.url + ")"}}></div>
            <div className="cardDescription">{UpdateManeger(text)}</div>
            <a href={link} target="_blank"><span>ПРОЧЕСТЬ</span></a>
        </div>
    );
}

export default memo(PortfolioCard);
