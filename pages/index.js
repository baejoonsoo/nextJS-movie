import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ results }) {
  const router = useRouter();

  const imgClick = (id) => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className="container">
      {results?.map((movie) => (
        <div key={movie.id} className="movie">
          <img
            onClick={() => imgClick(movie.id)}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <h4>
            <Link href={`/movies/${movie.id}`}>
              <a>{movie.title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 20px;
          gap: 200px;
        }
        .movie {
          cursor: pointer;
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

export async function getServerSideProps() {
  const {
    data: { results },
  } = await axios.get('http://localhost:3000/api/movies');

  return {
    props: {
      results,
    },
  };
}
