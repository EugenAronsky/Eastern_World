import React, { useState, memo, createContext, useContext, useMemo, useCallback} from "react";
import UnpackDescriptionWithLinks from "../Common Elements/UnpackLinks.js";
import findMyData from '../Common Elements/UpdateMeneger.js';
import Button from "../Common Elements/Button.js";
import { windowSize } from "../App"; 
import Photo from "./Photo.js";
import Fund from "./Fund.js";
import './HelpPage.css';
import './HelpPage-adaptive.css'

const HelpPage = ({ServerData}) =>{

    const helpInfo = useCallback(findMyData('help', ServerData), [ServerData]);
    const {background_image, first_description, second_description, note} = helpInfo;
    const photosList = useCallback(Object.values(findMyData('photo_for_help_page', ServerData), [ServerData]));
    const memoUnpackFirstPart = useMemo(()=>UnpackDescriptionWithLinks(first_description), [first_description]);
    const memoUnpackSecondPart = useMemo(()=>UnpackDescriptionWithLinks(second_description), [second_description]);
    const fundsList = useCallback(Object.values(findMyData('fund', ServerData), [ServerData]));
    const memoUnpackNote = useMemo(()=>UnpackDescriptionWithLinks(note, true), [note]);
    const screenWidth = useContext(windowSize);
    const [currentSlide, setCurrentSlide] = useState( 0 );

    photosList.push(photosList[0]);
    photosList.push(photosList[0]);
    photosList.push(photosList[0]);
    photosList.push(photosList[0]);
    photosList.push(photosList[0]);

    const photos = photosList.map((info, i)=><Photo key={i} info={info}/>);
    const funds = fundsList.map((info, i)=><Fund key={i} info={info}/>);
    const dots = photosList.map((info, i)=><div onClick={()=>setCurrentSlide( i )} className={currentSlide === i? "active_slide" : ""} key={i}/>);

    return(
        <div className="HelpPage">
            <div className="Background-container">
                <div className="r-bg-img" style={background_image.fields.file.url === "default" ? {} : {backgroundImage : "url(" + background_image.fields.file.url +")" }}></div>
                <div className="top-shadow"></div>
                <div className="r-bg"></div>
            </div>

            <div className="help-container">
                <div className="TitleLine">
                    <h1 className="PageTitle">Помощь Украине</h1>
                    <div className="donate_button" onClick={()=>document.getElementsByClassName("Fond-Box")[0].scrollIntoView({behavior: 'smooth'})}>
                        {screenWidth <= 540 ? <Button content = "ВНЕСТИ ПОЖЕРТВОВАНИЕ" width = "75vw" height = "9.375vw" /> : <Button content = "ВНЕСТИ ПОЖЕРТВОВАНИЕ" width = "20.417vw" height = "3.125vw" />}
                    </div>
                </div>
                {memoUnpackFirstPart}
                    <div className="PhotoBox">
                        <div className="photoContainer" style={{transform: "translate(" + ( -93.75 * currentSlide ) + "vw)", width: "fit-content" }}>
                            { photos }
                        </div>
                    </div>
                    <div className={ photosList.length < 12 ? "slider_box" : "slider_box slider_box_hidden" }>
                        <div className="slider_photo" style={ currentSlide > 1 && photosList.length - (currentSlide - 1) > 10 ? {transform: "translate(" + ( -8.050 * (currentSlide - 1) ) + "vw)"} :  currentSlide > 1 ? {transform: "translate(" + ( -8.050 * ( photosList.length - 11) ) + "vw)"} : {}} >{ dots }</div>
                    </div>
                {memoUnpackSecondPart}
                <div className="line"></div>
                <div className="note">{memoUnpackNote}</div>
                {funds}
            </div>
        </div>
    );
}

export default memo(HelpPage);