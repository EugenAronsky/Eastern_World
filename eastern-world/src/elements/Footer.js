import React from 'react';
import "./footer.css"
import Button from "./Button.js"



const Footer = (upDate) =>{    
    let {copyright, mail, termsOfUse} = upDate.upDate
    return (
        <footer>
            <div className = 'footer-container'>
                <div className='upSide'>
                    <div>
                        <span>Условия пользования</span>
                        <Button content="ПРОЧЕСТЬ" w = "12.500vw" h = "3.125vw" link={termsOfUse}/>
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