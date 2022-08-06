import React, {useState, useContext, memo} from "react";
import Button from "../Common Elements/Button.js"
import "./projectDescription.css";
import "./projectDescription-adaptive.css";
import UpdateManeger from '../Common Elements/UnpackUpdate.js';
import { windowSize } from '../App.js';

const ProjectDescription = (upDate) => {
    const {project_iamge, title, description, channel_link, background_image} = upDate.upDate;
    const screenWidth = useContext(windowSize);

    return(
        <div className="ProjectDescription" style={background_image.fields.file.url === "default" ? {} : {backgroundImage : "url(" + background_image.fields.file.url +")" }}>
            <div className="pd-container">
                <div className="contoiner">
                    <h1>{title}</h1>
                    <span>{typeof description !== 'string' ? UpdateManeger(description) : description}</span>
                </div>
                <div className="progect-image" style={project_iamge.fields.file.url === "default" ? {} : {backgroundImage : "url(" + project_iamge.fields.file.url +")" }}></div>
                <div className = "pd-button">
                    {screenWidth <= 540 ? <Button content = "ПЕРЕЙТИ НА КАНАЛ" width = "46.875vw" height = "9.375vw" target = "_blank" link={channel_link}/> : <Button content = "ПЕРЕЙТИ НА КАНАЛ" width = "15.104vw" height = "3.125vw" target = "_blank" link={channel_link}/>}
                </div>
            </div>
        </div>
    );
}

export default memo(ProjectDescription);