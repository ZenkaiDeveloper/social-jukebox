import React, { Component } from 'react'
import '../SongCard.css'

export const SongCard = (props)=>{
  if(props.song){
    return(
      <div className="song-card" onClick={e=>props.changeCurrentSong(e,props.song)}>
      <div className="title">
        <i className="fas fa-star"></i>
          <h3 className="song-title">{props.song.title}</h3>
        <i className="fas fa-star"></i>
      </div>

        <div className="card-or">
          <hr className="card-bar" />
            <span className="artist-name"><i className="fas fa-caret-right"></i> {props.song.artist} <i className="fas fa-caret-left"></i></span>
          <hr className="card-bar" />
        </div>
        <div>
          <button className="remove-card">Remove</button>
        </div>


      </div>
    )
  }else{
    return(
      <div>
        Nada
      </div>
    )
  }

}
