import React from 'react';
import './App.css';
import { Menu } from "./Menu/Menu";
import { Video } from "./Video/Video"
let VIDEOS = [
  {
    id: 0,
    src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
    title: "Deers running through forrest",
    likes: 251,
    isLiked: false
  },
  {
    id: 1,
    src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
    title: "Moving at a Snail's Pace",
    likes: 54,
    isLiked: false
  },
  {
    id: 2,
    src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    title: "The Cutest Cat Ever",
    likes: 521500,
    isLiked: false
  },
  {
    id: 3,
    src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4',
    title: "WARNING: SPIDERS",
    likes: 0,
    isLiked: false
  }
]
  


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      video: VIDEOS[0],
    };
  }

  chooseVideo(video){
    this.setState({
      video: VIDEOS[video]
    });
  }

  likeVideo(video){
    let likedVideo = VIDEOS[video];
    likedVideo = {
      ...likedVideo,
      likes: likedVideo.likes+1,
      isLiked: true
    }

    VIDEOS[video] = likedVideo;
    this.setState({
      video: likedVideo
    })
  }

  unlikeVideo(video){
    let unLikedVideo = VIDEOS[video];
    unLikedVideo = {
      ...unLikedVideo,
      likes: unLikedVideo.likes-1,
      isLiked: false
    }
    VIDEOS[video] = unLikedVideo;
    this.setState({
      video: unLikedVideo
    })
  }

  render(){

    return (
      <div className="App">
        <h1>U - Tube</h1>
        <div className="video-player">
          <Video className="video" video={this.state.video} onLike={this.likeVideo.bind(this)} onUnLike={this.unlikeVideo.bind(this)}/>
          <Menu onChange={this.chooseVideo.bind(this)} thumbnailsText={Object.keys(VIDEOS)} thumbnails={Object.values(VIDEOS)}/>
        </div>
      </div>
    );
  }
  
}

export default App;
