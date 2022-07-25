import React, {useState} from 'react';
import Button from "./Button.js"
import "./footer.css"
import "./Footer_Adaptive.css"



const Footer = ({upDate}) =>{    
    let {copyright, mail, termsOfUse} = upDate;
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
                        {screenWidth <= 540 ? <Button content="ПРОЧЕСТЬ" width = "34.375vw" height = "9.162vw" link={termsOfUse}/> : <Button content="ПРОЧЕСТЬ" width = "12.500vw" height = "3.125vw" link={termsOfUse}/>}
                    </div>
                    <div className='secondEl'>
                        <span>Контакты</span>
                        <div onClick={ () => window.open(`mailto:${mail}`) }>
                            <div id = 'postIcon'></div>
                            <span>{mail}</span>
                        </div>
                    </div>
                </div>

                <div className = 'line'></div>

                <div className='WaterMark'>{copyright}</div>
            </div>
        </footer>
    );
}

export default Footer;