import React from 'react';

export const MovieData = [
    {
        title: 'Sharknado',
        releaseDate: '2013',
        description: 'Natures deadliest killer takes to the skies in the ultimate gill-ty pleasure as a group of friends try to save the Santa Monica coast from shark-infested tornadoes.',
        image: <img src = '.\sharknado.jpg'/> ,
        rating: '4',
        reviews: [
            "horrible",
            "thrilling, but horrible"
        ]
    }
]

/*
export default class MovieData extends React.Component{
    render(){
        return();
    }
}
*/

console.log(MovieData);