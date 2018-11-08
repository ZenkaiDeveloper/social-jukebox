import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const songsURL = 'http://localhost:3002/songs'

class App extends Component {
  state={
    songs:[]
  }


  displaySongTitle = ()=>{
    return this.state.songs.map(song=>{
      return song.title
    })
  }

  componentDidMount() {
    fetch(songsURL)
    .then(res => res.json())
    .then(songs => this.setState({
      songs
    }))
  }



  render() {
    return (
      <div>{this.displaySongTitle()}</div>
    );
  }
}

export default App;
