import Head from 'next/head';
import { useRouter } from 'next/router';

export default function MovieDetail({ params }) {
  const [title, id] = params || [];

  return (
    <div>
      <h4>{title}</h4>
      <Head>
        <title>{title} | Next Movies</title>
      </Head>
    </div>
  );
}

export const getServerSideProps = ({ params: { params } }) => {
  return {
    props: {
      params,
    },
  };
};
