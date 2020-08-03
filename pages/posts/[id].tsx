import { GetStaticPaths, GetStaticProps } from "next";

import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Title from "../../components/title";
import Date from "../../components/date";
import Link from "../../components/link";

const Post = ({ postData }: any) => {
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
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
