import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CampaignIcon from "Components/Icons/campaignIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: ({ variant }: Props) => ({
      boxShadow: "0px 31px 51px 0px #00000008",
      backgroundColor: theme.palette.gray[100],
      marginBottom: theme.spacing(2),
      padding: variant === "sm" ? theme.spacing(0.5) : theme.spacing(0.3),
      borderRadius: theme.spacing(2)
    }),
    userPicture: ({ variant }: Props) => ({
      borderRadius: variant === "sm" ? theme.spacing(1.8) : theme.spacing(2),
      width: variant === "sm" ? theme.spacing(8) : theme.spacing(10),
      height: variant === "sm" ? theme.spacing(8) : theme.spacing(10),
      boxShadow: "25px 0px 51px 0px #00000017"
    }),
    flexAlign: {
      display: "flex",
      alignItems: "center"
    },
    flexAlignRight: ({ variant }: Props) => ({
      display: "flex",
      alignItems: "center",
      float: "right",
      paddingRight: variant === "sm" ? theme.spacing(1) : theme.spacing(3)
    }),
    userName: {
      marginLeft: theme.spacing(3),
      color: theme.palette.secondary.dark
    },
    notificationCount: {
      color: theme.palette.secondary.dark
    }
  })
);

interface Props {
  readonly name: string;
  readonly picture: string;
  readonly notificationCount: number;
  readonly variant?: "sm" | "lg";
}

export const NewtworkActivityNotification: React.FC<Props> = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.wrapper}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={8}>
          <div className={classes.flexAlign}>
            <Avatar
              src={props.picture}
              variant="rounded"
              className={classes.userPicture}
            />
            <Typography
              variant={props.variant === "sm" ? "subtitle1" : "h5"}
              className={classes.userName}
            >
              {props.name}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.flexAlignRight}>
            <Typography
              variant={props.variant === "sm" ? "subtitle1" : "h5"}
              className={classes.notificationCount}
            >
              {props.notificationCount}
            </Typography>{" "}
            &nbsp;&nbsp; &nbsp;
            <CampaignIcon />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
