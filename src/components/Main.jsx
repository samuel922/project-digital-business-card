import React from "react"
import email from "../images/mail.png"
import linkedin from "../images/linkedin.png"

const Main = () => {
    return (
        <main className="main--content">
            <div className="main--contnent__header">
                <h3>Business Card</h3>
                <h4>Frontend Developer</h4>
                <small><a href="#">www.samuelochieng.com</a></small>
                <div className="main--content__contact">
                    <button className="main--content__btn main--content__mail-button">
                        <a href="#">
                            <img  src={email}  alt="email logo" className="main--content__contact-mail"/> <span>Email</span> 
                        </a>
                    </button>
                    <button className="main--content__btn main--content__linkedin-button">
                        <a href="#">
                            <img  src={linkedin}  alt="linkedin logo" className="main--content__contact-linkedin"/> <span>Linkedin</span> 
                        </a>
                    </button>
                </div>
            </div>
            <div className="about--interest__container">
                <h3>About</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, obcaecati natus libero, qui ipsam deserunt delectus nisi velit harum accusamus eligendi sapiente id similique laborum saepe eaque itaque eveniet vero.</p>
                <h3>Interests</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora quaerat, incidunt pariatur soluta dignissimos ipsum harum illum perspiciatis? Eum!</p>
            </div>
            
        </main>
    )
}

export default Main;