import React from "react";
import airbnb from "../images/airbnb.png"
import ReactDOM from "react";

export default function Navbar() {
    return (
        <nav>
            <img src={airbnb} className="nav--logo"/>
        </nav>
    )
}