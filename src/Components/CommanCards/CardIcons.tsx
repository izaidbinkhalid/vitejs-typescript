import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      minWidth: "100%"
    },
    iconStyle: {
      width: "55.87px",
      height: "55.87px",
      borderRadius: "100px"
    }
  })
);

interface Props {
  readonly icon: string | React.ReactNode;
}
const CardIcons: React.FC<Props> = ({ icon }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Grid container justifyContent="space-evenly" alignItems="center">
        <Grid item lg={3}>
          <Typography className={classes.iconStyle}>{icon}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardIcons;
