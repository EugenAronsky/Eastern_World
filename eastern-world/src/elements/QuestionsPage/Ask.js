import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import React, { useState, memo, useEffect, useContext, useMemo, useCallback} from "react";
import Button from "../Common Elements/Button.js";
import { useNavigate } from 'react-router-dom';
import { windowSize } from "../App"; 
import axios from 'axios';
import './Ask.css';

const Ask = ({props}) => {
    const {Data, changePage, questionData, previousState, setPreviousState, setQuestionData} = props;
    const screenWidth = useContext(windowSize);
    const [grab, setGrab] = useState( false );
    const [mouseY, setMouseY] = useState( 0 );
    const [srollPercent, setSrollPercent] = useState( 0 );
    const [scroll_space, set_scroll_space] = useState( 0 );
    const [scrollBar_limit, set_scrollBar_limit] = useState ( null );
    const [current_track_position, set_current_track_position] = useState( 0 );
    const [scrollTargetInfo, setScrollTargetInfo] = useState( null ) 
    const [track_height, set_track_height] = useState( 0 ) 
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const navigate = useNavigate()
    const customScroll = (target) =>{
        setScrollTargetInfo(target); 
        set_scroll_space( target.scrollHeight - target.clientHeight );
        set_track_height((current) => current = document.getElementById("comment").getBoundingClientRect().height - scroll_space + "px")
        document.getElementById("custom-track").style.height = track_height;
    }

    const setTrackPosition = () =>{
        
    }

    const mouseUp = (event) => {
        event.preventDefault();
            document.removeEventListener("mouseup", mouseUp);
            window.removeEventListener("mousemove", mouseMove);
        setGrab(false);
    }

    const mouseMove = (event) => {
        event.preventDefault();
        setMouseY(Math.round(event.y));
    };

    const trackMove = () => {
        if(grab){
            const track_info = document.getElementById("custom-track").getBoundingClientRect();
            const track_position = Math.round(track_info.top + track_info.height / 2);
            const track_speed = (mouseY - track_position) / 50;

            if(track_info.top < scrollBar_limit.top)
                set_current_track_position( (current)=> current = 0 )

            else if(track_info.bottom > scrollBar_limit.bottom)
                set_current_track_position( (current)=> current = Math.round(scrollBar_limit.height - track_info.height) )

            else if(track_info.top > scrollBar_limit.top && track_info.bottom < scrollBar_limit.bottom)
                set_current_track_position((current)=> current += track_speed);

            else if(track_info.top >= scrollBar_limit.top)
                if(track_speed > 0)
                    set_current_track_position((current)=> current += track_speed);

            else if(track_info.bottom <= scrollBar_limit.bottom)
                if(track_speed < 0)
                    set_current_track_position((current)=> current += track_speed);
            
            document.getElementById("custom-track").style.transform = `translateY(${current_track_position}px)`;
            setSrollPercent(Math.floor(((track_info.top - scrollBar_limit.top)  * 100) / (scrollBar_limit.bottom - scrollBar_limit.top - track_info.height)));
            
            const scrollToValue = ((scrollTargetInfo.scrollHeight - scrollTargetInfo.clientHeight) * srollPercent) / 100;
            
            document.getElementById("comment").scrollTo({
                top: scrollToValue,
            })
        }
        else{
            
        }
    }

    const defaultPosition = () => {
        const track = document.getElementById("custom-track");
        const track_info = track.getBoundingClientRect();
        const scrollBar = document.getElementById("customScrollBar");
        const scrollBar_info = scrollBar.getBoundingClientRect();

        if(track_info.top < scrollBar_info.top) {
            track.style.transform = `translateY(${0}px)`;
        }
        else if(track.getBoundingClientRect().bottom > scrollBar.getBoundingClientRect().bottom) {
            track.style.transform = `translateY(${Math.round(scrollBar_info.height - track_info.height)}px)`;
        }
    }

    useEffect(()=>{
        if(grab){
            document.addEventListener("mouseup", mouseUp);
            window.addEventListener("mousemove", mouseMove);
        }
    },[grab]);
 
    useEffect(()=>{
        set_scrollBar_limit( document.getElementById("customScrollBar").getBoundingClientRect() );
    }, [screenWidth, scroll_space])

    useEffect(()=>{
        const track = document.getElementById("custom-track");
        const track_info = track.getBoundingClientRect();
        const scrollBar = document.getElementById("customScrollBar");
        const scrollBar_info = scrollBar.getBoundingClientRect();

        track.style.transform = `translateY(${Math.round(scrollBar_info.height - track_info.height)}px)`;
    }, [track_height])

    useEffect(()=>{
        document.getElementById("custom-track").addEventListener("transitionend", defaultPosition);
    }, [])
    
    window.requestAnimationFrame(trackMove);
        
    const sendQuestion  = async() =>{
        const textarea = document.getElementById("comment");
        const sendButton = document.getElementById("btn_send");
        if(textarea.value !== ''){
            sendButton.style.pointerEvents = "none";
            const today = new Date();
            const date = `${today.getDate()} ${(months[today.getMonth()])} ${today.getFullYear()}`;
            await axios.post("http://localhost:8000/api/addNewComment", {
                firstName: questionData.firstName.value,
                lastName: questionData.lastName.value,
                mail: questionData.mail.value,
                date: date,
                question: document.getElementById("comment").value,
            }).then((response)=>{
                console.log(response.data.massage)
                if( response.data.massage === 'Server error'){
                    navigate("/error");
                }
                else if( response.data.massage !== "Oops, incorrect mail"){
                    alert(response.data.massage);
                    navigate("/questions");
                }
                else{
                    alert(response.data.massage);
                }
            });
        }
        else{
            textarea.style.animationName = "refuse_input";
            textarea.addEventListener("animationend", ()=>{ textarea.style.animationName = "" });
        }
    } 

    return(
        <div className='Ask'>
            <h1 className='Title'>Задать вопрос</h1>
            <form action='' className='comment_container'>
                <label>Опишите интересующий Вас вопрос</label>
                <textarea id="comment" onScroll={(event)=>{setTrackPosition(event.target)}} onChange={(event)=>{customScroll(event.target)}} style={{width: "100%"}}/>
                <div className='scrollContainer' style={scroll_space > 0 && screenWidth > 540 ? {dispaly: "flex"} : {display: "none"}}>
                    <div id='customScrollBar'>
                        <div id='custom-track' onMouseDown={()=>{setGrab(true)}}></div>
                    </div>
                </div>
            </form>
            <div className='Btn_Line'>
                {screenWidth > 540 ? <Button content = "ОТМЕНА" width = "10.833vw" height = "3.125vw" link={'/questions/inquire'}/> : <Button content = "ОТМЕНА" width = "40.625vw" height = "9.375vw" link={'/questions/inquire'}/>}
                {screenWidth > 540 ? <div id="btn_send" onClick={()=>sendQuestion()}><Button content = "ОТПРАВИТЬ" width = "13.125vw" height = "3.125vw" link={'/questions/ask'}/></div> : <div id="btn_send" onClick={()=>sendQuestion()}><Button content = "ОТПРАВИТЬ" width = "40.625vw" height = "9.375vw" link={'/questions/ask'}/></div>}
            </div>
        </div>
    );
}

export default memo(Ask); 