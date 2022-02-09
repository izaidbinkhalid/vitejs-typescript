import * as React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import BarChart from "Components/Chart/BarChart";

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
      borderRadius: "8.8px",
      justifyContent: "center"
    }
  })
);

const VisitInsight = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Grid container justifyContent="space-between">
        <Grid item lg={12}>
          <div className={classes.cardStyle}>
            <Typography className={classes.text}>Visitors Insight</Typography>
            <br />
            <Typography className={classes.counts}>15735</Typography>
            <br />
            <Typography className={classes.smallText}>
              People Visited your profile in the last year
            </Typography>
            {/* <MetricsSvg /> */}
            <BarChart
              radius={10}
              width={25}
              data={[
                { x: "Jan", y: 1 },
                { x: "Feb", y: 1 },
                { x: "Mar", y: 2 },
                { x: "Apr", y: 3 },
                { x: "May", y: 5 },
                { x: "Jun", y: 3 },
                { x: "July", y: 4 },
                { x: "Aug", y: 1 },
                { x: "Sep", y: 3 },
                { x: "Oct", y: 4 },
                { x: "Nov", y: 7 },
                { x: "Dec", y: 4 }
              ]}
              showLabel={true}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default VisitInsight;
