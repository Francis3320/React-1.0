import React from "react"

function GithubImg(){
    const handleImageClick = () =>{
        window.open("https://github.com/Francis3320", "_blank")
    }
    return(
        <img src={require("../images/github.png")} alt = "img not found" className="git" onClick={handleImageClick}/>
    )
}

export default GithubImg;