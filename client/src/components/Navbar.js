import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class Navbar extends Component{
  render(){
    return(
      <nav>
        <li>Currently Playing:</li>
        <li>
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
        </li>
      </nav>
    )
  }
}
