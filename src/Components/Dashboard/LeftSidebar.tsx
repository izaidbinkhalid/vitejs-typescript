import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Avatar, Typography } from "@material-ui/core";
import ProfileDetail from "Components/Layout/Components/ProfileDetail";
import Map from "assets/smallMap.png";
import Messages from "Components/Layout/Components/Messages";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Wrapper: {
      background: theme.palette.gray[100],
      paddingBottom: theme.spacing(2),
      borderRadius: "11px"
    },
    heading: {
      marginBottom: theme.spacing(1),
      fontSize: theme.spacing(2.2),
      [theme.breakpoints.down("md")]: {
        fontSize: theme.spacing(2)
      },
      fontWeight: 500,
      color: theme.palette.secondary.main,
      transition: "0.5s"
    },
    break: { color: theme.palette.secondary.dark, opacity: 0.1 },
    locationWrapper: {
      padding: theme.spacing(0.5, 3)
    },
    map: {
      width: "100%",
      height: "100%"
    },
    messageContainer: {
      position: "fixed",
      width: "290px",
      bottom: "0px",
      right: 0,
      padding: '0px !important',
      zIndex: 99999
    }
  })
);

const DashboardLeftSidebar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.Wrapper}>
      <ProfileDetail />
      <hr className={classes.break} />
      <div className={classes.locationWrapper}>
        <Typography className={classes.heading} noWrap>
          Location
        </Typography>
        <Avatar className={classes.map} src={Map} variant="rounded" />
      </div>
      <div className={classes.messageContainer}>
        <Messages />
      </div>
    </div>
  );
};

export default DashboardLeftSidebar;
