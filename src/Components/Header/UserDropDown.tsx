import * as React from "react";
import { makeStyles, Theme, createStyles, withStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import { Avatar, Popover, Typography, Divider } from "@material-ui/core";
import Switch from "Components/Switch";
import { UserContext } from "Context/AuthContext";
import { DrawerContext } from "Context/DrawerContext";


interface Props {
  readonly open: boolean;
  readonly anchorEl: HTMLElement | null;
  readonly setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  readonly handleClose: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    userDropDown: {
      minWidth: "260px",
      padding: theme.spacing(2),
      borderRadius: "20px"
    },
    userDropAvatarSection: {
      display: "flex",
      allignItems: "center"
    },
    userDropDownName: {
      paddingLeft: theme.spacing(2),
      maxWidth: "180px"
    },
    viewProfileBtn: {
      color: theme.palette.primary.main,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      height: "30px",
      backgroundColor: theme.palette.background.paper,
      textAlign: "center",
      borderRadius: "100px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: theme.spacing(0.5),
      cursor: "pointer",
      "&:hover": {
        backgroundColor: theme.palette.gray[200]
      }
    },
    dropDownLinks: {
      color: theme.palette.secondary.main,
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      borderRadius: "100px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: theme.palette.gray[300]
      }
    },
    darkModeDiv: {
      color: theme.palette.secondary.main,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: theme.spacing(1),
      padding: theme.spacing(1)
    },
    divider: {
      marginTop: theme.spacing(1),
      marginBotom: theme.spacing(1)
    },
    switch: {
      justifyContent: "end"
    }
  })
);

const userDropDownLinks = [
  { to: "/settings", title: "Setting & Privacy" },
  { to: "/dashboard", title: "Dashboard" },
  { to: "/edit-profile", title: "Edit Profile" },
  { to: "/publicate", title: "Publications" }
];

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: "flex"
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      "&$checked": {
        transform: "translateX(12px)",
        color: theme.palette.common.white,
        "& + $track": {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main
        }
      }
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: "none"
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white
    },
    checked: {}
  })
)(Switch);

export const UserDropDownPopper: React.FC<Props> = props => {
  const classes = useStyles();
  const history = useHistory();
  const { logout, user } = React.useContext(UserContext);
  const { setSettingModalOpen } = React.useContext(DrawerContext);

  const [checked, setChecked] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };

  return (
    <Popover
      style={{
        marginTop: "1%",
        marginLeft: "0.5%"
      }}
      id="simple-popover"
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
    >
      <div className={classes.userDropDown}>
        <div className={classes.userDropAvatarSection}>
          <div>
            <Avatar
              src="https://image.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg"
              style={{ width: "60px", height: "60px" }}
            />
          </div>
          <div className={classes.userDropDownName}>
            <Typography variant="h6" noWrap>
              {`${user.firstName}`}{` ${user.lastName}`}
            </Typography>
            <Typography noWrap>Full Stack Developer</Typography>
          </div>
        </div>
        <Link style={{ textDecoration: "none" }} to={"/profile"}>
          <div className={classes.viewProfileBtn}>View Profile</div>
        </Link>
        <div>
          {userDropDownLinks.map((link, index) => (
            <Typography
              variant="subtitle2"
              key={index}
              className={classes.dropDownLinks}
              onClick={() => {
                if (link.to === "/settings") {
                  setSettingModalOpen(true);
                  props.setAnchorEl(null);
                } else {
                  history.push(link.to);
                }
              }}
            >
              {link.title}
            </Typography>
          ))}
        </div>
        <div className={classes.divider}>
          <Divider></Divider>
        </div>

        <div className={classes.darkModeDiv}>
          <Typography variant="subtitle2">&nbsp; Dark Mode</Typography>
          <div className={classes.switch}>
            <AntSwitch
              checked={checked}
              name="cardCheck"
              onChange={handleChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </div>
        </div>
        <div>
          <Typography
            variant="subtitle2"
            className={classes.dropDownLinks}
            onClick={() => logout()}
          >
            Sign Out
          </Typography>
        </div>
      </div>
    </Popover>
  );
};
