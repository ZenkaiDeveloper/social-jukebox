import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';


export default class Navbar extends Component{

  state = {
    playing: false,
    playPause: 'play'
  }

  playButtonHandler = () => {
      this.setState({
        playing: !this.state.playing,
      }, ()=>{
        let button = this.state.playing ? 'pause' : 'play'
        this.setState({
          playPause : button
        })
      })
    }




  render(){
    console.log(this.props.currentSong)
    let playUrl = `https://www.youtube.com/watch?v=${this.props.currentSong.video_id}`
    return(
      <nav>
        <Link to="/">Go to Jukebox</Link>
        <li>Current Track: {this.props.currentSong.title}</li>
        <i onClick={this.playButtonHandler} className={`far fa-${this.state.playPause}-circle`}></i>
        <li>

          <ReactPlayer playing={this.state.playing} className="player" url={playUrl} />
        </li>
      </nav>
    )
  }
}
