import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import React, { useState, memo, useEffect, useContext, useMemo, useCallback} from "react";
import UpdateManeger from '../Common Elements/UnpackUpdate.js';
import findMyData from '../Common Elements/UpdateMeneger.js';
import Button from "../Common Elements/Button.js";
import { useNavigate } from 'react-router-dom';
import { windowSize } from "../App"; 
import './Answer.css';

const Answer = ({props}) => {
    const { ServerData, PageInfo } = props;
    console.log(PageInfo)
    const { person, date, question, answer, answer_date} = PageInfo;
    const { portrait } = findMyData('my_photo', ServerData);
    const screenWidth = useContext(windowSize);
    const navigate = useNavigate();
    return(
        <div className='Answer'>
            <div className='Answer-container'>
                <div className='Question'>
                    {screenWidth > 540 ?
                        <div className="CommentBox">
                            <div className="CommentIconBox"/>
                            <div className="CommentContent">
                                <h1>{person}</h1>
                                <h2>{UpdateManeger(question)}</h2>
                                <h3>{date}</h3>
                            </div>
                        </div>
                        :
                        <div className="CommentBox">
                            <div className="CommentBoxLine">
                                <div className="CommentIconBox"/>
                                <div className="CommentContent">
                                    <h1>{person}</h1>
                                    <h3>{date}</h3>
                                </div>
                            </div>
                            <h2>{UpdateManeger(question)}</h2>
                        </div>
                    }
                </div>
                <div className='Answer-content'>
                    {screenWidth > 540 ?
                        <div className="CommentBox">
                            <div className="CommentIconBox" style={{backgroundImage: `url(${portrait.fields.file.url})`}}/>
                            <div className="CommentContent">
                                <h1 translate='no' >{localStorage.getItem("language") === "HA" ? "ולדה גולדשטיין" : localStorage.getItem("language") === "EN" ? "Vlada Goldstein" : "Влада Гольдштейн"}</h1>
                                <h2>{UpdateManeger(answer)}</h2>
                                <h3>{answer_date}</h3>
                            </div>
                        </div>
                        :
                        <div className="CommentBox">
                            <div className="CommentBoxLine">
                                <div className="CommentIconBox" style={{backgroundImage: `url(${portrait.fields.file.url})`}}/>
                                <div className="CommentContent">
                                    <h1 translate='no' >{localStorage.getItem("language") === "HA" ? "ולדה גולדשטיין" : localStorage.getItem("language") === "EN" ? "Vlada Goldstein" : "Влада Гольдштейн"}</h1>
                                    <h3>{answer_date}</h3>
                                </div>
                            </div>
                            <h2>{UpdateManeger(answer)}</h2>
                        </div>
                    }
                </div>
            </div>
            <div className='Btn_Line'>
                {screenWidth > 540 ? <Button content = "ВЕРНУТЬСЯ К ВОПРОСАМ" width = "18.542vw" height = "3.125vw" link={'/questions'}/> : <Button content = "ВЕРНУТЬСЯ" width = "40.625vw" height = "9.375vw" link={'/questions'}/>}
                {screenWidth > 540 ? <Button content = "ЗАДАТЬ ВОПРОС" width = "13.125vw" height = "3.125vw" link={'/questions/inquire'}/> : <Button content = "ЗАДАТЬ ВОПРОС" width = "40.625vw" height = "9.375vw" link={'/questions/inquire'}/>}
            </div>
        </div>
    );
}

export default memo(Answer); 