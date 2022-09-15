import React, { memo, useContext} from "react";
import { Link } from 'react-router-dom';
import {ShareData} from "../App";
import "./button.css"

const conditionalList = ['HomePage', 'Inquire', 'QuestionsPage', 'Recommendation', 'BiographyPage', 'EventsPage', 'PortfolioPage', 'MyRecommendationPage', 'AdditionalInfo', 'QuestionPage', 'HelpPage', "ContactsPage"];

const Button = ({content, width ,height, link = "/", target = "_self", change = null, outside = false}) => {
    const changePageFunction = useContext(ShareData)[1];
    const PageInfo = useContext(ShareData)[2];

    const cool_link = () => {
        if(change !== null) PageInfo(change);
    }
    return (
        <>
        { outside ? 
            <a href={link} target = {target} className="button" style={{ width : width, height: height }}>{content}</a>
        :
            <Link onClick={cool_link} to={link} target = {target} className="button" style={{ width : width, height: height }}>{content}</Link>
        }
        </>

        // <>
        //     {link === conditionalList.find((el)=> el === link) ? 
        //         <a onClick={()=>{change !== null ? cool_link() : changePageFunction(link) }} target = {target} className = "button" style = {{ width : width, height: height}}><div>{content}</div></a>
        //     : 
        //         <a href={link} target = {target} className = "button" style = {{ width : width, height: height}}><div>{content}</div></a>
        //     }
        // </>
    );
}

export default memo(Button);
