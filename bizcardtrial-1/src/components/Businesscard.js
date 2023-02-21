import React from "react"

function BusinessCard(){
    return(
        <div className="business-card">
        <img src={require("../images/me.jpg")} alt="img not found" className="profile-picture" />
        <div className="contact-buttons">
          <a href="mailto:darkofrancis18@yahoo.com">
            <button className="email-button">Email</button>
          </a>
          <a href="https://www.linkedin.com/in/your_linkedin_profile">
            <button className="linkedin-button">LinkedIn</button>
          </a>
        </div>
      </div>  
    )
}



export default BusinessCard;