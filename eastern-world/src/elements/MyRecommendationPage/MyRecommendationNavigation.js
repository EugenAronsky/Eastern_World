import React, { useState, memo, useContext, useMemo } from "react";
import { RecommendationWrapper } from "./MyRecommendationPage";
import './MyRecommendationNavigation.css';

const MyRecommendationNavigation = ({children}) =>{

    const setPage = useContext(RecommendationWrapper).setCurrentPage;
    const currentPage = useContext(RecommendationWrapper).currentPage;
    const worksPerPage = useContext(RecommendationWrapper).worksPerPage;
    const amountOfAnnouncement = useContext(RecommendationWrapper).amountOfAnnouncement;
    const iteration = Math.ceil(amountOfAnnouncement / worksPerPage);

    function create_a_new_page_if_necessary(){
        if(amountOfAnnouncement > 5 ){
            let dots_left, dots_right = false
            let pages = [<div key={1} style={currentPage === 1 ? {color: "#ffffff"} : {}} onClick={()=>setPage(1)}>1</div>];

            if(iteration > 6){
                for (let index = 1; index < iteration - 1; index++) {
                    if(currentPage < 4){

                        if(!dots_right && index === currentPage + 4){
                            dots_right = !dots_right;
                            pages.push(<div key={6} style={currentPage === 6 ? {color: "#ffffff"} : {}} onClick={()=>setPage(6)}>...</div>);
                        } 
                        else if(index < 5) pages.push(<div key={index + 1} style={currentPage === index + 1 ? {color: "#ffffff"} : {}} onClick={()=>setPage(index + 1)}>{index + 1}</div>);

                    }
                    else if(currentPage > iteration - 3){
                        if(!dots_left && index === iteration - 6){
                            dots_left = !dots_left;
                            pages.push(<div key={index + 1} style={currentPage === index + 1 ? {color: "#ffffff"} : {}} onClick={()=>setPage(index + 1)}>...</div>);
                        } 
                        else if( index > iteration - 6) pages.push(<div key={index + 1} style={currentPage === index + 1 ? {color: "#ffffff"} : {}} onClick={()=>setPage(index + 1)}>{index + 1}</div>);
                    }
                    else{
                       
                        if(currentPage > 3 && !dots_left && index === currentPage - 3){
                            dots_left = !dots_left;
                            pages.push(<div key={index + 1} style={currentPage === index + 1 ? {color: "#ffffff"} : {}} onClick={()=>setPage(index + 1)}>...</div>);
                        } 
                        else if(currentPage < iteration - 2 && !dots_right && index === currentPage + 1){
                            dots_right = !dots_right;
                            pages.push(<div key={index + 1} style={currentPage === index + 1 ? {color: "#ffffff"} : {}} onClick={()=>setPage(index + 1)}>...</div>);
                        } 
                        else if(index > currentPage - 3 && index < currentPage + 1) pages.push(<div key={index + 1} style={currentPage === index + 1 ? {color: "#ffffff"} : {}} onClick={()=>setPage(index + 1)}>{index + 1}</div>);
                    }   
                
                }
            }
            else{
                for (let index = 1; index < iteration - 1; index++) {
                    pages.push(<div key={index + 1} style={currentPage === index + 1 ? {color: "#ffffff"} : {}} onClick={()=>setPage(index + 1)}>{index + 1}</div>);
                }
            }

            if(iteration != 1) pages.push(<div key={iteration} style={currentPage === iteration ? {color: "#ffffff"} : {}} onClick={()=>setPage(iteration)}>{iteration}</div>);
            return pages;
        } 

        return <div style={{color: "#ffffff"}}>1</div>
    }

    return(
        <div className="MyRecommendationNavigation">
            <h1 className="PageTitle">Гольдштейн рекомендует</h1>
                {children}
            <div className="Portfolio-works-pages">
                <div className="slide-arrow left" onClick={()=>{if(currentPage > 1)setPage((num)=>num - 1)}}></div>
                    <div className="works-pages" translate="no">
                        {create_a_new_page_if_necessary()}
                    </div>
                <div className="slide-arrow right" onClick={()=>{if(currentPage < iteration)setPage((num)=>num + 1)}}></div>
            </div>
        </div>
    );
}

export default memo(MyRecommendationNavigation);
