import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (e) => {
    if (e.key === 'Enter') {
      //   console.log('заработало');
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="Поиск"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Поиск
          </button>
        </div>
        <div>
          <p>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="all"
                onChange={this.handleFilter}
                checked={this.state.type === 'all'}
              />
              <span>Всё</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="movie"
                onChange={this.handleFilter}
                checked={this.state.type === 'movie'}
              />
              <span>Только фильмы</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="series"
                onChange={this.handleFilter}
                checked={this.state.type === 'series'}
              />
              <span>Только сериалы</span>
            </label>
          </p>
        </div>
      </div>
    );
  }
}
export { Search };
