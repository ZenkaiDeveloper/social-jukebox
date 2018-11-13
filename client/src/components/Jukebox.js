import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import SearchResult from './SearchResult.js'
import {SongCard} from './SongCard'




class Jukebox extends Component {


displayAddedSongs=()=>{
  return this.props.userSongs.map(song=>{
    return <SongCard changeCurrentSong={this.props.changeCurrentSong} song={song} />
  })
}

logOut = ()=>{
  localStorage.clear();
  window.location.replace('/')
}

render() {

  return(
    <div>
    <h1>Welcome to Your Jukebox!</h1>
    <button onClick={this.logOut}>Log Out</button>
    {this.displayAddedSongs()}
    <Link to='/search'>Add Songs</Link>
    </div>
  )
}

}

export default withRouter(Jukebox)
