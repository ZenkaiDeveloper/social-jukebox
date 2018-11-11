import React, { Component } from 'react';
import '../App.css';
import SearchContainer from './SearchContainer.js'
import Jukebox from './Jukebox.js'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Navbar from './Navbar'
import Login from './Login'
import decode from 'jwt-decode'


const checkAuth = () =>{
  const token  = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  if(!token || !refreshToken){
    return false
  }
  try{
    const { exp } = decode(refreshToken);
    if (exp*1000 < new Date().getTime()) {
      return false;
    }
  }catch(e){
    return false;
  }
  return true
}

const AuthRoute = ({ component: Component, ...rest }) => {
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

const songsURL = 'http://localhost:3002/songs'

class App extends Component {
  state={
    addedSongs: []
  }

  addSong = (event, song) => {
    let newSongs = [...this.state.addedSongs, song]
    this.setState({
      addedSongs: newSongs
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/login' component= {() => <Login/>}/>
          {/* <PrivateRoute component={Navbar} />*/}
          <AuthRoute path='/' component= {() => <Jukebox addedSongs={this.state.addedSongs}/>}/>
          <Route path='/search' component={() => <SearchContainer addSong={this.addSong}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
