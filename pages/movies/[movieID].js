import axios from 'axios';
import { useState, useEffect } from 'react';
import Seo from '../../components/Seo';

export default function MovieDetail({ movieID }) {
  const [movieData, setMovieData] = useState([]);
  const [date, setDate] = useState([]);
  const [genres, setGenres] = useState('');
  const [runtime, setRuntime] = useState({ hour: 0, minute: 0 });

  useEffect(() => {
    axios.get(`/api/movie/${movieID}`).then(({ data }) => {
      // console.log(data);
      setMovieData(data);

      setDate(data.release_date.split('-'));
      setGenres(data.genres?.map((genre) => genre.name).join(', '));
      const { runtime } = data;
      setRuntime({
        hour: Math.floor(runtime / 60),
        minute: runtime % 60,
      });
    });
  }, []);
  return (
    <div>
      <Seo title={movieData.title} custom />
      <div className="movieSection">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
        />
        <div className="movieInfo">
          <div>
            <div className="titleBox">
              <p className="movieTitle">{movieData.title}</p>
              <p className="releaseYear">({date[0]})</p>
            </div>
            <div className="dataLine">
              <li>{date.join('/')}(KR)</li>
              <li>{genres}</li>
              <li>
                {runtime.hour}h {runtime.minute}m
              </li>
            </div>
          </div>
          <i className="tagline">{movieData.tagline}</i>
          <div>
            <p className="outlineTitle">개요</p>
            <p>{movieData.overview}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .poster {
          border-radius: 8px;
          width: 300px;
        }
        .movieSection {
          margin: 15px 50px;
          display: flex;
        }
        .movieInfo {
          display: grid;
          gap: 20px;
          align-content: center;
          margin: 0 0 0 40px;
        }
        .titleBox {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .releaseYear {
          color: gray;
          font-size: 30px;
        }
        .movieTitle {
          font-weight: 500;
          color: black;
          font-size: 35px;
        }
        .movieTitle:hover {
          color: gray;
        }
        .tagline {
          color: grey;
          font-size: 20px;
        }
        .dataLine {
          display: flex;
          gap: 10px;
        }
        .dataLine li:first-child {
          list-style: none;
        }
        .outlineTitle {
          padding-bottom: 3px;
          font-size: 18px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps = ({ params: { movieID } }) => {
  return {
    props: {
      movieID,
    },
  };
};
