import axios from 'axios';
import { useState, useEffect } from 'react';
import Seo from '../../components/Seo';

export default function MovieDetail({ movieID }) {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios.get(`/api/movie/${movieID}`).then(({ data }) => {
      console.log(data);
      setMovieData(data);
    });
  }, [movieID]);

  return (
    <div>
      <Seo title={movieData.title} custom />
      <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} />
      <p>{movieData.overview}</p>
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
