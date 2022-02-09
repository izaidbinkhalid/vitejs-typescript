import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import PieChart from "Components/Chart/PieChart";

interface Props {
  percentage: number;
  profileVisits: number;
  totalProfileVisits: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "18px",
      color: "#58696D",
      marginBottom: theme.spacing(0.5)
    },
    buttonsSections: {
      padding: theme.spacing(0, 3)
    },
    alignText: {
      textAlign: "center",
      padding: "0.5rem 0"
    },
    section2: {
      maxWidth: "345px"
    },
    employer: {
      background: "rgba(251, 251, 251, 0.7)",
      // boxShadow: "0px 102px 155px -58px rgba(0, 0, 0, 0.25)",
      borderRadius: "15px",
      padding: theme.spacing(2)
    },
    emoloyerSubSection: {
      padding: theme.spacing(1),
      display: "flex",
      alignItems: "center"
    },
    countDiv: {
      justifyContent: "center"
    },
    numberCount: {
      margin: "0px",
      justifyContent: "flex-start",
      display: "flex",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 200,
      fontSize: "48px",
      lineHeight: "72px",
      textTransform: "uppercase",
      color: "#58696D"
    },
    countDetail: {
      margin: "0px",
      justifyContent: "flex-start",
      display: "flex",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#58696D"
    },
    interactDetail: {
      margin: "0px",
      justifyContent: "flex-start",
      display: "flex",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "13px",
      lineHeight: "18px",
      color: "#58696D"
    },
    chartDiv: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      marginRight: theme.spacing(2)
    }
  })
);

export const Employer: React.FC<Props> = ({
  percentage,
  profileVisits,
  totalProfileVisits
}: Props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section2}>
        <p className={classes.heading}>Employer</p>
        <div className={classes.employer}>
          <Grid item xs={12}>
            <div className={classes.emoloyerSubSection}>
              <Grid item xs={6}>
                <div className={classes.chartDiv}>
                  <PieChart percentage={percentage} />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.countDiv}>
                  <p className={classes.numberCount}>{profileVisits}</p>
                  <p className={classes.countDetail}>
                    People Visited your profile through this card.
                  </p>
                </div>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.emoloyerSubSection}>
              <Grid item xs={6}>
                <p className={classes.interactDetail}>
                  {percentage}% of visitors interact with your profile
                </p>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.countDiv}>
                  <p className={classes.numberCount}>{totalProfileVisits}</p>
                  <p className={classes.countDetail}>
                    People Visited your profile through this card in the last 30 Days.
                  </p>
                </div>
              </Grid>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};
