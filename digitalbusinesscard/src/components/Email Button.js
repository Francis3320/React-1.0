import React from "react";

function EmailButton(){
    const handleEmailClick = () =>{
        window.location.href = "mailto:darkofrancis18@yahoo.com?subject=Contact body= Type your concern";
    }
    return(
        <button className="btn" onClick={handleEmailClick}>Email</button>
    )
}

export default EmailButton;