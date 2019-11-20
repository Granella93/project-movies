import React, { Component } from 'react';
import MovieItem from './MovieItem';
import movies from '../data/dataMovies'
import './moviesList.css'
import uuid from 'react-uuid'

// const MoviesList = () => {
//     const allMovies= movies.map(movie=><MovieItem key={uuid()} movies={movie}/>)
//     return ( 
//         <section>
//             {allMovies}
//         </section>
//      );
// }

class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = { movies: movies }
    }
    handleAscending=()=>{
        console.log('ascending')
        const ascendingMovies=this.state.movies.sort((x,y)=> x.year - y.year)
        this.setState({movies : ascendingMovies})
    }
    handleDescending=()=> {
        console.log('descending')
        const descendingMovies=this.state.movies.sort((x,y)=> y.year - x.year)
        this.setState({movies : descendingMovies})
    }
    handleRate=()=> {
        console.log('rate')
        const rateMovies=this.state.movies.sort((x,y)=> y.rate - x.rate)
        this.setState({movies : rateMovies})
    }
    handleAtoZ=()=> {
        console.log('AtoZ')
        const AtoZMovies=this.state.movies.sort((x,y)=> {
            if(x.title<y.title)
                return -1;
            if(x.title>y.title)
                return 1;
            return 0
        })
        this.setState({movies : AtoZMovies})
        
    }
    handleZtoA=()=> {
        console.log('ZtoA')
        const ZtoAMovies=this.state.movies.sort((x,y)=> {
            if(y.title<x.title)
                return -1;
            if(y.title>x.title)
                return 1;
            return 0
        })
        this.setState({movies : ZtoAMovies})
    }
    render() {
        const allMovies = this.state.movies.map(movie =>
            <MovieItem key={uuid()} movies={movie} />)
        return (
            <main>
                <div>
                    <button onClick={this.handleAscending}>Sort by Date Ascending</button>
                    <button onClick={this.handleDescending}>Sort by Date Descending</button>
                    <button onClick={this.handleRate}>Sort by Rate</button>
                    <button onClick={this.handleAtoZ}>A bis Z</button>
                    <button onClick={this.handleZtoA}>Z bis A</button>
                </div>
                <section>
                    {allMovies}
                </section>
            </main>
        );
    }
}



export default MoviesList;