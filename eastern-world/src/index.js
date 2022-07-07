import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './elements/App.js';
import client from "./elements/Client.js"

async function getUpdate(){

  await client.getEntries().then((Data)=>{

    const Foote = Data.items[0].sys.contentType.sys.id;

    console.log(Data.items);

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App newData ={Data.items}/>
      </React.StrictMode>
    );
    
  })

}

getUpdate();

