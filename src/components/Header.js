import React from "react"
import logo  from "../Pictures/logo.png"
import menu  from "../Pictures/menu.png"

export default function Header(props) {
    return (
        <div className="Header">
            <div className="logo">
                <a href="#home" > <img src={logo} alt=""/> </a>
            </div>
            <div className="menu">
                <a href="#menu" > <img src={menu} alt=""/> </a>
            </div>
        </div>
    )
}