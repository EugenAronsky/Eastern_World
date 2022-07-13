import React from 'react';
import Header from './Header.js';
import HomePage from './HomePage.js';
import Footer from './Footer.js';
import Slider from './Slider.js';
import Biography from './Biography.js'
import ProjectDescription from './ProjectDescription.js'
import Portfolio from './Portfolio.js'

const base_values = {

    header:{
  
    },

    biography:{
        
        portrait: {
            fields :{
                file:{
                    url: "default"
                }
            }
        },
        author: "Влада Гольдштейн",
        profession: "журналист / публицист / геополитолог",
        description: "Освещала военные операции Израиля против террористов «Исламского джихада» и ХАМАС: 2019г. – «Чёрный пояс». 2021г. – «Страж стен». Свидетель текущей Украинской войны. Находилась на Востоке Украины во время начала полномасштабных военных действий.\n\nСотрудничество со СМИ:\nНастоящее время: израильский аналитический журнал «Исрагео» и еженедельник «Секрет».",
        background_image: {
            fields :{
                file:{
                    url: "default"
                }
            }
        },

    },

    project:{
        project_iamge: {
            fields :{
                file:{
                    url: "default"
                }
            }
        },
        title: "Eastern World",
        description:"Проект Eastern World представляет из себя мнение Человека. Синтез размышлений, профессиональных знаний, анализ региональных позиций и современных реалий, одного или нескольких авторов проекта.\n\nЭто факты, обстоятельства, аналитика и субъективность. О Ближнем Востоке, арабо-израильском конфликте, мировой геополитике и её проблематике и конфликтогенности.\n\nДобро пожаловать в мир восточного Человека!",
        channel_link: "https://t.me/eastern_world",
        background_image: {
            fields :{
                file:{
                    url: "default"
                }
            }
        },
    },

    portfolio:{
        title: "Портфолио",
        background_image: {
            fields :{
                file:{
                    url: "default"
                }
            }
        },
    },
    
    footer:{
        mail: "contact@gmail.com",
        termsOfUse: "",
        copyright: "Все права защищены © 2022 Eastern World"
    }
  
}

function findMyData(name, data){
    for (let index = 0; index < data.length; index++) {
        if(data[index].sys.contentType.sys.id === name) return data[index].fields;
    }
    return base_values[name];
}

const App = ({newData}) => {
   return (
    <div>
        <Header/>
            <HomePage>
                <Slider/>
                <Biography upDate = {findMyData('biography', newData)}/>
                <ProjectDescription upDate = {findMyData('project', newData)}/>
                <Portfolio upDate = {findMyData('portfolio', newData)}/>
            </HomePage>
        <Footer upDate = {findMyData('footer', newData)}/>
    </div>
   );
}

export default App;