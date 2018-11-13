import React, { Component } from 'react'


export const SongCard = (props)=>{
  if(props.song){
    return(
      <div onClick={e=>props.changeCurrentSong(e,props.song.video_id)}>
        <h3>{props.song.title}</h3>
        <p>{props.song.artist}</p>
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
