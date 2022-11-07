import React from 'react';
import MovieComponent from './moviecomponent';
import MovieData from './moviedata';
import StarRating from './starrating';

export default class MovieList extends React.Component {
    render(){
        return(
        <div className = "container">
        <h1 style={{textAlign: 'center'}}>Welcome to Spoiled Potatos!</h1>
        <div><MovieComponent/></div>
        
        <div></div>
        
        </div>
        );
    }        
}

