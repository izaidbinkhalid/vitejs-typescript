/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Theme, createStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import Button from "Components/Button";
import Label from "../Components/Label";
import { StepperContext } from "Context/StepperContext";
import TextInput from "Components/Form/TextInput";
import { useSignUp } from "Hooks/useSignUp";
import { UserContext } from "Context/AuthContext";
import { PersonIcon } from "Components/Icons/person";
import { BuildingIcon } from "Components/Icons/building";
import MuiIcons from "Components/Icons";
import { GoogleIcon } from "Components/Icons/google";
import { FacebookIcon } from "Components/Icons/facebook";
import { LinkedInIcon } from "Components/Icons/linkedin";
import CustomButton from "Components/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(4, 20)
      },
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(2)
      }
    },
    inputFeild: {
      padding: theme.spacing(5, 7, 0, 0),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2, 0)
      }
    },
    wrapper: {
      padding: theme.spacing(1, 7),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0)
      }
    },
    inputLabel: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "27px",
      color: "#58696D"
    },
    stepHeading: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "30px",
      lineHeight: "45px",
      color: "#455154",
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px"
      }
    },
    actionsContainer: {
      margin: theme.spacing(0, 0, 0, 0)
    },
    actionButtons: {
      display: "flex",
      justifyContent: "end"
      // padding: theme.spacing(1, 1, 0, 1)
    },
    arrowIcons: {
      fontSize: "15px",
      margin: "0px 3px"
    },
    error: {
      padding: theme.spacing(0.25),
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#DE3737",
      margin: "none"
    },
    heading: {
      color: theme.palette.gray[900],
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "18px",
      textAlign: "center"
    },
    socialSignUp: {
      width: "70%",
      margin: "auto",
      padding: theme.spacing(4, 8, 0, 8),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(4, 0, 6, 0)
      }
    },
    emailGrid: {
      // marginRight: "60px"
    },
    wrapperLabel: {
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0, 2)
      }
    },
    label: {
      paddingRight: theme.spacing(2.5)
    }
  })
);

const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  account_type: yup.string().required("Select Account Type"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .when("password", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref("password")], "Both password need to be the same")
    })
    .required("Confirm Password")
});

export default function AccountType() {
  const theme = useTheme();
  const classes = useStyles();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { activeStep, setSelectedType, setAccountDetails, accountDetails, handleNext } = React.useContext(StepperContext);
  const { setToken } = React.useContext(UserContext);

  const { data, mutate, isLoading, isSuccess } = useSignUp();

  const accountTypes = [
    {
      icon: (
        <PersonIcon
          height={smallScreen ? "41px" : "83px"}
          width={smallScreen ? "41px" : "81px"}
        />
      ),
      heading: "Individual Account",
      type: "Individual",
      details:
        "This accout type allows you to crate and receive cards from employers and distributers"
    },
    {
      icon: (
        <BuildingIcon
          height={smallScreen ? "41px" : "83px"}
          width={smallScreen ? "35px" : "81px"}
        />
      ),
      heading: "Institution Account",
      type: "Institution",
      details:
        "This accout type allows you to crate and distribute Larger number of cards with others"
    }
  ];

  const formik = useFormik({
    initialValues: {
      account_type: accountDetails.account_type,
      email: accountDetails.email,
      password: accountDetails.password,
      confirmPassword: accountDetails.confirmPassword
    },

    validationSchema: validationSchema,
    onSubmit: async values => {
      mutate(values);
    }
  });

  React.useEffect(() => {
    if (isSuccess && formik.isValid && data?.access_token) {
      setToken({ type: "access_token", token: data.access_token });
      setAccountDetails(formik.values);
      handleNext();
    }
  }, [formik.isValid, isSuccess]);

  // checking if user already exists
  React.useEffect(() => { if (data && data.status === 409) formik.setFieldError("email", data.message); }, [data]);

  const setAccountType = (value: string) => {
    formik.setFieldValue("account_type", value, true);
    setSelectedType(value);
  };

  const onContinue = async () => {
    formik.handleSubmit();
    if (
      isSuccess &&
      formik.values &&
      data &&
      data.status !== 409 &&
      data.status !== 500
    ) {
      setAccountDetails(formik.values);
      handleNext();
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={classes.root}>
        <Typography className={classes.stepHeading}>Select your account type</Typography>
        <div className={classes.wrapper}>
          <Grid
            container
            alignItems="center"
            justifyContent={!smallScreen ? "flex-start" : "space-between"}
            className={smallScreen ? classes.label : ""}
          >
            {accountTypes.map((account, index) => (
              <Grid
                key={index}
                id={!smallScreen ? "selection" : "selection2"}
                item
                xs={5}
              >
                <Label
                  selectedType={formik.values.account_type}
                  setSelectedType={setAccountType}
                  icon={account.icon}
                  heading={account.heading}
                  details={account.details}
                  type={account.type}
                  error={
                    formik.touched.account_type && Boolean(formik.errors.account_type)
                  }
                  helperText={formik.touched.account_type && formik.errors.account_type}
                />
              </Grid>
            ))}
          </Grid>

          <Grid container justifyContent="flex-start">
            <Grid className={classes.emailGrid} item xs={12} md={6}>
              <div className={classes.inputFeild}>
                <label htmlFor="email">
                  <Typography className={classes.inputLabel}>Email:</Typography>
                </label>
                <br />
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  autoFocus={true}
                  placeholder="Enter your email address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </div>
            </Grid>{" "}
            <br />
            <Grid item xs={12} md={6}>
              <div className={classes.inputFeild}>
                <label htmlFor="password">
                  <Typography className={classes.inputLabel}>Password:</Typography>
                </label>
                <br />
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
                <br />
                <TextInput
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword && formik.errors.confirmPassword
                  }
                />
              </div>
            </Grid>
          </Grid>

          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <div className={classes.socialSignUp}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Typography className={classes.heading} align="center">
                    Or contiue with
                  </Typography>
                </div>
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "baseline"
                  }}
                >

                  <CustomButton onlyIcon type="neutral" icon={<GoogleIcon noColor />} submit="submit" />

                  <CustomButton
                    onlyIcon
                    type="neutral"
                    icon={<FacebookIcon noColor />}
                    submit="submit"
                  />

                  <CustomButton
                    onlyIcon
                    type="neutral"
                    icon={<LinkedInIcon noColor />}
                    submit="submit"
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className={classes.actionsContainer}>
          <div className={classes.actionButtons}>
            <Button
              disabled={formik.values.email === ''}
              loading={isLoading}
              type="stepper"
              onClick={() => onContinue()}
              text={activeStep === 4 ? "Finish" : "Next"}
              endIcon={<MuiIcons className={classes.arrowIcons} icon="ArrowForwardIosIcon" fontSize="small" />}
            />
          </div>
        </div>
      </div>
    </form>
  );
}