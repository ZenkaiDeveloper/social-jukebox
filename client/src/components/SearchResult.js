import React, {Component} from 'react'
import '../SearchResult.css'



export default class SearchResult extends Component {

  render() {

    return(
      <div className='card'>
      <h3>{this.props.result.snippet.title}</h3>
      <p>{this.props.result.snippet.channelTitle}</p>
      <button onClick={e => this.props.addSong(e,this.props.result)}>Add to Jukebox</button>
      </div>
    )
  }
}
