import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;
const entrance = 'https://www.omdbapi.com/?apikey=';

class Main extends React.Component {
  state = {
    movies: [],
    search: 'matrix',
    loading: true,
  };

  searchMovies = (str, type = 'all') => {
    this.setState({ loading: true });
    fetch(
      `${entrance}${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  };

  componentDidMount() {
    fetch(`${entrance}${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {!loading ? (
          <Movies movies={movies} />
        ) : (
          //   <h3>Идет загрузка</h3>
          <Preloader />
        )}
      </main>
    );
  }
}

export { Main };
