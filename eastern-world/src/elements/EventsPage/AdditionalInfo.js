import React, { memo, useContext, useMemo, useState } from "react";
import UnpackDescriptionWithLinks from "../Common Elements/UnpackLinks";
import Button from "../Common Elements/Button";
import '../MyRecommendationPage/Recommendation.css';
import './Announcement-adaptive.css';
import './AdditionalInfo.css';
import { windowSize } from '../App.js';
import { Player } from 'video-react';
import "../../../../node_modules/video-react/dist/video-react.css"; 
const AdditionalInfo = ({info}) => {
    const format = ["mp4", "webm", "ogg"];
    const {picture, title, description, date, report} = info;
    const screenWidth = useContext(windowSize);
    const [selectedVidio, setSelectedVidio] = useState( 0 );
    const type = report[selectedVidio].fields.file.url.split(".").slice(-1)[0];
    const memoUnpackDescription = useMemo(()=>UnpackDescriptionWithLinks(description), [description]);
    const vidio_box_container = report.map((element, key) => !format.includes(element.fields.file.url.split(".").slice(-1)[0]) ? <div key = {key} onClick={()=>setSelectedVidio(key)} className = {selectedVidio === key ? "active-vidio" : "unfocus-vidio"} style={{backgroundImage: `url(${element.fields.file.url})`}}></div> : <div key = {key} onClick={()=>setSelectedVidio(key)} className = {selectedVidio === key ? "active-vidio play" : "unfocus-vidio play"}><video className = {selectedVidio === key ? "active-vidio" : "unfocus-vidio"} style = {{objectFit: "cover"}} src = {element.fields.file.url}></video></div>);

    return(
        <>
            {screenWidth <= 540 ?
                <div className="Recommendation-page">
                    <div className="Recommendation-container">
                        <div className="recommendation-title-page">{title}</div>
                        <div className="recommendation-addition">{date}</div>
                        <div className="recommendation-image" style={{backgroundImage: "url(" + picture.fields.file.url + ")"}}></div>
                        <div className="recommendation-content AdditionalInfo-content">{memoUnpackDescription}</div>
                    </div>

                    <div className="vidioBox">
                        <div className="currentVidioBox">
                            { 
                            format.includes(type) ? 
                                <Player playsInline src={report[selectedVidio].fields.file.url}/>
                                :
                                <div className="Vidio" style={{backgroundImage: "url(" + report[selectedVidio].fields.file.url+ ")"}}></div> 
                            }
                        </div>

                        <div className="vidio-slider-box">
                            <div className="line"></div>
                            <div className="vidio-slider" style={report.length > 3 ? selectedVidio > 0 && report.length - selectedVidio > 1 ? {transform: `translateX(-${(selectedVidio - 1) * 100 / report.length}%)`} : selectedVidio < 1 ? {} : {transform: `translateX(-${(report.length - 3) * 100 / report.length}%)`} : {}}>
                                {vidio_box_container}
                            </div>
                        </div>
                    </div>

                    <div className="GoToRecommendationButton">
                        <Button content = "ВЕРНУТЬСЯ" width = "40.625vw" height = "9.375vw" link={"EventsPage"}/>
                    </div>
                </div>
                :
                <div className="Recommendation-page">
                    <div className="Recommendation-container">
                        <div className="recommendation-image" style={{backgroundImage: "url(" + picture.fields.file.url + ")"}}></div>
                        <div className="recommendation-title-page">{title}</div>
                        <div className="recommendation-addition">{date}</div>
                        <div className="recommendation-content AdditionalInfo-content">{memoUnpackDescription}</div>
                    </div>

                    <div className="vidioBox">
                        <div className="currentVidioBox">
                            <div className="arrow" onClick={()=>setSelectedVidio( selectedVidio > 0 ? selectedVidio - 1 : selectedVidio )}></div>
                                { 
                                format.includes(type) ? 
                                    <Player playsInline src={report[selectedVidio].fields.file.url}/>
                                    :
                                    <div className="Vidio" style={{backgroundImage: "url(" + report[selectedVidio].fields.file.url+ ")"}}></div> 
                                }
                            <div className="arrow right" onClick={()=>setSelectedVidio(selectedVidio < report.length - 1 ? selectedVidio + 1 : selectedVidio)}></div>
                        </div>

                        <div className="vidio-slider-box">
                            <div className="line"></div>
                            <div className="vidio-slider" style={report.length > 6 ? selectedVidio > 2 && report.length - selectedVidio > 3 ? {right: `${(selectedVidio - 2) * 11}vw`} : selectedVidio < 3 ? {right: 0} : {right: `${(report.length - 6) * 11}vw`} : {}}>
                                {vidio_box_container}
                            </div>
                        </div>
                    </div>

                    <div className="GoToRecommendationButton">
                        <Button content = "ВЕРНУТЬСЯ К АНОНСАМ" width = "21.875vw" height = "3.125vw" link={"EventsPage"}/>
                    </div>
                </div>
            }
        </>
    );
}

export default memo(AdditionalInfo);