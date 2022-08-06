import React, { useState, memo, createContext, useMemo } from "react";
import EventsPageNavigation from "./EventsPageNavigation";
import findMyData from '../Common Elements/UpdateMeneger.js';
import { SortByData } from "./SortByDataAnnouncement";
import Announcement from "./Announcement";
import './EventsPage.css'

export const pagesData = createContext();

const EventsPage = ({newData}) =>{
    const Announcement_list = useMemo(()=>SortByData(Object.values(findMyData('announcement', newData))),[Announcement_list]).map((data, i)=><Announcement key={i} data={data}/>);
    const [currentPage, setCurrentPage] = useState( 1 );
    const props = {
        //varibles
        currentPage: currentPage,
        amountOfAnnouncement: Announcement_list.length,

        //function 
        setCurrentPage: (number)=>setCurrentPage(number),
    }

    return(
        <div className="EventsPage">
            <div className="EventsPage-container">
                <pagesData.Provider value={props}>
                    <EventsPageNavigation>
                            {Announcement_list.splice((currentPage - 1) * 5, 5)}
                    </EventsPageNavigation>
                </pagesData.Provider>
            </div>
        </div>
    );
}

export default memo(EventsPage);