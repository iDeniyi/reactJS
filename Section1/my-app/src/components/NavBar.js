import React from "react"
import reactLogo from "../images/reactLogo.png"
import ReactDOM from "react-dom"

export default function NavBar() {
    return (
        <header>
            <nav className="nav">
                <img 
                    src={reactLogo} 
                    className="nav--logo" 
                    alt="React Logo"
                />

                <h3 className="nav--logo_text">
                    ReactFacts
                </h3>
                
                <h4 className="nav--title">
                    React Course - Project1
                </h4>

            </nav>
        </header>
    )
}