import React, {memo} from "react";
import Slider from './Slider.js';
import Biography from './Biography'
import ProjectDescription from './ProjectDescription.js'
import Portfolio from './Portfolio.js'
import Help from './Help.js';
import Questions from './Questions.js';

import findMyData from '../Common Elements/UpdateMeneger.js';

const HomePage = ({newData}) =>{
    return (
        <>
            <Slider/>
            <Biography upDate = {findMyData('biography', newData)}/>
            <ProjectDescription upDate = {findMyData('project', newData)}/>
            <Portfolio upDate = {{portfolio : findMyData('portfolio', newData), articles : findMyData('article', newData) }}/>
            <Help upDate = {findMyData('help', newData)}/>
            <Questions upDate = {findMyData('question', newData)}/>
        </>
    )
}

export default memo(HomePage);