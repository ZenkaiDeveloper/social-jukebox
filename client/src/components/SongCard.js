import React, { Component } from 'react'


export const SongCard = (props)=>{
  return(
    <div>
      <h3>{props.song.snippet.title}</h3>
      <p>{props.song.snippet.channelTitle}</p>
    </div>
  )
}
