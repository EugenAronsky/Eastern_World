import React, {useState} from 'react';
import UpdateManeger from '../Common Elements/UnpackUpdate.js';
import Button from '../Common Elements/Button.js';
import "./help.css"
import "./help-adaptive.css"

const Help = ({upDate}) => {
    let {title, description, link, background_image, phone_background_image} = upDate;

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", ()=>{
        setScreenWidth(window.innerWidth)
    })
    
    return(
        <div className='Help' style={screenWidth <= 540 ? phone_background_image.fields.file.url === "default" ? {} : {backgroundImage : "url(" + phone_background_image.fields.file.url +")" } : background_image.fields.file.url === "default" ? {} : {backgroundImage : "url(" + background_image.fields.file.url +")" }}>
            <h1>{title}</h1>
            <div className='underline'></div>
            <span>{typeof description !== 'string' ? UpdateManeger(description) : description}</span>
            <div className='help-button'>
                {screenWidth <= 540 ? <Button content = "УЗНАТЬ БОЛЬШЕ" width = "40.625vw" height = "9.375vw" link={''}/> : <Button content = "УЗНАТЬ БОЛЬШЕ" width = "13.542vw" height = "3.125vw" link={''}/>}
            </div>
        </div>
    );
}

export default Help;