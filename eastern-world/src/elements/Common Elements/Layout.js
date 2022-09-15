import React, {useContext, memo} from "react";
import Header from './Header.js';
import Footer from './Footer.js';
import findMyData from './UpdateMeneger.js';
import {ShareData} from "../App";

const Layout = ({children}) =>{

    const data = useContext(ShareData);
    const ServerData = data[0];

    return (
        <>
            <Header upDate = {[findMyData('header', ServerData), data[1], findMyData('help', ServerData), children.props.children.props.children]} />
                {children}
            <Footer upDate = {findMyData('footer', ServerData)}/>       
        </>
    );
}

export default memo(Layout);