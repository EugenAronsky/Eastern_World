import React, { memo, useCallback, useContext, useMemo} from "react";
import UnpackDescriptionWithLinks from "../Common Elements/UnpackLinks";
import Button from "../Common Elements/Button";
import { windowSize } from "../App"; 
import "./Recommendation.css";

const Recommendation = ({info}) =>{
    
    const {previewImage, title, description, addition} = info;
    const memoUnpackDescription = useMemo(()=>UnpackDescriptionWithLinks(description), [description]);
    const screenWidth = useContext(windowSize);

    return(
        <>
            {screenWidth <= 540 ?
                <div className="Recommendation-page">
                    <div className="Recommendation-container">
                        <div className="recommendation-title-page">{title}</div>
                        <div className="recommendation-addition">{addition}</div>
                        <div className="recommendation-image" style={{backgroundImage: "url(" + previewImage.fields.file.url + ")"}}></div>
                        <div className="recommendation-content">{memoUnpackDescription}</div>
                    </div>

                    <div className="GoToRecommendationButton">
                        <Button content = "ВЕРНУТЬСЯ" width = "40.625vw" height = "9.375vw" link={"/recommendation"}/>
                    </div>
                </div>
                :
                <div className="Recommendation-page">
                    <div className="Recommendation-container">
                        <div className="recommendation-image" style={{backgroundImage: "url(" + previewImage.fields.file.url + ")"}}></div>
                        <div className="recommendation-title-page">{title}</div>
                        <div className="recommendation-addition">{addition}</div>
                        <div className="recommendation-content">{memoUnpackDescription}</div>
                    </div>

                    <div className="GoToRecommendationButton">
                        <Button content = "ВЕРНУТЬСЯ К РЕКОМЕНДАЦИЯМ" width = "21.875vw" height = "3.125vw" link={"/recommendation"}/>
                    </div>
                </div>
            }
        </>
    );
}

export default memo(Recommendation);