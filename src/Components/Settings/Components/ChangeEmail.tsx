import * as React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { StepperContext } from "Context/StepperContext";
import TextInput from "Components/Form/TextInput";
import Button from "Components/Button";
import ShowMessage from 'Components/ShowMessage';

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
    }
  })
);

const emailValidationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
});

export const ChangeEmail = () => {
  const classes = useStyles();
  const { setSubModalOpen } = React.useContext(StepperContext);
  const [success, setSuccess] = React.useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: emailValidationSchema,
    onSubmit: values => {
      // do your logic here
      setSuccess(true);
    }
  });

  const onClose = () => { setSubModalOpen(false); setSuccess(false); }

  return !success ?
    <form onSubmit={formik.handleSubmit}>
      <div className={classes.wrapperEmailChange}>
        <TextInput
          type="email"
          name="email"
          placeholder="Enter your New Email"
          style={{ borderRadius: "50px" }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
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
          <Button className={classes.applyBtn} text="Apply" submit="submit" />
        </div>
      </div>
    </form> :
    <div className={classes.wrapperEmailChange}>
      <ShowMessage success={success} message="Email Successfully Changed" subMessage="Your new email is “New email@hotmail.com”" />
      <br />
      <div className={classes.applyBtnDiv}>
        <Button className={classes.applyBtn} text="Finish" onClick={onClose} />
      </div>
    </div>
    ;
};