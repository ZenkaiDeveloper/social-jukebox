import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';
import '../Navbar.css'


export default class Navbar extends Component{

  state = {
    playing: false,
    playPause: 'play',
    open: null
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


    openMenu = ()=>{
      let overlay = document.querySelector('.overlay');
      setTimeout(function(){
        overlay.classList.toggle('display-block');
      },300);
      if(!this.state.open){
        this.setState({
          open:"open"
        })
      }else{
        this.setState({
          open:null
        })
      }
    }

    closeMenu = ()=>{
      let overlay = document.querySelector('.overlay');
        overlay.classList.toggle('display-block');
        this.setState({
          open:null
        })

    }

    logOut = ()=>{
      localStorage.clear();
      window.location.replace('/')
    }



  render(){
    let playUrl = `https://www.youtube.com/watch?v=${this.props.currentSong.video_id}`
    return(



      <nav>
      <div className="overlay">
        <ul className="nav-list">
          <li onClick={this.closeMenu} className="list-item"><Link to='/'>Jukebox</Link></li>
          <li onClick={this.closeMenu} className="list-item"><Link to='/search'>Add Songs</Link></li>
          <li onClick={this.logOut} className="list-item"><a href="#">Log Out</a></li>
          <li onClick={this.closeMenu} className="list-item"><a href="#">About Us</a></li>
        </ul>
      </div>
        <div onClick={this.openMenu} className={this.state.open} id="burger-container">
        <div id="burger">
          <div className="span"></div>
          <div className="span"></div>
          <div className="span"></div>
          <div className="span"></div>
        </div>
      </div>
        <li><h2>Current Track: {this.props.currentSong.title}</h2></li>
        <i onClick={this.playButtonHandler} className={`play-pause far fa-${this.state.playPause}-circle`}></i>
        <li>
          <ReactPlayer playing={this.state.playing} className="player" url={playUrl} />
        </li>


      </nav>
    )
  }
}
