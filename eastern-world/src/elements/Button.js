import React from "react";
import "./button.css"

const Button = ({content, width ,height, link, target = "_self"}) => {
    return (
        <a href={link} target = {target} className = "button" style = {{ width : width, height: height}}>{content}</a>
    );
}

export default Button;
