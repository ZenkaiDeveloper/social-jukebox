import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SearchResult from './SearchResult.js'
import {SongCard} from './SongCard'












export default class Jukebox extends Component {


displayAddedSongs=()=>{
  return this.props.addedSongs.map(song=>{
    return <SongCard song={song} />
  })
}


render() {
  return(
    <div>
    <h1>Welcome to Your Jukebox!</h1>
    {this.displayAddedSongs()}
    <Link to='/search'>Add Songs</Link>
    </div>
  )
}

}
