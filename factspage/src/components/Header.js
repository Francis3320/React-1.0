import React from "react"

function Header(){
    return(

           <nav>
             <img src ={require("../images/React-icon.png")} alt = "img not found"  className = "logo"/>
             <h3 className="nav-logo-text">React Facts</h3>
             <h4 className="nav-text-2">React Course Project-1</h4>
           </nav>
        
    )
}

export default Header;