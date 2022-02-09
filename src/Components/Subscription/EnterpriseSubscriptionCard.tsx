import * as React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Button from "Components/Button";

interface Props {
  price: number;
  onClick: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minWidth: "260px",
      minHeight: "450px",
      padding: theme.spacing(2, 0.75, 2, 2),
      margin: theme.spacing(2, 2, 0, 0),
      background: "#FBFBFB",
      border: "1px solid #E3E3E3",
      boxSizing: "border-box",
      borderRadius: "12px",
      position: "relative",
      cursor: "pointer",
      transition: "0.25s ease all",
      "&:hover": {
        boxShadow: "0px 22px 153px rgba(0, 0, 0, 0.07)"
      },
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(2),
        boxShadow: "0px 22px 153px rgba(0, 0, 0, 0.07)"
      }
    },
    actionsContainer: {
      position: "absolute",
      bottom: "20px",
      right: 0,
      left: 0,
      width: "100%",
      margin: "auto"
    },
    actionButtons: {
      display: "flex",
      justifyContent: "center"
    },
    heading: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "20px",
      lineHeight: "100%",
      color: "#58696D",
      [theme.breakpoints.down("sm")]: {
        width: "100px"
      }
    },
    headingPrice: {
      display: "flex",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "30px",
      lineHeight: "20px",
      //   textAlign: "right",
      color: "#455154"
    },
    headingMonth: {
      display: "flex",
      alignItems: "baseline",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 200,
      fontSize: "26px",
      lineHeight: "20px",
      //   textAlign: "right",
      color: "#455154"
    },
    headingMonth2: {
      marginTop: "1px",
      display: "flex",
      alignItems: "baseline",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 200,
      fontSize: "24px",
      lineHeight: "20px",
      //   textAlign: "right",
      color: "#455154"
    },
    subHeading: {
      marginLeft: theme.spacing(1),
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "12px",
      lineHeight: "20px",
      color: "#455154"
    },
    arrowIcons: {
      fontSize: "15px",
      margin: "0px 3px"
    },

    info: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "20px",
      color: "#455154"
    },
    infoContainer: {
      padding: theme.spacing(4, 0.75, 2, 0)
    },
    flex: {
      display: "flex"
    }
  })
);

const EnterpriseSubscriptionCard: React.FC<Props> = ({ price, onClick }: Props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <div className={classes.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Typography className={classes.heading}>Enterprise Subscription</Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "baseline"
            }}
          >
            <Typography className={classes.headingPrice}>
              ${price}
              <Typography className={classes.headingMonth}>/</Typography>
              <Typography className={classes.headingMonth2}>M</Typography>
            </Typography>
          </div>
        </div>

        <div className={classes.infoContainer}>
          <div className={classes.flex}>
            &#10003;
            <Typography className={classes.subHeading}>
              <span className={classes.info}>100</span> Extended Reality card
            </Typography>
          </div>

          <div className={classes.flex}>
            &#10003;
            <Typography className={classes.subHeading}>
              <span className={classes.info}>5</span> Company profile card ( allows you to
              give XR cards to employees)
            </Typography>
          </div>

          <div className={classes.flex}>
            &#10003;
            <Typography className={classes.subHeading}>SEO for Publications</Typography>
          </div>

          <div className={classes.flex}>
            &#10003;
            <Typography className={classes.subHeading}>24/7 Email suport</Typography>
          </div>

          <div className={classes.flex}>
            &#10003;
            <Typography className={classes.subHeading}>
              All Individual Subscription features!
            </Typography>
          </div>

          <div className={classes.flex}>
            &#10003;
            <Typography className={classes.subHeading}>
              More than 50% discount compared to individual Subscription
            </Typography>
          </div>
        </div>
        <div className={classes.actionsContainer}>
          <div className={classes.actionButtons}>
            <Button
              type="started"
              // eslint-disable-next-line no-console
              onClick={onClick}
              text="Get Started"
            />
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default EnterpriseSubscriptionCard;
