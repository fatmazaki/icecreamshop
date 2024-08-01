import React, { Component } from "react";
import "./Header.css"
class Header extends Component{
    render(){
        return(
            <div className="header">
                <img src="Screenshot (43).png" alt="logo" />
                    <ul>
                        <a href="#"><li>HOME</li></a>
                        <a href="#"><li>ABOUT US</li></a>
                        <a href="#"><li>CONTACT US</li></a>
                    </ul>
            </div>
        )
    }
}
export default Header;