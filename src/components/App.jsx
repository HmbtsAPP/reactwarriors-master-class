import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
//UI = fn(state)

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
    };

    //this.removeMovie = this.removeMovie.bind(this);
  }

  //removeMovie(movie) {
  removeMovie = (movie) => {
    const updateMovies = this.state.movies.filter(function (item) {
      return item.id !== movie.id;
    });
    console.log(updateMovies);
    //  this.state.movies = updateMovies;
    this.setState({
      movies: updateMovies,
    });
  };

  render() {
    console.log("render", this.state, this.temp);
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            {this.state.movies.map((movie) => {
              return (
                <MovieItem
                  key={movie.id}
                  movie={movie}
                  removeMovie={this.removeMovie}
                />
              );
            })}
          </div>
          <div className="col-3">
            <p>Will Watch: 0</p>
          </div>
        </div>
      </div>
    );
  }
}
// function App() {
//   return <div>{moviesData[0].title}</div>;
// }

export default App;
