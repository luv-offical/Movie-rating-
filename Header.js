

import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";




const Headers = () => {
    return(
        <div className="Header">
            <div className="headerleft">

     <Link to='/'><img src='./img/images.jpg' alt="logo" width={70} height={50}  /></Link>
     <Link to='/movies/popular' style={{textDecoration: "none", paddingLeft:"80px"}}><span>Popular</span></Link>
    <Link to='/movies/top_rate' style={{textDecoration: "none",paddingLeft:"80px"}}><span>Top_rate</span></Link>
     <Link to='/movies/upcoming' style={{textDecoration: "none",paddingLeft:"80px"}}><span>Upcoming</span></Link>
            
            </div>
        </div>
    )
 }
 export default Headers;