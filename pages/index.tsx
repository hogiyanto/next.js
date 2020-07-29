import Link from "next/link";
import { GetStaticProps } from "next";

import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import Date from "../components/date";

const HomePage = ({ allPostsData }: any) => {
  return (
    <Layout>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }: any) => (
            <li key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {id}
              <br />
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
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
