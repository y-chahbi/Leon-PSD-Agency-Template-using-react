import React from "react"



export default function CardPre(data) {
    let sec = data.second;
    return (
        <div className="card">
            <div className={"holder " + sec}>
                <div className="logo">
                    <img src={data.img} alt=""/>
                </div>
                <h1>{data.title}</h1>
                <p>{data.desc}</p>
            </div>
        </div>
    )
}
