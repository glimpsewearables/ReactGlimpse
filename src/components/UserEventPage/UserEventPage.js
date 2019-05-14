import React, { Component } from 'react'
import Loadable from 'react-loadable';
import Header from "../Header/Header"
import "./UserEventPage.css"

function Loading() {
    return <h3>Loading... From Js Page</h3>;
}

const LoadingComponent = Loadable({
    loader: () => import('../LoadingPage/LoadingPage'),
    loading: Loading
});

class UserEventPage extends Component {
    constructor(props) {
        super(props);
        if(localStorage.getItem("device_id") && localStorage.getItem("device_id") !== null && localStorage.getItem("device_id") !== "null"){
            this.state = {
                device_id:localStorage.getItem("device_id"),
                user_info: localStorage.getItem("user_info"),
                user_events: localStorage.getItem("user_events"),
                data:null,
                isLoading:true,
                videos:null,
                event_id:localStorage.getItem("event_id"),
                raw_videos:null,
                curated_videos: null,
                featured_videos: null,
                edited_videos: null,
                event_data: null,
                event_info: null
            };
        }
    }
    loadPage = () =>{

    }
    componentDidMount() {
        fetch('https://api.glimpsewearables.com/media/getAllVideosUserEvent/' + this.state.device_id + '/' + this.state.event_id)
        // fetch('http://localhost:8000/media/getAllVideosUserEvent/' + this.state.device_id + '/' + this.state.event_id)
            .then(res => res.json())
            .then(data => this.setState({data}))
        fetch('https://api.glimpsewearables.com/media/getSpecificEvent/' + this.state.event_id)
        // fetch('http://localhost:8000/media/getSpecificEvent/' + this.state.event_id)
            .then(res => res.json())
            .then(event_data => this.setState({event_data}))
        setTimeout(() => {
            var raw_footage = this.state.data.user_event_videos.raw_media;
            var curated_footage = this.state.data.user_event_videos.curated_media;
            var featured_footage = this.state.data.user_event_videos.featured_media;
            var edited_footage = this.state.data.user_event_videos.edited_media;
            var event_data = this.state.event_data.this_event;
            this.setState({event_info: event_data});
            this.setState({raw_videos: raw_footage});
            this.setState({curated_videos: curated_footage});
            this.setState({featured_videos: featured_footage});
            this.setState({edited_videos: edited_footage});
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
            this.eventRawContentDisplay = this.state.raw_videos.map((video, key) =>
                <div id="{video.id}" key={video.id} className="video-card">
                    <video className="displayingVideo" controls>
                        <source src={video.link} type="video/mp4"></source>
                    </video>
                </div>
            );
            this.eventFeaturedContentDisplay = this.state.featured_videos.map((video, key) =>
                <div id="{video.id}" key={video.id} className="video-card">
                    <h1>{video.link}</h1>
                </div>
            );
            this.eventEditedContentDisplay = this.state.edited_videos.map((video, key) =>
                <div id="{video.id}" key={video.id} className="video-card">
                    <h1>{video.link}</h1>
                </div>
            );
            this.eventCuratedContentDisplay = this.state.curated_videos.map((video, key) =>
                <div id="{video.id}" key={video.id} className="video-card">
                    <h1>{video.link}</h1>
                </div>
            );
            return (
                <div id="mainContainer">
                    <div id="userEventPageHeader">
                        <Header/>
                    </div>
                    <div id="allEventContent">
                        <div id="eventInformation">
                            <h1 className="eventTitle">{this.state.event_info.name}</h1>
                            <h2 className="eventAddress">{this.state.event_info.address}</h2>
                            <h2 className="eventAddress">{this.state.event_info.start_date} - {this.state.event_info.end_date} </h2>
                        </div>
                        <div id="eventVideos">
                            <div id="featuredVideos" className="videosContainer">
                            </div>
                            <div id="curatedVideos" className="videosContainer">
                            </div>
                            <div id="editedVideos" className="videosContainer">
                            </div>
                            <div id="rawVideos" className="videosContainer">
                                {this.eventRawContentDisplay}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default UserEventPage;