import React from 'react';
import StarRating from './starrating';


let ReviewArray = ['Outstanding!', 'The story line of the century.'];

export default class Review extends React.Component{
    
    render(){
        return <form>
        <div className="form-group">
            <ul>{ReviewArray}</ul>
            <input type="text" className="form-control" id="reviewInput" placeholder="Write a Review Here"></input>
            <StarRating/>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    }
}

/*
ReviewArray.map(review => <div key = {review}
             style= {styles}>{review}</div>)
*/