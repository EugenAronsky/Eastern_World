import React from "react";
import Button from "./Button.js"
import PortfolioCard from "./PortfolioCard.js"
import "./portfolio.css";

const Portfolio = (upDate) =>{
    let {title, background_image} = upDate.upDate;
    return(
        <div className="Portfolio" style={background_image.fields.file.url === "default" ? {} : {backgroundImage : "url(" + background_image.fields.file.url +")" }}>
            <h1>{title}</h1>
            <div className="portfolio-card-box">
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
            </div>
            <div className = "portfolio-button">
                <Button content = "УЗНАТЬ БОЛЬШЕ" width = "13.542vw" height = "3.125vw" link={''}/>
            </div>
        </div>
    );
}

export default Portfolio;