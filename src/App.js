import React, { Component } from 'react';
import {Header, MoviesList, MoviesDetails, MoviesElements} from './components';

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <div className = "d-flex flex-row">
          <MoviesList />
          <MoviesDetails />
        </div>
        
        <MoviesElements />
      </div>      
    );
  }
  
}
export default App;
