import Loadable from 'react-loadable';
import React, { Component } from 'react'
import "./NoMatch.css"


class NoMatch extends Component {
    constructor(props) {
        super(props);
        if(localStorage.getItem("device_id") && localStorage.getItem("device_id") !== null && localStorage.getItem("device_id") !== "null"){
            this.state = {
                device_id:localStorage.getItem("device_id"),
                user_info: localStorage.getItem("user_info"),
                user_events: localStorage.getItem("user_events"),
                data:null,
                isLoading:true,
                all_events:null
            };
        }
    }
    render() {
        return (
            <div id="mainContainer">
                <div id="noMatchHeader">
                    <h1>Uh OH</h1>
                </div>
            </div>
        );
    }
}
export default NoMatch;