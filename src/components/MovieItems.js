import React, { Component } from 'react';

class MovieItems extends React.Component {
    render() {
        return (
            <div className="movie">
                <h1>{this.props.title}</h1>
                <h2>{this.props.year}</h2>
                <h3>{this.props.director}</h3>
                <h3>{this.props.duration}</h3>
                <h3>{this.props.rate}</h3>
                <h3>{this.props.genre}</h3>
            </div>

        );
    }
}

export default MovieItems;