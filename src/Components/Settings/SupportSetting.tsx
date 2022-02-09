/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { StepperContext } from "Context/StepperContext";
import Dialog from "Components/ModalPopup/Dialog";
import Button from "Components/Button";
import { SuspendAccount } from './Components/SuspendAccount';
import { DeleteAccount } from './Components/DeleteAccount';
import { Link } from "react-router-dom";
import TextArea from "Components/Form/TextArea";
import MuiIcon from "Components/Icons";
import { DrawerContext } from "Context/DrawerContext";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      padding: theme.spacing(1),
      paddingTop: theme.spacing(2),
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
    optionsHeading: {
      fontWeight: 500,
      fontSize: "16px",
      marginBottom: theme.spacing(1),
      color: theme.palette.secondary.dark,
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px"
      }
    },
    optionsSubHeading: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "15px",
      display: "flex",
      alignItems: "center",
      color: theme.palette.gray[400],
    },
    optionWrapper: {
      background: "#FFFFFF",
      boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)",
      borderRadius: "10px",
      cursor: "pointer",
      padding: theme.spacing(2),
      margin: theme.spacing(2, 1)
    },
    helpLink: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "30px",
      display: "flex",
      alignItems: "center",
      color: theme.palette.gray[400],
      marginBottom: theme.spacing(1)
    },
    box: {
      lineHeight: 1.3,
      "& >a": {
        textDecoration: "none"
      }
    },
    addImageBtn: {
      background: "#FFFFFF",
      border: "1px solid #E4E9EA",
      boxSizing: "border-box",
      borderRadius: "56px",
      fontWeight: 500,
      fontSize: "12px",
      color: theme.palette.secondary.dark,
      padding: theme.spacing(1.5)
    },
    changeBtn: {
      background: theme.palette.gray[700],
      borderRadius: "56px",
      fontWeight: 500,
      fontSize: "12px",
      color: theme.palette.secondary.dark,
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
      padding: theme.spacing(1)
    },
    linktype: {
      textDecoration: "underline",
      cursor: "pointer"
    },
    secondRow: {
      marginTop: theme.spacing(1),
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
    inputBox: {
      width: "90%",
      [theme.breakpoints.down("sm")]: {
        width: "100%"
      }
    },
    addImageContainer: {
      width: "100%",
      position: "relative",
      "&:hover $addImage": {
        opacity: 1,
        zIndex: 1
      }
    },
    uploadedFileNAme: {
      display: "flex",
      color: theme.palette.gray[400],
      alignItems: "center",
      padding: theme.spacing(1),
      fontSize: "12px"
    },
    flex: {
      display: "flex",
      alignItems: "center"
    },
    deleteIcon: {
      fontSize: "16px",
      cursor: "pointer",
      "&:hover": {
        color: "#DE3737"
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
    flexContainer: {
      justifyContent: "flex-start",
      display: "flex",
      alignItems: "center"
    }
  })
);

const validationSchema = yup.object({
  reportProblem: yup
    .string()
    .required("Required")
    .min(4, "Include at least 10 characters."),
  feedBack: yup
    .string()
    .required("Required")
    .min(4, "Include at least 10 characters."),
});

export const SupportSetting = () => {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [fileName, setFileName] = React.useState<any>([])

  // FUNCTIONS
  const openSubModal = (type: string) => {
    if (type === 'suspendAccount') setModalTitle("Account Suspension");
    if (type === 'deleteAccount') setModalTitle("Delete Account");
    setType(type);
    setSubModalOpen(true);
  };

  // FORMIK INITIAL STATES
  const formik = useFormik({
    initialValues: {
      reportProblem: "",
      feedBack: "",
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      // eslint-disable-next-line no-console
      console.log(values);
    }
  });

  // FUNCTIONS
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createImageName = (e: any) => {
    const MAX_LENGTH = 4;
    if (Array.from(e.target.files).length > MAX_LENGTH) {
      e.preventDefault();
      alert(`Cannot upload files more than ${MAX_LENGTH}`);
      return;
    }
    setFileName({ selectedFiles: Array.from(e.target.files) })
  };

  const deleteImage = (index: number) => {
    const images = fileName.selectedFiles
    const newImages = images.filter((elem: any, i: number) => i !== index);
    // eslint-disable-next-line no-console
    setFileName({ ...fileName, selectedFiles: newImages })
  }

  const handleBackArrow = () => {
    handleClose()
    setDrawerOpen(true)
    setShowSettingsTab(true)
  }

  return (
    <>
      <div className={classes.wrapper}>
        <Grid container alignItems="flex-start" justifyContent="space-between" spacing={4}>
          {smallScreen &&
            <Grid item xs={12}>
              <div className={classes.flexContainer}>
                <MuiIcon icon="backArrow" className={classes.icon} fontSize="medium" onClick={handleBackArrow} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Typography className={classes.settingLabel}>Support</Typography>
              </div>
            </Grid>
          }
          <Grid item xs={12} sm={6}>
            <div className={classes.box}>
              <Typography className={classes.heading}>Account Suspention:</Typography>
              <div className={classes.optionWrapper} onClick={() => { openSubModal("suspendAccount") }}>
                <Typography className={classes.optionsHeading}>
                  Suspend Account
                </Typography>
                <Typography className={classes.optionsSubHeading}>
                  Your account will be disabled and your name and photos will be removed.
                </Typography>
              </div>
              <div className={classes.optionWrapper} onClick={() => { openSubModal("deleteAccount") }}>
                <Typography className={classes.optionsHeading}>
                  Delete Account
                </Typography>
                <Typography className={classes.optionsSubHeading}>
                  When you delete your Sailspad account, you won't be able to retrieve the
                  content or information you've shared on Sailspad.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.box}>
              <Typography className={classes.heading}>Report a problem:</Typography>
              <Typography variant="body2">
                Please describe the issue your are experiencing.
              </Typography>
              {fileName?.selectedFiles?.length > 1 ? "" : <br />}
              {fileName?.selectedFiles &&
                <>
                  <Grid container alignItems="center">
                    {fileName?.selectedFiles?.map((file: any, i: number) => (
                      <Grid item xs={6}>
                        <Typography key={i} className={classes.uploadedFileNAme}>
                          {file.name} &nbsp; <MuiIcon icon="cancel" className={classes.deleteIcon} onClick={() => deleteImage(i)} />
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </>
              }
              <div className={classes.inputBox}>
                <TextArea
                  style={{
                    minWidth: "100%",
                    maxWidth: "-webkit-fill-available",
                    maxHeight: "100px",
                    minHeight: "110px"
                    // margin: "0px 8px"
                  }}
                  rows={5}
                  maxLength={300}
                  columns={33}
                  id="feedBack"
                  name="feedBack"
                  placeholder="Include at least 10 characters."
                  value={formik.values.feedBack}
                  onChange={formik.handleChange}
                  error={formik.touched.feedBack && Boolean(formik.errors.feedBack)}
                  helperText={formik.touched.feedBack && formik.errors.feedBack}
                />
                <br />
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item sm={6} md={6}>
                    <Typography className={classes.optionsSubHeading}>
                      Send along helpful info.
                    </Typography>
                  </Grid>
                  <Grid item sm={6} md={6}>
                    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                      <div>
                        <input
                          accept="image/*"
                          style={{ display: "none" }}
                          id="raised-button-file"
                          multiple
                          type="file"
                          onChange={e => createImageName(e)}
                        />
                        <label htmlFor="raised-button-file">
                          <Typography
                            style={{ float: "right" }}
                            className={classes.addImageBtn}
                          >Add Image</Typography>
                        </label>
                      </div>

                      <Button
                        style={{ float: "right" }}
                        className={classes.changeBtn}
                        text="Send"
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="flex-start"
          justifyContent="space-between"
          spacing={4}
          className={classes.secondRow}
        >
          <Grid item xs={12} sm={6}>
            <div className={classes.box}>
              <Typography className={classes.heading}>Feedback:</Typography>
              <TextArea
                style={{
                  minWidth: "100%",
                  maxWidth: "-webkit-fill-available",
                  maxHeight: "100px",
                  minHeight: "150px"
                  // margin: "0px 8px"
                }}
                rows={5}
                maxLength={300}
                columns={33}
                id="reportProblem"
                name="reportProblem"
                placeholder="Let us know what you think, your opinion will always be appreciated"
                value={formik.values.reportProblem}
                onChange={formik.handleChange}
                error={formik.touched.reportProblem && Boolean(formik.errors.reportProblem)}
                helperText={formik.touched.reportProblem && formik.errors.reportProblem}
              />
              <br />
              <Button
                style={{ float: "right" }}
                className={classes.changeBtn}
                text="Send"
              />

            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.box}>
              <Typography className={classes.heading}>
                Help:
              </Typography>
              <Link to="#">
                <Typography className={classes.helpLink}>
                  FAQs
                </Typography>
              </Link>
              <Link to="#">
                <Typography className={classes.helpLink}>
                  Terms and Conditions
                </Typography>
              </Link>
              <Link to="#">
                <Typography className={classes.helpLink}>
                  Privacy Policy
                </Typography>
              </Link>
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
          {showSubModals(type, setModalTitle, openSubModal)}
        </Dialog>
      </div>
    </>
  );
};

// changing Content in sub Modal
const showSubModals = (step: string, setModalTitle: React.Dispatch<React.SetStateAction<string>>, openSubModal: (type: string) => void) => {
  switch (step) {
    case "suspendAccount":
      return <SuspendAccount />;
    case "deleteAccount":
      return <DeleteAccount />;
    default:
      return;
  }
};
