import React, { Component } from 'react'
import Header from "../Header/Header"
import "./LoadingPage.css"

class LoadingPage extends Component {
    render() {
        return (
            <div id="loadingContainer">
                <Header/>
                <div id="contentContainer">
                    <div className="loadingContainer" id="loadingAnimation">
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                        <span className="loadingSpan"></span>
                    </div>
                </div>
                <div className="loading-text">
                    <h1 className="loadingText">LOADING
                        <span className="dot-one"> .</span>
                        <span className="dot-two"> .</span>
                        <span className="dot-three"> .</span>
                    </h1>
                </div>
            </div>
        );
    }
}
export default LoadingPage;