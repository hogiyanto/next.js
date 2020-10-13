import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";

import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Title from "../../components/title";
import Date from "../../components/date";
import Link from "../../components/link";

const Post = ({ postData }: any) => {
  const router = useRouter();

  // Handle if fallback from getStaticPaths is true
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Need to manually return 404 page if fallback from getStaticPaths is true
  if (!postData) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Title title={postData.title} />

      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <div>
        <Link href="/">← Back to home</Link>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    // https://nextjs.org/docs/basic-features/data-fetching#when-is-fallback-true-useful
    // To test the fallback: true is working properly, do the followings:
    // 1. Run `npm run build`
    // 2. Run `npm run start`
    // 3. Open http://localhost:3000
    // 4. Add new post in /posts directory
    // 5. Refresh the home page
    // 6. Click your newly created post
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let postData;
  try {
    postData = await getPostData(params?.id);
  } catch (e) {
    // ignore
  }

  return {
    props: {
      postData,
    },
    revalidate: 1,
  };
};

export default Post;
