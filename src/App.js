import React from 'react';
import './App.css';
import { Menu } from "./Menu/Menu";
import { Video } from "./Video/Video"
const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      src: VIDEOS.fast,
    };
  }

  chooseVideo(video){
    this.setState({
      src: VIDEOS[video]
    });
  }
  render(){
    return (
      <div className="App">
        <h1>U - Tube</h1>
        <div className="video-player">
          <Video className="video" src={this.state.src}/>
          <Menu onChange={this.chooseVideo.bind(this)} thumbnailsText={Object.keys(VIDEOS)} thumbnails={Object.values(VIDEOS)}/>
        </div>
      </div>
    );
  }
  
}

export default App;
