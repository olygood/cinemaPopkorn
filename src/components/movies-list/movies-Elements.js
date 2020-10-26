import React, { Component } from 'react';
import '../../index.css';

export default class MoviesElements extends Component{
    /**
     * creation de la fonction mouseEnter pour l'evenement onMouseEnter
     * on recupere updateSelectedMovie depuis moviesElement haaaa l'hydratation de props heyyy 
     */
mouseEnter = () =>{
    this.props.updateSelectedMovie(this.props._movie.title);
}
    render(){
        return (
            <div onMouseEnter={this.mouseEnter} className="w-50 p-2">
            <div className="border d-flex">
               <img width="150" height="200" alt="film-series" src={this.props._movie.img}/>
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{this.props._movie.title}</h5>
                    <hr className="w-100" />
                    <span>{this.props._movie.details}</span>
                </div>
            </div>
            </div>
        );
    }
}
