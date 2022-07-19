import React, {useState} from 'react';
import Button from "../Common Elements/Button.js"
import UnpackDescription from '../Common Elements/UnpackUpdate.js';
import './biography.css';
import './biography-adaptive.css';


const Biography = (upDate) =>{
    let {portrait, author, profession, description, background_image} = upDate.upDate;
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", ()=>{
        setScreenWidth(window.innerWidth)
    })
    return(
        <div className='Biography' style={background_image.fields.file.url === "default" ? {} : {backgroundImage : "url(" + background_image.fields.file.url +")" }}>
            <div className='Bio-portret-back'></div>
            <div className='Bio-portret' style={portrait.fields.file.url === "default" ? {} : {backgroundImage : "url(" + portrait.fields.file.url +")" }}></div>
            <div className='Bio-description'>
                <h1>{author}</h1>
                <h2>{profession}</h2>
                <span>{typeof description !== 'string' ? UnpackDescription(description) : description}</span>   
            </div>
            <div className = "Bio-button">
                {screenWidth <= 540 ? <Button content = "УЗНАТЬ БОЛЬШЕ" width = "40.625vw" height = "9.375vw" link={''}/> : <Button content = "УЗНАТЬ БОЛЬШЕ" width = "13.542vw" height = "3.125vw" link={''}/>}
            </div>
        </div>
    );
}

export default Biography;