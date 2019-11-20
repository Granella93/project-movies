import React from 'react'
import './movieItem.css'
import uuid from 'react-uuid'

const MovieItem = (props) => {
    return ( 

        <article>
            <h3>{props.movies.title}</h3>
            <h3>{props.movies.year}</h3>
            <h3>{props.movies.director}</h3>
            <h3>{props.movies.duration}</h3>
            <h3>{props.movies.rate}</h3>
            <ul>
                {props.movies.genre.map(genre => <li key={uuid()}>{genre}</li>)}
            </ul>
        </article>

     );
}
 
export default MovieItem;