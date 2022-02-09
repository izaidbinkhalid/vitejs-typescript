import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
// import Step from "@material-ui/core/Step";
// import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import { CreateCardContext } from "Context/CreateCard";
import { BigCard } from "Components/Card/BigCard";
import { BigCardSimple } from "Components/Card/BigCardSimple";
import { IntialValues } from "./CreateCard";
import { CardInput } from "Components/Card/CardInput";
import MuiIcons from "Components/Icons";
import { HumburgerIcon } from "Components/Icons/humburger";
import Logo from "Components/Logo";
import { DrawerContext } from "Context/DrawerContext";
import { useHistory } from "react-router-dom";

interface Props {
  formValues: IntialValues;
  setFormValues: React.Dispatch<React.SetStateAction<IntialValues>>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      background: theme.palette.gray[600]
    },
    mobileCreateCardWrapper: {
      margin: theme.spacing(0),
      paddingRight: theme.spacing(1)
    },
    button: {
      display: "flex",
      alignItems: "center",
      fontSize: "16px",
      width: "113px",
      justifyContent: "center",
      background: "#FFFFFF",
      color: "#455154",
      border: "1.10939px solid #E3E3E3",
      boxSizing: "border-box",
      borderRadius: "17.5115px",
      margin: theme.spacing(1),
      padding: theme.spacing(0.75)
    },
    actionsContainer: {
      margin: theme.spacing(1, 0),
      display: "flex",
      justifyContent: "space-between"
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
      color: theme.palette.info.main,
      fontWeight: 900,
      fontSize: "2rem",
      textAlign: "center",
      margin: "10px 0px"
    },
    box1: {
      padding: theme.spacing(3),
      maxHeight: "100%",
      overflowX: "hidden",
      overflowY: "auto",
      [theme.breakpoints.down("sm")]: {
        paddingBottom: "0px"
      }
    },
    stepperBox1: {
      padding: "2rem 8rem",
      [theme.breakpoints.down("sm")]: {
        padding: "2rem 0px"
      }
    },
    stepperBox2: {
      justifyContent: "center",
      padding: "10px 0px 10px 8px",
      background: theme.palette.gray[600]
    },
    stepContent: {
      borderLeft: "none",
      padding: "0px",
      marginLeft: "0px",
      background: theme.palette.gray[600]
    },
    heading: {
      padding: "0px",
      margin: "0px 10px 30px 10px",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "30px",
      color: theme.palette.secondary.dark
    },
    illustration: {
      textAlign: "center",
      padding: "10px"
    },
    label: {
      fontsize: "120px !important"
    },
    arrowIcons: {
      fontSize: "15px",
      margin: "0px 3px"
    },
    logoDiv: {
      marginLeft: theme.spacing(6),
      cursor: "pointer",
      width: "50%",
      marginTop: theme.spacing(-4),
      [theme.breakpoints.down("sm")]: {
        marginTop: 0,
        marginLeft: theme.spacing(7),
        width: "20%"
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: 0,
        marginLeft: theme.spacing(8),
        width: "30%"
      }
    },
    flexAlign: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "60px",
      marginLeft: "-55px",
      backgroundColor: "transparent",

    },
    header: {
      background: theme.palette.gray[200],
    }
  })
);

const getSteps = () => {
  return ["Create Card", "Card Preview"];
};

export const MobileCreateCard: React.FC<Props> = ({
  formValues,
  setFormValues
}: Props) => {
  const classes = useStyles();
  const steps = getSteps();
  const { activeStep, handleBack, handleNext, comapnyType, showInstitution, setCreateCardOpen } =
    React.useContext(CreateCardContext);
  const history = useHistory();
  const { setDrawerOpen } = React.useContext(DrawerContext);

  const onNext = () => {
    if (activeStep === 0) handleNext()
    if (activeStep === 1) {
      handleNext()
      setCreateCardOpen(false)
    }
  }

  const SmallHeader = () => (
    <Grid container>
      <Grid item lg={3} md={3} sm={12} xs={12}>
        <div className={classes.flexAlign}>
          <div className={classes.logoDiv} onClick={() => history.push("/")}>
            <Logo />
          </div>
          <span style={{ marginRight: "10px", cursor: "pointer" }} onClick={() => setDrawerOpen(true)}>
            <HumburgerIcon />
          </span>
        </div>
      </Grid>
    </Grid>
  )

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
            <div className={classes.mobileCreateCardWrapper}>
              <SmallHeader />
              <p className={classes.heading}>Card Creation</p>
              <CardInput formValues={formValues} setFormValues={setFormValues} />
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className={classes.mobileCreateCardWrapper}>
              <SmallHeader />
              <p className={classes.heading}>Card Preview</p>
              {comapnyType === "individual" && showInstitution === false ? (
                <BigCardSimple
                  about={formValues.about}
                  companyName={formValues.fullname}
                  companyType={formValues.title}
                  image={formValues.image}
                  contactInfo={formValues.contactInformation}
                  background={formValues.background}
                  setChecked={function (value: React.SetStateAction<boolean>): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              ) : (
                <BigCard
                  about={formValues.about}
                  companyName={formValues.fullname}
                  companyType={formValues.title}
                  image={formValues.image}
                  contactInfo={formValues.contactInformation}
                  background={formValues.background}
                  setChecked={function (value: React.SetStateAction<boolean>): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              )}
            </div>
          </>
        );
      default:
        return;
    }
  };

  return (
    <div className={classes.root}>
      <Grid direction="row" container>
        <Grid item xs={12} md={7}>
          <Stepper
            className={classes.stepperBox2}
            activeStep={activeStep}
            orientation="vertical"
          >
            {steps.map((label, index) => (
              <StepContent className={classes.stepContent} key={index}>
                <div>
                  <div>{getStepContent(index)}</div>
                </div>

                <div
                  style={
                    activeStep === 0
                      ? { justifyContent: "flex-end" }
                      : { justifyContent: "space-between" }
                  }
                  className={classes.actionsContainer}
                >
                  <div
                    style={activeStep === 0 ? { display: "none" } : {}}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    <MuiIcons icon="ArrowBackIosIcon" fontSize="small" /> Back
                  </div>
                  <div onClick={onNext} className={classes.button}>
                    <div>{activeStep === steps.length - 1 ? "Finish" : "Preview"}</div>
                    <MuiIcons
                      className={classes.arrowIcons}
                      icon="ArrowForwardIosIcon"
                      fontSize="small"
                    />
                  </div>
                </div>
              </StepContent>
            ))}
          </Stepper>
        </Grid>
      </Grid>
    </div>
  );
};
