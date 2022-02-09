import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Layout from "Components/Layout";
import Post from "Components/Post";
import AddTag from "Components/AddTag";
import { Posts } from "Components/Layout/Data/Data";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {}
  })
);

export const ExplorePage: React.FC = () => {
  const classes = useStyles();
  const [skill, setSkill] = React.useState<string[]>(["Reading", "Painting"]);

  const onSkillAdd = (skills: string[]) => {
    setSkill(skills);
  }

  return (
    <Layout>
      <div className={classes.wrapper}>
        <div>
          <AddTag
            placeHolder="Press Enter To Add Skills and tags"
            data={skill}
            onAdd={onSkillAdd}
          />
        </div>
        <br />
        {Posts?.map((post, index) => (
          <Post key={index} title={post.title} image={post?.image} author={post.author} />
        ))}
      </div>
    </Layout>
  );
};
