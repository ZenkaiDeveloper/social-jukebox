import React, { Component } from 'react';
import './App.css';
import SearchContainer from './SearchContainer.js'
import Jukebox from './Jukebox.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Navbar from './Navbar'

const songsURL = 'http://localhost:3002/songs'

class App extends Component {
  state={
    addedSongs: []
  }

  addSong = (event, song) => {
    let newSongs = [...this.state.addedSongs, song]
    this.setState({
      addedSongs: newSongs
    })
  }



  render() {
    return (
      <Router>

      <div>
        <Navbar />
        <Route exact path='/' component= {() => <Jukebox addedSongs={this.state.addedSongs}/>}/>
        <Route path='/search' component={() => <SearchContainer addSong={this.addSong}/>}/>
      </div>
      </Router>
    );
  }
}

export default App;
