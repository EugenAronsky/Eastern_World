import "./help.css"
import "./help-adaptive.css"
import React, {useContext, memo} from 'react';
import UpdateManeger from '../Common Elements/UnpackUpdate.js';
import Button from '../Common Elements/Button.js';
import { windowSize } from '../App.js';


const Help = ({upDate}) => {
    const {title, description, link, background_image, phone_background_image} = upDate;
    const screenWidth = useContext(windowSize);
    
    return(
        <div className='Help'>
            <h1>{title}</h1>
            <div className='underline'></div>
            <span>{typeof description !== 'string' ? UpdateManeger(description) : description}</span>
            <div className='help-button'>
                {screenWidth <= 540 ? <Button content = "УЗНАТЬ БОЛЬШЕ" width = "40.625vw" height = "9.375vw" link={"HelpPage"} /> : <Button content = "УЗНАТЬ БОЛЬШЕ" width = "13.542vw" height = "3.125vw" link={"HelpPage"}/>}
            </div>
            <div className="help-bg" style={screenWidth <= 540 ? phone_background_image.fields.file.url === "default" ? {} : {backgroundImage : "url(" + phone_background_image.fields.file.url +")" } : background_image.fields.file.url === "default" ? {} : {backgroundImage : "url(" + background_image.fields.file.url +")" }}></div>
        </div>
    );
}

export default memo(Help);