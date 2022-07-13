import React from 'react';
import Button from "./Button.js"
import UpdateManeger from './UnpackUpdate.js';
import './biography.css';


const Biography = (upDate) =>{
    let {portrait, author, profession, description, background_image} = upDate.upDate;
    return(
        <div className='Biography' style={background_image.fields.file.url === "default" ? {} : {backgroundImage : "url(" + background_image.fields.file.url +")" }}>
            <div className='Bio-portret-back'></div>
            <div className='Bio-portret' style={portrait.fields.file.url === "default" ? {} : {backgroundImage : "url(" + portrait.fields.file.url +")" }}></div>
            <div className='Bio-description'>
                <h1>{author}</h1>
                <h2>{profession}</h2>
                <span>{typeof description !== 'string' ? UpdateManeger(description) : description}</span>   
            </div>
            <div className = "Bio-button">
                <Button content = "УЗНАТЬ БОЛЬШЕ" width = "13.542vw" height = "3.125vw" link={''}/>
            </div>
        </div>
    );
}

export default Biography;