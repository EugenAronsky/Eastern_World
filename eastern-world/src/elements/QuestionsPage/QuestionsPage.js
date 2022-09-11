import React, { useState, memo, createContext, useContext, useMemo, useCallback} from "react";
import Button from "../Common Elements/Button.js";
import { windowSize } from "../App"; 
import './QuestionsPage.css';


const Comment = () => {
    const screenWidth = useContext(windowSize);
    return (
        <>
            {screenWidth > 540 ?
                <div className="CommentBox">
                    <div className="CommentIconBox"/>
                    <div className="CommentContent">
                        <h1>Лиза Анохина</h1>
                        <h2>Какое ваше мнение о Палестино-израильском конфликте в XX векеи попытки его урегулирования?</h2>
                        <h3>26 апреля 2022</h3>
                    </div>
                </div>
                :
                <div className="CommentBox">
                    <div className="CommentBoxLine">
                        <div className="CommentIconBox"/>
                        <div className="CommentContent">
                            <h1>Лиза Анохина</h1>
                            <h3>26 апреля 2022</h3>
                        </div>
                    </div>
                    <h2>Какое ваше мнение о Палестино-израильском конфликте в XX векеи попытки его урегулирования?</h2>
                </div>
            }
        </>
    );
}

const QuestionsPage = ({ServerData}) =>{
    const screenWidth = useContext(windowSize);
    return (
        <div className="QuestionsPage">
            <div className="ContainerQuestions">
                <div className="InfoLine">
                    <h1>Ваши вопросы</h1>
                    <div className="btn">
                        {screenWidth > 540 ? <Button content = "ЗАДАТЬ ВОПРОС" width = "13.542vw" height = "3.125vw" link={'Inquire'}/> : <Button content = "ЗАДАТЬ ВОПРОС" width = "40.625vw" height = "9.375vw" link={'Inquire'}/>}
                    </div>
                </div>

                <div className="QuestionsList">
                    <Comment/>
                </div>
            </div>
        </div>
    );
};

export default memo(QuestionsPage)