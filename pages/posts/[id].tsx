import Link from "next/link";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

const Post = ({ postData }: any) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <div>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = getPostData(params?.id);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
