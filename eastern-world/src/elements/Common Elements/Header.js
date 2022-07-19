import React from 'react';
import {useState} from 'react';
import "./header.css"
import "./Header_Adaptive.css"

const Header = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
      setIsActive(current => !current);
    };

    return (
        <header>
            <a href="http://localhost:3000/" className = 'logo'></a>
            <nav>
                <a className = 'active' href="http://localhost:3000/">ГЛАВНАЯ</a>
                <a href="http://localhost:3000/">БИОГРАФИЯ</a>
                <a href="http://localhost:3000/">ПОРТФОЛИО</a>
                <a href="http://localhost:3000/">МЕРОПРИЯТИЯ</a>
            </nav>
            <div className = 'additional_options'>
                <div className='iconBox'>
                    <div className='iconBoxLine'></div>
                    <div className='Icon langIcon'></div>

                </div>
                <div className='iconBox'>
                    <div className='iconBoxLine'></div>
                    <div className='Icon searchIcon'></div>
                </div>
                <div className='iconBox'>
                    <div className='iconBoxLine'></div>
                    <div className='Icon burgerMenuIcon' onClick={handleClick}></div>
                    <nav className={isActive ? 'burgerMenuOpen burgerMenu' : 'burgerMenuClose burgerMenu'}>
                        <div className="iconMenuBox">
                            <div className='Icon langIcon' ></div>
                            <div className='Icon searchIcon' ></div>
                            <div className='Icon burgerMenuIcon'  onClick={handleClick}></div>
                        </div>
                        <a className={isActive ? 'show ' : 'hide'} href="">БИОГРАФИЯ</a>
                        <a className={isActive ? 'show A-line' : 'hide'} href="">ПОРТФОЛИО</a>
                        <a className={isActive ? 'show A-line' : 'hide'} href="">МЕРОПРИЯТИЯ</a>
                        <a className={isActive ? 'show A-line' : 'hide'} href="">РЕКОМЕНДАЦИИ</a>
                        <a className={isActive ? 'show A-line' : 'hide'} href="">ВОПРОС/ОТВЕТ</a>
                        <a className={isActive ? 'show A-line' : 'hide'} href="">ПОМОЩЬ УКРАИНЕ</a>
                        <a className={isActive ? 'show A-line' : 'hide'} href="">КОНТАКТЫ</a>
                        <a className={isActive ? 'show tg' : 'hide tg'} target="blank" href="https://t.me/eastern_world"></a>
                    </nav>  
                </div>
            </div>
        </header>
    );
}

export default Header;