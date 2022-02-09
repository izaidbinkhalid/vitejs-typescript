import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Sponsored from "Components/Layout/Components/Sponsored";
import Messages from "Components/Layout/Components/Messages";
import { Grid } from "@material-ui/core";
import { ProfileOptions } from "./ProfileOptions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: "100%",
      minHeight: "87vh",
      maxHeight: "90vh",
      position: "sticky",
      top: "10vh"
    },
    profileOptionsContainer: {
      position: "relative",
      width: "100%"
    },
    messageContainer: {
      position: "fixed",
      width: "290px",
      bottom: "0px",
      right: 0,
      padding: '0px !important'
    }
  })
);

const LeftSideBar = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      className={classes.wrapper}
      direction="column"
    >
      <Grid item xs={12} className={classes.profileOptionsContainer}>
        <ProfileOptions />
        <Sponsored />
      </Grid>
      <Grid item xs={12} className={classes.messageContainer}>
        <Messages />
      </Grid>
    </Grid>
  );
};

export default LeftSideBar;
