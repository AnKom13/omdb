import { Movie } from './Movie';

function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((m) => <Movie key={m.imdbID} {...m} />)
      ) : (
        <h5>Ничего не найдено</h5>
      )}
    </div>
  );
}
export { Movies };
