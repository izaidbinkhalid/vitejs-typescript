import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { CardInfoContext } from "Context/CardInfo";

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
}

const ShowCardInfoDrawer: React.FC<Props> = ({ children }) => {
  const { cardInfoOpen, setCardInfoOpen, setCompanyProfie } =
    React.useContext(CardInfoContext);
  const classes = useStyles();

  return (
    <Drawer
      anchor="bottom"
      className={classes.drawer}
      open={cardInfoOpen}
      onClose={() => {
        setCardInfoOpen(!cardInfoOpen);
        setCompanyProfie("");
      }}
    >
      <div className={classes.root}>
        <div>{children}</div>
      </div>
    </Drawer>
  );
};

export default ShowCardInfoDrawer;
