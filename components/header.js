
import React from 'react'
const Logo = require('../assets/logo.png');

function Header(){

   return(
     
       
         <div className="row bg-dark pt-3">
         <div className="col">
   
         <nav className="navbar bg-dark navbar-dark">
         <a className="navbar-brand mx-auto" href="#">
         <img src={Logo} alt="Logo" style={{width:40}} />
         </a>


         <div className="navbar-text mx-auto ">
         <h1 style={{color: "aliceblue"}} className="text-center">
         The Garbage Collection Fair Billing System
         </h1>
        </div>
           
        <div className="navbar">
        <ul className="navbar-nav">
        
        <li className="nav-item">
        <a className="nav-link" href="#">About</a>
        </li>

        <li className="nav-item">
        <a className="nav-link" href="#">need help?</a>
        </li>
                      
         <li className="nav-item">
         <a className="nav-link" href="http://localhost:3000/login">Login</a>
        </li>
                
         </ul>
        </div>
            
        </nav>
        </div>
        </div>
         
   
   )
}

export default Header;