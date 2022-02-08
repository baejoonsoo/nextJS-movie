import { useRouter } from 'next/router';

export default function MovieDetail() {
  const {
    query: { movieID },
  } = useRouter();

  console.log(movieID);

  return 'detail';
}
