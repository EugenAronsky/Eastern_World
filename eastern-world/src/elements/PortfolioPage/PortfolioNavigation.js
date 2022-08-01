import "./PortfolioNavigation.css"
import "./PortfolioNavigation-adaptive.css"
import { amountOfPages } from "./PortfolioPage";
import React, {useState, useContext, memo} from "react";

const PortfolioNavigation = ({children}) => {

    const [isOpen, setOpen] = useState(false);

    // functions
    const setPage = useContext(amountOfPages).setPage;
    const setGener = useContext(amountOfPages).setGener;
    const setSortData = useContext(amountOfPages).setSortData;

    // variables
    const gener = useContext(amountOfPages).gener;
    const pagesAmount = useContext(amountOfPages).pages;
    const currentPage = useContext(amountOfPages).currentPage;
    const sortDataType = useContext(amountOfPages).sortDataType;
    const worksPerPage = useContext(amountOfPages).worksPerPage;

    // articals array
    const articalsList = Object.values(useContext(amountOfPages).article);


    // temporary
    for (let index = 0; index < 200; index++) {
        articalsList.push(articalsList[0])
        articalsList.push(articalsList[1])
        articalsList.push(articalsList[2])
    }

    const iteration = pagesAmount;

    function create_a_new_page_if_necessary(){
        if( articalsList.length > worksPerPage ){
            let dots_left, dots_right = false
            let pages = [<div key={1} style={currentPage === 1 ? {color: "#ffffff"} : {}} onClick={()=>setPage(1)}>1</div>];

            if(iteration > 6){
                for (let index = 1; index < iteration - 1; index++) {
                    if(currentPage < 4){

                        if(!dots_right && index === currentPage + 4){
                            dots_right = !dots_right;
                            pages.push(<div key={6} style={currentPage === 6 ? {color: "#ffffff"} : {}} onClick={()=>setPage(6)}>...</div>);
                        } 
                        else if(index < 5)pages.push(<div key={index + 1} style={currentPage === index + 1 ? {color: "#ffffff"} : {}} onClick={()=>setPage(index + 1)}>{index + 1}</div>);

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
        <div className="Portfolio-box">
            <div className="Portfolio-navbar">
                <h1>Портфолио</h1>
                <div className="sort-box">
                    <div className="sortByData" onClick={()=>{setSortData()}}>
                        <div className={sortDataType ? "line-icon" : "line-icon flip"}/>
                    </div>
                    <div className="sortByGenre">
                        <div>
                            <div className="drop-arrow-box">
                                <div className="drop-arrow" onClick={()=>setOpen((state)=>!state)}/>
                            </div>
                            <div className="line"></div>
                        </div>
                        <div>
                            <h2>{gener}</h2>
                        </div>
                        <div className={isOpen ? "drop-list drop-list-open" : "drop-list drop-list-close"}>
                            <div>
                                <div className={isOpen ? gener === "Аналитика" ? "visible choose" : "visible" : "hidden"} onClick={()=>setGener("Аналитика")}>Аналитика</div>
                                <div className={isOpen ? gener === "Иностранные языки" ? "visible choose" : "visible" : "hidden"} onClick={()=>setGener("Иностранные языки")}>Иностранные языки</div>
                                <div className={isOpen ? gener === "Интервью" ? "visible choose" : "visible" : "hidden"} onClick={()=>setGener("Интервью")}>Интервью</div>
                                <div className={isOpen ? gener === "Другое" ? "visible choose" : "visible" : "hidden"} onClick={()=>setGener("Другое")}>Другое</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

export default memo(PortfolioNavigation);

