import React, {Component} from 'react'
import SearchResult from './SearchResult.js'
import API_KEY from './keys.js'
import {Link} from 'react-router-dom'

const youtubeURL = 'https://www.googleapis.com/youtube/v3'
const apiKEY = API_KEY

export default class SearchContainer extends Component {

  state = {
    searchResults: [],
    searchTerm: ''
  }

  componentDidMount(){
    fetch(`${youtubeURL}/search?part=snippet&q=${this.state.searchTerm}&type=playlist&key=${apiKEY.API_KEY}`)
      .then(res => res.json())
      .then(response => this.setState({
        searchResults: response.items
      }))
  }


  searchSubmit = (e) => {
    e.preventDefault()
    this.newSearch();
  }

  changeHandler = (e)=>{
    this.setState({
      searchTerm : e.target.value
    })
  }

  newSearch() {
    fetch(`${youtubeURL}/search?part=snippet&q=${this.state.searchTerm}&type=playlist&key=${apiKEY.API_KEY}`)
      .then(res => res.json())
      .then(response => this.setState({
        searchResults: response.items
      }))
  }

  render() {

let results = this.state.searchResults.map(result => <SearchResult result={result} addSong={this.props.addSong}/>)

    return(
      <div>
      <Link to="/">Go to Jukebox</Link>
      <form onSubmit={this.searchSubmit}>
      <input name="searchTerm" onChange={this.changeHandler} value={this.state.searchTerm} id='searchBar' type='text'/>
      <input type='submit'/>
      </form>
      {results}
      </div>
    )
  }
}
