import React from "react";
import "./Video.css";
export class Video extends React.Component {

    handleLike(){
        this.props.onLike(this.props.video.id);
    }
    handleUnlike(){
        console.log(this.props);
        this.props.onUnLike(this.props.video.id);
    }
    render(){
        let likeButton = this.props.video.isLiked === true ? <i onClick={this.handleUnlike.bind(this)} className="fas fa-heart like-button"></i> : <i onClick={this.handleLike.bind(this)} className="far fa-heart like-button"></i>
        return (
            <div className="video-container">
                <video className="video" controls autostart autoPlay src={this.props.video.src}/>
                <div className="video-info">
                    <h1 className="video-title">{this.props.video.title}</h1>
                    <div>{this.props.video.likes} {likeButton}</div>
                </div>
            </div>
        )
    }
}