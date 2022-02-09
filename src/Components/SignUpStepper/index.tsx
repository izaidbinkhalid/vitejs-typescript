import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AccountType from "./Steps/Step1";
import AccountInfo from "./Steps/Step2";
import ProfessionalInfo from "./Steps/Step3";
import Verify from "./Steps/Step4";
import Subscription from "./Steps/Step5";
import { StepperContext } from "Context/StepperContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxHeight: "100vh",
      minHeight: "100%",
      "&>.MuiStepper-root": {
        padding: "0px"
      }
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    actionsContainer: {
      marginBottom: theme.spacing(2)
    },
    actionButtons: {
      display: "flex",
      justifyContent: "space-between",
      padding: "1.5rem"
    },
    resetContainer: {
      padding: theme.spacing(3)
    },
    sailspadText: {
      color: theme.palette.gray[100],
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "64px",
      lineHeight: "111%",
      textAlign: "center",
      margin: theme.spacing(2, 0, 8, 0),
      [theme.breakpoints.down("md")]: {
        fontSize: "45px"
      }
    },
    box1: {
      padding: theme.spacing(2, 0, 0, 3),
      backgroundColor: "#B3BEC059",
      [theme.breakpoints.down("sm")]: {
        paddingBottom: "0px"
      }
    },
    box1Small: {
      padding: theme.spacing(2, 0, 0, 3),
      background: "#B3BEC059",
      height: "90vh",
      overflowY: "auto",
      [theme.breakpoints.down("sm")]: {
        paddingBottom: "30px",
        height: "100%"
      }
    },
    box2: {
      backgroundColor: theme.palette.gray[100],
    },
    box2Small: {
      backgroundColor: theme.palette.gray[100],
      height: "90vh",
      overflowY: "auto",
      [theme.breakpoints.down("sm")]: {
        paddingBottom: "30px",
        height: "100%"
      }
    },
    stepperBox1: {
      backgroundColor: "transparent",
      // padding: "2rem 8rem",
      [theme.breakpoints.down("sm")]: {
        padding: "2rem 0px"
      }
    },
    stepperBox2: {
      backgroundColor: "#FBFBFB",
      [theme.breakpoints.down("sm")]: {
        backgroundColor: "#E3E3E3",
        padding: "0px",
        borderRadius: "0px"
      }
    },
    stepContent: {
      borderLeft: "none",
      [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
        paddingLeft: 0,
        paddingRight: 0
      }
    },
    subHeading: {
      padding: "0px",
      margin: "0px",
      fontSize: "13px",
      color: "#b5b5c3"
    },
    illustration: {
      textAlign: "center",
      padding: "10px"
    },
    label: {
      fontsize: "120px !important"
    }
  })
);

function getSteps() {
  return [
    { heading: "Account Type" },
    { heading: "Account Info" },
    { heading: "Proffesional Info" },
    { heading: "Verify" },
    { heading: "Subscribe" }
  ];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AccountType />;
    case 1:
      return <AccountInfo />;
    case 2:
      return <ProfessionalInfo />;
    case 3:
      return <Verify />;
    case 4:
      return <Subscription />;
    default:
      return;
  }
}

export default function SignUpStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const steps = getSteps();
  const { activeStep } = React.useContext(StepperContext);
  const smallHeightDevice = useMediaQuery("(max-height:768px)");
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <Grid direction="row" container>
        {!smallScreen && (
          <Grid className={smallHeightDevice ? classes.box1Small : classes.box1} item xs={12} md={3} lg={3}>
            <div>
              <h4 className={classes.sailspadText}>Sign Up</h4>
              <Stepper
                className={classes.stepperBox1}
                activeStep={activeStep}
                orientation={!smallScreen ? "vertical" : "horizontal"}
                alternativeLabel={smallScreen ? true : false}
              >
                {steps.map((label, index) => (
                  <Step key={index}>
                    <StepLabel className={classes.label}>{label.heading}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
          </Grid>
        )}

        <Grid className={smallHeightDevice ? classes.box2Small : classes.box2} item xs={12} md={9} lg={9}>
          <Stepper
            className={classes.stepperBox2}
            activeStep={activeStep}
            orientation="vertical"
          >
            {steps.map((label, index) => (
              <StepContent className={classes.stepContent} key={index}>
                <div>{getStepContent(index)}</div>
              </StepContent>
            ))}
          </Stepper>
        </Grid>
      </Grid>
    </div>
  );
}
