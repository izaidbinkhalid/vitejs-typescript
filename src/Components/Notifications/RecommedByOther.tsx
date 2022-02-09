import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Avatar, Typography, Grid } from "@material-ui/core";

interface Props {
  readonly recommendedBy: string;
  readonly recommendedByPicture: string;
  readonly recommendedReview?: string;
  readonly recommendedPost?: boolean;
  readonly disorder?: boolean;
  readonly text?: string | React.ReactNode;
  readonly imageSize?: "xl" | "xxl";
  readonly variant?: "white" | "grayish";
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: "98%",
      display: "flex",
      justifyContent: "space-between",
      wrap: "nowrap",
      borderRadius: "10px",
      alignItems: "center",
      padding: theme.spacing(0.5),
      cursor: "pointer",
      marginBottom: theme.spacing(2),
      boxShadow: "0px 102px 155px -58px #0000000F"
    },
    profileImage: {
      width: "100%",
      height: "50px",
      borderRadius: "8px"
    },
    profileImageBigRight: {
      width: theme.spacing(9),
      height: theme.spacing(7),
      borderRadius: "8px",
      boxShadow: "0px 9px 20px 0px #0000001A",
      float: "right"
    },
    profileImageBigLeft: {
      width: "100%",
      height: "70px",
      borderRadius: "8px",
      boxShadow: "25px 0px 51px 0px #00000017"
    },
    recommendedText: {
      fontSize: "10px",
      width: "80%",
      margin: theme.spacing(0.5),
      marginLeft: theme.spacing(0),
      fontStyle: "italic"
    },
    content: {
      paddingLeft: theme.spacing(0.5),
      padding: "0.5rem"
    },
    userName: {
      // marginTop: theme.spacing(3),
      alignItems: "center",
      fontSize: "12px"
    },
    space: {
      padding: "0.5rem 0 0 0.5rem"
    },
    largeCardImg: {
      // minWidth: "100%",
      width: "100%",
      height: "100%",
      filter: "drop-shadow(25px 0px 51px rgba(0,0,0,0.09))",
      borderRadius: "12px"
    },
    halfCardImg: {
      width: "100%",
      height: "100%",
      filter: "drop-shadow(25px 0px 51px rgba(0,0,0,0.09))",
      borderRadius: "12px"
    },
    grayish: {
      background: theme.palette.gray[700]
    },
    whiteWrapper: {
      background: "rgba(255, 255, 255, 0.53)"
    }
  })
);

export const RecommedYou: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={`${classes.wrapper} ${
        props.variant === "white" ? classes.whiteWrapper : classes.grayish
      } `}
    >
      {props.disorder ? (
        <Grid item xs={12}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid
              item
              xs={props.imageSize === "xxl" ? 6 : props.imageSize === "xl" ? 6 : 3}
            >
              <Avatar
                variant="rounded"
                alt="profile pic"
                src={props.recommendedByPicture}
                className={
                  props.imageSize === "xl"
                    ? classes.largeCardImg
                    : props.imageSize === "xxl"
                    ? classes.halfCardImg
                    : props.recommendedPost
                    ? classes.profileImage
                    : classes.profileImageBigLeft
                }
              />
            </Grid>
            <Grid
              item
              xs={props.imageSize === "xxl" ? 6 : props.imageSize === "xl" ? 6 : 9}
            >
              <div className={classes.space}>
                <Typography
                  variant="body2"
                  color="secondary"
                  className={classes.userName}
                >
                  <b>{props.recommendedBy}</b>{" "}
                  {props.text
                    ? props.text
                    : props.recommendedPost
                    ? "Recommended your Publication"
                    : "Recomended you:"}
                </Typography>
                {props.recommendedPost ? null : (
                  <Typography
                    variant="body2"
                    color="secondary"
                    className={classes.recommendedText}
                    // noWrap
                  >
                    {props.recommendedReview}
                  </Typography>
                )}
              </div>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid
              item
              xs={props.imageSize === "xxl" ? 6 : props.imageSize === "xl" ? 7 : 9}
            >
              <div className={classes.space}>
                <Typography
                  variant="body2"
                  color="secondary"
                  className={classes.userName}
                >
                  <b>{props.recommendedBy}</b>{" "}
                  {props.text
                    ? props.text
                    : props.recommendedPost
                    ? "Recommended your Publication"
                    : "Recomended you:"}
                </Typography>
                {props.recommendedPost ? null : (
                  <Typography
                    variant="body2"
                    color="secondary"
                    className={classes.recommendedText}
                    noWrap
                  >
                    {props.recommendedReview}
                  </Typography>
                )}
              </div>
            </Grid>
            <Grid
              item
              xs={props.imageSize === "xxl" ? 6 : props.imageSize === "xl" ? 5 : 3}
            >
              <Avatar
                variant="rounded"
                alt="profile pic"
                src={props.recommendedByPicture}
                className={
                  props.imageSize === "xl"
                    ? classes.largeCardImg
                    : props.imageSize === "xxl"
                    ? classes.halfCardImg
                    : props.recommendedPost
                    ? classes.profileImage
                    : classes.profileImageBigRight
                }
              />
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
