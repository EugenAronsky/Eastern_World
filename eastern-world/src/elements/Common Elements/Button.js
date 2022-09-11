import React, { memo, useContext} from "react";
import {ShareData} from "../App";
import "./button.css"

const conditionalList = ['HomePage', 'Inquire', 'QuestionsPage', 'Recommendation', 'BiographyPage', 'EventsPage', 'PortfolioPage', 'MyRecommendationPage', 'AdditionalInfo', 'QuestionPage', 'HelpPage', "ContactsPage"];

const Button = ({content, width ,height, link = null, target = "_self", change = null}) => {
    const changePageFunction = useContext(ShareData)[1];
    const PageInfo = useContext(ShareData)[2];

    const cool_link = () => {
        changePageFunction(link);
        PageInfo(change);
    }

    return (
        <>
            {link === conditionalList.find((el)=> el === link) ? 
                <a onClick={()=>{change !== null ? cool_link() : changePageFunction(link) }} target = {target} className = "button" style = {{ width : width, height: height}}><div>{content}</div></a>
            : 
                <a href={link} target = {target} className = "button" style = {{ width : width, height: height}}><div>{content}</div></a>
            }
        </>
    );
}

export default memo(Button);
