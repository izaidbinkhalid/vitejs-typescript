import * as React from "react";
import { makeStyles, Theme, createStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Grid, Dialog, useMediaQuery } from "@material-ui/core";
import MuiIcons from "Components/Icons";
import { BigCard } from "Components/Card/BigCard";
import { BigCardSimple } from "Components/Card/BigCardSimple";
import { CreateCardContext } from "Context/CreateCard";
import { MobileCreateCard } from "./MobileCreateCard";
import { CardInput } from "Components/Card/CardInput";

export type Conatct = {
  name: string;
  link: string;
};

export interface IntialValues {
  readonly image: string;
  readonly fullname: string;
  readonly title: string;
  readonly about: string;
  readonly background: string;
  readonly contactInformation: Conatct[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      padding: theme.spacing(5)
    },
    wrapperScroll: {
      overflowY: "scroll"
    },
    backdrop: {
      backgroundColor: "transparent"
    },
    close: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "space-between",
      marginBottom: theme.spacing(1.5),
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(1.5)
      }
    },
    newCardDiv: {
      background: theme.palette.background.paper,
      border: theme.palette.background.paper,
      color: theme.palette.secondary.main,
      boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)",
      fontSize: "14px",
      height: "40px",
      borderRadius: "100px",
      padding: theme.spacing(1.5),
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    newCardDiv2: {
      background: theme.palette.background.paper,
      border: theme.palette.background.paper,
      color: theme.palette.secondary.main,
      boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)",
      fontSize: "14px",
      height: "40px",
      borderRadius: "100px",
      padding: theme.spacing(1.5),
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    newCard: {
      color: theme.palette.secondary.dark,
      fontSize: "13px",
      fontFamily: "Poppins",
      fontWeight: 400,
      lineHeight: 1.5
    },
    paper: {
      background: "#517A8F4A",
      border: `1px solid ${theme.palette.gray[700]}`,
      borderTop: "none",
      boxShadow: "0px 188px 250px rgba(61, 84, 97, 0.35)",
      backdropFilter: "blur(20px)",
      width: "100%",
      height: "85%",
      borderRadius: "27px",
      marginTop: theme.spacing(3),
      padding: theme.spacing(3),
      "&:focus": {
        outline: "none"
      },
      [theme.breakpoints.down("md")]: {
        height: "100%"
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(0),
        padding: theme.spacing(0),
        background: theme.palette.gray[200],
        boxShadow: "none",
        backdropFilter: "none",
        borderRadius: "0px",
      }
    },
    createCardText: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: "36px",
      color: theme.palette.gray[100]
    },
    closeButton: {
      cursor: "pointer",
      "& hover": {
        color: theme.palette.gray[100]
      }
    },
    drawer: {
      margin: theme.spacing(0.5)
    }
  })
);

export const CreateCard: React.FC = () => {
  const intialValues = {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    fullname: "Company  LLC",
    title: "Selling stuff to humans",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    background: "#414546B2",
    contactInformation: [
      {
        name: "facebook",
        link: ""
      }
    ]
  };
  const [formValues, setFormValues] = React.useState<IntialValues>(intialValues);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    createCardOpen,
    setCreateCardOpen,
    comapnyType,
    setCompanyType,
    showInstitution,
    institutionButton,
    setInstitutionButton
  } = React.useContext(CreateCardContext);

  const handleClickOpen = async () => {
    setInstitutionButton(false);
    setCompanyType("individual");
    setCreateCardOpen(true);
  };

  const handleInstitutionalClickOpen = async () => {
    setCompanyType("");
    setInstitutionButton(true);
    setCreateCardOpen(true);
  };

  const handleClose = async () => {
    setInstitutionButton(false);
    setCompanyType("");
    setCreateCardOpen(false);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <div
            className={classes.newCardDiv}
            onClick={handleClickOpen}
          >
            <p className={classes.newCard}>New Card</p>
            <MuiIcons icon="add" fontSize="small" color="secondary" />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div
            className={classes.newCardDiv2}
            onClick={
              handleInstitutionalClickOpen
            }
          >
            <MuiIcons icon="briefCase" fontSize="small" color="secondary" />
            <MuiIcons icon="add" fontSize="small" color="secondary" />
          </div>
          <div>

            <Dialog
              fullScreen={isMobile}
              maxWidth={"lg"}
              open={createCardOpen}
              BackdropProps={{
                className: classes.backdrop
              }}
              PaperProps={{
                className: classes.paper
              }}
              keepMounted
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              {isMobile ? <MobileCreateCard formValues={formValues} setFormValues={setFormValues} /> : (
                <>
                  <div className={classes.close}>
                    <Typography className={classes.createCardText}>
                      {comapnyType === "individual"
                        ? "Create Card "
                        : " Create Company Profile"}
                    </Typography>
                    <MuiIcons
                      className={classes.closeButton}
                      fontSize="large"
                      icon="close"
                      onClick={() => setCreateCardOpen(false)}
                    />
                  </div>
                  <div className={classes.wrapperScroll}>
                    <Grid container justifyContent="space-around">
                      <Grid item xs={12} sm={12} md={5} lg={4}>
                        {showInstitution !== true && institutionButton === false ? (
                          <BigCardSimple
                            about={formValues.about}
                            companyName={formValues.fullname}
                            companyType={formValues.title}
                            image={formValues.image}
                            contactInfo={formValues.contactInformation}
                            background={formValues.background}
                            setChecked={function (
                              value: React.SetStateAction<boolean>
                            ): void {
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
                            setChecked={function (
                              value: React.SetStateAction<boolean>
                            ): void {
                              throw new Error("Function not implemented.");
                            }}
                          />
                        )}
                      </Grid>
                      <Grid item xs={12} sm={12} md={7} lg={5}>
                        <CardInput formValues={formValues} setFormValues={setFormValues} />
                      </Grid>
                    </Grid>
                  </div>
                </>
              )}
            </Dialog>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
