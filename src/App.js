import React from 'react'
import './App.css'
import { Menu } from './Menu/Menu'
import { Video } from './Video/Video'
/**
 * @type {Array<object>} VIDEOS
 * @description Global variable with array of Video Objects
 */
let VIDEOS = [
  {
    id: 0,
    src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
    title: 'Deers running through forrest',
    likes: 251,
    isLiked: false,
    comments: []
  },
  {
    id: 1,
    src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
    title: "Moving at a Snail's Pace",
    likes: 54,
    isLiked: false,
    comments: []
  },
  {
    id: 2,
    src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    title: 'The Cutest Cat Ever',
    likes: 521500,
    isLiked: false,
    comments: []
  },
  {
    id: 3,
    src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4',
    title: 'WARNING: SPIDERS',
    likes: 0,
    isLiked: false,
    comments: []
  }
]

/**
 * @class App
 * @classdesc App is the "main" class. Controls state of application
 */
class App extends React.Component {
  /**
   * @function constructor
   * @param {object} props
   * @description Initializes app and sets initial state of video player application
   */
  constructor (props) {
    super(props)

    this.state = {
      video: VIDEOS[0]
    }
  }

  /**
   * @function chooseVideo
   * @param {number} video
   * @description Sets state of video chosen. This function is tied to the Menu component
   */
  chooseVideo (video) {
    this.setState({
      video: VIDEOS[video]
    })
  }

  /**
   * @function likeVideo
   * @param {number} video
   * @description Adds a like to the current video.
   */
  likeVideo (video) {
    let likedVideo = VIDEOS[video]
    likedVideo = {
      ...likedVideo,
      likes: likedVideo.likes + 1,
      isLiked: true
    }

    VIDEOS[video] = likedVideo
    this.setState({
      video: likedVideo
    })
  }
  /**
   * @function unlikeVideo
   * @param {number} video
   */
  unlikeVideo (video) {
    let unLikedVideo = VIDEOS[video]
    unLikedVideo = {
      ...unLikedVideo,
      likes: unLikedVideo.likes - 1,
      isLiked: false
    }
    VIDEOS[video] = unLikedVideo
    this.setState({
      video: unLikedVideo
    })
  }
  /**
   * @function render
   * @description Renders the App component on the screen
   */
  render () {
    return (
      <div className='App'>
        <h1>U - Tube</h1>
        <div className='video-player'>
          <Video className='video' video={this.state.video} onLike={this.likeVideo.bind(this)} onUnLike={this.unlikeVideo.bind(this)} />
          <Menu onChange={this.chooseVideo.bind(this)} thumbnailsText={Object.keys(VIDEOS)} thumbnails={Object.values(VIDEOS)} />
        </div>
      </div>
    )
  }
}

export default App
