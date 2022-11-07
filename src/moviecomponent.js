import React from 'react';
import { MovieData } from './moviedata';
import Sharknado from './sharknado.jpg';
import Review from './moviereview'; 



export default class MovieComponent extends React.Component{
    render(){
        return <div className = "container">
            <div className = "container" id = "movieBorder">
                <h3>Sharknado</h3><h4>2013</h4>
                <img src={Sharknado} alt="Sharknado" />;
                <p>Natures deadliest killer takes to the skies in the ultimate gill-ty pleasure as a group of friends try to save the Santa Monica coast from shark-infested tornadoes.</p>
                <h5>Reviews:</h5>
                <div><Review/></div>

            </div>
   </div>
    }
}  