import React, { memo, useContext } from "react";
import UpdateManeger from '../Common Elements/UnpackUpdate.js';
import Button from "../Common Elements/Button";
import './Announcement.css';
import './Announcement-adaptive.css';
import { windowSize } from '../App.js';

const Announcement = ({data}) =>{
    const {picture, title, date, summary, link} = data;
    const screenWidth = useContext(windowSize);
    
    return( 
        <div className="Announcement">
            {screenWidth > 540 ?

                <div className="contetnt">
                    <div style={{backgroundImage: "url(" + picture.fields.file.url + ")"}}></div>
                    <div>
                        <h1>{title}</h1>
                        <h2>{date}</h2>
                        <div className="Announcement-description">{UpdateManeger(summary)}</div>
                        <div className="buttons-box">
                            <Button content = "РЕГИСТРАЦИЯ" width = "10.417vw" height = "2.083vw" target = "_blank" link={link} outside={true}/>
                            <Button content = "УЗНАТЬ БОЛЬШЕ" width = "10.417vw" height = "2.083vw" link={'/events/info'} change={data}/>
                        </div>
                    </div>
                </div>

            : 

                <div className="contetnt">
                    <h1>{title}</h1>
                    <h2>{date}</h2>
                    <div style={{backgroundImage: "url(" + picture.fields.file.url + ")"}}></div>
                    <div className="Announcement-description">{UpdateManeger(summary)}</div>
                    <div className="buttons-box">
                        <Button content = "РЕГИСТРАЦИЯ" width = "40.625vw" height = "9.375vw" target = "_blank" link={link} outside={true}/>
                        <Button content = "УЗНАТЬ БОЛЬШЕ" width = "40.625vw" height = "9.375vw" link={'/events/info'} change={data}/>
                    </div>
                </div>

            }   
        </div>
    );
}

export default memo(Announcement);