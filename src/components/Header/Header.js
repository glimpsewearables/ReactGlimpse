import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

class Header extends Component {
    constructor(props) {
        super(props);
        if(localStorage.getItem("device_id") && localStorage.getItem("device_id") != null){
            this.state = {
                value:null,
                device_id:localStorage.getItem("device_id")
            };
        } else {
            this.state = {
                value:null,
                device_id:null
            };
        }
    }
    handleLogOut(){
        localStorage.setItem("device_id", null);
    }
    render() {
        return (
            <div id="headerSection">
                <div id="headerTabs">
                    <div id="glimpseLogo">
                        <img src="https://s3-us-west-2.amazonaws.com/users-edited-content/glimpseLogos/clipcamwhite.svg" alt="Glimpse Logo"></img>
                    </div>
                    <div id="rightSideHeader">
                        <Link to="/UserPage/" className="headerButton">Home</Link>
                        <Link to="/GlobalFeed" className="headerButton">Global</Link>
                        <Link to="/HostedEvents" className="headerButton">Events</Link>
                        <Link to="/Settings" className="headerButton">Settings</Link>
                        <Link to="/LogOut" className="headerButton">Logout</Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;