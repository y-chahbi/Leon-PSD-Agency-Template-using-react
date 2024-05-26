import React from "react"
import lamp from "../Pictures/lamp.png"
import worldwide from "../Pictures/worldwide.png"
import chemicals from "../Pictures/chemicals.png"

export default function Presentation() {
    return (
        <div className="Presentation">
            <div className="container-cards">
            <div className="card">
                    <div className="holder">
                        <div className="logo">
                            <img src={lamp} alt=""/>
                        </div>
                        <h1>Tell Us Your Idea</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec dui tortor, tincidunt nec imperdiet ultricies
                        </p>
                    </div>
                </div>

                <div className="card second">
                    <div className="holder">
                        <div className="logo">
                            <img src={chemicals} alt=""/>
                        </div>
                        <h1>We Will Do All The Work</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec dui tortor, tincidunt nec imperdiet ultricies
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="holder">
                        <div className="logo">
                            <img src={worldwide} alt=""/>
                        </div>
                        <h1>Your Product Is Worldwide </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec dui tortor, tincidunt nec imperdiet ultricies
                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
}