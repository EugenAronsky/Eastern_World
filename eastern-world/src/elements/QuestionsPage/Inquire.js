import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import React, { useState, memo, useEffect, useContext, useMemo, useCallback} from "react";
import Button from "../Common Elements/Button.js";
import { useNavigate } from 'react-router-dom';
import { windowSize } from "../App"; 
import './Inquire.css';

const Inquire = ({props}) =>{
    const {Data, changePage, previousState, questionData, setPreviousState, setQuestionData} = props;
    const [reCAPTCHA_result, setReCAPTCHA_result] = useState( false );
    const [reCAPTCHA, setReCAPTCHA] = useState( false );
    const screenWidth = useContext(windowSize);
    const navigate = useNavigate();
    let passed = true;

    const check_reCAPTCHA = (user_captcha_value) => {
        if(validateCaptcha(user_captcha_value, false)){
            setReCAPTCHA((current)=> current = !current);
            setReCAPTCHA_result( true );
        }
        else{
            document.getElementById("reCAPTCHA").value = "";
            document.getElementById("reCAPTCHA").style.animationName = "refuse";
            document.getElementById("reCAPTCHA").addEventListener("animationend", ()=>{ document.getElementById("reCAPTCHA").style.animationName = "";})
        }
    }

    const check_form = () => {
        const mail = document.getElementById("mail")
        const fname = document.getElementById("Fname")
        const sname = document.getElementById("Sname")
        const reCAPTCHA_text = document.getElementById("reCAPTCHA_text")

        if(fname.value === '') {
            passed = false;
            fname.style.animationName = "refuse_input";
            fname.addEventListener("animationend", ()=>{ fname.style.animationName = "" });
        }

        if(sname.value === '') {
            passed = false;
            sname.style.animationName = "refuse_input";
            sname.addEventListener("animationend", ()=>{ sname.style.animationName = "" });
        }

        if(mail.value === '' || mail.value.includes('@') === false) {
            passed = false;
            mail.style.animationName = "refuse_input";
            mail.addEventListener("animationend", ()=>{ mail.style.animationName = "" });
        }

        if(reCAPTCHA_result === false) {
            passed = false;
            screenWidth > 540 ? reCAPTCHA_text.style.animationName = "refuse" : reCAPTCHA_text.style.animationName = "refuse_input";
            reCAPTCHA_text.addEventListener("animationend", ()=>{ reCAPTCHA_text.style.animationName = "" });
        }

        if(passed){
            setQuestionData({
                firstName: fname,
                lastName: sname,
                mail: mail,
            })
            navigate("/questions/ask");
        } 
    }

    useEffect (() => { 
        {screenWidth > 540 ? loadCaptchaEnginge(6, '#202020', '#848484', "1.5vw Georgia") :  loadCaptchaEnginge(6, '#202020', '#848484', "4.5vw Georgia")};  
    }, []);
    
    return (
        <div className="Inquire">
            <div className="Inquire-box" style={reCAPTCHA ? {filter: `brightness(0.5)`, pointerEvents: `none`}: {}}>
                <h1 className="formTitle">Ваши данные</h1>
                <form className="formContainer">
                    <label>Ваше имя и фамилия</label>
                        <input type="text" id="Fname" name="Fname" placeholder="Имя" autoComplete="off" defaultValue={questionData !== null ? questionData.firstName.value : ''}/>
                        <input type="text" id="Sname" name="Sname" placeholder="Фамилия" autoComplete="off" defaultValue={questionData !== null ? questionData.lastName.value : ''}/>
                    <label>Адрес электронной почты</label>
                        <input type="text" id="mail" name="mail" placeholder="Почта" autoComplete="off" defaultValue={questionData !== null ? questionData.mail.value : ''}/>
                </form>
                <div className='reCAPTCHA' onClick={()=>{if(!reCAPTCHA_result) setReCAPTCHA((current)=> current = !current)}}>
                    <div id="reCAPTCHA_text" className='reCAPTCHA_Text' style={reCAPTCHA_result ? {cursor : "default", borderColor: "green", color: "green"} : {}}>
                        <div className={reCAPTCHA_result ? "reCAPTCHA_CheckBox done" : "reCAPTCHA_CheckBox"}></div>
                        I'm not robot
                    </div>
                </div>
                <div className='Btn_Line'>
                    {screenWidth > 540 ? <Button content = "ОТМЕНА" width = "10.833vw" height = "3.125vw" link={'/questions'}/> : <Button content = "ОТМЕНА" width = "40.625vw" height = "9.375vw" link={'/questions'}/>}
                    {screenWidth > 540 ? <div onClick={()=>{check_form()}}><Button content = "ЗАДАТЬ ВОПРОС" width = "13.125vw" height = "3.125vw" link={'/questions/inquire'}/></div> : <div onClick={()=>{check_form()}}><Button content = "ЗАДАТЬ ВОПРОС" width = "40.625vw" height = "9.375vw" link={'/questions/inquire'}/></div>}
                </div>
            </div>

            <div className='reCAPTCHA-Box' style={reCAPTCHA ? {display: `flex`}: {display: `none`}}>
                <LoadCanvasTemplate reloadColor="#00000000"/> 
                <input type="text" id="reCAPTCHA" name="reCAPTCHA" placeholder="Введите символы выше" autoComplete="off"/>
                <button type="button" onClick={()=>{check_reCAPTCHA(document.getElementById("reCAPTCHA").value)}}>Проверить</button>
            </div>
        </div>
    );
};

export default memo(Inquire)