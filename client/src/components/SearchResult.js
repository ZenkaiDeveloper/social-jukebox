import React, {Component} from 'react'



export default class SearchResult extends Component {

  render() {

    return(
      <div>
      <h3>{this.props.result.snippet.title}</h3>
      <p>{this.props.result.snippet.channelTitle}</p>
      <button onClick={e => this.props.addSong(e,this.props.result)}>Add to Jukebox</button>
      </div>
    )
  }
}
