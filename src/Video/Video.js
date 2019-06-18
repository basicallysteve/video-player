import React from "react";
import "./Video.css";
export class Video extends React.Component {
    render(){
        return (
            <div className="video-container">
                <video className="video" controls autostart autoPlay src={this.props.src}/>
            </div>
        )
    }
}