import React, { Component } from 'react';
import MoviesElements from './movies-Elements'

export default class MoviesList extends Component{
    render(){
        return(
            <div className="w-75 d-flex flex-row flex-wrap align-content-start">
               <MoviesElements />
               <MoviesElements />
               <MoviesElements />
               <MoviesElements />
               <MoviesElements />
               <MoviesElements />
            </div>
        ); 

    }
}
