
import React from "react"
import Post from "./Post"
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
                <Post
                        title = "Project Here"
                        descreption = "Whereas disregard and contempt for human rights have resulted Whereas disregard and contempt"
                        picture = {Post001}
                />
                <Post
                    title = "Project Here"
                    descreption = "Whereas disregard and contempt for human rights have resulted Whereas disregard and contempt"
                    picture = {Post002}
                />
                <Post
                    title = "Project Here"
                    descreption = "Whereas disregard and contempt for human rights have resulted Whereas disregard and contempt"
                    picture = {Post003}
                />
                </div>
            </div>
        </div>
    )
}