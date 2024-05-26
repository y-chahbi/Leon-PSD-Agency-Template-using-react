import React from "react"
import Vase from "../Pictures/vase.jpg"


export default function About() {
    return (
        <div className="About">
            <p className="Title--p">about</p>
            <div className="Serv-holder">
                <p> less is more work </p>
                <div className="About-holder">
                <div className="left-sode">
                    <div className="dev-stand"></div>
                    <img src={Vase} alt="" />
                    <div className="dev-with-letter-l"></div>
                </div>
                <div className="right-sode">
                    <div className="txt-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et purus est. 
                    Nulla non urna id mauris bibendum mattis ac vestibulum ex. Praesent et auctor odio,
                    eget vehicula mi. Etiam consequat arcu non elementum fermentum. Praesent porta justo dui
                    </div>
                    <div className="half-border"></div>
                    <div className="txt-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et purus est. 
                    Nulla non urna id mauris bibendum mattis ac vestibulum ex. Praesent et auctor odio,
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}