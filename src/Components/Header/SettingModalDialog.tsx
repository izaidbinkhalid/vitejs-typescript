import React from "react";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import {
  Dialog,
  Typography,
  Tabs,
  Tab,
  Box,
  Grid,
  Button,
  Avatar,
  useMediaQuery,
} from "@material-ui/core";
import { UserContext } from "Context/AuthContext";
import MuiIcons from "Components/Icons";
import { DrawerContext } from "Context/DrawerContext";
import { ProfileSetting } from "Components/Settings/ProfileSetting";
import { AccountSetting } from "Components/Settings/AccountSetting";
import { SubscriptionSetting } from "Components/Settings/SubscriptionSetting";
import { SecuritySetting } from "Components/Settings/SecuritySetting";
import { SupportSetting } from "Components/Settings/SupportSetting";
import { useHistory } from "react-router-dom";

import Logo from "Components/Logo";
import { HumburgerIcon } from "Components/Icons/humburger";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100%"
  },
  tabs: {
    borderRight: `none`,
    "& .MuiTab-root": {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "25px",
      lineHeight: "37px",
      color: "#58696D",
      textTransform: "capitalize",
      margin: theme.spacing(1.5, 0)
    },
    "& .MuiTab-wrapper": {
      flexDirection: "row",
      justifyContent: "start",
      paddingLeft: theme.spacing(1)
    },
    "& .MuiTab-textColorInherit.Mui-selected": {
      background: "rgba(251, 251, 251, 0.7)",
      borderRadius: "100px"
    }
  },

  profileDiv: {
    display: "flex",
    justifyContent: "center"
  },
  logoutButtonDiv: {
    display: "flex",
    justifyContent: "start",
    margin: theme.spacing(0, 0, 3, 0)
  },
  paper: {
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.gray[200]}`,
    borderTop: "none",
    boxShadow: "0px 250px 250px -58px rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(15px)",
    width: "100%",
    maxHeight: "90%",
    borderRadius: "27px",
    overflowY: "hidden",
    "&:focus": {
      outline: "none"
    },
    [theme.breakpoints.down("md")]: {
      maxHeight: "100%",
      borderRadius: "0px",
      overflowY: "auto",
    }
  },
  backdrop: {
    backgroundColor: "transparent"
  },
  button: {
    textAlign: "center",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "25px",
    lineHeight: "37px",
    color: "#7e8c8f",
    margin: theme.spacing(2, 0),
    paddingLeft: theme.spacing(2.5)
  },
  closeButtonDiv: {
    position: "absolute",
    cursor: "pointer",
    top: "10px",
    right: "15px"
  },
  box1: {
    padding: theme.spacing(2, 3, 0, 3),
    background: "#B3BEC059",
    backdropFilter: "blur(70px)",
    maxHeight: "95%",
    overflowY: "auto",
    [theme.breakpoints.down("lg")]: {
      paddingBottom: "0px",
      height: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "0px",
      height: "100%"
    }
  },
  box1Small: {
    padding: theme.spacing(2, 3, 0, 3),
    background: "#B3BEC059",
    backdropFilter: "blur(70px)",
    height: "90vh",
    overflowY: "auto",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "30px",
      height: "100%"
    }
  },
  box2: {
    backgroundColor: theme.palette.gray[100],
    [theme.breakpoints.down("md")]: {
      backgroundColor: theme.palette.gray[200],
      paddingBottom: "20px",
    }
  },
  box2Small: {
    backgroundColor: theme.palette.gray[100],
    height: "90vh",
    overflowY: "auto",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "30px",
      height: "100%"
    }
  },
  sailspadText: {
    color: theme.palette.gray[100],
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "64px",
    lineHeight: "111%",
    textAlign: "center",
    margin: theme.spacing(2, 0, 2, 0),
    [theme.breakpoints.down("md")]: {
      fontSize: "45px"
    }
  },
  userAvatarSection: {
    display: "flex",
    allignItems: "center",
    padding: theme.spacing(0, 0, 4, 2)
  },
  userDropDownName: {
    paddingLeft: theme.spacing(1),
    maxWidth: "180px"
  },
  userName: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "36px",
    color: theme.palette.gray[100],
    height: theme.spacing(3.75)
  },
  userProfession: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "9px",
    lineHeight: "13px",
    color: theme.palette.gray[100]
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
  },
  flexAlign: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "60px",
    paddingTop: "30px",
    marginLeft: "-55px",
    backgroundColor: "transparent",
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }

  },
}));


export const SettingModalDialog = () => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  // const { settingModalOpen, handleClose } = React.useContext(SettingContext);
  const { settingTab, handleTabChange, settingModalOpen, handleClose, setDrawerOpen } = React.useContext(DrawerContext);
  const { logout, user } = React.useContext(UserContext);
  const smallHeightDevice = useMediaQuery("(max-height:768px)");
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={!fullScreen ? 3 : 0.5}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const a11yProps = (index: number) => {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`
    };
  }


  const handleLogout = () => {
    logout();
    handleClose();
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        maxWidth={"lg"}
        open={settingModalOpen}
        BackdropProps={{ className: classes.backdrop }}
        PaperProps={{ className: classes.paper }}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div>

          {!fullScreen && <div className={classes.closeButtonDiv}>
            <MuiIcons
              icon="close"
              fontSize="large"
              onClick={handleClose}
              color="secondary"
            />
          </div>}

          <div className={classes.root}>
            <Grid container justifyContent="space-between" style={{ minHeight: "100%" }}>
              {!fullScreen && <Grid
                className={smallHeightDevice ? classes.box1Small : classes.box1}
                item
                xs={12}
                md={3}
                lg={3}
              >
                <div>
                  <div className={classes.profileDiv}>
                    <h4 className={classes.sailspadText}>Settings</h4>
                  </div>
                  <div className={classes.userAvatarSection}>
                    <div>
                      <Avatar
                        src="https://image.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                    <div className={classes.userDropDownName}>
                      <Typography className={classes.userName} noWrap>
                        {`${user.firstName}`}{` ${user.lastName}`}
                      </Typography>
                      <Typography className={classes.userProfession} noWrap>
                        Full Stack Developer
                      </Typography>
                    </div>
                  </div>
                  <Tabs
                    orientation="vertical"
                    // variant="scrollable"
                    value={settingTab}
                    onChange={handleTabChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                  >
                    <Tab label="Profile" {...a11yProps(0)} />
                    <Tab label="Account" {...a11yProps(1)} />
                    <Tab label="Security" {...a11yProps(2)} />
                    <Tab label="Subscriptions" {...a11yProps(3)} />
                    <Tab label="Support" {...a11yProps(4)} />
                  </Tabs>
                  <div className={classes.logoutButtonDiv}>
                    <Button className={classes.button} onClick={handleLogout}>
                      Log Out
                    </Button>
                  </div>
                </div>
              </Grid>}
              <Grid
                className={smallHeightDevice ? classes.box2Small : classes.box2}
                item
                xs={12}
                md={9}
                lg={9}
              >
                {fullScreen &&
                  <Grid item lg={3} md={3} sm={12} xs={12}>
                    <div className={classes.flexAlign}>
                      <div className={classes.logoDiv} onClick={() => history.push("/")}>
                        <Logo />
                      </div>
                      <span style={{ marginRight: "10px", cursor: "pointer" }} onClick={() => setDrawerOpen(true)}>
                        <HumburgerIcon />
                      </span>
                    </div>
                  </Grid>
                }
                <TabPanel value={settingTab} index={0}>
                  <ProfileSetting accountType="Individual" />
                </TabPanel>
                <TabPanel value={settingTab} index={1}>
                  <AccountSetting accountType="Individual" />
                </TabPanel>
                <TabPanel value={settingTab} index={2}>
                  <SecuritySetting />
                </TabPanel>
                <TabPanel value={settingTab} index={3}>
                  <SubscriptionSetting />
                </TabPanel>
                <TabPanel value={settingTab} index={4}>
                  <SupportSetting />
                </TabPanel>
              </Grid>
            </Grid>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
