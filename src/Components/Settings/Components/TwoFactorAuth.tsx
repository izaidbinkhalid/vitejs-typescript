import * as React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import PhoneInput, { Value as phoneInputType } from "react-phone-number-input";
import Button from "Components/Button";
import OtpInput from "react-otp-input";
import ShowMessage from 'Components/ShowMessage';
import { StepperContext } from "Context/StepperContext";

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
    },
    phoneInput: {
      background: "#FFFFFF",
      border: "1px solid #E3E3E3",
      boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)",
      borderRadius: "10px",
      padding: theme.spacing(0, 1),
      "& input": {
        background: "#FFFFFF",
        border: "#f5f8fa",
        width: "100%",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "15px",
        lineHeight: "22px",
        display: "flex",
        alignItems: "center",
        color: "#5e6278",
        outline: "none",
        height: "40px",
        padding: theme.spacing(1.5),
        "&:focus": {
          color: "#5e6278"
        }
      },
      "&.PhoneInputCountrySelectArrow": {
        fontSize: "20px"
      },
      '&.PhoneInputCountrySelect': {
        margin: '10px'
      }
    },
    redText: {
      color: "red"
    }
  })
);

const phoneNumberValidation = yup.object({
  phoneNumber: yup
    .string()
    .min(7, "Phone Number should be of minimum 7 characters length")
    .required("Phone Number is required")
  ,
});

export const TwoFactorAuth = () => {
  //Initials
  const classes = useStyles();
  const { setSubModalOpen } = React.useContext(StepperContext);
  const [phoneNumber, setPhoneNumber] = React.useState<phoneInputType>()


  const formik = useFormik({
    initialValues: { phoneNumber: phoneNumber, },
    validationSchema: phoneNumberValidation,
    onSubmit: values => { setOtpSent(true) }
  });

  //States
  const [otpSent, setOtpSent] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false)
  const [otp, setOtp] = React.useState<string>("");

  const handleOtpCheck = (code: string) => { setOtp(code); };

  const verifyOtp = () => {
    if (otp === '123456') {
      setSuccess(true)
    }
  }

  const handlePhoneChange = (value: phoneInputType) => {
    setPhoneNumber(value)
    formik.setFieldValue("phoneNumber", value, true)
  }

  const onClose = () => { setOtpSent(false); setSuccess(false); setSubModalOpen(false); formik.resetForm(); }
  const onSend = () => { formik.handleSubmit(); };

  return success ?
    <div className={classes.wrapperEmailChange}>
      <ShowMessage success={success} message="Successfully enabled" subMessage={`Two-factor Authentication has been enabled to your account by this ${formik.values.phoneNumber}`} />
      <br />
      <div className={classes.applyBtnDiv}>
        <Button className={classes.applyBtn} text="Finish" onClick={onClose} />
      </div>
    </div> :
    otpSent ?
      <div className={classes.wrapperEmailChange} >
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
      </div> :
      <div className={classes.wrapperEmailChange} >
        <form onSubmit={formik.handleSubmit}>
          <PhoneInput
            id="phoneNumber"
            name="phoneNumber"
            className={classes.phoneInput}
            placeholder="+0123456789"
            value={formik.values.phoneNumber}
            limitMaxLength={true}
            onChange={handlePhoneChange}
          />
          {formik.errors.phoneNumber ?
            <Grid item lg={12}>
              <br />
              <Typography variant="body2" className={classes.redText}>
                &nbsp;&nbsp;
                {formik.errors.phoneNumber}
              </Typography>
            </Grid> : null}
          <br />
          <div className={classes.applyBtnDiv}>
            <Button className={classes.applyBtn} text="Send" onClick={onSend} />
          </div>
        </form>
      </div>
};