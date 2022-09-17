import React, {useState, useEffect, memo}from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./header.css"
import "./Header_Adaptive.css"

const Header = ({upDate}) => {
    const {logo} = upDate[0];
    const changePageFunction = upDate[1];
    const help_title = upDate[2].title.toUpperCase();
    const newCurrentPage = upDate[3];

    const location = useLocation();
    
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

    useEffect(() => {
        const page = newCurrentPage.filter(element => element.props.path === window.location.pathname)
        changePageFunction( page[0].key );
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if(!document.getElementById("hamburger").contains(e.target) && e.target.id !== "menu_btn") {
                if(!isActive && window.innerWidth <= 540) setIsActiveLang(false); 
                setIsActive(false);
            }
            if(!document.getElementById("lang_list").contains(e.target) && e.target.id !== "lang_open")
            setIsActiveLang(false);
        })
    },[])

    return (
        <header>
            <Link to="/" className = 'logo'></Link>
            <nav>
                <Link to="/" className = {currentPage === "HomePage" ? 'active' : ''}>ГЛАВНАЯ</Link>
                <Link to="/biography" className = {currentPage === "BiographyPage" ? 'active' : ''}>БИОГРАФИЯ</Link>
                <Link to="/portfolio" className = {currentPage === "PortfolioPage" ? 'active' : ''}>ПОРТФОЛИО</Link>
                <Link to="/events" className = {currentPage === "EventsPage" ? 'active' : ''}>МЕРОПРИЯТИЯ</Link>
            </nav>
            <div className = 'additional_options'>
                <div className='iconBox'>
                    <div className='iconBoxLine'></div>
                    <div id="lang_open" className='Icon langIcon' onClick={handleClickLang} translate="no" >{language}</div>
                    <div id="lang_list" className={isActiveLang ? 'langMenu langMenuOpen'  : 'langMenu langMenuClose' } >
                        <div data-google-lang="ru" onClick={()=>{localStorage.setItem("language", "RU"); handleClickLang()}} className={ language === "RU" ? "langActive" : ""} translate="no" >RU</div>
                        <div data-google-lang="en" onClick={()=>{localStorage.setItem("language", "EN"); handleClickLang()}} className={ language === "EN" ? "langActive" : ""} translate="no" >EN</div>
                        <div data-google-lang="iw" onClick={()=>{localStorage.setItem("language", "HA"); handleClickLang()}} className={ language === "HA" ? "langActive" : ""} translate="no" >HA</div>
                    </div>
                </div>
                <div className='iconBox'>
                    <div className='iconBoxLine'></div>
                    <Link to="/search" className='Icon searchIcon'/>
                </div>
                <div className='iconBox'>
                    <div className='iconBoxLine'></div>
                    <div id="menu_btn" className='Icon burgerMenuIcon' onClick={handleClick}></div>
                    <nav id='hamburger' className={isActive ? 'burgerMenuOpen burgerMenu' : 'burgerMenuClose burgerMenu'}>
                        <div className="iconMenuBox">
                            <div id="lang_open" className='Icon langIcon' onClick={handleClickLang} translate="no" >{language}</div>
                                <div id="lang_list" className={isActiveLang ? 'langMenu langMenuOpen'  : 'langMenu langMenuClose' } style={ isActive ? {} : {display: "none"}}>
                                    <div data-google-lang="ru" onClick={()=>{localStorage.setItem("language", "RU"); handleClickLang()}} className={ language === "RU" ? "langActive" : ""} translate="no" >RU</div>
                                    <div data-google-lang="en" onClick={()=>{localStorage.setItem("language", "EN"); handleClickLang()}} className={ language === "EN" ? "langActive" : ""} translate="no" >EN</div>
                                    <div data-google-lang="iw" onClick={()=>{localStorage.setItem("language", "HA"); handleClickLang()}} className={ language === "HA" ? "langActive" : ""} translate="no" >HA</div>
                                </div>
                            <Link to="/search" className='Icon searchIcon'/>
                            <div className='Icon burgerMenuIcon' onClick={handleClick}></div>
                        </div>
                        <Link to="/biography" className={isActive ? currentPage === "BiographyPage" ? 'show activeBurger' : 'show' : 'hide'}>БИОГРАФИЯ</Link>
                        <Link to="/portfolio" className={isActive ? currentPage === "PortfolioPage" ? 'show activeBurger A-line' : 'show A-line' : 'hide'}>ПОРТФОЛИО</Link>
                        <Link to="/events" className={isActive ? currentPage === "EventsPage" ? 'show activeBurger A-line' : 'show A-line' : 'hide'}>МЕРОПРИЯТИЯ</Link>
                        <Link to="/recommendation" className={isActive ? currentPage === "MyRecommendationPage" ? 'show activeBurger A-line' : 'show A-line' : 'hide'}>РЕКОМЕНДАЦИИ</Link>
                        <Link to="/questions" className={isActive ? currentPage === "QuestionsPage" ? 'show activeBurger A-line' : 'show A-line' : 'hide'}>ВОПРОС/ОТВЕТ</Link>
                        <Link to="/help" className={isActive ? currentPage === "HelpPage" ? 'show activeBurger A-line' : 'show A-line' : 'hide'}>{help_title}</Link>
                        <a className={isActive ? currentPage === "ContactsPage" ? 'show activeBurger A-line' : 'show A-line' : 'hide'} onClick={()=>{document.getElementById("root").scrollTo({top: document.getElementById("root").scrollHeight, behavior: "smooth"})}}>КОНТАКТЫ</a>
                        <a href="https://t.me/eastern_world" className={isActive ? 'show tg' : 'hide tg'} target="blank"></a>
                    </nav>  
                </div>
            </div>
        </header>
    );
}

export default (Header);