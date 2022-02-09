import * as React from "react";
import { makeStyles, Theme, createStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { BrowserRouter as Router, useLocation, useHistory } from "react-router-dom";
import { Grid, Avatar } from "@material-ui/core";
import Logo from "Components/Logo";
import MuiIcon from "Components/Icons";
import { HumburgerIcon } from "Components/Icons/humburger";
import { DrawerContext } from "Context/DrawerContext";
import { UserDropDownPopper } from "./UserDropDown";
import { NetworkActivities } from "./NetworkActivities";
import { maxContainerWidth } from "../../theme";
import { SettingModalDialog } from "./SettingModalDialog";
import { ChatModal } from 'Components/Chat/ChatModal'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      margin: "auto",
      position: "sticky",
      top: 1,
      zIndex: 1
    },
    wrapperScrolled: {
      margin: "auto",
      position: "sticky",
      top: 0,
      zIndex: 1,
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(239, 242, 243, 0.5)"
    },
    gridContainer: {
      width: "100%",
      margin: "auto",
      maxWidth: maxContainerWidth
    },
    mainTabWrapper: {
      margin: "auto"
    },
    mainTabContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "30px",
      background: theme.palette.gray[100],
      margin: "auto",
      boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)"
    },
    mainTabContainer2: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "30px",
      background: theme.palette.gray[100],
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)"
    },
    activeLink: {
      borderRadius: "40px",
      padding: theme.spacing(1.5),
      minWidth: "18%",
      textAlign: "center",
      background: theme.palette.gray[200],
      color: theme.palette.info.main,
      margin: theme.spacing(0.5),
      fontSize: "14px",
      fontWeight: 500
    },
    link: {
      fontWeight: 500,
      fontSize: "14px",
      margin: theme.spacing(0.5),
      borderRadius: "40px",
      padding: theme.spacing(1.5),
      minWidth: "18%",
      textAlign: "center",
      cursor: "pointer",
      color: theme.palette.secondary.main,
      "&:hover": {
        background: theme.palette.gray[200]
      }
    },
    activeSideLink: {
      borderRadius: "70px",
      padding: theme.spacing(0.7),
      color: theme.palette.info.main,
      textAlign: "center",
      margin: theme.spacing(0.5),
      minWidth: "40px"
    },
    sideLink: {
      minWidth: "40px",
      margin: theme.spacing(0.5),
      borderRadius: "40px",
      padding: theme.spacing(0.5),
      textAlign: "center",
      cursor: "pointer",
      color: theme.palette.secondary.main,
      "&:hover": {
        background: theme.palette.gray[200]
      }
    },
    cursor: {
      cursor: "pointer",
      marginRight: "10px"
    },
    flexAlign: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "60px",
      paddingTop: "30px",
      marginLeft: "-55px"
    },
    bottomNavContainer: {
      position: "absolute",
      bottom: 0
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

const mainFeedLink = [
  { to: "/", title: "Feed" },
  { to: "/explore", title: "Explore" },
  { to: "/cards", title: "Cards" },
  { to: "/publicate", title: "Publicate" }
];

const sideFeedLink = [
  {
    to: "/saved",
    title: (active: boolean) => (
      <MuiIcon icon="saved" color={active ? "primary" : "secondary"} />
    )
  },
  {
    to: "/dashboard",
    title: (active: boolean) => (
      <MuiIcon icon="dashboard" color={active ? "primary" : "secondary"} />
    )
  }
];

export const Header: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const { setDrawerOpen } = React.useContext(DrawerContext);
  const isTab = useMediaQuery(theme.breakpoints.down("sm"));

  const { pathname } = useLocation();
  const [scrolled, setScrolled] = React.useState<boolean>(false);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [anchorElNet, setAnchorElNet] = React.useState<HTMLElement | null>(null);


  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickNetwork = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNet(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElNet(null);
  };
  const open = Boolean(anchorEl);
  const openNetworkActivities = Boolean(anchorElNet);


  // event for checking scroll for changing Navbar color
  document.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <div className={scrolled ? classes.wrapperScrolled : classes.wrapper}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={isTab ? 2 : 4}
        className={classes.gridContainer}
      >
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <div className={classes.flexAlign}>
            <div className={classes.logoDiv} onClick={() => history.push("/")}>
              <Logo />
            </div>
            {isTab ? (
              <span style={{ marginRight: "10px", cursor: "pointer" }} onClick={() => setDrawerOpen(true)}>
                <HumburgerIcon />
              </span>
            ) : null}
          </div>
        </Grid>
        {isTab ? null : (
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Router>
              <div className={classes.mainTabWrapper}>
                <div className={classes.mainTabContainer}>
                  {mainFeedLink.map((link, index) => (
                    <div
                      key={index}
                      className={link.to === pathname ? classes.activeLink : classes.link}
                      onClick={() => history.push(link.to)}
                    >
                      {link.title}
                    </div>
                  ))}
                </div>
              </div>
            </Router>
          </Grid>
        )}
        {isTab ? null : (
          <Grid item lg={3} md={3} sm={3} xs={6}>
            <Router>
              <div>
                <div className={classes.mainTabContainer2}>
                  {sideFeedLink.map((link, index) => (
                    <div
                      key={index}
                      className={
                        link.to === pathname ? classes.activeSideLink : classes.sideLink
                      }
                      onClick={() => history.push(link.to)}
                    >
                      {link.title(link.to === pathname)}
                    </div>
                  ))}
                  <div className={openNetworkActivities ? classes.activeSideLink : classes.sideLink}
                    onClick={(e) => handleClickNetwork(e)}
                  // onDoubleClick={() => history.push('/network')}
                  >
                    <MuiIcon icon="persons" color="secondary" />
                  </div>
                  <div
                    className={open ? classes.activeSideLink : classes.sideLink}
                    onClick={e => handleClick(e)}
                  >
                    <Avatar
                      src="https://image.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg"
                      style={{ width: "35px", height: "35px" }}
                    />
                  </div>
                </div>
              </div>
            </Router>

            {/* User DropDown */}
            <UserDropDownPopper
              open={open}
              handleClose={handleClose}
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
            />
            {/* User DropDown */}

            {/* Network Activities dropdown */}
            <NetworkActivities
              open={openNetworkActivities}
              handleClose={handleClose}
              anchorEl={anchorElNet}
            />
            {/* Network Activities dropdown */}
          </Grid>
        )}
        {/* Setting Modal */}
        <SettingModalDialog />
        {/* Setting Modal */}

        {/* Full View Chat Modal */}
        <ChatModal />
        {/* Full View Chat Modal */}
      </Grid>
    </div>
  );
};
