import * as React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { StepperContext } from "Context/StepperContext";
import TextInput from "Components/Form/TextInput";
import Button from "Components/Button";
import UserCancel from "Components/Icons/userCancel";
import { Typography } from "@material-ui/core";

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
      float: "right"
    },
    wrapperMessage: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2),
      paddingTop: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(1)
      }
    },
    messageText: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "25.388px",
      lineHeight: "38px",
      alignItems: "center",
      color: theme.palette.gray[400]
    },
  })
);

const ValidationSchema = yup.object({
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
});

export const SuspendAccount = () => {
  const classes = useStyles();
  const { setSubModalOpen } = React.useContext(StepperContext);
  const [success, setSuccess] = React.useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: ValidationSchema,
    onSubmit: values => {
      // do your logic here
      setSuccess(true);
    }
  });

  const onClose = () => { setSubModalOpen(false); setSuccess(false); }

  return !success ?
    <form onSubmit={formik.handleSubmit}>
      <div className={classes.wrapperEmailChange}>
        <Typography className={classes.messageText}>
          If you want to delete or suspend your account,
          confirm your password.
        </Typography>
        <br />
        <TextInput
          type="password"
          name="password"
          placeholder="Enter your Password Here "
          style={{ borderRadius: "50px" }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <br />
        <div className={classes.applyBtnDiv}>
          <Button className={classes.applyBtn} text="Confirm" submit="submit" />
        </div>
      </div>
    </form> :
    <div className={classes.wrapperEmailChange}>
      <>
        <div className={classes.wrapperMessage}>
          <UserCancel />
        </div>
        <br />
        <Typography align="center" className={classes.messageText}>
          Acoount suspended.<br />
          We are sorry to see you go..
        </Typography>
      </>
      <br />
      <div className={classes.applyBtnDiv}>
        <Button className={classes.applyBtn} text="Finish" onClick={onClose} />
      </div>
    </div>
    ;
};