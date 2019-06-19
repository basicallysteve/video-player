import React from 'react'
import './Menu.css'
export class Menu extends React.Component {
  handleVideoChange (name) {
    this.props.onChange(name)
  }

  preview (event) {
    let video = event.target
    video.play()
  }

  pause (event) {
    let video = event.target
    video.currentTime = 0
    video.pause()
  }
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
