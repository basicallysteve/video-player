import React from 'react'
import './Menu.css'
/**
 * @class Menu
 * @classdesc Stateless class that controls which video is being played
 */
export class Menu extends React.Component {
  /**
    * @function handleVideoChange
    * @param {number} id
    * @description changes the main video that is being played onClick
    */
  handleVideoChange (id) {
    this.props.onChange(id)
  }
  /**
  * @function preview
  * @param {object} event
  * @description Plays video on hover
  */
  preview (event) {
    let video = event.target
    video.play()
  }
  /**
  * @function pause
  * @param {object} event
  * @description Pauses video onMouseLeave. Puts video back to 0
  */
  pause (event) {
    let video = event.target
    video.currentTime = 0
    video.pause()
  }
  /**
  * @function render
  * @description Renders component
  */
  render () {
    return (
      <div className='thumbnails menu-container'>
        {this.props.thumbnails.map((thumbnail, index) => {
          return <video onMouseOver={this.preview.bind(this)} onMouseLeave={this.pause.bind(this)} onClick={this.handleVideoChange.bind(this, this.props.thumbnailsText[index])} className='thumbnail' src={thumbnail.src} name={this.props.thumbnailsText[index]} />
        })}
      </div>

    )
  }
}
