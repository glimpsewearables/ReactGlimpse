import React, { Component } from 'react';
import './LoginPage.css';


class LoginPage extends Component {
  constructor(props) {
    super(props);
    if(localStorage.getItem("device_id")){
        this.state = {
            value:null,
            device_id:localStorage.getItem("device_id")
        };
    } else {
        this.state = {
            value:null,
            device_id:"Device Id"
        };
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
};
handleChange(event) {
    this.setState({value: event.target.value});
    this.setState({device_id : event.target.value});
    localStorage.setItem("device_id", event.target.value);
}
componentDidMount() {
  this.loadPage();
}
loadPage() {
  // document.getElementById("loadingContainer").style.display = "none";
}
handleSubmit(event) {
    // Here is the validation and placing all of the information entered into the storage
    window.location.href = "userPage/" + this.state.value;
    event.preventDefault();
}
  render() {
    return (
      <div id="mainLoginContainer">
        <img id="backgroundImage" src="https://s3-us-west-2.amazonaws.com/glimpse-web/static/media/SeattleBackground.jpg" alt="SeattleTheBeautiful"></img>
        <div id="entireContainer">
          <div id="glimpseInfoLeftSide">
            <h3 className="loginHeader">Welcome To The Glimpse Wearables Bandana Cam</h3>
            <p className="glimpseText">We Are Excited To Have You Using Our Devices</p>
            {/* <img src="https://s3-us-west-2.amazonaws.com/users-edited-content/glimpseLogos/clipcamicon.png" className="headerLogo"></img> */}
          </div>
          <div id="glimpseInfoRightSide">
          <h1>Login</h1>
            <form id="deviceLoginForm" onSubmit={this.handleSubmit}>
              <input type="number" value={this.state.value} onChange={this.handleChange} name="deviceNumber" className="loginInput" placeholder="Device Number" required></input>
              <input type="submit" className="submitButton" value="Submit"></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
