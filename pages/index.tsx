import Head from "next/head";
import { GetStaticProps } from "next";

import { getSortedPostsData } from "../lib/posts";

const HomePage = ({ allPostsData }: any) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }: any) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default HomePage;
