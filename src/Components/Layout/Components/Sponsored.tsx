import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import Image from "../../SvgIllustration/Rectangle.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      marginTop: theme.spacing(3),
      width: "100%"
    },
    paper: {
      cursor: "pointer",
      padding: theme.spacing(1),
      width: "100%"
    },
    heading: {
      marginBottom: theme.spacing(1),
      fontSize: "16px",
      fontWeight: 600
    },
    MainSection: {
      margin: theme.spacing(1),
      marginBottom: theme.spacing(2)
    },
    sponsoredImage: {
      backgroundImage: `url(${Image})`,
      backgroundSize: "cover",
      backgroundrepeat: "no-repeat",
      height: "220px",
      width: "100%"
    }
  })
);

const Sponsored = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.paper}>
        <div className={classes.MainSection}>
          <div>
            <Typography color="secondary" className={classes.heading}>
              Sponsored
            </Typography>
          </div>
          <div className={classes.sponsoredImage}></div>
        </div>
      </Paper>
    </div>
  );
};

export default Sponsored;
