import React from "react"
import Header from "./components/Header"
import Welcom from "./components/Welcom"
import Presentation from "./components/Presentation"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="container">
            <Header/>
            <Welcom/>
            <Presentation/>
            <Services/>
            <Portfolio/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    )
}

