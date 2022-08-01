import "./PortfolioWorks.css";
import React, { memo, useCallback} from "react";
import PortfolioCard from "../HomePage/PortfolioCard";

const WorkPage = ({list}) =>{
    const {articals, page, page_numbers, worksPerPage} = list;
    let iteration = null; 


    const fillPage = useCallback(()=>{
        let articlesList = [];
        
        if(page < page_numbers) {
            if(articals.length < worksPerPage) iteration = articals.length;
            else iteration = worksPerPage;
        }
        else iteration = articals.length - worksPerPage * (page_numbers - 1);

        for (let index = 0; index < iteration; index++) {
            articlesList.push(<PortfolioCard key = {index} data = {articals[index + (worksPerPage * (page - 1))]}/>);
        }
        
        return articlesList;
    }, [list]);

    return(<div className="page">{fillPage()}</div>);
}

export default memo(WorkPage);