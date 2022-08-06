import React, {createContext, useState, useContext, memo} from "react";
import "./PortfolioPage.css"
import "./PortfolioPage-adaptive.css"
import PortfolioWorks from "./PortfolioWorks";
import PortfolioNavigation from "./PortfolioNavigation";
import findMyData from '../Common Elements/UpdateMeneger.js';
import { windowSize } from "../App"; 

export const amountOfPages = createContext();

const PortfolioPage = ({newData}) =>{
    const [pages, setAmountPages] = useState( 1 );
    const [gener, setGener] = useState("Аналитика");
    const [currentPage, setCurrentPage] = useState(1);
    const [sortDataType, setNewData] = useState(true);
    const screenWidth = useContext(windowSize);
    const worksPerPage = screenWidth < 540 ? 6 : 12;

    const properties = {
        
        // articals object
        article: findMyData("article", newData),

        // variables
        gener: gener,
        pages: pages,
        currentPage: currentPage,
        sortDataType: sortDataType,
        worksPerPage: worksPerPage,

        // functions
        setPage: (number) => {setCurrentPage(number)},
        setSortData: () => {setNewData(state => !state)},
        setGener: (name) => {setGener(prop => prop = name); setCurrentPage(1)},
        setAmountPages: (number) => {setAmountPages( Math.ceil( number / worksPerPage ))},
    }

    return(
        <div className="PortfolioPage" >
            <div className="pp-bg">
                <div className="portfolio-bg"></div>
                <div className="portfolio-img"></div>
            </div>
            <amountOfPages.Provider value = {properties}>
                <PortfolioNavigation>
                    <PortfolioWorks data = {{current: currentPage, page_numbers: pages}}/>
                </PortfolioNavigation>
            </amountOfPages.Provider>
        </div>
    )
}

export default memo(PortfolioPage);