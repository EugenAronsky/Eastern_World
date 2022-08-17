import React, { useState, memo, createContext, useContext, useMemo, useCallback} from "react";
import UnpackDescription from "../Common Elements/UnpackUpdate.js";
import { windowSize } from "../App"; 
import './Photo.css'

const Photo = ({info}) =>{
    const {photo, title, description} = info;

    return(
        <div className="Photo-Box" >
            <div className="Photo" style={{backgroundImage: 'url(' + photo.fields.file.url + ')'}}></div>
            <h1>{title}</h1>
            <span>{UnpackDescription(description)}</span>
        </div>
    );
}

export default memo(Photo);