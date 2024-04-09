import ErrorPage from './elements/Common Elements/ErrorPage.js';
import Loader from './elements/Common Elements/Loader.js';
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './elements/App.js';
import axios from 'axios';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.Fragment>
    <Loader/>
  </React.Fragment>
);

const GetData = async() => {
  switch(window.location.pathname){
    case "/events/info":
      window.location.pathname = "/events";
    break;
    case "/recommendation/info":
      window.location.pathname = "/recommendation";
    break;
    case "/questions/answer":
      window.location.pathname = "/questions";
    break;
  }
  try{
    await axios.post("http://192.168.239.177:3000/api/getData")
    .then((response)=>{
      
      setTimeout(()=>{

        if( response.data.massage === 'Server error' ){
          root.render(
            <React.Fragment>
              <ErrorPage/>
            </React.Fragment>
          );
        }
        else{
          root.render(
            <React.Fragment>
                <App Data ={response.data.items}/>
            </React.Fragment>
          );
        }
        
      }, 1000);

    });
  }
  catch(error){
    alert(error)
  }
}

GetData();


    



