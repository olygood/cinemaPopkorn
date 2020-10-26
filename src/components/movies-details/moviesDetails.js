import React, { Component } from 'react';
import '../../index.css';

export default class MoviesDetails extends Component{
    render(){
        return(
            <div className="w-25 border p-4 d-flex flex-column">
                <h5>{this.props._movie.title }</h5>
                <hr className="w-100" />
                <div > 
                <img  className="d-block mx-auto" src={this.props._movie.img} /> 
                </div>
                <hr className="w-100" />
                <span className="text-secondary">{this.props._movie.details}</span>
                <hr className="w-100" />
                <p>{this.props._movie.description}</p>
            </div>
        ); 
    }
}