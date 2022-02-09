import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, useLocation, useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import ProfileImg from "assets/profile.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      // zIndex: 999999,
      position: "fixed",
      padding: theme.spacing(1),
      bottom: 0,
      left: 0,
      backgroundColor: theme.palette.gray[100],
      width: "100%",
      borderTopLeftRadius: "20px",
      borderTopRightRadius: "20px",
      boxShadow:
        "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
    },
    flexAlign: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    activeLink: {
      padding: theme.spacing(1),
      minWidth: "18%",
      textAlign: "center",
      color: theme.palette.info.main,
      margin: theme.spacing(0.5)
    },
    link: {
      margin: theme.spacing(0.5),
      padding: theme.spacing(1),
      minWidth: "18%",
      textAlign: "center",
      cursor: "pointer",
      color: theme.palette.secondary.main
    },
    loggedInUser: {
      width: "60px",
      height: "60px",
      padding: theme.spacing(0.5),
      borderRadius: "20px"
    }
  })
);
const mainFeedLink = [
  { to: "/", title: "Feed" },
  { to: "/explore", title: "Explore" },
  { to: "/cards", title: "Cards" }
];

const BottomNav = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <div className={classes.wrapper}>
      <Router>
        <div className={classes.flexAlign}>
          {mainFeedLink?.map((link, index) => (
            <div
              key={index}
              className={link.to === pathname ? classes.activeLink : classes.link}
              onClick={() => history.push(link.to)}
            >
              {link.title}
            </div>
          ))}
          <Avatar variant="rounded" src={ProfileImg} className={classes.loggedInUser} />
        </div>
      </Router>
    </div>
  );
};

export default BottomNav;
