import React from "react"

export default function Card(data) {
    return (
        <div className="Services-card">
            <div className="img-holder">
                <img src={data.picture} alt="" />
            </div>
            <div className="other-info">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
            </div>
        </div>
    )
}