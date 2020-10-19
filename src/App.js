import React, { Component } from 'react';
import {Header, MoviesList, MoviesDetails, MoviesElements, Footer} from './components';

class App extends Component{
  render(){
    return(
      <div className="container App d-flex flex-column">
        <Header />
        <div className = "content d-flex flex-row border flex-fill pt-3">
          <MoviesList />
          <MoviesDetails />
        </div>
        <Footer />
       
      </div>      
    );
  }
  
}
export default App;
