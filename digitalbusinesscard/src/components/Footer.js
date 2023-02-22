import React from "react"
import GithubImg from "./github";

function Footer(){
    return(
       <div className="footer">
          <img src={require("../images/facebook.png")} alt = "img not found" className="face"/>
          <GithubImg/>
          <img src={require("../images/linkedin.png")} alt = "img not found" className="linked" />
          <img src={require("../images/twitter.png")} alt = "img not found" className="tweet" />
          <img src={require("../images/instagram.png")} alt = "img not found" className="insta"/>
       </div>
    )
}

export default Footer;