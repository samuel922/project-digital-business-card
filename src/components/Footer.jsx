import React from "react"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"
import github from "../images/github.png"

const Footer = () => {
    return (
        <footer className="main--footer">
            <img src={twitter} alt="social link" />
            <img src={instagram} alt="social link" />
            <img src={github} alt="social link" />
            <img src={facebook} alt="social link" />
        </footer>
    )
}

export default Footer;