import React from "react";
import dog_1 from "../images/dog_1.jpg"
import phone_icon from "../images/phone_icon.png"
import message_icon from "../images/message_icon.png"



export default function Contact(props) {
    console.log(props)
    return (
        <div className={"contact-card"}>
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phone_icon}/>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={message_icon}/>
                <p>{props.email}</p>
            </div>
        </div>
    )
}