/* eslint-disable array-callback-return */
import * as React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import TextInput from "Components/Form/TextInput";
import User from "Components/Icons/user";
import CreditCard from "Components/Icons/creditCard";
import Calender from "Components/Icons/calender";
import Lock from "Components/Icons/lock";
import CustomButton from "Components/Button";
import { useFormik } from "formik";
import MaskingInput from "Components/Form/MaskingInput";
import ShowMessage from "Components/ShowMessage";
import Upgrade from "Components/Icons/upgrade";


interface Props {
  readonly selectedSubcription: string
  readonly selectedSubcriptionPrice: number
  readonly setModalTitle: React.Dispatch<React.SetStateAction<string>>
  readonly showCurrentSubscription: boolean
  readonly setShowCurrentSubscription: React.Dispatch<React.SetStateAction<boolean>>
}

export type Subscriptions = {
  title: string
  price: number
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(1)
      }
    },
    showCurrentSubscription: {
      background: "rgba(88, 105, 109, 0.2)",
      border: `1px solid ${theme.palette.gray[600]}`,
      boxShadow: "0px 8px 40px rgba(0, 0, 0, 0.05)",
      borderRadius: "12px",
      padding: theme.spacing(4, 3)
    },
    showSubscription: {
      background: theme.palette.gray[100],
      border: `1px solid ${theme.palette.gray[600]}`,
      boxShadow: "0px 8px 40px rgba(0, 0, 0, 0.05)",
      borderRadius: "12px",
      padding: theme.spacing(4, 3)
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
  })
);


export const YourSubscription: React.FC<Props> = ({ selectedSubcription, selectedSubcriptionPrice, setModalTitle, showCurrentSubscription, setShowCurrentSubscription }: Props) => {
  const classes = useStyles();
  const [showBillingInfo, setShowBillingInfo] = React.useState<boolean>(false)
  const [modalContent, setModalContent] = React.useState<string>("")
  const [paymentDone, setPaymentDone] = React.useState<boolean>(false)

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

  const availableSubcription = [
    {
      title: "Individual",
      price: 6
    },
    {
      title: "Statup",
      price: 30
    },
    {
      title: "Enterprise",
      price: 260
    }
  ]

  return (
    <div className={classes.wrapper}>
      {showCurrentSubscription === true ? (<>
        <Grid className={classes.showCurrentSubscription} container justifyContent="space-between" alignItems="center">
          <Grid item xs={8}>
            <Typography className={classes.selectedSubcriptionHeading}>
              {selectedSubcription} Subcription
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
                ${selectedSubcriptionPrice}
                <Typography className={classes.headingMonth}>/</Typography>
                <Typography className={classes.headingMonth2}>M</Typography>
              </Typography>
            </div>
          </Grid>
        </Grid>
        <br />
        {availableSubcription.map((sub, i) => {
          if (sub.title !== selectedSubcription) {
            return (
              <>
                <Grid key={i} className={classes.showSubscription} container justifyContent="space-between" alignItems="center" onClick={() => { setModalTitle("Billing Info"); setShowCurrentSubscription(false); setShowBillingInfo(true) }}>
                  <Grid item xs={6} sm={6} md={8}>
                    <Typography className={classes.selectedSubcriptionHeading}>
                      {sub.title} Subcription
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography align="right">
                      <Upgrade />
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sm={4} md={3}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "baseline"
                      }}
                    >
                      <Typography className={classes.headingPrice}>
                        ${sub.price}
                        <Typography className={classes.headingMonth}>/</Typography>
                        <Typography className={classes.headingMonth2}>M</Typography>
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
                <br />
              </>
            )
          }
        })}

      </>) : showBillingInfo === true ? (<>
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
              text="Pay"
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
      ) : modalContent === "showSuccessMessage" ? (
        <ShowMessage success={paymentDone} message="Your payment is delivered successfully" subMessage="Now you can enjoy your premium subscription." />
      ) : modalContent === "showDeniedMessage" ? (
        <ShowMessage success={paymentDone} message="Payment Denied" subMessage="Check your payment method and try again." />
      ) : null}
    </div>
  );
};