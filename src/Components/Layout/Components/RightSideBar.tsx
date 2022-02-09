import * as React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Sponsored from "./Sponsored";
import Recommend from "./Recommend";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: "100%",
      minHeight: "87vh",
      maxHeight: "90vh",
      position: "sticky",
      top: "100px"
    },
    postAndSponsporedContainer: {
      position: "relative",
      width: "100%"
    },
  })
);

const LeftSideBar = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      direction="column"
      className={classes.wrapper}
    >
      <Grid item xs={12} className={classes.postAndSponsporedContainer}>
        <Recommend />
        <Sponsored />
      </Grid>
    </Grid>
  );
};

export default LeftSideBar;
