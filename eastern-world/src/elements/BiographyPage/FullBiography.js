import React, { memo } from "react";
import "./FullBiography.css"
import "./FullBiography-adaptive.css"
import BiographyParagraph from "./BiographyParagraph";
import UnpackDescription from '../Common Elements/UnpackUpdate.js';

const FullBiography = ({upDate}) =>{

    const paragraph = Object.values(upDate.bio_paragraph).map((upDate) => <BiographyParagraph key = {upDate.id} upDate = {upDate}/>);
    const {portrait, author, profession, bio_description, bio_background_image} = upDate.biography;


    for(let i = 0; i < paragraph.length; i++){
        for(let j = i; j < paragraph.length; j++){
            if(paragraph[i].key > paragraph[j].key){
                let temp = paragraph[i];
                paragraph[i] = paragraph[j];
                paragraph[j] = temp;
            }
        }
    }

    return(
        <div className="FullBiography">
            <div className="FullBiography_Background">
                <div className="Bio-bg-img" style={bio_background_image.fields.file.url === "default" ? {} : {backgroundImage : "url(" + bio_background_image.fields.file.url +")"}}></div>
                <div className="Bio-bg"></div>
            </div>
            <div className="full-bio-container">
                <div className="first-part-bio">
                    <div className='Bio-portret-back'></div>
                    <div className='Bio-portret' style={portrait.fields.file.url === "default" ? {} : {backgroundImage : "url(" + portrait.fields.file.url +")" }}></div>
                    <div className='Bio-description-box'>
                        <div className='Bio-description'>
                            <h1>{author}</h1>
                            <h2>{profession}</h2>
                            <p>{typeof bio_description !== 'string' ? UnpackDescription(bio_description) : bio_description}</p>   
                        </div>
                    </div>
                </div>
                <div className="bio_info">
                    {paragraph}
                </div>
            </div>
        </div>
    );
}

export default memo(FullBiography);