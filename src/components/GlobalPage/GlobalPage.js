import Loadable from 'react-loadable';
import Header from "../Header/Header"
import React, { Component } from 'react'
import "./GlobalPage.css"

function Loading() {
    return <h3>Loading...</h3>;
}

const LoadingComponent = Loadable({
    loader: () => import('../LoadingPage/LoadingPage'),
    loading: Loading
});

class GlobalPage extends Component {
    constructor(props) {
        super(props);
        if(localStorage.getItem("device_id") && localStorage.getItem("device_id") !== null && localStorage.getItem("device_id") !== "null"){
            this.state = {
                device_id:localStorage.getItem("device_id"),
                user_info: localStorage.getItem("user_info"),
                user_events: localStorage.getItem("user_events"),
                data:null,
                all_events:null
            };
        }
    }
    render() {
        return (
            <div id="mainContainer">
                <div id="userEventPageHeader">
                    <Header/>
                </div>
                <div id="allEventContent">
                <div class='coming-container'>
                    <section class='coming'>
                        <div class='fading-area'>
                            <h1 class='coming-title'>Glimpse <strong>Global</strong></h1>
                            <h2 class='coming-subtitle'>Global Feed For Glimpsewearables</h2>
                            <div class='content'>
                                <h1 className="coming-subtitle">Coming Soon!</h1>
                                <hr></hr>
                                <p className="globalP">View The Content Of Others Attending Events.</p>
                                <hr></hr>
                                <p className="globalP">Browse Artists, Events, And Attendees Profiles.</p>
                                <hr></hr>
                                <p className="globalP"></p>
                                <hr></hr>
                            </div>
                        </div>
                    </section>
                </div>
                <img id="backgroundGlobalImage" src="https://s3-us-west-2.amazonaws.com/glimpse-web/static/media/welcome-img.050c4eb5.jpg" alt="WomanHolding"></img>
                </div>
            </div>
        );
    }
}
export default GlobalPage;