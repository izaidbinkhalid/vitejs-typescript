import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import BarChart from "Components/Chart/BarChart";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      backgroundColor: theme.palette.gray[100],
      padding: theme.spacing(2, 0),
      borderRadius: "1rem"
    },
    text: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontSize: "13.2px",
      lineHeight: "18px",
      color: "#455154",
      borderRadius: "8.8px"
    },
    counts: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "42.24px",
      lineHeight: "53px",
      color: "#455154",
      borderRadius: "8.8px"
    },
    cardStyle: {
      background: theme.palette.gray[100],
      borderRadius: "9.68px",
      padding: "1rem",
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
      borderRadius: "8.8px"
    },
    chart: {
      marginTop: theme.spacing(1)
    }
  })
);

const TotalRecommends = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} lg={11}>
          <div className={classes.cardStyle}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography className={classes.text}>Recommendations</Typography>
                <Typography className={classes.counts}>136</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <div className={classes.chart}>
                  <BarChart
                    radius={10}
                    width={25}
                    data={[
                      { x: 1, y: 5 },
                      { x: 2, y: 4 },
                      { x: 3, y: 6 },
                      { x: 4, y: 1 },
                      { x: 5, y: 7 },
                      { x: 6, y: 6 },
                      { x: 7, y: 4 },
                      { x: 8, y: 1 },
                      { x: 9, y: 3 },
                      { x: 10, y: 7 }
                    ]}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography className={classes.smallText}>
                  You have 136 recommendations
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TotalRecommends;
