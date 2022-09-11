import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './elements/App.js';
import axios from 'axios';
import './index.css';


const GetData = async() => {
  try{
    await axios.post("http://localhost:8000/api/getData")
    .then((response)=>{
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
        <React.Fragment>
          <App Data ={response.data.items}/>
        </React.Fragment>
      );
    });
  }
  catch(error){
    alert(error)
  }
}

GetData();

const f = async() => await axios.post("http://localhost:8000/api/addNewComment", {
  firstName: 'Fred',
  lastName: 'Flintstone'
})

f()
    



