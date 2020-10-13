import { GetStaticProps } from "next";
import { Grid } from "@material-ui/core";

import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import MainFeaturedPost from "../components/main-featured-post";
import FeaturedPost, { Post } from "../components/featured-post";

const mainFeaturedPost = {
  id: "id",
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
};

const HomePage = ({ allPostsData }: any) => {
  return (
    <Layout>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {allPostsData.map((post: Post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
    revalidate: 1,
  };
};

export default HomePage;
