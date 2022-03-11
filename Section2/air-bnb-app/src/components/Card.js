import React from "react";
import lifestyle1 from "../images/lifestyle1.jpg"
import star from "../images/star.png"


export default function Card() {
    return (
        <div>

            <img 
                src={lifestyle1}
                className="card--image"
            />


            <div className="card--stats">
                <img src={star} className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6) •</span>
                <span className="gray">Mountain Top</span>
            </div>
            <p>Climb that mountain. reach the top!</p>
            <p><span className="bold"> From $136 </span> / person</p>

        </div>
    )
} 