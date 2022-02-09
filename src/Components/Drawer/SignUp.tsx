import * as React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Theme, createStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Drawer, Grid } from "@material-ui/core";
import { StepperContext } from "Context/StepperContext";
import { HumburgerIcon } from "Components/Icons/humburger";
import Logo from "Components/Logo";

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
        [theme.breakpoints.down("sm")]: {
          height: "100%",
          boxShadow: "none"
        },
        [theme.breakpoints.down("xs")]: {
          height: "100%",
          boxShadow: "none"
        }
      },
      "&>.MuiBackdrop-root": {
        backgroundColor: "transparent"
      }
    },
    flexAlign: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "60px",
      paddingTop: "30px",
      marginLeft: "-40px"
    },
    logoDiv: {
      marginLeft: theme.spacing(6),
      cursor: "pointer",
      width: "50%",
      marginTop: theme.spacing(-4),
      [theme.breakpoints.down("sm")]: {
        marginTop: 0,
        marginLeft: theme.spacing(7),
        width: "20%"
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: 0,
        marginLeft: theme.spacing(8),
        width: "30%"
      }
    }
  })
);

interface Props {
  readonly children: React.ReactNode;
}

const SignUpDrawer: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const { drawerOpen, setDrawerOpen } = React.useContext(StepperContext);
  const isTab = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer
      anchor="bottom"
      className={classes.drawer}
      open={drawerOpen}
      onClose={() => setDrawerOpen(!drawerOpen)}
    >
      <div className={classes.root}>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <div className={classes.flexAlign}>
            <div className={classes.logoDiv} onClick={() => history.push("/")}>
              <Logo />
            </div>
            {isTab ? (
              <span style={{ marginRight: "10px" }} onClick={() => setDrawerOpen(false)}>
                <HumburgerIcon />
              </span>
            ) : null}
          </div>
        </Grid>
        <div>{children}</div>
      </div>
    </Drawer>
  );
};

export default SignUpDrawer;
