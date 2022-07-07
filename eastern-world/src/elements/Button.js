import React from "react";
import "./button.css"

const Button = ({content, w ,h, link}) => {
    return (
        <a href={link} className = "button" style = {{ width : w, height: h}}>{content}</a>
    );
}

export default Button;
