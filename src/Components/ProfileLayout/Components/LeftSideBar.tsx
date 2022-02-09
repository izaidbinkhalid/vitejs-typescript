import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ProfileDetail from "./ProfileDetail";
import ProfileCard from "Components/Layout/Components/ProfileCard";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: "sticky",
      top: "10vh"
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
