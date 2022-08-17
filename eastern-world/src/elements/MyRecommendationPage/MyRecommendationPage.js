import React, { useState, memo, createContext, useContext, useMemo, useCallback } from "react";
import MyRecommendationNavigation from "./MyRecommendationNavigation.js";
import findMyData from '../Common Elements/UpdateMeneger.js';
import GridLine from "./GridLine.js";
import { windowSize } from "../App"; 
import './MyRecommendationPage.css'

export const RecommendationWrapper  = createContext();

const MyRecommendationPage = ({newData}) =>{

    const RecommendationList = Object.values(findMyData('recommendation', newData));
    const [currentPage, setCurrentPage] = useState( 1 );
    const [tabIndex, setTabIndex] = useState( 0 );
    const screenWidth = useContext(windowSize);
    const worksPerPage = screenWidth < 540 ? 7 : 14;
    const step = (14 * (currentPage - 1));

    console.log(tabIndex)

    for (let index = 0; index < 99; index++) {
        RecommendationList.push(RecommendationList[0])
        RecommendationList.push(RecommendationList[1])
    }
    
    const props = {
        //varibles
        currentPage: currentPage,
        amountOfAnnouncement: RecommendationList.length,
        worksPerPage: worksPerPage,
        tabIndex: tabIndex,

        //function 
        setCurrentPage: (number)=>setCurrentPage(number),
        setTabIndex: ()=>setTabIndex((current)=>current = current + 1),
    };

    return(
        <div className="MyRecommendationPage">
            <div className="Background-container">
                <div className="r-bg-img"></div>
                <div className="r-bg"></div>
            </div>
            <RecommendationWrapper.Provider value = {props}>
                <MyRecommendationNavigation>
                    <div className="grid-container">
                        { screenWidth > 540 ? currentPage % 2 !== 0 ? 
                        <div className="ltr grid-container">
                            <GridLine list = {{elements: RecommendationList.slice(0 + step, 2 + step), columns: "3", grid: ['1 / 3', '3 / 3'] }}/>
                            <GridLine list = {{elements: RecommendationList.slice(2 + step, 4 + step), columns: "2", grid: ['1 / 1', '2 / 2'] }}/>
                            <GridLine list = {{elements: RecommendationList.slice(3 + step, 6 + step), columns: "3", grid: ['1 / 1', '2 / 2', '3 / 3'] }}/>
                            <GridLine list = {{elements: RecommendationList.slice(6 + step, 8 + step), columns: "3", grid: ['1 / 1', '2 / 4'] }}/>
                            <GridLine list = {{elements: RecommendationList.slice(8 + step, 11 + step), columns: "3", grid: ['1 / 1', '2 / 2', '3 / 3'] }}/>
                            <GridLine list = {{elements: RecommendationList.slice(11 + step, 13 + step), columns: "2", grid: ['1 / 1', '2 / 2'] }}/>
                        </div>
                        :
                        <div className={ currentPage === Math.ceil(RecommendationList.length / worksPerPage) ? "rtl grid-container last" : "rtl grid-container"}>
                            <GridLine list = {{elements: RecommendationList.slice(0 + step, 2 + step), columns: "3", grid: ['1 / 3', '3 / 3'] }}/>
                            <GridLine list = {{elements: RecommendationList.slice(2 + step, 4 + step), columns: "2", grid: ['1 / 1', '2 / 2'] }}/>
                            <GridLine list = {{elements: RecommendationList.slice(3 + step, 6 + step), columns: "3", grid: ['1 / 1', '2 / 2', '3 / 3'] }}/>
                            <GridLine list = {{elements: RecommendationList.slice(6 + step, 8 + step), columns: "3", grid: ['1 / 1', '2 / 4'] }}/>
                            <GridLine list = {{elements: RecommendationList.slice(8 + step, 11 + step), columns: "3", grid: ['1 / 1', '2 / 2', '3 / 3'] }}/>
                            <GridLine list = {{elements: RecommendationList.slice(11 + step, 13 + step), columns: "2", grid: ['1 / 1', '2 / 2'] }}/>
                        </div>
                        : 
                        <div className="grid-container">
                            <GridLine list = {{elements: [RecommendationList[0 + step]], columns: "1", grid: ['1 / 1'] }}/>
                            <GridLine list = {{elements: [RecommendationList[1 + step]], columns: "1", grid: ['1 / 1'] }}/>
                            <GridLine list = {{elements: [RecommendationList[2 + step]], columns: "1", grid: ['1 / 1'] }}/>
                            <GridLine list = {{elements: [RecommendationList[3 + step]], columns: "1", grid: ['1 / 1'] }}/>
                            <GridLine list = {{elements: [RecommendationList[4 + step]], columns: "1", grid: ['1 / 1'] }}/>
                            <GridLine list = {{elements: [RecommendationList[5 + step]], columns: "1", grid: ['1 / 1'] }}/>
                            <GridLine list = {{elements: [RecommendationList[6 + step]], columns: "1", grid: ['1 / 1'] }}/>
                        </div>
                     }
                    </div>
                </MyRecommendationNavigation>
            </RecommendationWrapper.Provider>
        </div>
    );
}

export default memo(MyRecommendationPage);