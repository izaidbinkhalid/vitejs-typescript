import * as React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import TextInput from "Components/Form/TextInput";
import User from "Components/Icons/user";
import CreditCard from "Components/Icons/creditCard";
import Calender from "Components/Icons/calender";
import Lock from "Components/Icons/lock";
import CustomButton from "Components/Button";
import { useFormik } from "formik";
import MaskingInput from "Components/Form/MaskingInput";
import ShowMessage from "Components/ShowMessage";
import Visa from "Components/Icons/visaCard";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(1)
      }
    },
    showSubscription: {
      background: theme.palette.gray[100],
      border: `1px solid ${theme.palette.gray[600]}`,
      boxShadow: "0px 8px 40px rgba(0, 0, 0, 0.05)",
      borderRadius: "12px",
      padding: theme.spacing(3)
    },
    applyBtn: {
      background: theme.palette.gray[700],
      borderRadius: "56px",
      fontWeight: 500,
      fontSize: "22px",
      color: theme.palette.secondary.dark,
      padding: theme.spacing(3, 6, 3, 6)
    },
    applyBtnDiv: {
      display: "flex",
      justifyContent: "center"
      // float: "right"
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
    doubleOfferText: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "27px",
      display: "flex",
      alignItems: "center",
      color: "#58696D"
    },
    doubleOfferSubText: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24.1px",
      lineHeight: "36px",
      display: "flex",
      alignItems: "center",
      color: theme.palette.gray[400],
      padding: theme.spacing(1)
    },
    totalPrice: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      paddingBottom: theme.spacing(1.25),
      [theme.breakpoints.down("sm")]: {
        justifyContent: "start",
        padding: theme.spacing(1.25)
      }
    },
    billingInputWrapper: {
      margin: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(0.5)
      }
    },
    inputDiv: {
      background: "#FFFFFF",
      border: `1.5px solid ${theme.palette.gray[600]}`,
      boxShadow: "0px 44.336px 72.9399px rgba(0, 0, 0, 0.03)",
      borderRadius: "104.555px",
      padding: theme.spacing(0.75, 2)
    },
    icon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    info: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24.1026px",
      lineHeight: "36px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      color: theme.palette.gray[400],
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
        lineHeight: "20px",
        textAlign: "start"
      }
    },
    payButtonWrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      margin: theme.spacing(5, 0, 0, 0)
    },
    cardNumber: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "36px",
      display: "flex",
      alignItems: "center",
      color: theme.palette.gray[400],
      [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
      }
    },
    paymentMethod: {
      padding: theme.spacing(2),
      display: "flex",
      justifyContent: "center",
      background: "#FFFFFF",
      border: "1.43019px solid #E3E3E3",
      boxSizing: "border-box",
      boxShadow: "0px 44.336px 72.9399px rgba(0, 0, 0, 0.03)",
      borderRadius: "104.555px"
    },
    ChangePaymentMethod: {
      // padding: theme.spacing(2),
      display: "flex",
      justifyContent: "center",
      background: "#FFFFFF",
      border: "1.43019px solid #E3E3E3",
      boxSizing: "border-box",
      boxShadow: "0px 44.336px 72.9399px rgba(0, 0, 0, 0.03)",
      borderRadius: "104.555px",
      color: theme.palette.secondary.dark
    }
  })
);


export const PaymentMethodModal = () => {
  const classes = useStyles();
  const [showBillingInfo, setShowBillingInfo] = React.useState<boolean>(false)
  const [modalContent, setModalContent] = React.useState<string>("")
  const [paymentDone, setPaymentDone] = React.useState<boolean>(false)
  const [paymentDetails, setPaymentDetails] = React.useState<boolean>(true)
  const [cardDetails] = React.useState<string>("123456789")
  const [showCard, setShowCard] = React.useState<string>("")

  React.useEffect(() => {
    maskNumber()
  })

  const maskNumber = () => {
    const ccs = cardDetails
    const new_ccs = ccs.slice(-4)
    setShowCard(new_ccs)
  }

  const formik = useFormik({
    initialValues: {
      promoCode: "",
      creditCardName: "",
      creditCardNumber: "",
      creditCardExpire: "",
      creditCardCcv: "",
    },

    onSubmit: values => {
      // eslint-disable-next-line no-console
      console.log(values);
    }
  });

  return (
    <div className={classes.wrapper}>
      {showBillingInfo === true ? (<>
        <div className={classes.billingInputWrapper}>
          <Grid
            className={classes.inputDiv}
            container
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Grid item xs={1}>
              <div className={classes.icon}>
                <User />
              </div>
            </Grid>
            <Grid item xs={11}>
              <TextInput
                style={{ border: "none", fontSize: "20px" }}
                type="text"
                name="creditCardName"
                placeholder="Cardholder name"
                value={formik.values.creditCardName}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
          <br />
          <Grid
            className={classes.inputDiv}
            container
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Grid item xs={1}>
              <div className={classes.icon}>
                <CreditCard />
              </div>
            </Grid>
            <Grid item xs={11}>
              <MaskingInput
                type="text"
                showMask={true}
                maskType="card"
                name="number"
                placeholder="4592 7890 1425 7849"
                value={formik.values.creditCardNumber}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
          <br />
          <Grid
            container
            justifyContent="space-between"
            spacing={2}
            alignItems={"center"}
          >
            <Grid item xs={6}>
              {" "}
              <Grid
                className={classes.inputDiv}
                container
                justifyContent="space-between"
                alignItems={"center"}
              >
                <Grid item xs={2}>
                  <div className={classes.icon}>
                    <Calender />
                  </div>
                </Grid>
                <Grid item xs={10}>
                  <MaskingInput
                    type="text"
                    showMask={true}
                    maskType="expDate"
                    name="expiration"
                    placeholder="MM / YY"
                    value={formik.values.creditCardExpire}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid
                className={classes.inputDiv}
                container
                justifyContent="space-between"
                alignItems={"center"}
              >
                <Grid item xs={2}>
                  <div className={classes.icon}>
                    <Lock />
                  </div>
                </Grid>
                <Grid item xs={10}>
                  <MaskingInput
                    type="text"
                    showMask={true}
                    maskType="ccv"
                    name="securityCode"
                    placeholder="CCV"
                    value={formik.values.creditCardCcv}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.payButtonWrapper}>
            <CustomButton
              type="proceed"
              text="Add"
              onClick={() => {
                if (formik.values.creditCardName === "Ghassan") {
                  setShowBillingInfo(false)
                  setPaymentDone(true)
                  setModalContent("showSuccessMessage")
                } else {
                  setShowBillingInfo(false)
                  setPaymentDone(false)
                  setModalContent("showDeniedMessage")
                }
              }}
            />
          </div>
        </div>
      </>
      ) : paymentDetails === true ? (
        <>
          <div className={classes.paymentMethod}>
            <Grid container justifyContent="space-evenly" alignItems="center">
              <Grid item xs={2}><Visa /></Grid>
              <Grid item xs={8}>
                <Typography className={classes.cardNumber}>Visa card ending with {showCard}</Typography>
              </Grid>
            </Grid>
          </div>
          <br />
          <Button className={classes.ChangePaymentMethod} onClick={() => {
            setShowBillingInfo(true); setPaymentDetails(false)
          }}>Use a diffirent payment method</Button>
          <br />
        </>
      ) : modalContent === "showSuccessMessage" ? (
        <ShowMessage success={paymentDone} message="Card Added successfully" subMessage="Now you can use this card." />
      ) : modalContent === "showDeniedMessage" ? (
        <ShowMessage success={paymentDone} message="Card Denied" subMessage="Check your payment method and try again." />
      ) : null}
    </div>
  );
};