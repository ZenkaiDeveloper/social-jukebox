import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import SearchResult from './SearchResult.js'
import {SongCard} from './SongCard'
import '../Jukebox.css'

class Jukebox extends Component {

  state={
    currentNum : 0,
    range:6
  }

displayAddedSongs=()=>{
  let limitArr = this.props.userSongs.slice(this.state.currentNum, this.state.range);
  return limitArr.map(song=>{
    return <SongCard key={song.id} changeCurrentSong={this.props.changeCurrentSong} song={song} />
  })
}

nextPage = ()=>{
  if (this.state.range + 6 > this.props.userSongs.length) {
    this.setState({
      range: this.props.userSongs.length
    })
  }
  if(this.state.currentNum + 6 > this.props.userSongs.length){
    this.setState({
      currentNum: this.props.userSongs.length-6
    })
  }else{
    this.setState({
      currentNum: this.state.currentNum + 6,
      range: this.state.range + 6
    })
  }
}

prevPage = ()=>{
  if(this.state.currentNum - 6 > 0){
    this.setState({
      currentNum: 0
    })
  }
  if (this.state.range - 6 < 0) {
    this.setState({
      range: 0
    })
  }else{
      this.setState({
        currentNum: this.state.currentNum - 6,
        range: this.state.range - 6
      })
    }

}




render() {
  console.log(this.state)
  return(
    <div className="jukebox-wrapper">
    <h1 className="welcome">Welcome to Your Jukebox!</h1>
    <div className="card-container">
      {this.displayAddedSongs()}
    </div>
    <div className="btn-container">
      <div onClick={this.prevPage} className="arrow-left">
        <i className="fas fa-long-arrow-alt-left"></i>
      </div>
      <div onClick={this.nextPage} className="arrow-right">
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
    </div>
    </div>
  )
}

}

export default withRouter(Jukebox)
