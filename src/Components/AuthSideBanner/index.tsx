import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Logo from "Components/Logo";
import bgImage from "assets/authBg.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    conatiner: {
      background: `url(${bgImage})`,
      // maxHeight: "100%",
      minHeight: "100vh",
      width: "100%",
      // padding: theme.spacing(3),
      overflowX: "hidden",
      overflowY: "auto",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    },
    illustration: {
      padding: theme.spacing(6)
    },
    content: {
      padding: theme.spacing(2),
      margin: theme.spacing(0, 10)
    },
    welcomeText: {
      fontWeight: "bold",
      color: "#986923",
      textAlign: "center",
      fontSize: "40px"
    },
    desc: {
      color: "#986923",
      fontSize: "20px",
      textAlign: "center"
    },
    illustrationSize: {
      width: "440"
    }
  })
);
export const SideBanner: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.conatiner}>
      <div className={classes.content}>
        <Logo width="177px" height="60px" />
      </div>
    </div>
  );
};
