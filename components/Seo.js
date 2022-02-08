import Head from 'next/head';

const titleObj = {
  '/': 'Home',
  '/about': 'About',
};

export default function Seo({ title, custom }) {
  return (
    <Head>
      <title>{custom ? title : titleObj[title]} | Next Movies</title>
    </Head>
  );
}
