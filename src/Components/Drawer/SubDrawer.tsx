import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%"
    },
    drawer: {
      width: "100%",

      "&>.MuiPaper-root": {
        width: "100%",
        height: "90%",
        background: theme.palette.gray[600],
        [theme.breakpoints.down("xs")]: {
          height: "90%"
        }
      },
      "&>.MuiBackdrop-root": {
        backgroundColor: "transparent"
      },
      "&>.MuiPaper-elevation16": {
        boxShadow: "none"
      }
    }
  })
);

interface Props {
  readonly children: React.ReactNode;
  readonly state: boolean;
  readonly setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubDrawer: React.FC<Props> = ({ children, state, setState }) => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="bottom"
      className={classes.drawer}
      open={state}
      onClose={() => {
        setState(!state);
      }}
    >
      <div className={classes.root}>
        <div>{children}</div>
      </div>
    </Drawer>
  );
};

export default SubDrawer;
