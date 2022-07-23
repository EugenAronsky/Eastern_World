import React, {createContext} from 'react';
import HomePage from './HomePage/HomePage';
import Layout from './Common Elements/Layout.js';
import "./App.css"

const context = createContext("RU");

const App = ({newData}) => {
    return (
        <Layout upDate = {newData}>
            <HomePage newData = {newData}/>
        </Layout>
   );
}

export default App;