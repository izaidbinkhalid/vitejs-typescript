import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import MuiIcons from "Components/Icons";
import Activities from "../../Components/Dashboard/Activities";
import girlCard from "assets/profile.jpg";
import menCard from "assets/menCard.jpg";
import { Collapse, Grid, Typography } from "@material-ui/core";
import DetailedCard from "Components/CommanCards/RecommendationCard";
import DashboardLayout from "Components/Dashboard/Layout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activities: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "27px",
      color: theme.palette.gray[900],
      alignContent: "center",
      userSelect: "none",
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
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "27px",
      headingColor: theme.palette.secondary.dark
    }
  })
);

export const DashboardPage: React.FC = () => {
  const classes = useStyles();
  const [expand, setExpand] = React.useState(true);
  const [loadMore, setLoadMore] = React.useState(false);

  return (
    <DashboardLayout>
      <div>
        {/*  All Activities  section*/}
        <Grid container justifyContent="flex-start" alignItems="center">
          <Grid item lg={6}>
            <br />
            <span className={classes.activities} onClick={() => setExpand(!expand)}>
              Activities
              <MuiIcons icon={!expand ? "arrowDown" : "arrowUp"} />
            </span>
          </Grid>
        </Grid>
        <br />
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <Activities />
          <Grid container justifyContent="center">
            <Grid item lg={3}>
              <br />
              <Typography
                className={classes.alignText}
                onClick={() => setLoadMore(!loadMore)}
              >
                {loadMore ? "Load Less" : "Load More"}
                <MuiIcons icon={loadMore ? "arrowUp" : "arrowDown"} />
              </Typography>
            </Grid>
          </Grid>
        </Collapse>
        <br />
        <Typography className={classes.recomendations}>My Recomendations</Typography>
        <DetailedCard
          title={"Don Omar"}
          skillSet={"Product Manager"}
          image={menCard}
          timeStamp="today"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          likes="5k"
          connections="573"
        />
        <DetailedCard
          title={"Alena Gray"}
          skillSet={"Product Designer"}
          image={girlCard}
          timeStamp="today"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
          likes="31"
          connections="173"
        />
      </div>
    </DashboardLayout>
  );
};
