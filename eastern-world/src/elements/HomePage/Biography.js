import React, {useState, useContext, memo} from 'react';
import Button from "../Common Elements/Button.js"
import UnpackDescription from '../Common Elements/UnpackUpdate.js';
import './biography.css';
import './biography-adaptive.css';
import { windowSize } from '../App.js';


const Biography = (upDate) =>{
    let {portrait, author, profession, home_description, home_background_image} = upDate.upDate;
    const screenWidth = useContext(windowSize);

    return(
        <div className='Biography' style={home_background_image.fields.file.url === "default" ? {} : {backgroundImage : "url(" + home_background_image.fields.file.url +")" }}>
            <div className='Bio-portret-back'></div>
            <div className='Bio-portret' style={portrait.fields.file.url === "default" ? {} : {backgroundImage : "url(" + portrait.fields.file.url +")" }}></div>
            <div className='Bio-description'>
                <h1>{author}</h1>
                <h2>{profession}</h2>
                <span>{typeof home_description !== 'string' ? UnpackDescription(home_description) : home_description}</span>   
            </div>
            <div className = "Bio-button">
                {screenWidth <= 540 ? <Button content = "УЗНАТЬ БОЛЬШЕ" width = "40.625vw" height = "9.375vw" link={'BiographyPage'}/> : <Button content = "УЗНАТЬ БОЛЬШЕ" width = "13.542vw" height = "3.125vw" link={'BiographyPage'}/>}
            </div>
        </div>
    );
}

export default memo(Biography);