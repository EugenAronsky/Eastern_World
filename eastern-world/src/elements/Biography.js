import React from 'react';
import Button from "./Button.js"
import './biography.css';

function UnpackDescription(description){
    let fullContent = '';
        for (let index = 0; index < description.content.length; index++) {
            fullContent = fullContent + description.content[index].content[0].value + '\n';
        }
    return fullContent;
}

const Biography = (upDate) =>{
    let {portrait, author, profession, description, background_iamge} = upDate.upDate
    return(
        <div className='Biography' style={background_iamge.fields.file.url === "default" ? {} : {backgroundImage : "url(" + background_iamge.fields.file.url +")" }}>
            <div className='Bio-portret-back'></div>
            <div className='Bio-portret' style={portrait.fields.file.url === "default" ? {} : {backgroundImage : "url(" + portrait.fields.file.url +")" }}></div>
            <div className='Bio-description'>
                <h1>{author}</h1>
                <h2>{profession}</h2>
                <span>{typeof description !== 'string' ? UnpackDescription(description) : description}</span>   
            </div>
            <div  className = "Bio-button">
                <Button content="УЗНАТЬ БОЛЬШЕ" w = "13.542vw" h = "3.125vw" link={''}/>
            </div>
        </div>
    );
}

export default Biography;