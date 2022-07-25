import React, {useState, createContext} from 'react';
import HomePage from './HomePage/HomePage';
import BiographyPage from './BiographyPage/BiographyPage';
import Layout from './Common Elements/Layout.js';
import "./App.css"

export const Data = createContext();

const App = ({newData}) => {
    const [currentPage, setCurrentPage] = useState(localStorage.getItem("Current_Page") || "HomePage");

    const changePage = (page) => {
        localStorage.setItem("Current_Page", page);
        setCurrentPage(page);
    }

    function renderSwitch(param){
        switch (param) {
            case "HomePage":
                return <HomePage newData = {newData}/>
        
            case "BiographyPage":
                return <BiographyPage newData = {newData}/>

            default:
                return <HomePage newData = {newData}/>
        }
    }

    return (
        <Data.Provider value = {[newData, changePage]}>
            <Layout>
                {renderSwitch(currentPage)}
            </Layout>
        </Data.Provider>
   );
}

export default App;