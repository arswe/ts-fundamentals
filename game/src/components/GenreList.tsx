import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <ul>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
