import React from "react";
function About() {
    return (
        <div className="bg" style={{height: "1080px"}}>
            <h2 className="fs-2 text-centerp-5">Hello there!</h2>
            <img className="mx-auto d-block" src={process.env.PUBLIC_URL + '../assets/adam_campeau.jfif'} alt="Adam Campeau"/>
            <p className="text-center">
                Hello there! My name is Adam Campeau, and I am an IT Administrator who has taken this boot camp to expand my knowledge and skill base.
            </p>
        </div>
    )
}

export default About;