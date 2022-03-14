import React from "react"
import meme_image_yao_ming from "../images/meme_image_yao_ming.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={meme_image_yao_ming}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}