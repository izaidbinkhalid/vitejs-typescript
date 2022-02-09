import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ProfileDetail from "./ProfileDetail";
import ProfileCard from "./ProfileCard";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: "sticky",
      top: "100px",
      [theme.breakpoints.down("sm")]: {
        position: "relative",
        top: 0
      }
    }
  })
);

const LeftSideBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <ProfileCard />
      <ProfileDetail />
    </div>
  );
};

export default LeftSideBar;
