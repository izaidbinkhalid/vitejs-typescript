import * as React from "react";
import { makeStyles, Theme, createStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid } from "@material-ui/core";
import { Header } from "Components/Header";
import LeftSideBar from "./Components/LeftSideBar";
import RightSideBar from "./Components/RightSideBar";
import { maxContainerWidth } from "../../theme";
import Drawer from "Components/Drawer";
import DrawerRoutes from "./Components/DrawerRoutes";
import Messages from "./Components/Messages";
interface Prop {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      maxWidth: maxContainerWidth,
      margin: "auto",
      marginTop: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(1)
      }
    },
    container: {
      margin: "auto",
      justifyContent: "center",
      padding: theme.spacing(1),
      marginTop: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(1)
      }
    },
    centerGrid: {
      maxHeight: "90%",
      minHeight: "90%",
      width: "100%",
      marginBottom: theme.spacing(8)
    },
    messageContainer: {
      position: "fixed",
      width: "290px",
      bottom: "0px",
      right: 0,
      padding: '0px !important'
    }
  })
);

const Layout = ({ children }: Prop) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTab = useMediaQuery(theme.breakpoints.down("sm"));
  const isNotMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Header />
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <Grid container spacing={isNotMobile ? 3 : 4} justifyContent="center">
            {isMobile ? null : (
              <Grid item xl={3} lg={3} md={3} sm={4} xs={3}>
                <LeftSideBar />
                <br />
                {isTab && <RightSideBar />}
              </Grid>
            )}
            <Grid className={classes.centerGrid} item xl={6} lg={6} md={6} sm={8} xs={12}>
              {children}
            </Grid>
            {isMobile ? null : (
              <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                {!isTab && <RightSideBar />}
              </Grid>
            )}
            <Grid item xs={12} className={classes.messageContainer}>
              <Messages />
            </Grid>
          </Grid>
          <Drawer>
            <DrawerRoutes />
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Layout;
