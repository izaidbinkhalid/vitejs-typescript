import * as React from "react";
import { useHistory } from "react-router-dom";
import { Theme, createStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Dialog, Typography } from "@material-ui/core";
import MuiIcons from "Components/Icons";
import Logo from "Components/Logo";
import { HumburgerIcon } from "Components/Icons/humburger";
import { DrawerContext } from "Context/DrawerContext";

interface Props {
  readonly modalOpen: boolean;
  readonly setModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  readonly children: React.ReactNode;
  readonly modalTitle: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headingModal: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "21.0084px",
      lineHeight: "32px",
      color: "#455154"
    },
    backdrop: {
      backgroundColor: "rgb(0 0 0 / 10%)"
    },
    paper: {
      overflowY: "unset",
      border: `1px solid ${theme.palette.gray[700]}`,
      borderTop: "none",
      background: "#FBFBFB99",
      backdropFilter: "blur(6px)",
      width: "100%",
      borderRadius: "27px",
      padding: theme.spacing(3),
      "&:focus": {
        outline: "none"
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(2),
        borderRadius: "0px",
      },
      [theme.breakpoints.down("sm")]: {
        background: theme.palette.gray[200],
        backdropFilter: "blur(6px)",
      },
    },
    closeButton: {
      color: theme.palette.secondary.dark,
      cursor: "pointer",
      "& hover": {
        color: theme.palette.gray[100]
      }
    },
    close: {
      position: "sticky",
      top: 0,
      left: 0,
      zIndex: 1,
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "space-between",
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(2),
        position: "static",
        marginBottom: theme.spacing(1.5)
      }
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
      marginLeft: "-55px",
      backgroundColor: "transparent",

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

const CustomDialog: React.FC<Props> = props => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { setDrawerOpen } = React.useContext(DrawerContext);


  const handleClose = () => {
    props.setModelOpen(false);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      disableEscapeKeyDown={true}
      maxWidth={"sm"}
      open={props.modalOpen}
      BackdropProps={{ className: classes.backdrop }}
      PaperProps={{ className: classes.paper }}
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <>
        {fullScreen &&
          <div className={classes.flexAlign}>
            <div className={classes.logoDiv} onClick={() => history.push("/")}>
              <Logo />
            </div>
            <span style={{ marginRight: "10px", cursor: "pointer" }} onClick={() => setDrawerOpen(true)}>
              <HumburgerIcon />
            </span>
          </div>

        }
        <div className={classes.close}>
          <div className={classes.flex}>
            {fullScreen && <MuiIcons icon="backArrow" className={classes.icon} fontSize="medium" onClick={handleClose} />}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Typography className={classes.headingModal}>{props.modalTitle}</Typography>
          </div>
          {!fullScreen && <MuiIcons
            className={classes.closeButton}
            fontSize="large"
            icon="close"
            onClick={handleClose}
          />}
        </div>
      </>

      {props.children}
    </Dialog>
  );
};

export default CustomDialog;
