import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      maxWidth: "100%",
      margin: "auto",
      // padding: "0.5rem 1.3rem",
      marginTop: theme.spacing(2)
    },
    iconStyle: {
      borderRadius: "0px",
      height: "45px"
    }
  })
);

interface Props {
  readonly showCount?: boolean;
  readonly icons: {
    icon: React.ReactNode;
    url: string;
    counts: number;
  };
}

const SocialClicks: React.FC<Props> = ({ icons, showCount }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography className={classes.iconStyle}>{icons.icon}</Typography>
      {showCount && <Typography>{icons.counts}</Typography>}
    </div>
  );
};

export default SocialClicks;
