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

const passwordValidationSchema = yup.object({
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
});

const newPasswordValidationSchema = yup.object({
  newPassword: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmNewPassword: yup
    .string()
    .when("newPassword", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref("newPassword")], "Both password need to be the same")
    })
    .required("Please Confirm Password")
});
interface Props {
  readonly canChange: boolean
  readonly setCanChange: React.Dispatch<React.SetStateAction<boolean>>
}


export const ChangePassword: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { setSubModalOpen } = React.useContext(StepperContext);
  const [success, setSuccess] = React.useState<boolean>(false)

  // current password validation
  const formik = useFormik({
    initialValues: { password: "" },
    validationSchema: passwordValidationSchema,
    onSubmit: values => {
      props.setCanChange(true)
    }
  });

  // new Password Validation
  const newPasswordFormik = useFormik({
    initialValues: { newPassword: "", confirmNewPassword: "", },
    validationSchema: newPasswordValidationSchema,
    onSubmit: values => {
      // do your logic here
      setSuccess(true)
      props.setCanChange(false);

    }
  });

  const onClose = () => { setSubModalOpen(false); setSuccess(false); }

  return success ? <div className={classes.wrapperEmailChange}>
    <ShowMessage success={success} message="Password Successfully Changed" subMessage="You have successfully changed your password" />
    <br />
    <div className={classes.applyBtnDiv}>
      <Button className={classes.applyBtn} text="Finish" onClick={onClose} />
    </div>
  </div> : !props.canChange ?
    <form onSubmit={formik.handleSubmit}>
      <div className={classes.wrapperEmailChange}>
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
          <Button className={classes.applyBtn} text="Next" submit="submit" />
        </div>
      </div>
    </form> :
    <form onSubmit={newPasswordFormik.handleSubmit}>
      <div className={classes.wrapperEmailChange}>
        <TextInput
          type="password"
          name="newPassword"
          placeholder="Enter your New Password"
          style={{ borderRadius: "50px" }}
          value={newPasswordFormik.values.newPassword}
          onChange={newPasswordFormik.handleChange}
          error={newPasswordFormik.touched.newPassword && Boolean(newPasswordFormik.errors.newPassword)}
          helperText={newPasswordFormik.touched.newPassword && newPasswordFormik.errors.newPassword}
        />
        <br />
        <TextInput
          type="password"
          name="confirmNewPassword"
          placeholder="Confirm your New Password "
          style={{ borderRadius: "50px" }}
          value={newPasswordFormik.values.confirmNewPassword}
          onChange={newPasswordFormik.handleChange}
          error={newPasswordFormik.touched.confirmNewPassword && Boolean(newPasswordFormik.errors.confirmNewPassword)}
          helperText={newPasswordFormik.touched.confirmNewPassword && newPasswordFormik.errors.confirmNewPassword}
        />
        <br />
        <div className={classes.applyBtnDiv}>
          <Button className={classes.applyBtn} text="Apply" submit="submit" />
        </div>
      </div>
    </form>
    ;
};