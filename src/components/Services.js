import React from "react"
import Mountaine from "../Pictures/mountaine0.jpg"
import GD from "../Pictures/printing.png"
import WD from "../Pictures/web.png"
import UI from "../Pictures/speech-bubble.png"
import WDD from "../Pictures/television.png"
import Card from "./Card"


export default function Services() {
    return (
        <div className="Services">
            <p className="Title--p">services</p>
            <div className="Serv-holder">
                <p> Don't be busy, be productive </p>
                <div className="ServicesHolder">
                    <div className="Services-list">
                        <Card
                                picture = {GD}
                                title = "Graphic Design"
                                description = "Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques,"
                        />
                        <Card
                                picture = {WD}
                                title = "Web Design"
                                description = "Web design involves creating the visual elements and layout of a website, while coding involves translating these designs into a functional"
                        />
                        <Card
                                picture = {UI}
                                title = "UI & UX"
                                description = "If you’ve been wondering about the difference between UX design and UI design,  you’re not alone. Often used interchangeably,"
                        /> 
                        <Card
                                picture = {WDD}
                                title = "Web Development"
                                description = "Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS"
                        />
                    </div>
                    <div className="Services-picture">
                        <img src={Mountaine} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}