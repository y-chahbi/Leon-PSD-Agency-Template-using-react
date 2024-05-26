import React from "react"
import lamp from "../Pictures/lamp.png"
import worldwide from "../Pictures/worldwide.png"
import chemicals from "../Pictures/chemicals.png"
import CardPre from "./CardPre"

export default function Presentation() {
    return (
        <div className="Presentation">
            <div className="container-cards">
            <CardPre
                    img = {lamp}
                    title = "Tell Us Your Idea"
                    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui tortor, tincidunt nec imperdiet ultricies"
                />
            <CardPre
                    img = {chemicals}
                    title = "We Will Do All The Work"
                    second = "second"
                    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui tortor, tincidunt nec imperdiet ultricies"
                />
            <CardPre
                    img = {worldwide}
                    title = "Your Product Is Worldwide "
                    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui tortor, tincidunt nec imperdiet ultricies"
                />
            </div>
        </div>
    )
}