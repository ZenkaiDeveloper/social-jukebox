import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Jukebox extends Component {


render() {
  console.log(this.props.addedSongs)
  return(
    <div>
    <h1>I'm a Jukebbox</h1>
    <Link to='/search'>Add Songs</Link>
    </div>
  )
}

}
