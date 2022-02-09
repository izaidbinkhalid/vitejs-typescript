import * as React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Switch, { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch";

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}
interface Props extends SwitchProps {
  classes: Styles;
  value?: boolean;
  checked?: boolean;
  handleChange?: () => void;
}

const IOSSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing(4),
      height: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
        width: theme.spacing(3.5),
        height: theme.spacing(1.6)
      },
      padding: 0,
      margin: theme.spacing(1),
      marginRight: theme.spacing(0),
      marginLeft: theme.spacing(0)
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: theme.palette.common.white,
        "& + $track": {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main
        }
      },
      "&$focusVisible $thumb": {
        color: theme.palette.primary,
        border: `6px solid ${theme.palette.common.white}`
      }
    },
    thumb: {
      width: theme.spacing(1.7),
      height: theme.spacing(1.7),
      [theme.breakpoints.down("md")]: {
        width: theme.spacing(1.3),
        height: theme.spacing(1.3)
      }
    },
    track: {
      borderRadius: 13,
      border: `1px solid ${theme.palette.gray[400]}`,
      backgroundColor: theme.palette.gray[400],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"])
    },
    checked: {},
    focusVisible: {}
  })
)(({ classes, checked, handleChange, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      onChange={handleChange}
      checked={checked}
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});

export default IOSSwitch;
