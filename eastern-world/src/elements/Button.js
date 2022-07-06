import React from "react";
import "./button.css"

const Button = ({content, w ,h}) => {
    return (
        <a href="http://localhost:3000/" className = "button" style = {{ width : w, height: h}}>{content}</a>
    );
}

export default Button;
