import MovieItems from './MovieItems';
import MovieData from './MovieData';
import { v4 as uuidv4 } from 'uuid';
import React, { Component } from 'react';


class Movie extends React.Component {
    state = {
        myMovies : MovieData.slice()
    }

    Ascending = () => {
        this.setState({ myMovies: this.state.myMovies.sort((a,b) => a.year - b.year)});
    }

    Decending = () => {
        this.setState({ myMovies: this.state.myMovies.sort((a,b) => b.year - a.year)});
    }

    rate = () => {
        this.setState({ myMovies: this.state.myMovies.sort((a,b) => b.rate - a.rate)  });
    }

    aZ = () => {
        this.setState({ myMovies: this.state.myMovies.sort((a,b) => (a.title > b.title) ? 1 : -1)});
    }

    zA = () => {
        this.setState({ myMovies: this.state.myMovies.sort((a,b) => (a.title < b.title) ? 1 : -1)});
    }

    render() {
        return (
            <section>
                <button onClick={this.Ascending}>Sort by Date Ascending</button>
                <button onClick={this.Decending}>Sort by Date Decending</button>
                <button onClick={this.rate}>Best Rate</button>
                <button onClick={this.aZ}>A-Z</button>
                <button onClick={this.zA}>Z-A</button>
                <article className="movieOverview">
                {this.state.myMovies.map(elt => <MovieItems
                    key={uuidv4()}
                    title={elt.title}
                    year={elt.year}
                    director={elt.director}
                    duration={elt.duration}
                    rate={elt.rate}
                    genre={elt.genre}
                />)
                }
            </article>
            </section>
            
        );
    }
}

export default Movie;

/* const Movie = () => {
    return (


    );
}

export default Movie; */

