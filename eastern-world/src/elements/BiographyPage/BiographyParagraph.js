import React from "react";
import UnpackDescription from '../Common Elements/UnpackUpdate.js';

const BiographyParagraph = ({upDate}) =>{
    let {title, paragraph} = upDate;
    return(
        <>
            <h1>{title}</h1>
            <div>{UnpackDescription(paragraph)}</div>
        </>
    );
}

export default BiographyParagraph;