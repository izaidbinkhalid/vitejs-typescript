import * as React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Typography, Grid, Dialog, useTheme } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import TextInput from "Components/Form/TextInput";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import CustomButton from "Components/Button";
import CheckBox from "Components/CheckBox";
import { SideBanner } from "Components/AuthSideBanner";
import { GoogleIcon } from "Components/Icons/google";
import { AppleIcon } from "Components/Icons/apple";
import { FacebookIcon } from "Components/Icons/facebook";
import { LinkedInIcon } from "Components/Icons/linkedin";
import { useLoginUser } from "Hooks/useLogin";
import { UserContext } from "Context/AuthContext";
import Alert from "@material-ui/lab/Alert";
import { useSocialAuth } from "Hooks/useLogin";
import MuiIcons from "Components/Icons";
import Logo from "Components/Logo";
import { StepperContext } from "Context/StepperContext";
import SignUp from "Components/SignUpStepper";
import SignUpDrawer from "Components/Drawer/SignUp";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      height: "100vh"
    },
    contentContainer: {
      background: theme.palette.gray[200],
      justifyContent: "center"
    },
    contentOuter: {
      position: "relative",
      padding: theme.spacing(2, 2, 0, 2),
      maxWidth: "500px",
      margin: "auto",
      minHeight: "100%",
      maxHeight: "100vh",
      overflowY: "scroll",
      [theme.breakpoints.down("sm")]: {
        position: "static",
        overflowY: "visible"
      }
    },
    content: {
      paddingTop: theme.spacing(5),
      maxWidth: "360px",
      margin: "auto"
    },
    logoDiv: {
      textAlign: "center",
      margin: theme.spacing(8, 0),
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(5, 0),
      }
    },
    logoDivSmall: {
      textAlign: "center",
      margin: theme.spacing(2, 0),
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(5, 0),
      }
    },
    card: {
      [theme.breakpoints.down("sm")]: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
      }
    },
    checkboxDiv: {
      paddingBottom: theme.spacing(1),
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    flex: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      marginTop: theme.spacing(1)
    },
    flexStart: {
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      textAlign: "center",
      marginTop: theme.spacing(1),
      [theme.breakpoints.down("xs")]: {
        justifyContent: "start"
      }
    },
    bigHeading: {
      color: theme.palette.gray[900],
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "24px",
      textAlign: "center"
    },

    heading: {
      color: theme.palette.gray[900],
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "18px",
      textAlign: "center"
    },
    redText: {
      padding: theme.spacing(1, 2),
      color: theme.palette.gray[900],
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "18px",
      display: "flex",
      alignItems: "center"
    },
    checkBoxText: {
      color: theme.palette.gray[900],
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "27px",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px"
      }
    },
    inputField: {
      borderRadius: "6px",
      width: "100%",
      background: theme.palette.background.default,
      marginTop: 16,
      marginBottom: 16
    },
    error: {
      background: "red",
      padding: 16,
      marginTop: 16,
      marginBottom: 16
    },
    errorMessage: {
      color: theme.palette.background.paper
    },
    flexAlign: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      margin: "auto",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        justifyContent: "space-evenly"
      }
    },
    footer: {
      position: "absolute",
      bottom: 0,
      margin: "auto",
      width: "100%",
      maxWidth: "460px",
      [theme.breakpoints.down("sm")]: {
        minWidth: "90%"

      },
    },
    footerContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "&>p": {
        color: theme.palette.gray[900],
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "18px",
        lineHeight: "27px",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
          fontSize: "14px"
        }
      }
    },
    blueText: {
      color: theme.palette.primary.dark,
      fontWeight: "bold"
    },
    customFbBtn: {
      width: "100%",
      background: theme.palette.gray[200],
      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
      borderRadius: "6px",
      fontWeight: 500,
      display: "flex",
      alignItems: "center",
      color: theme.palette.gray[500],
      paddingLeft: "24%",
      paddingRight: "19%",
      border: "none",
      outline: "none",
      padding: "1.4%",
      "&:hover": {
        background: theme.palette.gray[300]
      }
    },
    paper: {
      backgroundColor: "transparent",
      border: `1px solid ${theme.palette.gray[700]}`,
      backdropFilter: "blur(70px)",
      width: "100%",
      borderRadius: "27px",
      marginTop: theme.spacing(3),
      "&:focus": {
        outline: "none"
      },
      [theme.breakpoints.down("md")]: {
        height: "100%"
      }
    },
    backdrop: {
      backgroundColor: "transparent"
    },
    close: {
      position: "absolute",
      top: "15px",
      right: "20px",
    },
    createCardText: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: "36px",
      color: theme.palette.gray[100]
    },
    closeButton: {
      color: "#455154",
      cursor: "pointer"
    }
  })
);
interface History {
  from: string;
  location: {
    state: {
      from?: string;
    };
  };
}
const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
});

export const LoginPage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory<History>();
  const { modalOpen, setModelOpen, setDrawerOpen, setActiveStep } = React.useContext(StepperContext);
  const theme = useTheme();
  const tabScreen = useMediaQuery("(max-width:960px)");
  const phoneScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const smallHeightDevice = useMediaQuery("(max-height:768px)");
  const { setToken, setUser, user } = React.useContext(UserContext);

  const { data, error, mutate, isLoading } = useLoginUser();
  const { data: socialAuthData, mutate: loginSocial } = useSocialAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      mutate(values);
    }
  });
  const [checked, setChecked] = React.useState(true);
  const prevLocation = history?.location?.state?.from || "/";

  // for general signin request
  React.useEffect(() => {
    if (data?.access_token && data.refresh_token) {
      setToken({ type: "access_token", token: data.access_token });
      setToken({ type: "refresh_token", token: data.refresh_token });
    }
  }, [data?.access_token, data?.refresh_token, setToken]);

  React.useEffect(() => {
    if (data?.email) {
      setUser({
        firstName: data?.first_name,
        lastName: data?.last_name,
        email: data?.email,
        id: data?.id
      });
    }
    // if user is logged in
    if (user?.email) history.push(prevLocation);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, user]);

  // for social signin request
  React.useEffect(() => {
    if (socialAuthData?.access_token && socialAuthData.refresh_token) {
      setToken({ type: "access_token", token: socialAuthData.access_token });
      setToken({ type: "refresh_token", token: socialAuthData.refresh_token });
    }
  }, [socialAuthData?.access_token, socialAuthData?.refresh_token, setToken]);

  React.useEffect(() => {
    if (socialAuthData && socialAuthData.email) {
      setUser({
        firstName: socialAuthData?.first_name,
        lastName: socialAuthData?.last_name,
        email: socialAuthData?.email,
        id: socialAuthData?.id
      });
    }
    if (user?.email) {
      history.push(prevLocation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, socialAuthData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const responseGoogle = (response: any) => {
    if (response.tokenObj.access_token) {
      const body = {
        email: response.profileObj.email,
        first_name: response.profileObj.givenName,
        last_name: response.profileObj.familyName,
        profile_image: response.profileObj.imageUrl,
        social_account: "google"
      };
      loginSocial(body);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const responseFacebook = (response: any) => {
    // eslint-disable-next-line no-console
    console.log(response);
    if (response.accessToken) {
      const firstName = response.name.substr(0, response.name.indexOf(" "));
      const lastName = response.name.substr(response.name.indexOf(" ") + 1);
      const body = {
        email: response.email,
        first_name: firstName,
        last_name: lastName,
        profile_image: response.picture.data.url,
        social_account: "facebook"
      };
      loginSocial(body);
    }
  };

  const handleSignUp = () => {
    if (tabScreen) {
      setModelOpen(false);
      setDrawerOpen(true);
    }
    setModelOpen(true);
    setActiveStep(0)
  };

  const handleClose = () => {
    if (tabScreen) {
      setModelOpen(false);
      setDrawerOpen(false);
    }
    setModelOpen(false);
  };

  return (
    <>
      {!tabScreen ? (
        <Dialog
          id="signUpStepper"
          maxWidth={"lg"}
          open={modalOpen}
          BackdropProps={{ className: classes.backdrop }}
          PaperProps={{ className: classes.paper }}
          keepMounted
        >
          <div className={classes.close}>
            <MuiIcons
              className={classes.closeButton}
              fontSize="large"
              icon="close"
              onClick={handleClose}
            />
          </div>
          <SignUp />
        </Dialog>
      ) : (
        <SignUpDrawer>
          <SignUp />
        </SignUpDrawer>
      )}
      <div className={classes.wrapper}>
        <Grid container>
          {!phoneScreen && (
            <Grid item lg={7} md={7} sm={5} xs={12}>
              <SideBanner />
            </Grid>
          )}

          <Grid item lg={5} md={5} sm={7} xs={12} className={classes.contentContainer}>
            <div className={classes.contentOuter}>
              {" "}
              <div style={{ float: "right", cursor: "pointer" }} onClick={handleSignUp}>
                <Typography className={classes.heading} align="center">
                  Sign Up
                </Typography>
              </div>
              <div className={classes.content}>
                <div className={classes.card}>
                  <div className={!smallHeightDevice ? classes.logoDiv : classes.logoDivSmall}>
                    <Logo width="300px" />
                  </div>
                  <Typography className={classes.bigHeading} align="center">
                    Welcome back!
                  </Typography>
                  <br />
                  <form onSubmit={formik.handleSubmit}>
                    <TextInput
                      id="email"
                      name="email"
                      type="email"
                      variant="outlined"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <br />

                    <TextInput
                      id="password"
                      name="password"
                      type="password"
                      variant="outlined"
                      placeholder="Password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                    />

                    {error && (
                      <div>
                        <br />
                        <Alert severity="error"> {error.message}</Alert>
                      </div>
                    )}
                    <div>
                      <Link to="/forgot" className="link">
                        <Typography variant="subtitle1" className={classes.redText}>
                          Forgot Password?
                        </Typography>
                      </Link>
                    </div>

                    <Grid container className={classes.checkboxDiv}>
                      <Grid item xs={8} className={classes.flexStart}>
                        <CheckBox checked={checked} handleChange={handleChange} />
                        <Typography className={classes.checkBoxText} variant="subtitle1">
                          Keep Me Signed In
                        </Typography>
                      </Grid>
                      <Grid item xs={4} className={classes.flex}>
                        {" "}
                        <CustomButton
                          text="Login"
                          type="primary"
                          fullWidth={true}
                          loading={isLoading}
                          submit="submit"
                        />
                      </Grid>
                    </Grid>
                  </form>
                  <br />
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
                    <CustomButton
                      onlyIcon
                      // onClick={onClick}
                      // disabled={disabled}
                      type="neutral"
                      icon={<AppleIcon noColor />}
                      submit="submit"
                    />
                    <GoogleLogin
                      clientId={
                        window.location.hostname === "localhost"
                          ? "450521080667-j2hh4numr735iocsrl422bsl81362235.apps.googleusercontent.com"
                          : "450521080667-tqd9vj6o13cpi4p11l5al6d3s6317enk.apps.googleusercontent.com"
                      }
                      buttonText="Sign in With Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      render={renderProps => (
                        <CustomButton
                          onlyIcon
                          onClick={renderProps.onClick}
                          type="neutral"
                          icon={<GoogleIcon noColor />}
                          submit="submit"
                        />
                      )}
                      cookiePolicy={"single_host_origin"}
                    />

                    <FacebookLogin
                      appId="614482016251069"
                      autoLoad={false}
                      fields="name,email,picture"
                      callback={responseFacebook}
                      cssClass={classes.customFbBtn}
                      icon={<FacebookIcon />}
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      render={(renderProps: any) => (
                        <CustomButton
                          onlyIcon
                          onClick={renderProps.onClick}
                          disabled={renderProps.isDisabled}
                          type="neutral"
                          icon={<FacebookIcon noColor />}
                          submit="submit"
                        />
                      )}
                    />

                    <CustomButton
                      onlyIcon
                      // onClick={onClick}
                      // disabled={disabled}
                      type="neutral"
                      icon={<LinkedInIcon noColor />}
                      submit="submit"
                    />
                  </div>
                </div>
                <br />
              </div>
              <div className={classes.footer}>
                <div className={classes.footerContent}>
                  <p> Sailspad&copy;2021 </p>
                  <p> T&amp;C</p>
                  <p> Privacy Policy</p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
