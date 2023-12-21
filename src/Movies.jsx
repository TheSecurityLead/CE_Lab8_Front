import React from 'react';
import { Card, ListGroup } from 'react-bootstrap'; 

class Movies extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        {movies.map(movie => (
          <div key={movie.title} className="movie">
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <img src={movie.image_url} alt={movie.title} />
            {/* Include other movie details as needed */}
          </div>
        ))}
      </div>
    );
  }
}

export default Movies;
