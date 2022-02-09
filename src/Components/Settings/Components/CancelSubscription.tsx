import * as React from "react";
import * as yup from "yup";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "Components/Button";
import { Grid, Typography } from "@material-ui/core";
import TextInput from "Components/Form/TextInput";
import { useFormik } from "formik";
import UserCancel from "Components/Icons/userCancel";


interface Props {
  readonly selectedSubcription: string
  readonly selectedSubcriptionPrice: number
  readonly showCurrentSubscription: boolean
  readonly setShowCurrentSubscription: React.Dispatch<React.SetStateAction<boolean>>
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
    wrapperMessage: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2),
      paddingTop: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(1)
      }
    },
    messageText: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "25.388px",
      lineHeight: "38px",
      alignItems: "center",
      textAlign: "center",
      color: theme.palette.gray[400]
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
      textAlign: "center",
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
  })
);

const passwordValidationSchema = yup.object({
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
});

export const CancelSubscription: React.FC<Props> = ({ selectedSubcription, selectedSubcriptionPrice, showCurrentSubscription, setShowCurrentSubscription }: Props) => {
  const classes = useStyles();
  const [showMessage, setShowMessage] = React.useState<boolean>(true)


  const formik = useFormik({
    initialValues: {
      promoCode: "",
      creditCardName: "",
      creditCardNumber: "",
      creditCardExpire: "",
      creditCardCcv: "",
      password: ""
    },
    validationSchema: passwordValidationSchema,
    onSubmit: values => {
      // eslint-disable-next-line no-console
      console.log(values);
    }
  });

  return (
    <div className={classes.wrapper}>
      {showCurrentSubscription === true ? (<>
        <Grid className={classes.showSubscription} container justifyContent="space-between" alignItems="center">
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
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography className={classes.doubleOfferSubText}>Please confirm with your password to cancle subscription</Typography>
          </Grid>
        </Grid>
        <TextInput
          type="password"
          name="password"
          placeholder="Password"
          style={{ borderRadius: "50px", minHeight: "50px" }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <br />
        <br />
        <div className={classes.applyBtnDiv}>
          <Button className={classes.applyBtn} text="Proceed" onClick={() => {
            setShowCurrentSubscription(false); setShowMessage(true)
          }} />
        </div>
      </>) : showMessage === true ? (
        <>
          <div className={classes.wrapperMessage}>
            <UserCancel />
          </div>
          <br />
          <Typography className={classes.messageText}>Your subscription has been cancled</Typography>
        </>
      ) : null
      }
    </div >
  );
};