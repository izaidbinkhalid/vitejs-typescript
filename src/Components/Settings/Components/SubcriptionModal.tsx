import * as React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Checkbox, Grid, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import MaskingInput from "Components/Form/MaskingInput";
import TextInput from "Components/Form/TextInput";
import CustomButton from "Components/Button";
import CreditCard from "Components/Icons/creditCard";
import Calender from "Components/Icons/calender";
import Lock from "Components/Icons/lock";
import User from "Components/Icons/user";
import ShowMessage from "Components/ShowMessage"
// import { PaymentMethod, PaymentType } from "../SubscriptionSetting"

interface Props {
  readonly modalContent: string;
  readonly setSubModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  readonly setModalContent: React.Dispatch<React.SetStateAction<string>>;
  readonly setModalTitle: React.Dispatch<React.SetStateAction<string>>;
  readonly selectedSubcription: string;
  readonly selectedSubcriptionPrice: number;
  readonly yearlySubcription: boolean;
  readonly setYearlySubcription: React.Dispatch<React.SetStateAction<boolean>>;
  readonly doubleOffer: boolean;
  readonly setDoubleOffer: React.Dispatch<React.SetStateAction<boolean>>;
  readonly paymentDone: boolean;
  readonly setPaymentDone: React.Dispatch<React.SetStateAction<boolean>>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    flex: {
      display: "flex",
      alignItems: "center"
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
    checkBoxWrapper: {
      marginTop: theme.spacing(4)
    },
    checkBox: {
      "&.MuiCheckbox-colorSecondary.Mui-checked": {
        color: theme.palette.gray[900]
      }
    },
    checkBoxText: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "27px",
      display: "flex",
      alignItems: "center",
      color: theme.palette.gray[900],
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px"
      }
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
    proceedButtonWrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      margin: theme.spacing(4, 4, 0, 4)
    },
    payButtonWrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      margin: theme.spacing(5, 0, 0, 0)
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
    infoVerify: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "24.1026px",
      lineHeight: "36px",
      display: "flex",
      alignItems: "center",
      color: "#0DA7F6",
      justifyContent: "center"
    },
    infoVerify2: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "27px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      color: theme.palette.gray[400],
      justifyContent: "center"
    },
    infoDenied: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "24.1026px",
      lineHeight: "36px",
      display: "flex",
      alignItems: "center",
      color: "#DE3737",
      justifyContent: "center"
    },
    infoDenied2: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "27px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      color: theme.palette.gray[400],
      justifyContent: "center"
    },
    verified: {
      textAlign: "center",
      padding: theme.spacing(5, 0)
    },
    checkedIcon: {
      fontSize: "50px"
    },
  })
);

const SubModal: React.FC<Props> = ({
  modalContent,
  setModalTitle,
  setSubModalOpen,
  setModalContent,
  selectedSubcription,
  selectedSubcriptionPrice,
  yearlySubcription,
  setYearlySubcription,
  doubleOffer,
  setDoubleOffer, paymentDone, setPaymentDone
}: Props) => {
  const classes = useStyles();

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
    <form onSubmit={formik.handleSubmit}>
      {modalContent === "SubscriptionDetails" ? (
        <div className={classes.wrapper}>
          <Grid
            className={classes.selectedSubcription}
            container
            justifyContent="space-between"
            alignItems="center"
          >
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
          <Grid container alignItems="center">
            <Grid item xs={6} sm={6} md={4}>
              <TextInput
                style={{
                  boxShadow: "0px 44.336px 72.9399px rgba(0, 0, 0, 0.03)",
                  borderRadius: "104.555px"
                }}
                id="promoCode"
                name="promoCode"
                type="text"
                placeholder={"Promo Code"}
                value={formik.values.promoCode}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <CustomButton
                type="stepper"
                // eslint-disable-next-line no-console
                onClick={() => console.log("Activate PromoCode")}
                text="Activate"
              />
            </Grid>
            <Grid
              className={classes.checkBoxWrapper}
              container
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Grid item xs={12} sm={12} md={8}>
                <div className={classes.flex}>
                  <span>
                    {" "}
                    <Checkbox
                      className={classes.checkBox}
                      checked={doubleOffer}
                      onChange={() => setDoubleOffer(!doubleOffer)}
                      name="doubleOffer"
                    />
                  </span>
                  <span>
                    <Typography className={classes.checkBoxText}>
                      Double the offer for half the price
                    </Typography>
                  </span>
                </div>
                <div className={classes.flex}>
                  <span>
                    <Checkbox
                      className={classes.checkBox}
                      checked={yearlySubcription}
                      onChange={() => setYearlySubcription(!yearlySubcription)}
                      name="yearlySubcription"
                    />
                  </span>
                  <span>
                    <Typography className={classes.checkBoxText}>
                      Yearly subscriptin (10% off)
                    </Typography>
                  </span>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <div className={classes.totalPrice}>
                  <Typography className={classes.selectedSubcriptionHeading}>
                    Total:
                  </Typography>
                  &nbsp;&nbsp;
                  <Typography className={classes.headingPrice}>$123</Typography>
                </div>
              </Grid>
            </Grid>
            <div className={classes.proceedButtonWrapper}>
              <CustomButton
                type="proceed"
                text="proceed"
                onClick={() => {
                  setModalTitle("Billing Info");
                  setModalContent("BillingInfo");
                }}
              />
            </div>
          </Grid>
        </div>
      ) : modalContent === "BillingInfo" ? (
        // ======================================================================================
        // ! This Modal is gonna when user is putting credit card information
        // ======================================================================================

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
                  setPaymentDone(true)
                  setModalContent("showSuccessMessage")
                } else {
                  setPaymentDone(false)
                  setModalContent("showDeniedMessage")
                }
              }}
            />
          </div>
        </div>
      ) : modalContent === "showSuccessMessage" ? (
        <ShowMessage success={paymentDone} message="Your payment is delivered successfully" subMessage="Now you can enjoy your premium subscription." />
      ) : modalContent === "showDeniedMessage" ? (
        <ShowMessage success={paymentDone} message="Payment Denied" subMessage="Check your payment method and try again." />
      ) : null}
    </form>
  );
};

export default SubModal;
