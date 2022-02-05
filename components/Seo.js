import Head from "next/head";

const titleObj = {
  "/": "Home",
  "/about": "About",
};

export default function Seo({ title }) {
  return (
    <Head>
      <title>{titleObj[title]} | Next Movies</title>
    </Head>
  );
}
