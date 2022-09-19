import React, {useState, memo} from 'react';
import Button from "./Button.js"
import "./footer.css"
import "./Footer_Adaptive.css"

const Footer = ({upDate}) =>{    
    const {copyright, my_mail, termsOfUse} = upDate;
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", ()=>{
        setScreenWidth(window.innerWidth)
    })
    return (
        <footer>
            <div className = 'footer-container'>
                <div className='upSide'>
                    <div>
                        <span>Условия пользования</span>
                        {screenWidth <= 540 ? <Button content="ПРОЧЕСТЬ" width = "34.375vw" height = "9.162vw" link={termsOfUse} outside={true} target="_blank"/> : <Button content="ПРОЧЕСТЬ" width = "12.500vw" height = "3.125vw" link={termsOfUse} outside={true} target="_blank"/>}
                    </div>
                    <div className='secondEl'>
                        <span translate='no'>{localStorage.getItem("language") === "HA" ? "צור קשר" : localStorage.getItem("language") === "EN" ? "Contacts" : "Контакты"}</span>
                        <div onClick={ () => window.open(`mailto:${my_mail}`) }>
                            <div id = 'postIcon'></div>
                            <span>{my_mail}</span>
                        </div>
                    </div>
                </div>

                <div className = 'line'></div>

                <div className='WaterMark'>{copyright}</div>
            </div>
        </footer>
    );
}

export default memo(Footer);