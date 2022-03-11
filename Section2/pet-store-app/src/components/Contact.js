import React from "react";
import dog_1 from "../images/dog_1.jpg"
import phone_icon from "../images/phone_icon.png"
import message_icon from "../images/message_icon.png"



export default function Contact() {
    return (
        <div className="contact-card">
            <img src={dog_1}/>
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <img src={phone_icon}/>
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img src={message_icon}/>
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </div>
    )
}