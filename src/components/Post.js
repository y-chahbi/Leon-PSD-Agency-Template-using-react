import React from "react"

export default function Post(data) {
    return (
        <div className="post">
            <img src={data.picture} alt=""/>
            <h1>{data.title}</h1>
            <p>{data.descreption}</p>
        </div>
    )
}