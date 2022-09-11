import React, { memo } from "react";
import FullBiography from "./FullBiography";
import findMyData from '../Common Elements/UpdateMeneger.js';

const BiographyPage = ({ServerData}) => {
    return(
        <FullBiography upDate = {{biography: findMyData('biography', ServerData), bio_paragraph: findMyData('bio_paragraph', ServerData)}}/>
    );
};

export default memo(BiographyPage);