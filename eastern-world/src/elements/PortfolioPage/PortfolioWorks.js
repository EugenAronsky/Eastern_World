import "./PortfolioWorks.css";
import "./PortfolioWorks-adaptive.css";
import React, {useContext, useEffect, useMemo, memo } from "react";
import { amountOfPages } from "./PortfolioPage";
import WorkPage from "./WorkPage";
import { SortByData , SortByGaner} from "./SortWorks";

const PortfolioWorks = ({data}) => {

    // variables
    const {current, page_numbers} = data;
    const gener = useContext(amountOfPages).gener;
    const sortDataType = useContext(amountOfPages).sortDataType;
    const worksPerPage = useContext(amountOfPages).worksPerPage;
    
    // articals array
    let articalsList = Object.values(useContext(amountOfPages).article);
    //function
    const setAmountPages = useContext(amountOfPages).setAmountPages;

    // temporary
    for (let index = 0; index < 200; index++) {
        articalsList.push(articalsList[0])
        articalsList.push(articalsList[1])
        articalsList.push(articalsList[2])
    }
    
    articalsList = useMemo(()=>SortByGaner(articalsList, gener), [gener]);
    useMemo(()=>SortByData(articalsList, sortDataType), [sortDataType]);
    useEffect(()=>setAmountPages(articalsList.length));

    return(
        <div className="PortfolioWorks-box">
            <WorkPage list = {{articals: articalsList, page: current, page_numbers: page_numbers, worksPerPage: worksPerPage}}/>
        </div>
    );
}

export default memo(PortfolioWorks);