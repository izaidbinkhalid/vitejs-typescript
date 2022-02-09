import * as React from "react";
// import { useHistory } from "react-router-dom";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Tab, Tabs, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { StepperContext } from "Context/StepperContext";
import SubDrawer from "Components/Drawer/SubDrawer";
import IndividualSubscriptionCard from "Components/Subscription/IndividualSubscriptionCard";
import StartupSubscriptionCard from "Components/Subscription/StartupSubscriptionCard";
import EnterpriseSubscriptionCard from "Components/Subscription/EnterpriseSubscriptionCard";
import Dialog from "Components/ModalPopup/Dialog";
import SubModal from "../Components/SubcriptionModal";
import CustomButton from "Components/Button";
import Visa from "Components/Icons/visaCard";


export type PaymentType = "credit-card" | "offline" | "e-check" | "sticky";
export interface PaymentMethod {
  number: string;
  exp: string;
  code?: string;
  amount?: string;
  logo: string;
  type: PaymentType;
}

interface Props {
  readonly signUp?: boolean
  readonly paymentMethodExist?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(4, 10),
      minHeight: "400px",
      maxHeight: "500px"
    },
    wrapper: {
      padding: theme.spacing(1)
    },
    wrapper2: {
      padding: theme.spacing(0.5, 1.5),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2, 5)
      },
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(2, 2)
      }
    },
    actionsContainer: {
      marginBottom: theme.spacing(2)
    },
    actionButtons: {
      display: "flex",
      justifyContent: "end",
      padding: theme.spacing(2, 0, 0, 0)
    },
    stepHeading: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "30px",
      lineHeight: "45px",
      color: theme.palette.secondary.dark,
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px"
      }
    },
    flex: {
      display: "flex",
      alignItems: "center"
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
      color: theme.palette.gray[900]
    },
    info: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "15px",
      lineHeight: "22px",
      display: "flex",
      alignItems: "center",
      color: theme.palette.gray[400],
      [theme.breakpoints.down("sm")]: {
        fontSize: "10.2926px"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "9.2926px"
      }
    },
    infoContainer: {
      padding: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0.75)
      }
    },
    root: {
      "& .MuiTabs-root": {
        backgroundColor: "#E4E9EA",
        margin: theme.spacing(0.75, 2),
        borderRadius: "100px",
        minWidth: "300px"
      },
      "& .MuiTab-root": {
        textTransform: "capitalize",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "16.3953px",
        lineHeight: "25px",
        color: theme.palette.gray[900]
      },
      "& .PrivateTabIndicator": { height: 0 },
      "& .MuiTab-textColorSecondary.Mui-selected": {
        background: "#FBFBFB",
        border: "1.09302px solid #E3E3E3",
        boxSizing: "border-box",
        borderRadius: "109.302px"
      }
    },
    cardsContainer: {
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(6, 30)
      },
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(2)
      }
    },
    createCardText: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: "36px",
      color: theme.palette.gray[100]
    },
    headingDrawer: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "15px",
      lineHeight: "22px",
      color: "#455154"
    },
    removePayment: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "18px",
      display: "flex",
      alignItems: "center",
      textDecorationLine: "underline",
      color: theme.palette.gray[400],
      cursor: "pointer"
    },
    cardsSection: {
      maxHeight: "475px",
      overflowY: "auto"
    }
  })
);

export const NewSubscribtion: React.FC<Props> = ({ signUp, paymentMethodExist }: Props) => {
  const classes = useStyles();
  // const history = useHistory();
  const theme = useTheme();

  const { handleFinish, setDrawerOpen, subModalOpen, setSubModalOpen } = React.useContext(StepperContext);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [modalTitle, setModalTitle] = React.useState<string>("Subscription Details");
  const [modalContent, setModalContent] = React.useState<string>("SubscriptionDetails");
  const [subcriptionValue, setSubcriptionValue] = React.useState<string>("Individual");
  const [selectedSubcription, setSelectedSubcription] = React.useState<string>("");
  const [selectedSubcriptionPrice, setSelectedSubcriptionPrice] =
    React.useState<number>(0);
  const [doubleOffer, setDoubleOffer] = React.useState<boolean>(true);
  const [yearlySubcription, setYearlySubcription] = React.useState<boolean>(true);
  const [paymentDone, setPaymentDone] = React.useState<boolean>(false)

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setSubcriptionValue(newValue);
  };

  const onContinue = () => {
    handleFinish();
    setDrawerOpen(false);
    // history.push("/login");
  };

  const handleSubcriptionModal = () => {
    setSubModalOpen(true);
    setSelectedSubcription(subcriptionValue);
    setModalTitle("Subscription Details");
    setModalContent("SubscriptionDetails");
    if (subcriptionValue === "Individual") {
      setSelectedSubcriptionPrice(6);
    }
    if (subcriptionValue === "Startup") {
      setSelectedSubcriptionPrice(30);
    }
    if (subcriptionValue === "Enterprise") {
      setSelectedSubcriptionPrice(260);
    }
  };

  const handleIndividualCard = () => {
    handleSubcriptionModal();
    setSelectedSubcription("Individual");
    setSelectedSubcriptionPrice(6);
  };

  const handleStartUpCard = () => {
    handleSubcriptionModal();
    setSelectedSubcription("Startup");
    setSelectedSubcriptionPrice(30);
  };

  const handleEnterpriseCard = () => {
    handleSubcriptionModal();
    setSelectedSubcription("Enterprise");
    setSelectedSubcriptionPrice(260);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <Typography className={classes.stepHeading}>
          Premium Sailspad Subscription Plans
        </Typography>
        <div className={classes.infoContainer}>
          <Typography className={classes.info}>
            &#9679; &nbsp; You always get 10% discount when you chose Yearly Subscription!
          </Typography>
          <Typography className={classes.info}>
            &#9679; &nbsp; You can cancle subscription at any time.
          </Typography>
        </div>

        {isMobile ? (
          <div className={classes.root}>
            <Grid container justifyContent="center">
              <Tabs
                value={subcriptionValue}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
              >
                <Tab value="Individual" label="Individual" />
                <Tab value="Startup" label="Startup" />
                <Tab value="Enterprise" label="Enterprise" />
              </Tabs>

              <Grid item xs={12} className={classes.cardsContainer}>
                {subcriptionValue === "Individual" ? (
                  <IndividualSubscriptionCard
                    price={6}
                    onClick={handleSubcriptionModal}
                  />
                ) : subcriptionValue === "Startup" ? (
                  <StartupSubscriptionCard price={30} onClick={handleSubcriptionModal} />
                ) : subcriptionValue === "Enterprise" ? (
                  <EnterpriseSubscriptionCard
                    price={260}
                    onClick={handleSubcriptionModal}
                  />
                ) : null}
              </Grid>

              <br />
              <br />
              {paymentMethodExist &&
                <Grid item xs={12}>
                  <br />
                  <Typography variant="body2">
                    <Visa /> &nbsp; Visa card ending with 6789
                  </Typography>
                  <Typography className={classes.removePayment}>
                    Remove or change?
                  </Typography>
                </Grid>
              }
            </Grid>
          </div>
        ) : (
          <div className={classes.cardsSection}>
            <Grid container justifyContent="center">
              <IndividualSubscriptionCard price={6} onClick={handleIndividualCard} />
              <StartupSubscriptionCard price={30} onClick={handleStartUpCard} />
              <EnterpriseSubscriptionCard price={260} onClick={handleEnterpriseCard} />
              {/* Payment Method */}
              {paymentMethodExist &&
                <Grid item xs={12}>
                  <br />
                  <Typography variant="body2">
                    <Visa /> &nbsp; Visa card ending with 6789
                  </Typography>
                  <Typography className={classes.removePayment}>
                    Remove or change?
                  </Typography>
                </Grid>
              }
            </Grid>
          </div>
        )}

        {signUp === true ? (<div className={classes.actionsContainer}>
          <div className={classes.actionButtons}>
            <CustomButton
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "18px",
                lineHeight: "27px",
                display: "flex",
                alignItems: "center",
                textDecorationLine: "underline",
                color: theme.palette.gray[400]
              }}
              onClick={() => onContinue()}
              text="Skip"
            />
          </div>
        </div>) : ("")}

      </div>

      {
        isMobile ? (
          <SubDrawer state={subModalOpen} setState={setSubModalOpen}>
            <div className={classes.wrapper2}>
              <p className={classes.headingDrawer}>Subscription Details</p>
              <SubModal
                modalContent={modalContent}
                setModalTitle={setModalTitle}
                setSubModalOpen={setSubModalOpen}
                setModalContent={setModalContent}
                selectedSubcription={selectedSubcription}
                selectedSubcriptionPrice={selectedSubcriptionPrice}
                yearlySubcription={yearlySubcription}
                setYearlySubcription={setYearlySubcription}
                doubleOffer={doubleOffer}
                setDoubleOffer={setDoubleOffer} paymentDone={paymentDone} setPaymentDone={setPaymentDone} />
            </div>
          </SubDrawer>
        ) : (
          // ======================================================================================
          // ! This Modal is gonna popup on Desktop when user click on Get started for Subcription
          // ======================================================================================

          <div>
            <Dialog
              modalOpen={subModalOpen}
              setModelOpen={setSubModalOpen}
              modalTitle={modalTitle}
            >
              <SubModal
                modalContent={modalContent}
                setModalTitle={setModalTitle}
                setSubModalOpen={setSubModalOpen}
                setModalContent={setModalContent}
                selectedSubcription={selectedSubcription}
                selectedSubcriptionPrice={selectedSubcriptionPrice}
                yearlySubcription={yearlySubcription}
                setYearlySubcription={setYearlySubcription}
                doubleOffer={doubleOffer}
                setDoubleOffer={setDoubleOffer} paymentDone={paymentDone} setPaymentDone={setPaymentDone} />
            </Dialog>
          </div>
        )
      }
    </>
  );
};
