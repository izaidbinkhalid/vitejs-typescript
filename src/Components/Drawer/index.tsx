import * as React from "react";
import { makeStyles, Theme, createStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { DrawerContext } from "../../Context/DrawerContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      marginTop: theme.spacing(3)
    },
    drawer: {
      width: "230px",

      "&>.MuiPaper-root": {
        backdropFilter: "blur(10px)",
        boxShadow: "30px 0px 79px 0px #00000040",
        width: "300px",
        background: "rgba(251, 251, 251, 0.7)",
        borderRadius: " 37px 0px 0px 20px"
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
const TemporaryDrawer: React.FC<Props> = ({ children }) => {
  const { drawerOpen, setDrawerOpen } = React.useContext(DrawerContext);
  const classes = useStyles();
  const theme = useTheme();
  const bigScreen = useMediaQuery(theme.breakpoints.up('sm'));

  React.useEffect(() => { if (bigScreen) setDrawerOpen(false) }, [bigScreen, setDrawerOpen])

  return (
    <Drawer
      anchor="right"
      className={classes.drawer}
      open={drawerOpen}
      onClose={() => setDrawerOpen(!drawerOpen)}
    >
      <div className={classes.root}>
        <div>{children}</div>
      </div>
    </Drawer>
  );
};

export default TemporaryDrawer;
