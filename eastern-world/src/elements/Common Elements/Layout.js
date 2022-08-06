import React, {useContext, memo} from "react";
import Header from './Header.js';
import Footer from './Footer.js';
import findMyData from './UpdateMeneger.js';
import {Data} from "../App";

const Layout = ({children}) =>{

    const data = useContext(Data);
    const newData = data[0];

    return (
        <>
            <Header upDate = {[findMyData('header', newData), data[1]]} />
                {children}
            <Footer upDate = {findMyData('footer', newData)}/>       
        </>
    );
}

export default memo(Layout);