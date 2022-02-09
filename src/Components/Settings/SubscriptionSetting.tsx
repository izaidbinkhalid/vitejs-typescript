import * as React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { StepperContext } from "Context/StepperContext";
import Dialog from "Components/ModalPopup/Dialog";
import Button from "Components/Button";
import MuiIcons from "Components/Icons";
import { NewSubscribtion } from "./Components/NewSubscription"
import { DoubleOffer } from "./Components/DoubleOffer";
import { CancelSubscription } from "./Components/CancelSubscription";
import Visa from "Components/Icons/visaCard";
import { PaymentMethodModal } from "./Components/PaymentMethod";
import { YourSubscription } from "./Components/YourSubscription";
import { DrawerContext } from "Context/DrawerContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      padding: theme.spacing(1),
      paddingTop: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2)
      },
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
    heading: {
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "45px",
      color: theme.palette.secondary.dark,
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px"
      }
    },
    box: {
      lineHeight: 1.3
    },
    changeBtn: {
      background: theme.palette.gray[700],
      borderRadius: "56px",
      fontWeight: 500,
      fontSize: "15px",
      color: theme.palette.secondary.dark,
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
      padding: theme.spacing(1)
    },
    linktype: {
      textDecoration: "underline"
    },
    secondRow: {
      marginTop: theme.spacing(8),
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(4)
      }
    },
    textInput: {
      borderRadius: "50px"
    },
    applyBtnDiv: {
      float: "right"
    },
    showSubscription: {
      background: theme.palette.gray[100],
      border: `1px solid ${theme.palette.gray[600]}`,
      boxShadow: "0px 8px 40px rgba(0, 0, 0, 0.05)",
      borderRadius: "12px",
      padding: theme.spacing(2)
    },
    selectedSubcription: {
      background: theme.palette.gray[100],
      border: `1px solid ${theme.palette.gray[600]}`,
      boxSizing: "border-box",
      borderRadius: "12px",
      marginTop: theme.spacing(2),
      padding: theme.spacing(3, 2)
    },
    selectedSubcriptionHeading: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "24px",
      lineHeight: "100%",
      color: theme.palette.gray[900],
      [theme.breakpoints.down("sm")]: {
        fontSize: "15px"
      }
    },
    headingPrice: {
      display: "flex",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "30px",
      lineHeight: "20px",
      //   textAlign: "right",
      color: theme.palette.secondary.dark,
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px"
      }
    },
    headingMonth: {
      display: "flex",
      alignItems: "baseline",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 200,
      fontSize: "26px",
      lineHeight: "20px",
      //   textAlign: "right",
      color: theme.palette.secondary.dark,
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px"
      }
    },
    headingMonth2: {
      marginTop: "1px",
      display: "flex",
      alignItems: "baseline",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 200,
      fontSize: "24px",
      lineHeight: "20px",
      //   textAlign: "right",
      color: theme.palette.secondary.dark,
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px"
      }
    },
    settingLabel: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "25px",
      lineHeight: "27px",
      color: "#58696D",
      margin: theme.spacing(2, 0, 4, 0)
    },
    icon: {
      color: theme.palette.secondary.light,
      cursor: "pointer",
      margin: theme.spacing(2, 0, 4, 0)
    },
    flex: {
      justifyContent: "flex-start",
      display: "flex",
      alignItems: "center"
    }
  })
);

export const SubscriptionSetting = () => {
  // INITIALS
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // CONTEXT
  const { handleClose, setDrawerOpen, setShowSettingsTab } = React.useContext(DrawerContext);
  const { subModalOpen, setSubModalOpen } = React.useContext(StepperContext);

  // STATES
  const [type, setType] = React.useState<string>("email");
  const [modalTitle, setModalTitle] = React.useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isNewUser, setIsNewUser] = React.useState<boolean>(true);
  const [selectedSubcription, setSelectedSubcription] = React.useState<string>("");
  const [selectedSubcriptionPrice, setSelectedSubcriptionPrice] =
    React.useState<number>(0);
  const [showCurrentSubscription, setShowCurrentSubscription] = React.useState<boolean>(true)

  // FUNCTIONS
  const openSubModal = (type: string) => {
    if (type === 'yourSubscription') setModalTitle("Choose Subscription:");
    if (type === 'doubleOffer') setModalTitle("Subscription Details:");
    if (type === 'removePayment') setModalTitle("Billing info:");
    if (type === 'cancelSubscription') setModalTitle("Cancle subscription :");
    setType(type);
    setSubModalOpen(true);
  };

  const handleBackArrow = () => {
    handleClose()
    setDrawerOpen(true)
    setShowSettingsTab(true)
  }


  return (
    <>{isNewUser ? (<NewSubscribtion paymentMethodExist={true} />) : (
      <>
        <div className={classes.wrapper}>
          <Grid container alignItems="center" justifyContent="space-between" spacing={4}>
            {smallScreen &&
              <Grid item xs={12}>
                <div className={classes.flex}>
                  <MuiIcons icon="backArrow" className={classes.icon} fontSize="medium" onClick={handleBackArrow} />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Typography className={classes.settingLabel}>Subscription Settings</Typography>
                </div>
              </Grid>
            }
            <Grid item xs={12} sm={6} md={5}>
              <div className={classes.box}>
                <Typography className={classes.heading}>Your Subscription:</Typography>
                <Grid container justifyContent="space-between" alignItems="center" className={classes.showSubscription}>
                  <Grid item xs={6}>
                    <Typography className={classes.selectedSubcriptionHeading}>
                      Individual Subcription
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "baseline"
                      }}
                    >
                      <Typography className={classes.headingPrice}>
                        $6
                        <Typography className={classes.headingMonth}>/</Typography>
                        <Typography className={classes.headingMonth2}>M</Typography>
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
                <br />
                <Button
                  className={classes.changeBtn}
                  text="Manage"
                  onClick={() => { openSubModal("yourSubscription"); setSelectedSubcription("Individual"); setSelectedSubcriptionPrice(6); setShowCurrentSubscription(true) }}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.box}>
                <Typography className={classes.heading}>Double Down Offer:</Typography>
                <Typography variant="body2">
                  X2 the number of ur cards and company <br /> profiles on your current Subscription for extra <br /> 50% of the current price
                </Typography>
                <br />
                <Button
                  className={classes.changeBtn}
                  text="Get Started"
                  onClick={() => { openSubModal("doubleOffer"); setSelectedSubcription("Individual"); setSelectedSubcriptionPrice(6); setShowCurrentSubscription(true) }}
                />
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={4}
            className={classes.secondRow}
          >
            <Grid item xs={12} sm={6}>
              <div className={classes.box}>
                <Typography className={classes.heading}>Change/Remove payment method:</Typography>
                <br />
                <Typography variant="body2">
                  <Visa /> &nbsp; Visa card ending with 6789
                </Typography>
                <br />
                <Button
                  className={classes.changeBtn}
                  text="Change"
                  onClick={() => openSubModal("removePayment")}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.box}>
                <Typography className={classes.heading}>
                  Cancel Subscription:
                </Typography>
                <Typography variant="body2">
                  Cancel your current subscription to Sailspad <br /> Premium
                </Typography>
                <br />
                <Button
                  className={classes.changeBtn}
                  text="Cancel"
                  onClick={() => { openSubModal("cancelSubscription"); setSelectedSubcription("Individual"); setSelectedSubcriptionPrice(6); setShowCurrentSubscription(true) }}
                />
              </div>
            </Grid>
          </Grid>
        </div>
        <div>
          <Dialog
            modalOpen={subModalOpen}
            setModelOpen={setSubModalOpen}
            modalTitle={modalTitle}
          >
            {showSubModals(type, selectedSubcription, selectedSubcriptionPrice, setModalTitle, showCurrentSubscription, setShowCurrentSubscription)}
          </Dialog>
        </div>
      </>
    )}
    </>


  );
};

// changing Content in sub Modal
const showSubModals = (step: string, selectedSubcription: string, selectedSubcriptionPrice: number, setModalTitle: React.Dispatch<React.SetStateAction<string>>, showCurrentSubscription: boolean, setShowCurrentSubscription: React.Dispatch<React.SetStateAction<boolean>>) => {
  switch (step) {
    case "yourSubscription":
      return <YourSubscription showCurrentSubscription={showCurrentSubscription} setShowCurrentSubscription={setShowCurrentSubscription} selectedSubcription={selectedSubcription} selectedSubcriptionPrice={selectedSubcriptionPrice} setModalTitle={setModalTitle} />;
    case "doubleOffer":
      return <DoubleOffer showCurrentSubscription={showCurrentSubscription} setShowCurrentSubscription={setShowCurrentSubscription} selectedSubcription={selectedSubcription} selectedSubcriptionPrice={selectedSubcriptionPrice} setModalTitle={setModalTitle} />;
    case "removePayment":
      return <PaymentMethodModal />;
    case "cancelSubscription":
      return <CancelSubscription showCurrentSubscription={showCurrentSubscription} setShowCurrentSubscription={setShowCurrentSubscription} selectedSubcription={selectedSubcription} selectedSubcriptionPrice={selectedSubcriptionPrice} />;
    default:
      return;
  }
};