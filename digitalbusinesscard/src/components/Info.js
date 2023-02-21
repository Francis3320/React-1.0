import React from "react"

function Info(){
    return(
    <div className="info">
        <div className="profile"></div>
        <img src={require("../images/me.jpg")} alt="img not found" className="profile-picture" />
        <h4 className="name">Darko Francis</h4>
        <p className="career">Frontend developer</p>
        <button className="btn">Email</button>
        <button className="btn-2">LinkedIn</button>
    </div>
       
    )
}

export default Info;
