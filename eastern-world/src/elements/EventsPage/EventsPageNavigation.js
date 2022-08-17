import React, { memo, useContext} from "react";
import './EventsPageNavigation.css'
import { pagesData } from "./EventsPage";

const EventsPageNavigation = ({children}) =>{

    const setPage = useContext(pagesData).setCurrentPage;
    const currentPage = useContext(pagesData).currentPage;
    const amountOfAnnouncement = useContext(pagesData).amountOfAnnouncement;
    const iteration = Math.ceil(amountOfAnnouncement / 5);

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
                for (let index = 1; index < iteration; index++) {
                    pages.push(<div key={index + 1} style={currentPage === index + 1 ? {color: "#ffffff"} : {}} onClick={()=>setPage(index + 1)}>{index + 1}</div>);
                }
            }

            if(iteration != 1) pages.push(<div key={iteration} style={currentPage === iteration ? {color: "#ffffff"} : {}} onClick={()=>setPage(iteration)}>{iteration}</div>);
            return pages;
        } 

        return <div style={{color: "#ffffff"}}>1</div>
    }

    return(
        <>
        <h1 className="PageTitle">Мероприятия</h1>
        {children}
        <div className="Portfolio-works-pages">
            <div className="slide-arrow left" onClick={()=>{if(currentPage > 1) setPage((num)=>num - 1)}}></div>
                <div className="works-pages" translate="no">
                    {create_a_new_page_if_necessary()}
                </div>
            <div className="slide-arrow right" onClick={()=>{if(currentPage < iteration) setPage((num)=>num + 1)}}></div>
        </div> 
        </>
    );
}

export default memo(EventsPageNavigation);