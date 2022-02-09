import * as React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import BarChart from "Components/Chart/BarChart";
import PieChart from "Components/Chart/PieChart";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      backgroundColor: theme.palette.gray[100],
      padding: theme.spacing(1.5, 0),
      borderRadius: "10px",
      margin: theme.spacing(1.5),
      justifyContent: "center"
    },
    text: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "13.2px",
      lineHeight: "18px",
      color: theme.palette.secondary.dark,
      borderRadius: "8.8px",
      textAlign: "center"
    },
    counts: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "42.24px",
      lineHeight: "53px",
      color: theme.palette.secondary.dark,
      textAlign: "center",
      borderRadius: "8.8px"
    },
    cardStyle: {
      background: theme.palette.gray[100],
      borderRadius: "9.68px",
      padding: "1rem",
      margin: theme.spacing(0.75),
      boxShadow: "0px 31px 74px -10px rgba(0, 0, 0, 0.1)"
    },
    smallText: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "8.8px",
      lineHeight: "13px",
      display: "flex",
      alignItems: "center",
      textTransform: "capitalize",
      color: theme.palette.gray[400],
      textAlign: "center",
      borderRadius: "8.8px"
    }
  })
);

const VisitHistory = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Grid container justifyContent="space-between">
        <Grid item lg={6}>
          <div className={classes.cardStyle}>
            <Typography className={classes.text}>Visits in Last 30 days</Typography>
            <br />
            <Typography className={classes.counts}>690</Typography>
            <br />
            <Typography className={classes.smallText}>
              People Visited your profile through this card in the last 30 Days
            </Typography>
            {/* <MetricsSvg /> */}
            <BarChart
              radius={10}
              width={25}
              data={[
                { x: 1, y: 3 },
                { x: 2, y: 4 },
                { x: 3, y: 6 },
                { x: 4, y: 3 },
                { x: 5, y: 7 },
                { x: 6, y: 3 },
                { x: 7, y: 4 },
                { x: 8, y: 6 },
                { x: 9, y: 3 },
                { x: 10, y: 7 }
              ]}
            />
          </div>
        </Grid>
        <Grid item lg={6}>
          <div className={classes.cardStyle}>
            <Typography className={classes.text}>Visitors Interactions</Typography>
            <br />
            <br />

            <Typography className={classes.smallText}>
              86.5% of visitors interact with your profile
            </Typography>
            <br />
            <br />
            <PieChart percentage={80} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default VisitHistory;
