import React from "react";
import './header.css'

const Header = () =>{
    return(
        <nav>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      

        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="Register">Register</a></li>
                    <li><a href="Account">Account</a></li>
    
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="Login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Log Out</a></li>
    
    
                </ul>
            </div>
        </div>
    </nav>
    </nav>
    )
}
export default Header;