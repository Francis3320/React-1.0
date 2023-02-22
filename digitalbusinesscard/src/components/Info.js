import React from "react"
import EmailButton from "./Email Button";
import LinkedInButton from "./LinkedIn Button";

function Info(){
    return(
    <div className="info">
        <div className="profile"></div>
        <img src={require("../images/me.jpg")} alt="img not found" className="profile-picture" />
        <h4 className="name">Darko Francis</h4>
        <p className="career">Frontend developer</p>
        <EmailButton/>
        <LinkedInButton/>
    </div>
       
    )
}

export default Info;
