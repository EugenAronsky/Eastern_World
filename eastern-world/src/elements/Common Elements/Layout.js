import React from "react";
import Header from './Header.js';
import Footer from './Footer.js';
import findMyData from './UpdateMeneger.js';

const Layout = ({children}, newData) =>{
    return (
        <>
            <Header upDate = {findMyData('header', newData)}/>
                {children}
            <Footer upDate = {findMyData('footer', newData)}/>       
        </>
    );
}

export default Layout;