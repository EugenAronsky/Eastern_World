import React from "react";
import Button from "./Button.js"
import "./projectDescription.css";
import UpdateManeger from './UnpackUpdate.js';

const ProjectDescription = (upDate) => {
    let {project_iamge, title, description, channel_link, background_image} = upDate.upDate;

    return(
        <div className="ProjectDescription" style={background_image.fields.file.url === "default" ? {} : {backgroundImage : "url(" + background_image.fields.file.url +")" }}>
            <div className="pd-container">
                <div className="contoiner">
                    <h1>{title}</h1>
                    <span>{typeof description !== 'string' ? UpdateManeger(description) : description}</span>
                </div>
                <div className="progect-image" style={project_iamge.fields.file.url === "default" ? {} : {backgroundImage : "url(" + project_iamge.fields.file.url +")" }}></div>
                <div className = "pd-button">
                    <Button content = "ПЕРЕЙТИ НА КАНАЛ" width = "15.104vw" height = "3.125vw" target = "_blank" link={channel_link}/>
                </div>
            </div>
        </div>
    );
}

export default ProjectDescription;