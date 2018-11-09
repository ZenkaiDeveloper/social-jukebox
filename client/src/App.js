import React, { Component } from 'react';
import './App.css';
import Napster from './Napster.js'
import jQuery from 'jquery'


const songsURL = 'http://localhost:3002/songs'

class App extends Component {
  constructor(props){
    super(props)
    Napster(window, jQuery, JSON)

    this.state={
      songs:[]
    }



    window.Napster.init({
      consumerKey: 'ZDhhZTQ5NzQtYWM1Yy00OTUzLWJhZGUtZTUzMGRkODc3Mjc2'

    });
  }



  displaySongTitle = ()=>{
    return this.state.songs.map(song=>{
      return song.title
    })
  }

  // componentDidMount() {
  //   fetch(songsURL)
  //   .then(res => res.json())
  //   .then(songs => this.setState({
  //     songs
  //   }))
  // }



  render() {

    console.log(window.Napster.player.play('Tra.5156528').play);

    return (
      <div>
        {}
      </div>

    );
  }
}

export default App;
