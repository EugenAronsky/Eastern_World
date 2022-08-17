import React from 'react';
import {useState, memo} from 'react';
import "./header.css"
import "./Header_Adaptive.css"

const Header = ({upDate}) => {
    const {logo} = upDate[0];
    const changePageFunction = upDate[1];

    const [isActive, setIsActive] = useState(false);
    const [isActiveLang, setIsActiveLang] = useState(false);
    const language = localStorage.getItem("language") || "RU";
    const currentPage = localStorage.getItem("Current_Page") || "HomePage";

    const handleClick = event => {
      setIsActive(current => !current);
      if(!isActive && window.innerWidth <= 540) setIsActiveLang(false); 
    }

    const handleClickLang = event => {
        setIsActiveLang(current => !current);
    };

    return (
        <header>
            <a onClick={()=>changePageFunction("HomePage")} className = 'logo'></a>
            <nav>
                <a onClick={()=>changePageFunction("HomePage")} className = {currentPage === "HomePage" ? 'active' : ''}>ГЛАВНАЯ</a>
                <a onClick={()=>changePageFunction("BiographyPage")} className = {currentPage === "BiographyPage" ? 'active' : ''}>БИОГРАФИЯ</a>
                <a onClick={()=>changePageFunction("PortfolioPage")} className = {currentPage === "PortfolioPage" ? 'active' : ''}>ПОРТФОЛИО</a>
                <a onClick={()=>changePageFunction("EventsPage")} className = {currentPage === "EventsPage" ? 'active' : ''}>МЕРОПРИЯТИЯ</a>
            </nav>
            <div className = 'additional_options'>
                <div className='iconBox'>
                    <div className='iconBoxLine'></div>
                    <div className='Icon langIcon' onClick={handleClickLang} translate="no" >{language}</div>
                    <div className={isActiveLang ? 'langMenu langMenuOpen'  : 'langMenu langMenuClose' } >
                        <div data-google-lang="ru" onClick={()=>{localStorage.setItem("language", "RU"); handleClickLang()}} className={ language === "RU" ? "langActive" : ""} translate="no" >RU</div>
                        <div data-google-lang="en" onClick={()=>{localStorage.setItem("language", "EN"); handleClickLang()}} className={ language === "EN" ? "langActive" : ""} translate="no" >EN</div>
                        <div data-google-lang="iw" onClick={()=>{localStorage.setItem("language", "HA"); handleClickLang()}} className={ language === "HA" ? "langActive" : ""} translate="no" >HA</div>
                    </div>
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
                            <div className='Icon langIcon' onClick={handleClickLang} translate="no" >{language}</div>
                                <div className={isActiveLang ? 'langMenu langMenuOpen'  : 'langMenu langMenuClose' } style={ isActive ? {} : {display: "none"}}>
                                    <div data-google-lang="ru" onClick={()=>{localStorage.setItem("language", "RU"); handleClickLang()}} className={ language === "RU" ? "langActive" : ""} translate="no" >RU</div>
                                    <div data-google-lang="en" onClick={()=>{localStorage.setItem("language", "EN"); handleClickLang()}} className={ language === "EN" ? "langActive" : ""} translate="no" >EN</div>
                                    <div data-google-lang="iw" onClick={()=>{localStorage.setItem("language", "HA"); handleClickLang()}} className={ language === "HA" ? "langActive" : ""} translate="no" >HA</div>
                                </div>
                            <div className='Icon searchIcon' ></div>
                            <div className='Icon burgerMenuIcon'  onClick={handleClick}></div>
                        </div>
                        <a className={isActive ? currentPage === "BiographyPage" ? 'show activeBurger' : 'show' : 'hide'} onClick={()=>changePageFunction("BiographyPage")}>БИОГРАФИЯ</a>
                        <a className={isActive ? currentPage === "PortfolioPage" ? 'show activeBurger A-line' : 'show A-line' : 'hide'} onClick={()=>changePageFunction("PortfolioPage")}>ПОРТФОЛИО</a>
                        <a className={isActive ? currentPage === "EventsPage" ? 'show activeBurger A-line' : 'show A-line' : 'hide'} onClick={()=>changePageFunction("EventsPage")}>МЕРОПРИЯТИЯ</a>
                        <a className={isActive ? currentPage === "MyRecommendationPage" ? 'show activeBurger A-line' : 'show A-line' : 'hide'} onClick={()=>changePageFunction("MyRecommendationPage")}>РЕКОМЕНДАЦИИ</a>
                        <a className={isActive ? currentPage === "QuestionPage" ? 'show activeBurger A-line' : 'show A-line' : 'hide'} onClick={()=>changePageFunction("QuestionPage")}>ВОПРОС/ОТВЕТ</a>
                        <a className={isActive ? currentPage === "HelpPage" ? 'show activeBurger A-line' : 'show A-line' : 'hide'} onClick={()=>changePageFunction("HelpPage")}>ПОМОЩЬ УКРАИНЕ</a>
                        <a className={isActive ? currentPage === "ContactsPage" ? 'show activeBurger A-line' : 'show A-line' : 'hide'} onClick={()=>changePageFunction("HomePage")}>КОНТАКТЫ</a>
                        <a className={isActive ? 'show tg' : 'hide tg'} target="blank" href="https://t.me/eastern_world"></a>
                    </nav>  
                </div>
            </div>
        </header>
    );
}

export default memo(Header);