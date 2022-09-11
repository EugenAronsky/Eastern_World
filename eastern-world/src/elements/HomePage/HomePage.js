import React, {memo} from "react";
import Slider from './Slider.js';
import Biography from './Biography'
import ProjectDescription from './ProjectDescription.js'
import Portfolio from './Portfolio.js'
import Help from './Help.js';
import Questions from './Questions.js';

import findMyData from '../Common Elements/UpdateMeneger.js';

const HomePage = ({ServerData}) =>{
    return (
        <>
            <Slider upDate = {findMyData('article', ServerData)} />
            <Biography upDate = {findMyData('biography', ServerData)}/>
            <ProjectDescription upDate = {findMyData('project', ServerData)}/>
            <Portfolio upDate = {{portfolio : findMyData('portfolio', ServerData), articles : findMyData('article', ServerData) }}/>
            <Help upDate = {findMyData('help', ServerData)}/>
            <Questions upDate = {findMyData('question', ServerData)}/>
        </>
    )
}

export default memo(HomePage);