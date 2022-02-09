import * as React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import PhoneInput, { Value as phoneInputType } from "react-phone-number-input";
import { StepperContext } from "Context/StepperContext";
import TextInput from "Components/Form/TextInput";
import Button from "Components/Button";
import ShowMessage from 'Components/ShowMessage';

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

const passwordValidationSchema = yup.object({
  phoneNumber: yup
    .string()
    .min(7, "Phone Number should be of minimum 7 characters length")
    .required("Phone Number is required")
  ,
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
});

export const ChangeMobile: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { setSubModalOpen } = React.useContext(StepperContext);
  const [success, setSuccess] = React.useState<boolean>(false)
  const [phoneNumber, setPhoneNumber] = React.useState<phoneInputType>()

  // current password validation
  const formik = useFormik({
    initialValues: { phoneNumber: phoneNumber, password: "" },
    validationSchema: passwordValidationSchema,
    onSubmit: values => { setSuccess(true) }
  });

  React.useEffect(() => {
    formik.setFieldTouched("phoneNumber", false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePhoneChange = (value: phoneInputType) => {
    setPhoneNumber(value)
    formik.setFieldValue("phoneNumber", value, true)
  }

  const onClose = () => { setSubModalOpen(false); setSuccess(false); formik.setFieldTouched("phoneNumber", false); }
  const onApply = () => { formik.handleSubmit(); };

  return !success ? <div className={classes.wrapperEmailChange}>
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
      {formik.errors.phoneNumber && formik.touched.phoneNumber ?
        <Grid item lg={12}>
          <br />
          <Typography variant="body2" className={classes.redText}>
            &nbsp;&nbsp;
            {formik.errors.phoneNumber}
          </Typography>
        </Grid> : null}

      <br />

      <TextInput
        type="password"
        name="password"
        placeholder="Enter your Current Password"
        style={{ borderRadius: "50px" }}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <br />
      <div className={classes.applyBtnDiv}>
        <Button className={classes.applyBtn} text="Apply" onClick={onApply} />

      </div>
    </form>
  </div> : <div className={classes.wrapperEmailChange}>
    <ShowMessage success={success} message="Phone number Successfully Changed" subMessage={`Your new phone number is ${formik.values.phoneNumber}`} />
    <br />
    <div className={classes.applyBtnDiv}>
      <Button className={classes.applyBtn} text="Finish" onClick={onClose} />
    </div>
  </div>
};