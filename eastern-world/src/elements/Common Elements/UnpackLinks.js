import React from "react";
import "./UnpackLinks.css";

export default function UnpackDescriptionWithLinks(data, find = false){
    let fullContent = '';
    for (let index = 0; index < data.content.length; index++) {
        fullContent = fullContent + data.content[index].content[0].value + '\n';
    }
    
    
    let counter = 0;
    let elementArray = [];
    let array = fullContent.split(" ");

    for(let i = 0; i < array.length; i++)
        if(array[i] === "**") counter++;

    for(let i = 0; i < Math.floor(counter / 2); i++){
            
        const index = array.findIndex((i)=> {return i === "**"});
            
        const part = array.slice(0, index).join(" ");
        const link = <a key={i} href={array[index + 2]} >{array[index + 1].split("_").join(" ")}</a>

        array = array.slice(index + 4, array.length);
        array[0].includes(".") === true ? elementArray.push(part, " ", link) : elementArray.push(part, " ", link, " ");
    }   

    elementArray.push(array.join(" "));

    if(find === true){
        let newArray = []
        for(let i = 0; i < elementArray.length; i++){
            if(typeof elementArray[i] === "string"){
                let trigger = false;
                let tempArray = elementArray[i].split(" ");
                for(let j = 0; j < tempArray.length; j++){
                    if(tempArray[j].includes("Важно:") === true){
                        const text = tempArray.splice(0, j).join(" ");
                        const HighLight = <span key={j} style={{color: "#D6BA8D"}}>{tempArray[0]}</span>;
                        newArray.push(text, " ", HighLight, " ");
                        tempArray.splice(0, 1);
                        trigger = true;
                        j = 0;
                    }
                }

                if(!trigger) newArray.push(elementArray[i]);
                else newArray.push( tempArray.join(" ") );
            }
            else{
                newArray.push(elementArray[i]);
            }
        }
        elementArray = newArray;
    }

    return (
        <div className="full-descripton">
            { elementArray }
        </div>
    );  
}
