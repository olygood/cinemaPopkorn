import React, { Component } from 'react';
import MoviesElements from './movies-Elements'
import '../../index.css';

export default class MoviesList extends Component{
    render(){
        return(
            <div className="w-75 d-flex flex-row flex-wrap align-content-start">
               <MoviesElements _movie={ this.props._movies[0] } updateSelectedMovie = {this.props.updateSelectedMovie} />
               <MoviesElements _movie={ this.props._movies[1] } updateSelectedMovie = {this.props.updateSelectedMovie}/>
               <MoviesElements _movie={ this.props._movies[2] } updateSelectedMovie = {this.props.updateSelectedMovie} />
               <MoviesElements _movie={ this.props._movies[3] } updateSelectedMovie = {this.props.updateSelectedMovie} />
              
              
              
              
            </div>
        ); 

    }
}
