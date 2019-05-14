import Loadable from 'react-loadable';
import Header from "../Header/Header"
import React, { Component } from 'react'
import "./Settings.css"

function Loading() {
    return <h3>Loading...</h3>;
}

const LoadingComponent = Loadable({
    loader: () => import('../LoadingPage/LoadingPage'),
    loading: Loading
});

class Settings extends Component {
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
    componentDidMount() {
        // fetch('https://api.glimpsewearables.com/media/getAllEvents')
        fetch('http://localhost:8000/media/getAllEvents')
            .then(res => res.json())
            .then(data => this.setState({data}))
        setTimeout(() => {
            var all_event_data = this.state.data.all_events;
            this.setState({all_events: all_event_data});
            this.setState({isLoading: false});
        }, 2500);
    }
    render() {
        const isLoading = this.state.isLoading;
        if(isLoading){
            return (
                <LoadingComponent/>
            );
        } else {
            // this.eventRawContentDisplay = this.state.raw_videos.map((video, key) =>
            //     <div id="{video.id}" key={video.id} className="video-card">
            //         <video className="displayingVideo" controls>
            //             <source src={video.link} type="video/mp4"></source>
            //         </video>
            //     </div>
            // );
            return (
                <div id="mainContainer">
                    <div id="userEventPageHeader">
                        <Header/>
                    </div>
                    <div id="allEventContent">
                        <div id="eventInformation">
                        </div>
                        <div id="eventVideos">
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default Settings;