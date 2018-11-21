import React, {Component} from 'react'
import SearchResult from './SearchResult.js'
import API_KEY from '../keys.js'
import {Link} from 'react-router-dom'
import '../SearchContainer.css'

const youtubeURL = 'https://www.googleapis.com/youtube/v3'
const apiKEY = API_KEY
export default class SearchContainer extends Component {

  state = {
    searchResults: [],
    searchTerm: ''
  }

  componentDidMount(){
    fetch(`${youtubeURL}/search?part=snippet&key=${apiKEY.API_KEY}&q=${this.state.searchTerm}&type=video&order=viewCount&maxResults=15`)
      .then(res => res.json())
      .then(response => {
        this.setState({
          searchResults: response.items
        }, ()=> {})
      })
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
    fetch(`${youtubeURL}/search?part=snippet&key=${apiKEY.API_KEY}&q=${this.state.searchTerm}&type=video&order=viewCount&maxResults=15`)
      .then(res => res.json())
      .then(response => this.setState({
        searchResults: response.items
      }))
  }

  render() {

    let results = this.state.searchResults.map(result => <SearchResult key={result.id.videoId} result={result} addSong={this.props.addSong}/>)

    return(
      <div className='SearchContainer'>
      <form className='SearchBar' onSubmit={this.searchSubmit}>
      <input className="search-term" name="searchTerm" onChange={this.changeHandler} value={this.state.searchTerm} id='searchBar' type='text' placeholder='Search for Songs'/>
      <input className="search-btn" type='submit' value='Search'/>
      </form>
      {results}
      </div>
    )
  }
}
