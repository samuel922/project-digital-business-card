import React from "react"
import profile from "../images/profile.jpg"

const Header = () => {
    return (
        <header className="main--header">
            <img src={profile} alt="profile picture" className="profile-picture" />
        </header>
    )
}

export default Header;