import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Card, CardContent, CardMedia, Hidden } from "@material-ui/core";

import Date from "./date";
import Link from "./link";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
  imageText: string;
  date?: string;
}

interface FeaturedPostProps {
  post: Post;
}

const FeaturedPost = (props: FeaturedPostProps) => {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
              <Date dateString={post.date!} />
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                Continue reading...
              </Link>
            </Typography>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia className={classes.cardMedia} image={post.image} title={post.title} />
        </Hidden>
      </Card>
    </Grid>
  );
};

export default FeaturedPost;
