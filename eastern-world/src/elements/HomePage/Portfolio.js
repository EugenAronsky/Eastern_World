import React, {useState} from "react";
import Button from "../Common Elements/Button.js"
import PortfolioCard from "./PortfolioCard.js"
import "./portfolio.css";
import "./portfolio-adaptive.css";


const Portfolio = ({upDate}) =>{
    let articles = Object.values(upDate.articles);
    let {title, background_image} = upDate.portfolio;

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", ()=>{
        setScreenWidth(window.innerWidth)
    })
    const [slider, setSlider] = useState( 1 );

    return(
        <div className="Portfolio" style={background_image.fields.file.url === "default" ? {} : {backgroundImage : "url(" + background_image.fields.file.url +")" }}>
            <h1>{title}</h1>
            <div className="portfolio-card-box">
                <div className="portfolio-slider" style={{transform: "translateX(" + -(100 / 3) * (slider - 1) + "%)"}}>
                    <PortfolioCard data = {articles[articles.length - 1]} />
                    <PortfolioCard data = {articles[articles.length - 2]} />
                    <PortfolioCard data = {articles[articles.length - 3]} />
                </div>
            </div>

            <div className="selection">
                <div onClick={() => setSlider(1)} className ={slider === 1 ? "selection-active" : "selection-not-active"}></div>
                <div onClick={() => setSlider(2)} className ={slider === 2 ? "selection-active" : "selection-not-active"}></div>
                <div onClick={() => setSlider(3)} className ={slider === 3 ? "selection-active" : "selection-not-active"}></div>
            </div>

            <div className = "portfolio-button">
                {screenWidth <= 540 ? <Button content = "УЗНАТЬ БОЛЬШЕ" width = "40.625vw" height = "9.375vw" link={''}/> : <Button content = "УЗНАТЬ БОЛЬШЕ" width = "13.542vw" height = "3.125vw" link={''}/>}
            </div>
        </div>
    );
}

export default Portfolio;