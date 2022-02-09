import * as React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "Components/Button";
import { Typography } from "@material-ui/core";
import OtpInput from "react-otp-input";

interface Props {
  readonly setModalTitle: React.Dispatch<React.SetStateAction<string>>;
  readonly openSubModal: (type: string) => void;
  readonly setCanChangePassword: React.Dispatch<React.SetStateAction<boolean>>
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapperEmailChange: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(1)
      }
    },
    applyBtn: {
      background: "white",
      borderRadius: "56px",
      fontWeight: 500,
      fontSize: "15px",
      color: theme.palette.secondary.dark,
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
      padding: theme.spacing(1)
    },
    applyBtnDiv: {
      float: "right",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    placeholderText: {
      color: theme.palette.gray[400],
      fontSize: "18px"
    },
    inputDesign: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      color: "#58696D",
      background: "#FFFFFF",
      border: "1.6958px solid #E3E3E3",
      boxSizing: "border-box",
      boxShadow: "0px 52.5697px 86.4857px rgba(0, 0, 0, 0.03)",
      borderRadius: "95px",
      height: "74px !important",
      width: "74px !important",
      fontSize: "35px",
      margin: "5px",
      [theme.breakpoints.down("sm")]: {
        height: "50px !important",
        width: "50px !important",
        margin: "2px"
      }
    },
    containerDesign: {
      display: "flex",
      justifyContent: "center",
      margin: "40px auto"
    }
  })
);


export const ForgotPassword: React.FC<Props> = (props) => {
  //Initials
  const classes = useStyles();

  //States
  const [canChange, setCanChange] = React.useState<boolean>(false);
  const [otp, setOtp] = React.useState<string>("");


  const openResetCase = (type: string) => { setCanChange(true); }

  const handleOtpCheck = (code: string) => { setOtp(code); };

  const verifyOtp = () => {
    if (otp === '123456') {
      props.setCanChangePassword(true);
      props.openSubModal('password')
    }

  }

  return canChange ?
    <div className={classes.wrapperEmailChange}>
      <Typography variant="body2" className={classes.placeholderText}>
        Enter the authenrication code below we sent to <br /> +971 85 939 7436
      </Typography>
      <div>
        <OtpInput
          isInputNum
          onChange={handleOtpCheck}
          value={otp}
          numInputs={6}
          separator={<span>&nbsp;</span>}
          inputStyle={classes.inputDesign}
          containerStyle={classes.containerDesign}
          focusStyle={{
            outline: "none"
          }}
        />
      </div>
      <br />
      <div className={classes.applyBtnDiv}>
        <Button className={classes.applyBtn} text="Verify" submit="submit" onClick={() => verifyOtp()} />
      </div>
    </div>
    : <div className={classes.wrapperEmailChange}>
      <Typography variant="body2" className={classes.placeholderText}>
        Please Choose which method you want to use for resetting your password
      </Typography>
      <br />
      <div className={classes.applyBtnDiv}>
        <Button className={classes.applyBtn} text="Mobile Phone" onClick={() => openResetCase('mobile')} />&nbsp;&nbsp;&nbsp;
        <Button className={classes.applyBtn} text="Email" onClick={() => openResetCase('email')} />
      </div>
    </div>
};