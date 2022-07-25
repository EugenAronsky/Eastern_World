import React from "react";
import FullBiography from "./FullBiography";
import findMyData from '../Common Elements/UpdateMeneger.js';

const BiographyPage = ({newData}) => {
    return(
        <FullBiography upDate = {{biography: findMyData('biography', newData), bio_paragraph: findMyData('bio_paragraph', newData)}}/>
    );
};

export default BiographyPage;