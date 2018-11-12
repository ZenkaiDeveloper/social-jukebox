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
    userSongs: []
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
        author: song.snippet.channelTitle
      })
    }
    fetch(songsURL,options)
      .then(r=>r.json())
      .then(console.log)
  }


  render() {
    return (
      <Router>
        <div>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path='/login' component= {() => <Login/>}/>
          {/* <PrivateRoute component={Navbar} />*/}
          <AuthRoute exact path='/' component= {() => <Jukebox addedSongs={this.state.userSongs}/>}/>
          <AuthRoute path='/search' component={() => <SearchContainer addSong={this.addSong}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
