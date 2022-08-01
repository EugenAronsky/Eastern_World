import { useCallback } from "react";
const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    
export function SortByData(articalsList, state){
    for (let i = 0; i < articalsList.length; i++) {
        let temp = null;
        for (let j = 0; j < articalsList.length; j++) {
            
            let firstEl = articalsList[i].date.split(' ');
            let secondEl = articalsList[j].date.split(' ');

            if(firstEl[2] > secondEl[2]){
                temp = articalsList[i];
                articalsList[i] = articalsList[j];
                articalsList[j] = temp;
            }
            else if(firstEl[2] === secondEl[2]){
                if(months.indexOf(firstEl[1].toLowerCase()) > months.indexOf(secondEl[1].toLowerCase())){
                    temp = articalsList[i];
                    articalsList[i] = articalsList[j];
                    articalsList[j] = temp;
                }
                else if(months.indexOf(firstEl[1].toLowerCase()) === months.indexOf(secondEl[1].toLowerCase())){
                        if(Number(firstEl[0]) > Number(secondEl[0])){
                        temp = articalsList[i];
                        articalsList[i] = articalsList[j];
                        articalsList[j] = temp;
                    }
                    else if(firstEl[0] === secondEl[0]){
                        if(firstEl[5] === secondEl[5]){
                        temp = articalsList[i];
                            articalsList[i] = articalsList[j];
                            articalsList[j] = temp;
                        }
                    }
                }
            }
        }
    }
    if(state) articalsList.reverse();
}

export function SortByGaner(articalsList, gener){
    let newArrey = [];
        articalsList.forEach(element => {
            if(element.gener === gener) newArrey.push(element);
        });
    return newArrey;
}