import React from "react";


function LinkedInButton(){
    const handleLinkedInClick = () =>{
        window.open("http://linkedin.com/in/francis-darko-7b5657224", "_blank")
    }
    return(
        <button className="btn-2" onClick={handleLinkedInClick}>LinkedIn</button>
    )
}

export default LinkedInButton