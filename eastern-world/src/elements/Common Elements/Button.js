import React, { memo } from "react";
import "./button.css"

const Button = ({content, width ,height, link, target = "_self"}) => {
    return (
        <a href={link} target = {target} className = "button" style = {{ width : width, height: height}}><div>{content}</div></a>
    );
}

export default memo(Button);
