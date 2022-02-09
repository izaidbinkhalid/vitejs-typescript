import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Layout from "Components/Layout";
import Post from "Components/Post";
import { Posts } from "Components/Layout/Data/Data";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {}
  })
);

export const FeedsPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.wrapper}>
        {Posts?.map((post, index) => (
          <Post key={index} title={post.title} image={post.image} author={post.author} />
        ))}
      </div>
    </Layout>
  );
};
