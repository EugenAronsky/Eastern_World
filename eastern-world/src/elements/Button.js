import React from "react";
import "./button.css"

const Button = ({content, w ,h}) => {
    return (
        <div className = "button" style = {{ width : w, height: h}}>{content}</div>
    );
}

export default Button;
