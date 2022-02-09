import * as React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import { MyRecommendations } from "../Data/Data";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {},
    paper: {
      cursor: "pointer",
      padding: theme.spacing(1),
      background: theme.palette.gray[100]
    },
    heading: {
      fontSize: "17px",
      fontWeight: 600
    },

    MainSection: {
      margin: theme.spacing(1)
    },
    scrollContainer: {
      padding: theme.spacing(0.5),
      border: "1px solid #E3E3E3",
      borderRadius: "8px"
    },
    InScrollContainer: {
      maxHeight: "265px",
      overflowY: "auto"
    },
    mainRecDiv: {
      padding: "0 10px 0 10px"
    },
    recDiv: {
      justifyContent: "space-around",
      textAlign: "start",
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5),
      margin: "auto",
      marginTop: "5px",
      borderBottom: "1px solid #E3E3E3",
      "&:last-child": {
        borderBottom: "none"
      }
    },
    recNumbers: {
      marginLeft: theme.spacing(0.5),
      fontSize: "17px",
      fontWeight: 700,
      color: "#414546"
    },
    recLabel: {
      marginLeft: theme.spacing(1),
      fontSize: "13px",
      fontWeight: 600,
      color: "#414546",
      textDecoration: "none"
    }
  })
);

const Recommend = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div>
        <Paper className={classes.paper}>
          <div className={classes.MainSection}>
            <div>
              <Typography color="secondary" className={classes.heading}>
                Top Recommendations This Week
              </Typography>
            </div>
            <div>
              <div className={classes.InScrollContainer}>
                <div className={classes.mainRecDiv}>
                  {MyRecommendations.map((recommendation, index) => (
                    <div className={classes.recDiv} key={index}>
                      <Typography noWrap>
                        <span className={classes.recNumbers}>
                          {recommendation.recommended}
                        </span>
                        <Link className={classes.recLabel} to="#">
                          {recommendation.label}
                        </Link>
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Recommend;
