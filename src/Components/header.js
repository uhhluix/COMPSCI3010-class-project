import React from "react";
import './header.css'
const Header = () =>{
    return(
        <nav>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      

        <nav class="navbar navbar-inverse">
        <div class="container-fluid">
             
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="/">Home</a></li>
                    <li><a href="Register">Register</a></li>
                    <li><a href="Account">Account</a></li>
    
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="Login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Log Out</a></li>
    
    
                </ul>
            </div>
        </div>
    </nav>
    </nav>
    )
}
export default Header;