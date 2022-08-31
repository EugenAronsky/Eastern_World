import React, {useState, createContext, useMemo, useEffect,  memo} from 'react';
import HomePage from './HomePage/HomePage';
import findMyData from './Common Elements/UpdateMeneger';
import BiographyPage from './BiographyPage/BiographyPage';
import MyRecommendationPage from './MyRecommendationPage/MyRecommendationPage';
import PortfolioPage from './PortfolioPage/PortfolioPage';
import EventsPage from './EventsPage/EventsPage.js'
import Layout from './Common Elements/Layout.js';
import HelpPage from './HelpPage/HelpPage.js';
import Recommendation from './MyRecommendationPage/Recommendation.js';
import AdditionalInfo from './EventsPage/AdditionalInfo';
import Search from './Common Elements/Search';
import "./App.css"

export const Data = createContext();
export const windowSize = createContext();

const App = ({newData}) => {
    const [currentPage, setCurrentPage] = useState(localStorage.getItem("Current_Page") || "HomePage");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [PageInfo, setPageInfo] = useState(Object.values(currentPage === "Recommendation" ? findMyData("recommendation", newData) : findMyData("announcement", newData))[0] );
    const [previousState, setPreviousState] = useState(["HomePage"]);
    const [newPage, setNewPage]  = useState(false);
    const [flag, setFlag] = useState(false);

    window.addEventListener("resize", ()=>{
        setScreenWidth(window.innerWidth)
    });

    const changePage = (page) => {
        if(localStorage.getItem("Current_Page") !== page){
            localStorage.setItem("Current_Page", page);
            window.scrollTo(0, 0);
            setCurrentPage(page);
        }
        else{
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }

    const changeWorkPageInfo = (info) => {
        setPageInfo( info );
    }

    const SavePrevState = (name) => {
        setPreviousState((prevState)=>{
            if(prevState[prevState.length - 1] !== name) return [...prevState, name];
            else return[...prevState];
        });
    }

    const searchProps = {
        Data: newData,
        changePage: changePage,
        previousState: previousState,
        setPreviousState: (array)=>setPreviousState(array.slice(0, -1)),
    }

    function renderSwitch(param){
        switch (param) {
            case "HomePage":
                SavePrevState("HomePage");
                setNewPage((current)=> current = !current)
                return <HomePage newData = {newData}/>
        
            case "BiographyPage":
                SavePrevState("BiographyPage");
                setNewPage((current)=> current = !current)
                return <BiographyPage newData = {newData}/>

            case "PortfolioPage":
                SavePrevState("PortfolioPage");
                setNewPage((current)=> current = !current)
                return <PortfolioPage newData = {newData}/>

            case "MyRecommendationPage":
                SavePrevState("MyRecommendationPage");
                setNewPage((current)=> current = !current)
                return <MyRecommendationPage newData = {newData}/>

            case "EventsPage":
                SavePrevState("EventsPage");
                setNewPage((current)=> current = !current)
                return <EventsPage newData = {newData}/>
            
            case "HelpPage":
                SavePrevState("HelpPage");
                setNewPage((current)=> current = !current)
                return <HelpPage newData = {newData}/>

            case "Recommendation":
                SavePrevState("Recommendation");
                setNewPage((current)=> current = !current)
                return <Recommendation info = {PageInfo}/>

            case "AdditionalInfo":
                SavePrevState("AdditionalInfo");
                setNewPage((current)=> current = !current)
                return <AdditionalInfo info = {PageInfo}/>
                
             case "Search":
                SavePrevState("Search");
                setNewPage((current)=> current = !current)
                return <Search props = {searchProps}/>

            default:
                return <HomePage newData = {newData}/>
        }
    }

    window.onpopstate = function(event) {
        event.preventDefault();
        setFlag((current)=>current = !current);
        setPreviousState(previousState.slice(0, -1));
    };

    useEffect(() => {
        changePage(previousState[previousState.length - 1]);
        if(previousState.length === 0) {
            window.history.back()
        };
    }, [flag]);

    useEffect(() => {
        window.history.pushState( previousState[previousState.length - 1], window.location.href);
        // console.log(window.history.state);
    }, [newPage]);
    
    return (
        <Data.Provider value = {[newData, changePage, changeWorkPageInfo]}>
            {currentPage !== "Search" ?
                <Layout>
                    <windowSize.Provider value={screenWidth}>
                        {useMemo(()=>renderSwitch(currentPage), [currentPage])}
                    </windowSize.Provider>
                </Layout>
            :
                <windowSize.Provider value={screenWidth}>
                    {useMemo(()=>renderSwitch(currentPage), [currentPage])}
                </windowSize.Provider>
            }
        </Data.Provider>
   );
}

export default memo(App);