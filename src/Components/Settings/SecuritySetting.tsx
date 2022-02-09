import * as React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { StepperContext } from "Context/StepperContext";
import Dialog from "Components/ModalPopup/Dialog";
import Button from "Components/Button";
import MuiIcons from "Components/Icons";
import { ChangeEmail } from './Components/ChangeEmail';
import { ChangePassword } from './Components/ChangePassword';
import { ForgotPassword } from './Components/ForgotPassword';
import { ChangeMobile } from './Components/ChangeMobile';
import { TwoFactorAuth } from './Components/TwoFactorAuth';
import { DrawerContext } from "Context/DrawerContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      padding: theme.spacing(1),
      paddingTop: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2)
      },
    },
    wrapper2: {
      padding: theme.spacing(0.5, 1.5),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2, 5)
      },
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(2, 2)
      }
    },
    heading: {
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "45px",
      color: theme.palette.secondary.dark,
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px"
      }
    },
    box: {
      lineHeight: 1.3
    },
    changeBtn: {
      background: theme.palette.gray[700],
      borderRadius: "56px",
      fontWeight: 500,
      fontSize: "15px",
      color: theme.palette.secondary.dark,
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
      padding: theme.spacing(1)
    },
    linktype: {
      textDecoration: "underline",
      cursor: "pointer"
    },
    secondRow: {
      marginTop: theme.spacing(8),
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(4)
      }
    },
    textInput: {
      borderRadius: "50px"
    },
    applyBtnDiv: {
      float: "right"
    },
    settingLabel: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "25px",
      lineHeight: "27px",
      color: "#58696D",
      margin: theme.spacing(2, 0, 4, 0)
    },
    icon: {
      color: theme.palette.secondary.light,
      cursor: "pointer",
      margin: theme.spacing(2, 0, 4, 0)
    },
    flex: {
      justifyContent: "flex-start",
      display: "flex",
      alignItems: "center"
    }
  })
);

export const SecuritySetting = () => {
  // INITIALS
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // CONTEXT
  const { subModalOpen, setSubModalOpen } = React.useContext(StepperContext);
  const { handleClose, setDrawerOpen, setShowSettingsTab } = React.useContext(DrawerContext);

  // STATES
  const [type, setType] = React.useState<string>("email");
  const [modalTitle, setModalTitle] = React.useState<string>("");
  const [canChangePassword, setCanChangePassword] = React.useState<boolean>(false);

  // FUNCTIONS
  const openSubModal = (type: string) => {
    if (type === 'email') setModalTitle("Change Email Address");
    if (type === 'password') setModalTitle("Change Password");
    if (type === 'forgotPassword') setModalTitle("Forgot password");
    if (type === 'mobile') setModalTitle("Change Mobile Number");
    if (type === 'twoFactorAuth') setModalTitle("Two-Factor Authentication");
    setType(type);
    setSubModalOpen(true);
  };

  const handleBackArrow = () => {
    handleClose()
    setDrawerOpen(true)
    setShowSettingsTab(true)
  }

  return (
    <>
      <div className={classes.wrapper}>
        <Grid container alignItems="center" justifyContent="space-between" spacing={4}>
          {smallScreen &&
            <Grid item xs={12}>
              <div className={classes.flex}>
                <MuiIcons icon="backArrow" className={classes.icon} fontSize="medium" onClick={handleBackArrow} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Typography className={classes.settingLabel}>Security Settings</Typography>
              </div>
            </Grid>
          }
          <Grid item xs={12} sm={6}>
            <div className={classes.box}>
              <Typography className={classes.heading}>Email:</Typography>
              <Typography variant="body2">
                “Currentemail@gmail.com” is set as your Email for this account.
              </Typography>
              <br />
              <Button
                className={classes.changeBtn}
                text="Change"
                onClick={() => openSubModal("email")}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.box}>
              <Typography className={classes.heading}>Password:</Typography>
              <Typography variant="body2">
                If you forgot your password{" "}
                <span className={classes.linktype} onClick={() => openSubModal("forgotPassword")}>click here</span> <br />
                click on change below to change password
              </Typography>
              <br />
              <Button
                className={classes.changeBtn}
                text="Change"
                onClick={() => openSubModal("password")}
              />
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={4}
          className={classes.secondRow}
        >
          <Grid item xs={12} sm={6}>
            <div className={classes.box}>
              <Typography className={classes.heading}>Mobile Phone</Typography>
              <Typography variant="body2">
                “+971 58 939 7436” is set as your Mobile number for this account.
              </Typography>
              <br />
              <Button
                className={classes.changeBtn}
                text="Change"
                onClick={() => openSubModal("mobile")}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.box}>
              <Typography className={classes.heading}>
                Two-Factor Authentication
              </Typography>
              <Typography variant="body2">
                Add extra security to your account. Protect your <br />
                account with two-factor authentication.
              </Typography>
              <br />
              <Button
                className={classes.changeBtn}
                text="Get Started"
                onClick={() => openSubModal("twoFactorAuth")}
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <Dialog
          modalOpen={subModalOpen}
          setModelOpen={setSubModalOpen}
          modalTitle={modalTitle}
        >
          {showSubModals({ type, setModalTitle, openSubModal, canChangePassword, setCanChangePassword })}
        </Dialog>
      </div>
    </>
  );
};

interface SubModalProps {
  type: string
  setModalTitle: React.Dispatch<React.SetStateAction<string>>
  openSubModal: (type: string) => void
  canChangePassword: boolean
  setCanChangePassword: React.Dispatch<React.SetStateAction<boolean>>

}

// changing Content in sub Modal
const showSubModals = ({ type, setModalTitle, openSubModal, canChangePassword, setCanChangePassword }: SubModalProps) => {
  switch (type) {
    case "email":
      return <ChangeEmail />;
    case "password":
      return <ChangePassword canChange={canChangePassword} setCanChange={setCanChangePassword} />;
    case "forgotPassword":
      return <ForgotPassword setModalTitle={setModalTitle} openSubModal={openSubModal} setCanChangePassword={setCanChangePassword} />;
    case "mobile":
      return <ChangeMobile setModalTitle={setModalTitle} openSubModal={openSubModal} setCanChangePassword={setCanChangePassword} />;
    case "twoFactorAuth":
      return <TwoFactorAuth />;
    default:
      return;
  }
};
