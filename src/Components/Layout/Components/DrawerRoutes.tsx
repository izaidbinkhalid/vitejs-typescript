import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, useLocation, useHistory } from "react-router-dom";
import { DrawerContext } from "Context/DrawerContext";
import { UserContext } from "Context/AuthContext";
import MuiIcons from "Components/Icons";
import { Avatar, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: "sticky",
      padding: theme.spacing(1),
      bottom: 0,
      left: 0,
      width: "100%"
    },

    activeLink: {
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(3),
      minWidth: "18%",
      color: theme.palette.secondary.light,
      margin: theme.spacing(1),
      background: "rgba(228, 233, 234, 0.7)",
      borderRadius: "11px"
    },
    activeSettingLink: {
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(3),
      minWidth: "18%",
      color: theme.palette.secondary.light,
      margin: theme.spacing(1),
      background: "#58696D",
      opacity: "20%",

      borderRadius: "11px"
    },
    link: {
      paddingLeft: theme.spacing(3),
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      minWidth: "18%",
      cursor: "pointer",
      color: theme.palette.secondary.light
    },
    closeIcon: {
      float: "right",
      padding: theme.spacing(2), cursor: "pointer"
    },
    userImage: {
      width: "75px",
      height: "75px",
      borderRadius: "100px",
      border: `1px solid ${theme.palette.secondary.light}`
    },

    userDetailContainer: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      marginBottom: theme.spacing(3),
      margin: "auto"
    },
    userName: {
      color: theme.palette.secondary.light,
      fontWeight: 500
    },
    settingHeading: {
      color: theme.palette.secondary.light
    },
    title: {
      fontSize: theme.spacing(1.5)
    },
    icon: {
      color: theme.palette.secondary.light,
      cursor: "pointer"
    },
    flex: {
      justifyContent: "flex-start",
      display: "flex",
      alignItems: "center"
    }
  })
);
type IRoute = {
  readonly to: string;
  readonly title: string;
};
type ISettingTab = {
  readonly to: number;
  readonly title: string;
};
interface ILink {
  readonly route: IRoute;
}
interface ITab {
  readonly tab: ISettingTab;
}

const mainFeedLink: IRoute[] = [
  { to: "/", title: "Feed" },
  { to: "/explore", title: "Explore" },
  { to: "/cards", title: "Cards" },
  { to: "/publicate", title: "Publications" },
  { to: "/dashboard", title: "Dashboard" },
  { to: "/settings", title: "Settings & Privacy" },
];
const settingsLink: ISettingTab[] = [
  { to: 0, title: "Profile" },
  { to: 1, title: "Account" },
  { to: 2, title: "Security" },
  { to: 3, title: "Subscription" },
  { to: 4, title: "Support" },
];

const BottomNav = () => {
  const classes = useStyles();
  const { logout } = React.useContext(UserContext);
  const { setDrawerOpen, setSettingTab, settingTab, setSettingModalOpen, showSettingTabs, setShowSettingsTab } = React.useContext(DrawerContext);
  const { pathname } = useLocation();
  const history = useHistory();

  const CutomLink: React.FC<ILink> = props => {
    return (
      <div
        className={props.route.to === pathname ? classes.activeLink : classes.link}
        onClick={() => {
          if (props.route.to === "/settings") {
            setShowSettingsTab(true);
          } else {
            setDrawerOpen(false);
            history.push(props.route.to);
            setShowSettingsTab(false);
          }
        }}
      >
        {props.route.title}
      </div>
    );
  };

  const CutomTab: React.FC<ITab> = props => {
    return (
      <div
        className={props.tab.to === settingTab ? classes.activeLink : classes.link}
        onClick={() => { setSettingModalOpen(true); setSettingTab(props.tab.to); setDrawerOpen(false) }}
      >
        {props.tab.title}
      </div>
    );
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.closeIcon}>
        <MuiIcons icon="close" color="secondary" onClick={() => setDrawerOpen(false)} />
      </div>
      <div>

        <Grid
          container
          alignItems="center"
          spacing={2}
          justifyContent="center"
          className={classes.userDetailContainer}
        >
          {showSettingTabs && <Grid item xs={12}>
            <div className={classes.flex}>
              <MuiIcons icon="backArrow" className={classes.icon} fontSize="medium" onClick={() => setShowSettingsTab(false)} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Typography align="center" variant="h4" className={classes.settingHeading}> Settings </Typography>
            </div>
          </Grid>}

          <Grid item xs={4}>
            <Avatar
              variant="rounded"
              src="https://image.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg"
              className={classes.userImage}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4" className={classes.userName}>
              Khalid Ali
            </Typography>
            <Typography variant="body1" className={classes.title}>
              Product Designer{" "}
            </Typography>
          </Grid>
        </Grid>
        <Router>
          <div>
            {showSettingTabs ? settingsLink.map((link, index) => <CutomTab key={index} tab={link} />)
              : mainFeedLink.map((link, index) => <CutomLink key={index} route={link} />)}
            <div className={classes.link} onClick={() => logout()}>
              Sign Out
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default BottomNav;
