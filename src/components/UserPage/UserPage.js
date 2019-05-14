import Loadable from 'react-loadable';
import Header from "../Header/Header"
import React, { Component } from 'react'
import "./UserPage.css"

function Loading() {
    return <h3>Loading Function From Top</h3>;
}
const LoadingComponent = Loadable({
    loader: () => import('../LoadingPage/LoadingPage'),
    loading: Loading
  });

class UserPage extends Component {
    constructor(props) {
        super(props);
        if(localStorage.getItem("device_id") && localStorage.getItem("device_id") !== null && localStorage.getItem("device_id") !== "null"){
            this.state = {
                device_id:localStorage.getItem("device_id"),
                user_info: null,
                user_events: null,
                data:null,
                isLoading:true,
                showMe: true
            };
        }
        this.openEventPage = this.openEventPage.bind(this);
    }
    loadPage = () =>{
        const hiddenOnLoadElements = document.getElementsByClassName("hiddenOnLoad");
        for(var i = 0; i < hiddenOnLoadElements.length; i++){
            hiddenOnLoadElements[i].style.opacity = "1.0"
            hiddenOnLoadElements[i].classList.add("notHiddenOnLoad");
        }
    }
    componentDidMount() {
        this.loadPage();
        fetch('https://api.glimpsewearables.com/media/getSpecificUser/' + this.state.device_id)
        // fetch('http://localhost:8000/media/getSpecificUser/' + this.state.device_id)
            .then(res => res.json())
            .then(data => this.setState({data}))
        setTimeout(() => {
            var user_info = this.state.data.user;
            var user_events = this.state.data.events;
            this.setState({user_info: user_info});
            localStorage.setItem("user_info", this.state.user_info);
            this.setState({user_events: user_events});
            localStorage.setItem("user_events", this.state.user_events);
            this.setState({isLoading: false});
        }, 2500)
    }
    openEventPage(event) {
        let path = `/UserEventPage/` + event;
        localStorage.setItem("event_id", event);
        window.location.replace(path);
    }
    render() {
        if(this.state.isLoading){
            return (
                <LoadingComponent/>
            );
        } else {
            this.eventsDisplay = this.state.user_events.all_events.map((item, key) =>
                <div id="event{item.id}" key={item.id} className="event-card" onClick={(evt) => this.openEventPage(item.event_id, evt)}>
                    <div className="outer-div">
                        <img className="event-image" src={item.header_image} alt="Check S3 Link"/>
                        <span className="gradient-overlay"></span>
                        <span className="event-title">{item.name}</span>
                        <div className="event-info">
                            <table className="event-info-table">
                                <tbody>
                                    <tr>
                                        <td className="icon-table-data" key={item.name}>
                                            <i className="fa fa-map-marker"></i>
                                        </td>
                                        <td>
                                            <span className="event-price">{item.num_videos} Videos</span>
                                            <span className="event-location">{item.name}</span>
                                            <span className="event-street">{item.address}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="icon-table-data">
                                            <i className="fa fa-calendar-o"></i>
                                        </td>
                                        <td>
                                            <span className="event-date">{item.start_date} - {item.end_date}</span>
                                            <span className="event-ticket-button" onClick={(evt) => this.openEventPage(item.event_id, evt)}>View Content</span>
                                        </td>
                                    </tr>                                     
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
            return (
                <div id="mainContainer">
                    <div id="headerInfo">
                        <Header/>
                    </div>
                    <div id="contentContainer">
                        <h1 className="deviceTitle">Device Page {this.state.device_id}</h1>
                        <div className="allEvents" id="allEvents">
                            <div id="featuredRecentEventCards" className="">
                                <div id="recentEvents" className="event-card-half">
                                    <div className="outer-div-larger">
                                        <img className="event-image" src="https://s3-us-west-2.amazonaws.com/glimpse-landing/img/concerts/fullsize/4.jpg" alt="Check S3 Link"/>
                                        <span className="gradient-overlay"></span>
                                        <span className="event-title">Recently Captured</span>
                                        <div className="event-info">
                                            <span className="event-location-recent">Favorite</span>
                                            <span className="event-ticket-button-recent">View</span>
                                        </div>
                                    </div>
                                </div>
                                <div id="featuredEvents" className="event-card-half">
                                    <div className="outer-div-larger">
                                        <img className="event-image" src="https://s3-us-west-2.amazonaws.com/glimpse-landing/img/concerts/fullsize/1.jpg" alt="Check S3 Link"/>
                                        <span className="gradient-overlay"></span>
                                        <span className="event-title">Recently Captured</span>
                                        <div className="event-info">
                                            <span className="event-location-recent">Recent</span>
                                            <span className="event-ticket-button-recent">View</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {this.eventsDisplay}
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default UserPage;