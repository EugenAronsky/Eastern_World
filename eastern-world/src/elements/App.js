import React from 'react';
import Header from './Header.js';
import HomePage from './HomePage.js';
import Footer from './Footer.js';
import Slider from './Slider.js';

const base_values = {

    Header:{
  
    },
    
    Footer:{
        mail:"contact@gmail.com",
        termsOfUse: "",
        copyright: "qaw"
    }
  
}

function findMyData(name, data){
    for (let index = 0; index < data.length; index++) {
        if(data[index].sys.contentType.sys.id === name) return data[index].fields;
    }
    return base_values.Footer;
}

const App = ({newData}) => {
   return (
    <div>
        <Header/>
            <HomePage>
                <Slider/>
            </HomePage>
        <Footer upDate = {findMyData('footer', newData)}/>
    </div>
   );
}

export default App;