import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid } from "@material-ui/core";
import { Header } from "Components/Header";
import { maxContainerWidth } from "../../theme";
import Drawer from "Components/Drawer";
import DrawerRoutes from "../Layout/Components/DrawerRoutes";
import ProfileCard from "Components/Layout/Components/ProfileCard";
import NetworkSlider from "./MyNetworks";
import DashboardLeftSidebar from "./LeftSidebar";
import DashboardRightSidebar from "./RightSidebar";
interface Prop {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      maxWidth: maxContainerWidth,
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(1)
      }
    },
    container: {
      margin: "auto",
      justifyContent: "center",
      padding: theme.spacing(1),
      marginTop: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(1)
      }
    },
    cardsLayout: {
      display: "flex"
    }
  })
);

const DashboardLayout = ({ children }: Prop) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:800px)");
  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.container}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={5} md={4} lg={3}>
            <ProfileCard isLarge />
          </Grid>
          <Grid item xs={12} sm={7} md={8} lg={9}>
            <NetworkSlider />
          </Grid>
        </Grid>

        <Grid container spacing={3} justifyContent="center">
          {isMobile ? null : (
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <br />
              <DashboardLeftSidebar />
            </Grid>
          )}
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            {children}
          </Grid>
          {isMobile ? null : (
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <br />
              <DashboardRightSidebar />
            </Grid>
          )}
        </Grid>
        {/* {isMobile ? <BottomNav /> : null} */}
        <Drawer>
          <DrawerRoutes />
        </Drawer>
      </div>
    </div>
  );
};

export default DashboardLayout;
