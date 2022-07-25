const base_values = {

    header:{
        logo:{
            fields :{
                file:{
                    url: "default"
                }
            }
        },
    },

    biography:{
        portrait:{
            fields :{
                file:{
                    url: "default"
                }
            }
        },
        author: "Влада Гольдштейн",
        profession: "журналист / публицист / геополитолог",
        home_description: "Освещала военные операции Израиля против террористов «Исламского джихада» и ХАМАС: 2019г. – «Чёрный пояс». 2021г. – «Страж стен». Свидетель текущей Украинской войны. Находилась на Востоке Украины во время начала полномасштабных военных действий.\n\nСотрудничество со СМИ:\nНастоящее время: израильский аналитический журнал «Исрагео» и еженедельник «Секрет».",
        home_background_image:{
            fields :{
                file:{
                    url: "default"
                }
            }
        },
        bio_description: "Освещала военные операции Израиля против террористов «Исламского джихада» и ХАМАС: 2019г. – «Чёрный пояс». 2021г. – «Страж стен». Свидетель текущей Украинской войны. Находилась на Востоке Украины во время начала полномасштабных военных действий.",
        bio_background_image:{
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

    help:{
        title: "Помощь Украине",
        description: "Мир изменился навсегда 24 февраля 2022г.\nВ ночь, когда россия, без объявления войны, нарушила военным путём суверенитет независимого государства – Украины.\nЯ призываю помочь любыми доступными средствами и способами украинском народу в борьбе не только за собственную свободу, но и коллективную безопасность всей Европы.\nО том, какие виды помощи существуют и как ими воспользоваться – читайте в разделе ниже: ",
        link: "https://www.medicalteams.org/country/ukraine/",
        background_image: {
            fields :{
                file:{
                    url: "default"
                }
            }
        },
        phone_background_image: {
            fields :{
                file:{
                    url: "default"
                }
            }
        },
    },
    
    question:{
        0 : {
            person:"Лиза Анохина",
            question:"Какое ваше мнение о Палестино-израильском конфликте в XX веке и попытки его урегулирования?",
            date: "26 апреля 2022",
        }
    },

    footer:{
        mail: "contact@gmail.com",
        termsOfUse: "",
        copyright: "Все права защищены © 2022 Eastern World"
    }
  
}
// || "bio_paragraph"
export default function findMyData(name, data){
    if(name === 'article' || name === 'question' || name === "bio_paragraph"){
        let articles = {};
        for (let index = 0; index < data.length; index++) {
            if(data[index].sys.contentType.sys.id === name) articles[index] = (data[index].fields);
        }
        return articles;
    }
    else{
        for (let index = 0; index < data.length; index++) {
            if(data[index].sys.contentType.sys.id === name) return data[index].fields;
        }
        return base_values[name];
    }
}