import React from "react";
import airbnb_photogrid from "../images/airbnb_photogrid.jpg"


export default function Hero() {
    return (
        <section className="Hero">
            <img src={airbnb_photogrid} className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">
                Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.
            </p>

        </section>
    )
}