import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { CreateCardContext } from "Context/CreateCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%"
      // marginTop: theme.spacing(3)
    },
    drawer: {
      width: "100%",

      "&>.MuiPaper-root": {
        backdropFilter: "blur(10px)",
        boxShadow: "30px 0px 79px 0px #00000040",
        width: "100%",
        height: "90%",
        background: theme.palette.gray[600],
        [theme.breakpoints.down("xs")]: {
          height: "90%",
          boxShadow: "none"
        }
      },
      "&>.MuiBackdrop-root": {
        backgroundColor: "transparent"
      }
    }
  })
);

interface Props {
  readonly children: React.ReactNode;
}

const CreateCardDrawer: React.FC<Props> = ({ children }) => {
  const { createCardOpen, setCreateCardOpen } = React.useContext(CreateCardContext);
  const classes = useStyles();

  return (
    <Drawer
      anchor="bottom"
      className={classes.drawer}
      open={createCardOpen}
      onClose={() => setCreateCardOpen(!createCardOpen)}
    >
      <div className={classes.root}>
        <div>{children}</div>
      </div>
    </Drawer>
  );
};

export default CreateCardDrawer;
