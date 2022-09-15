import React, { useState, memo, createContext, useContext, useMemo, useCallback} from "react";
import UpdateManeger from '../Common Elements/UnpackUpdate.js';
import findMyData from '../Common Elements/UpdateMeneger.js';
import Button from "../Common Elements/Button.js";
import { useNavigate } from 'react-router-dom';
import { windowSize } from "../App"; 
import { ShareData } from "../App";
import './QuestionsPage.css';

const Comment = ({info}) => {
    const {person, date, question} = info;
    const screenWidth = useContext(windowSize);
    const PageInfo = useContext(ShareData)[2];
    const navigate = useNavigate();
    return (
        <div onClick = {()=>{PageInfo( info ); navigate("/questions/answer")}} style={{cursor: 'pointer'}}>
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
    );
}

const QuestionsPage = ({props}) =>{
    const { ServerData } = props;
    const questions = Object.values(findMyData('question', ServerData));
    const screenWidth = useContext(windowSize);
    const commentList = questions.map((info, i)=><Comment key={i} info={info}/>)
    return (
        <div className="QuestionsPage">
            <div className="ContainerQuestions">
                <div className="InfoLine">
                    <h1>Ваши вопросы</h1>
                    <div className="btn">
                        {screenWidth > 540 ? <Button content = "ЗАДАТЬ ВОПРОС" width = "13.542vw" height = "3.125vw" link={'/questions/inquire'}/> : <Button content = "ЗАДАТЬ ВОПРОС" width = "40.625vw" height = "9.375vw" link={'/questions/inquire'}/>}
                    </div>
                </div>
                <div className="QuestionsList">
                    {commentList}
                </div>
            </div>
        </div>
    );
};

export default memo(QuestionsPage)