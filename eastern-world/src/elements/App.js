import React, {useState, createContext, useMemo, useEffect, memo} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
import ErrorPage from './Common Elements/ErrorPage';
import Search from './Common Elements/Search';
import QuestionsPage from './QuestionsPage/QuestionsPage';
import Inquire from './QuestionsPage/Inquire';
import Answer from './QuestionsPage/Answer';
import Ask from './QuestionsPage/Ask';
import "./App.css"
import './RTL.css';

export const ShareData = createContext();
export const windowSize = createContext();

const rtl = () =>{
    document.getElementById("body").style.transform = `rotateY(180deg)`;
}

const App = ({Data}) => {
    const [ServerData, setServerData] = useState( Data );
    // localStorage.getItem("language") === "HA" ? rtl() : document.getElementById("body").style.transform = ``
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
    const [questionData, setQuestionData] = useState(null);

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

    const common_props = {
        Data: ServerData,
        PageInfo: PageInfo,
        ServerData: ServerData,
        changePage: changePage,
        questionData: questionData,
        previousState: previousState,
        setQuestionData: setQuestionData,
        setPreviousState: (array)=>setPreviousState(array.slice(0, -1)),
    }

    return (
        <Router>
            <ShareData.Provider value = {[ServerData, changePage, changeWorkPageInfo]}>
                <Layout>
                    <windowSize.Provider value={screenWidth}>
                        <Routes>
                            <Route key = "HomePage" exact path="/" element={<HomePage ServerData = {ServerData}/>}/>
                            <Route key = "BiographyPage" exact path="/biography" element={<BiographyPage ServerData = {ServerData}/>}/>
                            <Route key = "PortfolioPage" exact path="/portfolio" element={<PortfolioPage ServerData = {ServerData}/>}/>
                            <Route key = "EventsPage" exact path="/events" element={<EventsPage ServerData = {ServerData}/>}/>
                            <Route key = "MyRecommendationPage" exact path="/recommendation" element={<MyRecommendationPage ServerData = {ServerData}/>}/>
                            <Route key = "HelpPage" exact path="/help" element={<HelpPage ServerData = {ServerData}/>}/>
                            <Route key = "Recommendation" exact path="/recommendation/info" element={<Recommendation info = {PageInfo}/>}/>
                            <Route key = "AdditionalInfo" exact path="/events/info" element={<AdditionalInfo info = {PageInfo}/>}/>
                            <Route key = "QuestionsPage" exact path="/questions" element={<QuestionsPage  props = {common_props}/>}/>
                            <Route key = "Inquire" exact path="/questions/inquire" element={<Inquire props = {common_props}/>}/>
                            <Route key = "Answer" exact path="/questions/answer" element={<Answer props = {common_props}/>}/>
                            <Route key = "Ask" exact path="/questions/ask" element={<Ask props = {common_props}/>}/>
                            <Route key = "Search" exact path="/search" element={<Search props = {common_props}/>}/>
                            <Route key = "Error" exact path="/error" element={<ErrorPage/>}/>
                        </Routes>
                    </windowSize.Provider>
                </Layout>
            </ShareData.Provider>
        </Router>
   );
}

export default memo(App);