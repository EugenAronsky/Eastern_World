import React from 'react';
import Header from './Header.js';
import HomePage from './HomePage.js';
import Footer from './Footer.js';

import Slider from './Slider.js';


const App = () => {
   return (
    <div>
        <Header/>
            <HomePage>
                <Slider/>
            </HomePage>
        <Footer/>
    </div>
   );
}

export default App;