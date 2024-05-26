
import React from "react"
import Post001 from "../Pictures/post001.jpg"
import Post002 from "../Pictures/post002.jpg"
import Post003 from "../Pictures/post003.jpg"


export default function Portfolio() {
    return (
        <div className="Portfolio">
                <p className="Title--p">portfolio</p>
            <div className="Serv-holder">
                <p> if you do it right, it will last forever </p>
                <div className="Port-holder">
                    <div className="post">
                        <img src={Post001} alt=""/>
                        <h1>Project Here</h1>
                        <p>Whereas disregard and contempt for human
                            rights have resulted Whereas disregard and contempt
                        </p>
                    </div>

                    <div className="post">
                        <img src={Post002} alt=""/>
                        <h1>Project Here</h1>
                        <p>Whereas disregard and contempt for human
                            rights have resulted Whereas disregard and contempt
                        </p>
                    </div>

                    <div className="post">
                        <img src={Post003} alt=""/>
                        <h1>Project Here</h1>
                        <p>Whereas disregard and contempt for human
                            rights have resulted Whereas disregard and contempt
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}