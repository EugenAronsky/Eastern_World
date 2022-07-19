import React from 'react';
import HomePage from './HomePage/HomePage';
import Layout from './Common Elements/Layout.js';
import "./App.css"

const App = ({newData}) => {
    return (
    <div>
        <Layout upDate = {newData}>
            <HomePage newData = {newData}/>
        </Layout>
    </div> 
   );
}

export default App;