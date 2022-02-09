import * as React from "react";
import Layout from "Components/ProfileLayout";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import MuiIcons from "Components/Icons";
import Activities from "Components/Dashboard/Activities";
import menCard from "assets/profile.jpg";
import { Collapse, Grid, Typography } from "@material-ui/core";
import RecommendationCard from "Components/CommanCards/RecommendationCard";
import Post from "Components/Post";
import { Posts } from "Components/Layout/Data/Data";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activities: {
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "27px",
      color: theme.palette.gray[900],
      alignContent: "center",
      cursor: "pointer",
      display: "flex"
    },
    alignText: {
      alignContent: "center",
      userSelect: "none",
      display: "flex",
      cursor: "pointer",
      color: theme.palette.gray[900]
    },
    recomendations: {
      fontWeight: 500,
      fontSize: "18px",
      color: theme.palette.secondary.dark,
      marginBottom: theme.spacing(1)
    }
  })
);
export const ProfilePage: React.FC = () => {
  const classes = useStyles();
  const [expand, setExpand] = React.useState(true);
  const [loadMore, setLoadMore] = React.useState(false);
  const [loadMoreRecommendation, setLoadMoreRecommendation] = React.useState(false);
  return (
    <Layout>
      <div>
        {/*  All Activities  section*/}
        <Grid container justifyContent="flex-start" alignItems="center">
          <Grid item lg={6}>
            <span className={classes.activities} onClick={() => setExpand(!expand)}>
              Activities
              <MuiIcons icon={!expand ? "arrowDown" : "arrowUp"} />
            </span>
          </Grid>
        </Grid>
        <br />
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <Activities />
        </Collapse>
        <Grid container justifyContent="center">
          <Grid item lg={3}>
            <br />
            <Typography
              className={classes.alignText}
              onClick={() => setLoadMore(!loadMore)}
            >
              Load {loadMore ? "Less" : "More"}
              <MuiIcons icon={loadMore ? "arrowUp" : "arrowDown"} fontSize="small" />
            </Typography>
          </Grid>
        </Grid>
        <br />
        <div>
          <Typography className={classes.recomendations}>My Recomendations</Typography>
          <RecommendationCard
            title="Ahad Fathi Bin Khalid"
            skillSet="Product Designer"
            image={menCard}
            timeStamp="today"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            likes="31"
            connections="173"
          />
          <Collapse in={loadMoreRecommendation} timeout="auto" unmountOnExit>
            <br />
            <RecommendationCard
              title="Ahad Fathi Bin Khalid"
              skillSet="Product Designer"
              image={menCard}
              timeStamp="today"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              likes="31"
              connections="173"
            />
            <br />
            <RecommendationCard
              title="Ahad Fathi Bin Khalid"
              skillSet="Product Designer"
              image={menCard}
              timeStamp="today"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              likes="31"
              connections="173"
            />
            <br />
            <RecommendationCard
              title="Ahad Fathi Bin Khalid"
              skillSet="Product Designer"
              image={menCard}
              timeStamp="today"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              likes="31"
              connections="173"
            />
          </Collapse>
          <Grid container justifyContent="center">
            <Grid item lg={3}>
              <br />
              <Typography
                className={classes.alignText}
                onClick={() => setLoadMoreRecommendation(!loadMoreRecommendation)}
              >
                Load {loadMoreRecommendation ? "Less" : "More"}
                <MuiIcons
                  icon={loadMoreRecommendation ? "arrowUp" : "arrowDown"}
                  fontSize="small"
                />
              </Typography>
            </Grid>
          </Grid>{" "}
        </div>
        <div>
          <Typography className={classes.recomendations}>Khalid's Publication</Typography>
          <br />
          {Posts?.map((post, index) => (
            <Post
              key={index}
              title={post.title}
              image={post.image}
              author={post.author}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
