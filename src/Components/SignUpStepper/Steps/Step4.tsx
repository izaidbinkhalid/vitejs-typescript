import * as React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import OtpInput from "react-otp-input";
import MuiIcons from "Components/Icons";
import Button from "Components/Button";
import { StepperContext } from "Context/StepperContext";
import ShowMessage from "Components/ShowMessage";
import { useVerifyEmail, useCompleteSignUp } from "Hooks/useSignUp";
import Loader from 'Components/Loader'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(4, 20)
      },
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(2)
      }
    },
    container: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(0),
      // paddingTop: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2)
      }
    },
    actionsContainer: {
      // marginBottom: theme.spacing(1)
    },
    actionButtons: {
      float: "right",
      width: "100%",
      display: "flex",
      justifyContent: "end",
      padding: theme.spacing(5, 0, 0, 0)
    },
    actionButton: {
      display: "flex",
      justifyContent: "center"
    },
    stepHeading: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "30px",
      lineHeight: "45px",
      color: "#455154",
      [theme.breakpoints.down("sm")]: {
        fontSize: "24px"
      }
    },
    arrowIcons: {
      fontSize: "15px",
      margin: "0px 3px"
    },
    heading: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "27px",
      color: "#58696D"
    },
    info: {
      margin: "auto",
      maxWidth: "600px",
      fontSize: "22px",
      lineHeight: "36px",
      color: theme.palette.gray[400],
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
        lineHeight: "20px",
      }
    },
    infoVerify: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "24.1026px",
      lineHeight: "36px",
      display: "flex",
      alignItems: "center",
      color: "#0DA7F6",
      justifyContent: "center"
    },
    infoVerify2: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "27px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      color: theme.palette.gray[400],
      justifyContent: "center"
    },
    infoDenied: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "24.1026px",
      lineHeight: "36px",
      display: "flex",
      alignItems: "center",
      color: "#DE3737",
      justifyContent: "center"
    },
    infoDenied2: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "27px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      color: theme.palette.gray[400],
      justifyContent: "center"
    },
    verified: {
      textAlign: "center",
      padding: theme.spacing(5, 0)
    },
    checkedIcon: {
      fontSize: "50px"
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
    },
    messageContainer: {
      padding: theme.spacing(5, 0)

    },
    infoContainer: {
      display: 'flex', justifyContent: "center"
    },
    resendBtn: {
      fontSize: "18px",
      lineHeight: "27px",
      display: "flex",
      alignItems: "center",
      textDecorationLine: "underline",
      color: "#A0A9AB", margin: "auto"
    },
    errorMessage: {
      color: "#d52323",
      fontWeight: 500
    },
    errorCode: {
      border: `3px solid ${theme.palette.error.main}`,
    }
  })
);

const Verify = () => {

  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { handleNext, accountDetails, userDetails, jobDetails } = React.useContext(StepperContext);
  const [otp, setOtp] = React.useState<string>("");
  const [showOtp, setShowOtp] = React.useState<boolean>(true);
  const [otpVerfiy, setOtpVerify] = React.useState<boolean>(false);

  // mutations
  const { data, mutate: verifyEmail, isSuccess, isLoading, isError } = useVerifyEmail();
  const { mutate: resendCode, isSuccess: isResendSuccess, isLoading: isResendloading } = useCompleteSignUp();

  const isInvalidCode = (isSuccess && !data?.verified) || isError;

  React.useEffect(() => {
    if (isSuccess && data?.verified) { setShowOtp(false); setOtpVerify(true); }
    else { setOtp(''); setOtpVerify(false); }
  }, [data, isSuccess])

  const handleOtpCheck = async (code: string) => {
    setOtp(code);
    if (code.length === 6) verifyEmail({ code });
  };

  const handleResendCode = () => {
    resendCode({
      email: accountDetails.email,
      account_type: accountDetails.account_type,
      ...userDetails,
      ...jobDetails
    })
  }


  const onContinue = async () => {
    try {
      // eslint-disable-next-line no-console
      console.log("OTP:");
      handleNext();
    } catch (error) {
      throw new Error("Error in Sign up");
    }
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.stepHeading}>Email Verification</Typography>

      <Grid container justifyContent="center">
        <Grid className={classes.container} item xs={12}>
          {showOtp ?
            <>
              <Typography align="center" className={classes.info}>
                {isResendSuccess ? `We've just sent you again the Verification code to your email :${accountDetails.email}` :
                  `Enter the authentication code we sent to Your email ${accountDetails.email} below:`}

              </Typography>
              <div>
                <OtpInput
                  isDisabled={isLoading || isResendloading}
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
                  hasErrored={isInvalidCode}
                  errorStyle={classes.errorCode}
                />
              </div>
              <div className={classes.infoContainer}>
                {isLoading || isResendloading ?
                  <Loader size={40} /> :
                  <div >
                    <Button
                      className={classes.resendBtn}
                      onClick={() => handleResendCode()}
                      text="Resend Code"
                    />
                    {isInvalidCode && <>
                      <br />
                      <Typography variant="h6" className={classes.errorMessage}>The Verification code is not correct</Typography>
                    </>}

                  </div>
                }
              </div>
            </> : isSuccess && otpVerfiy ?
              <div className={classes.messageContainer}>
                <ShowMessage success={otpVerfiy} message="Your Email is verified !" subMessage="Your email is verified successfully" />
              </div>
              :
              <div className={classes.messageContainer}>
                <ShowMessage success={otpVerfiy} message="Verification Denied" subMessage="Check your email and try again." />
              </div>
          }
        </Grid>
      </Grid>

      <div className={classes.actionsContainer}>
        <div className={classes.actionButtons}>
          <Button
            disabled={otp.length < 6}
            type="stepper"
            onClick={() => onContinue()}
            text="Next"
            endIcon={
              <MuiIcons
                className={classes.arrowIcons}
                icon="ArrowForwardIosIcon"
                fontSize="small"
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Verify;
