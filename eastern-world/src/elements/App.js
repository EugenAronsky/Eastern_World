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
import QuestionsPage from './QuestionsPage/QuestionsPage';
import Inquire from './QuestionsPage/Inquire';
import Ask from './QuestionsPage/Ask';
import "./App.css"
// import translate from "../../../node_modules/translate"

export const ShareData = createContext();
export const windowSize = createContext();

const App = ({Data}) => {
   
    const [ServerData, setServerData] = useState( Data );

    // const startTranslate = async() => { 
    //     return await Promise.all(Object.values(ServerData).map(async(object, index)=>{

    //         const keys = Object.keys(object.fields);

    //         const result = await Promise.all(Object.values(object.fields).map(async(element, index)=>{

    //             if( typeof element === "string" && element.includes("https://") === false && element.includes("http://") === false && element.includes("Аналитика") === false && element.includes("Иностранные языки") === false && element.includes("Интервью") === false && element.includes("Другое") === false ){
    //                 return await translate(element, {from: "ru", to : localStorage.getItem("language").toLowerCase()})
    //             }
    //             else if(element.nodeType === "document") {
    //                 return await Promise.all(element.content.map(async(element)=>{
    //                     if(element.content[0].value === '' || element.content[0].value === '\n\n') return element.content[0].value;
    //                     return await translate(element.content[0].value, {from: "ru", to : localStorage.getItem("language").toLowerCase()})
    //                 }));
    //             }
    //             return element;
    //         }))

            
    //         return {metadata: ServerData[index].metadata, sys: ServerData[index].sys, fields: result.reduce((a, v, index) => ({ ...a, [keys[index]]: v}), {})};
    //     }))

    // }

    // useEffect(() => {
    //     startTranslate().then(result=>setServerData(result))
    // }, [Data]);
    
    const [currentPage, setCurrentPage] = useState(localStorage.getItem("Current_Page") || "HomePage");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [PageInfo, setPageInfo] = useState(Object.values(currentPage === "Recommendation" ? findMyData("recommendation", ServerData) : findMyData("announcement", ServerData))[0] );
    const [previousState, setPreviousState] = useState(["HomePage"]);
    const [newPage, setNewPage]  = useState(false);
    const [flag, setFlag] = useState(false);
    console.log(previousState)
    window.addEventListener("resize", ()=>{
        setScreenWidth(window.innerWidth);
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
        Data: ServerData,
        changePage: changePage,
        previousState: previousState,
        setPreviousState: (array)=>setPreviousState(array.slice(0, -1)),
    }

    function renderSwitch(param){
        switch (param) {
            case "HomePage":
                SavePrevState("HomePage");
                setNewPage((current)=> current = !current)
                return <HomePage ServerData = {ServerData}/>
        
            case "BiographyPage":
                SavePrevState("BiographyPage");
                setNewPage((current)=> current = !current)
                return <BiographyPage ServerData = {ServerData}/>

            case "PortfolioPage":
                SavePrevState("PortfolioPage");
                setNewPage((current)=> current = !current)
                return <PortfolioPage ServerData = {ServerData}/>

            case "MyRecommendationPage":
                SavePrevState("MyRecommendationPage");
                setNewPage((current)=> current = !current)
                return <MyRecommendationPage ServerData = {ServerData}/>

            case "EventsPage":
                SavePrevState("EventsPage");
                setNewPage((current)=> current = !current)
                return <EventsPage ServerData = {ServerData}/>
            
            case "HelpPage":
                SavePrevState("HelpPage");
                setNewPage((current)=> current = !current)
                return <HelpPage ServerData = {ServerData}/>

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

            case "QuestionsPage":
                SavePrevState("QuestionsPage");
                setNewPage((current)=> current = !current)
                return <QuestionsPage/>

            case "Inquire":
                SavePrevState("Inquire");
                setNewPage((current)=> current = !current)
                return <Inquire props = {searchProps}/>

            case "Ask":
                SavePrevState("Ask");
                setNewPage((current)=> current = !current)
                return <Ask props = {searchProps}/>
                
            default:
                return <HomePage ServerData = {ServerData}/>
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

    const page = useMemo(()=>renderSwitch(currentPage), [currentPage])
    
    return (
        <ShareData.Provider value = {[ServerData, changePage, changeWorkPageInfo]}>
            {currentPage !== "Search" ?
                <Layout>
                    <windowSize.Provider value={screenWidth}>
                        {page}
                    </windowSize.Provider>
                </Layout>
            :
                <windowSize.Provider value={screenWidth}>
                    {page}
                </windowSize.Provider>
            }
        </ShareData.Provider>
   );
}

export default memo(App);