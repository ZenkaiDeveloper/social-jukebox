import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class Navbar extends Component{

  render(){
    console.log(this.props.currentSong)
    let playUrl = `https://www.youtube.com/watch?v=${this.props.currentSong}`
    return(
      <nav>
        <li>Currently Playing:</li>
        <li>

          <ReactPlayer className="player" url={playUrl} playing />
        </li>
      </nav>
    )
  }
}
