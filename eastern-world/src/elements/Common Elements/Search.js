import React, {useState, useMemo, useEffect, memo, useCallback} from 'react';
import UnpackDescriptionWithLinks from "../Common Elements/UnpackLinks";
import findMyData from '../Common Elements/UpdateMeneger.js';
import { useNavigate } from 'react-router-dom';
import translate from 'translate';
import Button from './Button.js'
import "./Search.css"

const ResultField = ({element}) => {
    const picture = ( typeof element.picture !== 'undefined' ? element.picture : typeof element.articleImage !== 'undefined' ? element.articleImage : element.previewImage );

    const date = ( typeof element.date !== 'undefined' ? element.date : element.addition ).split(',')[0];
    const description = ( typeof element.description !== 'undefined' ? element.description : element.text );
    const link = ( element.type === 'Рекомендации' ? '/recommendation/info' : element.type === 'Анонсы' ? "/events/info" : element.link );
    const memoUnpackDescription = useMemo( ()=>UnpackDescriptionWithLinks(description), [description] );
    const outside = link.includes("http");
    return (
        <div className='ResultField'>
            <div className='PreviewImage' style={{backgroundImage: `url(${picture.fields.file.url})`}}/>
            <div className='ResultTextBox'>
                <div className='InfoLine'>
                    <h1>{date}</h1>
                    <h2>{element.type}</h2>
                </div>
                <h1>{element.title}</h1>
                <h3 className='Date'>{date}</h3>
                <div className='Intro'>{memoUnpackDescription}</div>
                <div className='NewButton'>
                    <h2>{element.type}</h2>
                    <Button content = "УЗНАТЬ БОЛЬШЕ" width = "fit-content" height = "1.042vw" link={link} change={element} outside={outside} target={outside ? "_blank" : "_self"}/>
                </div>
            </div>
        </div>
    );
}

const Search = ({props}) =>{    
    const {Data} = props;
    const portfolio = Object.values(findMyData('article', Data));
    const announcements = Object.values(findMyData('announcement', Data));
    const recommendation = Object.values(findMyData('recommendation', Data));
    const navigate = useNavigate();

    portfolio.forEach((element)=>element.type = "Портфолио");
    announcements.forEach((element)=>element.type = "Анонсы");
    recommendation.forEach((element)=>element.type = "Рекомендации");
    
    const [searchField, setSearchField] = useState( '' );
    const [SearchResult, setSearchResult] = useState( [...portfolio, ...announcements, ...recommendation].map((element, key)=><ResultField key={key} element={element}/>) );
    
    const search = async() => {
        const array = [...portfolio, ...announcements, ...recommendation];

        array.forEach(async(element)=>
            element.title = await translate(element.title, {from : "ru", to : localStorage.getItem("language").toLowerCase()})
        );
        
        return array.filter((element)=>{
            return element.title.toLowerCase().includes(searchField.toLowerCase());
        });
    }

    useEffect(() => {
        search()
        .then(result => result.map((element, key)=><ResultField key={key} element={element}/>))
        .then(result => setSearchResult(result))
    }, [searchField]);
    
    return (
        <div className='SearchPage'>
            <input type="search" onChange={(element)=>setSearchField(element.target.value)}/>
            <div className='Exit' onClick={()=>{navigate(-1)}}></div>
            <div className='SearchResult'>{SearchResult}</div>
        </div>
    );
}

export default memo(Search)