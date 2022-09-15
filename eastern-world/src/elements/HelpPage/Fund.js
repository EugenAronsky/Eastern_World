import React, { useState, memo, createContext, useContext, useMemo, useCallback} from "react";
import Button from "../Common Elements/Button.js";
import { windowSize } from "../App"; 
import './Fund.css'

const Fund = ({info}) =>{

    const {name, link} = info;
    const screenWidth = useContext(windowSize);

    return(
        <div className="Fond-Box">
            <h1>{name}</h1>
            <div>
                {screenWidth <= 540 ? <Button content = "ВНЕСТИ ПОЖЕРТВОВАНИЕ" width = "75vw" height = "9.375vw" link={link} target="_blank" outside={true}/> : <Button content = "ВНЕСТИ ПОЖЕРТВОВАНИЕ" width = "20.417vw" height = "3.125vw" link={link} target="_blank" outside={true}/>}
            </div>
        </div>
    );
}

export default memo(Fund);