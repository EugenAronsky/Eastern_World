import React, {useState, createContext} from 'react';
import HomePage from './HomePage/HomePage';
import BiographyPage from './BiographyPage/BiographyPage';
import PortfolioPage from './PortfolioPage/PortfolioPage';
import Layout from './Common Elements/Layout.js';
import "./App.css"

export const Data = createContext();
export const windowSize = createContext();

const App = ({newData}) => {
    const [currentPage, setCurrentPage] = useState(localStorage.getItem("Current_Page") || "HomePage");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
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

    function renderSwitch(param){
        switch (param) {
            case "HomePage":
                return <HomePage newData = {newData}/>
        
            case "BiographyPage":
                return <BiographyPage newData = {newData}/>

            case "PortfolioPage":
                return <PortfolioPage newData = {newData}/>

            default:
                return <HomePage newData = {newData}/>
        }
    }

    return (
        <Data.Provider value = {[newData, changePage]}>
            <Layout>
                <windowSize.Provider value={screenWidth}>
                    {renderSwitch(currentPage)}
                </windowSize.Provider>
            </Layout>
        </Data.Provider>
   );
}

export default App;