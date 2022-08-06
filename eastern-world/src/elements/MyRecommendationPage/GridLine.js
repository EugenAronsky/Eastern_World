import React, { useState, memo, useContext, useMemo } from "react";
import UpdateManeger from '../Common Elements/UnpackUpdate.js';
import { RecommendationWrapper } from "./MyRecommendationPage";
import './GridLine.css'

const GridLine = ({list}) =>{
    const {elements, columns, grid} = list;
    const tabIndex = useContext(RecommendationWrapper).tabIndex;
    const setTabIndex = useContext(RecommendationWrapper).setTabIndex;

    function creatGridElemnt(){
        return elements.map((info, i)=>
            {
                setTabIndex();
                return(
                    <div tabIndex={tabIndex} key={i} style={{gridColumn: grid[i], backgroundImage: "url(" + info.previewImage.fields.file.url + ")"}}>
                        <div className="recommendation-title">
                            <h1 className={ grid[i] === '1 / 3' || grid[i] === '2 / 4' ? "big" : grid.length !== 2 && grid[i] === '1 / 3' || columns === '3' && grid[i] === '1 / 1' || grid.length !== 2 && grid[i] === '2 / 2' || grid[i] === '3 / 3' ? "small" : "medium"}>{info.title}</h1>
                            <div className="line"></div>
                            <div className="recommendation-description">{UpdateManeger(info.description)}</div>
                        </div>
                        <h2>{info.addition}</h2>
                        <div className="bg-rec"></div>
                        <div className="bg-rec-darc"></div>
                    </div>
                )
            }
        )
    }


    return(
    <div className="grid-line" style={{gridTemplateColumns: "repeat(" + columns +  ", 1fr)"}}>
            {creatGridElemnt()}
        </div>
    );
}

export default memo(GridLine);