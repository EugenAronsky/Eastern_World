import React, {useState, createContext, useMemo, useEffect} from 'react';
import HomePage from './HomePage/HomePage';
import BiographyPage from './BiographyPage/BiographyPage';
import MyRecommendationPage from './MyRecommendationPage/MyRecommendationPage';
import PortfolioPage from './PortfolioPage/PortfolioPage';
import EventsPage from './EventsPage/EventsPage.js'
import Layout from './Common Elements/Layout.js';
import HelpPage from './HelpPage/HelpPage';
import "./App.css"

export const Data = createContext();
export const windowSize = createContext();

const App = ({newData}) => {
    const [currentPage, setCurrentPage] = useState(localStorage.getItem("Current_Page") || "HomePage");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [previousState, setPreviousState] = useState(["HomePage"]);
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

    const SavePrevState = (name) => {
        setPreviousState((prevState)=>{
            
            if(prevState[prevState.length - 1] !== name) return [...prevState, name];
            else return[...prevState];

        });
    }

    function renderSwitch(param){
        switch (param) {
            case "HomePage":
                SavePrevState("HomePage");
                return <HomePage newData = {newData}/>
        
            case "BiographyPage":
                SavePrevState("BiographyPage");
                return <BiographyPage newData = {newData}/>

            case "PortfolioPage":
                SavePrevState("PortfolioPage");
                return <PortfolioPage newData = {newData}/>

            case "MyRecommendationPage":
                SavePrevState("MyRecommendationPage");
                return <MyRecommendationPage newData = {newData}/>

            case "EventsPage":
                SavePrevState("EventsPage");
                return <EventsPage newData = {newData}/>
            
            case "HelpPage":
                SavePrevState("HelpPage");
                return <HelpPage newData = {newData}/>

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
    }, [previousState]);
    
    return (
        <Data.Provider value = {[newData, changePage]}>
            <Layout>
                <windowSize.Provider value={screenWidth}>
                    {useMemo(()=>renderSwitch(currentPage), [currentPage])}
                </windowSize.Provider>
            </Layout>
        </Data.Provider>
   );
}

export default App;