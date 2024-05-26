import React from "react"
import GD from "../Pictures/printing.png"
import WD from "../Pictures/web.png"
import UI from "../Pictures/speech-bubble.png"
import WDD from "../Pictures/television.png"
import Mountaine from "../Pictures/mountaine0.jpg"


export default function Services() {
    return (
        <div className="Services">
            <p className="Title--p">services</p>
            <div className="Serv-holder">
                <p> Don't be busy, be productive </p>
                <div className="ServicesHolder">
                    <div className="Services-list">
                        <div className="Services-card">
                            <div className="img-holder">
                                <img src={GD} alt="" />
                            </div>
                            <div className="other-info">
                                <h1>Graphic Design</h1>
                                <p>Graphic design is a craft where professionals create visual content to communicate messages. 
                                    By applying visual hierarchy and page layout techniques,
                                </p>
                            </div>
                        </div>

                        <div className="Services-card">
                            <div className="img-holder">
                                <img src={WD} alt="" />
                            </div>
                            <div className="other-info">
                                <h1>Web Design</h1>
                                <p>Web design involves creating the visual elements and layout of a website, while coding involves
                                     translating these designs into a functional 
                                </p>
                            </div>
                        </div>

                        <div className="Services-card">
                            <div className="img-holder">
                                <img src={UI} alt="" />
                            </div>
                            <div className="other-info">
                                <h1>UI & UX</h1>
                                <p>If you’ve been wondering about the difference between UX design and UI design, 
                                    you’re not alone. Often used interchangeably,
                                </p>
                            </div>
                        </div>

                        <div className="Services-card">
                            <div className="img-holder">
                                <img src={WDD} alt="" />
                            </div>
                            <div className="other-info">
                                <h1>Web Development</h1>
                                <p>Well organized and easy to understand Web building tutorials with 
                                    lots of examples of how to use HTML, CSS
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="Services-picture">
                        <img src={Mountaine} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}