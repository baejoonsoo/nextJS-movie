import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "7235027e37c8e65ba10fcb25022b2073";
export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
