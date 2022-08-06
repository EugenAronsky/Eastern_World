const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

export function SortByData(list){
    for (let i = 0; i < list.length; i++) {
        let temp = null;
        for (let j = 0; j < list.length; j++) {

            let firstEl = list[i].date.split(' ');
            let secondEl = list[j].date.split(' ');

            if(firstEl[2] > secondEl[2]){
                temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
            else if(firstEl[1] === secondEl[1]){
                if(months.indexOf(firstEl[2].toLowerCase()) > months.indexOf(secondEl[2].toLowerCase())){
                    temp = list[i];
                    list[i] = list[j];
                    list[j] = temp;
                }
                else if(months.indexOf(firstEl[1].toLowerCase()) === months.indexOf(secondEl[1].toLowerCase())){
                    if(Number(firstEl[0]) > Number(secondEl[0])){
                        temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
                }
            }
        }
    }
    return list;
}