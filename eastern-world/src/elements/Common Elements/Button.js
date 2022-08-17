import React, { memo, useContext} from "react";
import {Data} from "../App";
import "./button.css"

const conditionalList = ['HomePage', 'BiographyPage', 'EventsPage', 'PortfolioPage', 'MyRecommendationPage', 'QuestionPage', 'HelpPage', "ContactsPage"];

const Button = ({content, width ,height, link = null, target = "_self"}) => {
    const changePageFunction = useContext(Data)[1];

    return (
        <>
            {link === conditionalList.find((el)=> el === link) ? 
                <a onClick={()=>changePageFunction(link)} target = {target} className = "button" style = {{ width : width, height: height}}><div>{content}</div></a>
            : 
                <a href={link} target = {target} className = "button" style = {{ width : width, height: height}}><div>{content}</div></a>
            }
        </>
    );
}

export default memo(Button);
