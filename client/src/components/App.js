import React, { Component } from 'react';
import '../App.css';
import SearchContainer from './SearchContainer.js'
import Jukebox from './Jukebox.js'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Navbar from './Navbar'
import Login from './Login'
import decode from 'jwt-decode'
import SignUp from './SignUp'




const AuthRoute = ({ component: Component, ...rest }) => {
  const checkAuth = () =>{
    const token  = window.localStorage.getItem('jwt');
    if(!token){
      return false
    }
    return true
  }

  return (
    <Route {...rest} render={props =>
        checkAuth()
        ? (
          <Component {...props} />
        )
        : (
          <Redirect to={{pathname: "/login" }} />
        )
      } />
  );
}

const songsURL = 'http://localhost:3002/api/songs'



class App extends Component {

  state={
    userSongs: [],
    currentSong: ""
  }

  addSong = (event, song) => {
    let token = "Bearer " + localStorage.getItem("jwt");
    let newSongs = [...this.state.userSongs, song]
    this.setState({
      userSongs: newSongs
    })
    let options={
      method:"POST",
      headers:{
        'Content-type': "application/json",
        'Authorization': token
      },
      body:JSON.stringify({
        title: song.snippet.title,
        artist: song.snippet.channelTitle,
        video_id: song.id.videoId
      })
    }
    fetch(songsURL,options)
      .then(r=>r.json())
      .then(()=>{
        this.getSongs()
      })
  }

  getSongs = () => {
    let token = "Bearer " + localStorage.getItem("jwt");
    let options={
      method:"GET",
      headers:{
        'Content-type': "application/json",
        'Authorization': token
      }
    }
    fetch(songsURL,options)
      .then(r=>r.json())
      .then(songs=>{
        this.setState({
          userSongs: songs
        })
      })
      .catch(error=>{
        console.log(error)
      })
  }

  componentDidMount(){
    this.getSongs()
  }

  displayNavbar = ()=> {
    let token = localStorage.getItem('jwt');
    if(token){
      return <Navbar currentSong={this.state.currentSong} />
    }
  }
  
  changeCurrentSong = (e,song) =>{
    this.setState({
      currentSong: song
    })
  }


  render() {
    console.log(this.state.currentSong)
    return (
      <Router>
        <div>
          {this.displayNavbar()}
          <Route exact path="/signup" component={SignUp} />
          <Route exact path='/login' component= {() => <Login getData={this.getSongs} />}/>
          <AuthRoute exact path='/' component= {() => <Jukebox changeCurrentSong={this.changeCurrentSong} userSongs={this.state.userSongs}/>}/>
          <AuthRoute path='/search' component={() => <SearchContainer addSong={this.addSong}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
