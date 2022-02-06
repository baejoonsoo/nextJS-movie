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
    <div className="container">
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id} className="movie">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 20px;
          gap: 200px;
        }
        .movie img {
          max-width: 100%;
          align-self: center;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
