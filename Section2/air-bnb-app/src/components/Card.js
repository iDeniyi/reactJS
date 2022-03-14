import React from "react";
import star from "../images/star.png"


export default function Card(props) {
    return (
        <div>

            <img 
                src={props.item.coverImg}
                className="card--image"
            />


            <div className="card--stats">
                <img src={star} className="card--star"/>
                <span>{props.item.rating}</span>
                <span className="gray">({props.item.reviewCount}) •</span>
                <span className="gray">{props.item.country}</span>
            </div>
            <p>{props.title}!</p>
            <p><span className="bold"> From ${props.item.price} </span> / person</p>

        </div>
    )
} 