import React from 'react';
import "./footer.css"
import Button from "./Button.js"

const Footer = () =>{
    return (
        <footer>
            <div className = 'footer-container'>
                <div className='upSide'>
                    <div>
                        <span>Условия пользования</span>
                        <Button content="ПРОЧЕСТЬ" w = "12.500vw" h = "3.125vw"/>
                    </div>
                    <div className='secondEl'>
                        <span>Контакты</span>
                        <div>
                            <div id = 'postIcon'></div>
                            <span>contact@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className = 'line'></div>

                <div className='WaterMark'>Все права защищены © 2022 Eastern World</div>
            </div>
        </footer>
    );
}

export default Footer;