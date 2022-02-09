import * as React from "react";
import { useFormik } from "formik";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Avatar, Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import AddImageModal from "Components/AddImage/AddImageModal";
import TextInput from "Components/Form/TextInput";
import TextArea from "Components/Form/TextArea";
import MuiIcons from "Components/Icons";
import { useCheckUsername } from "Hooks/useSignUp";
import AddTag from "Components/AddTag";
import { SelectWithInput } from "Components/Form/SelectWithIcon";
import { DrawerContext } from "Context/DrawerContext";

interface Props {
  accountType: 'Individual' | "Institution";
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2, 0, 2),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2)
      },
    },
    container: {
      minHeight: "400px"
    },
    inputContainer: {
      padding: "0px 2rem 2rem 2rem"
    },
    stepHeading: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "30px",
      lineHeight: "45px",
      color: "#455154",
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px"
      }
    },
    labelButton: {
      border: "none",
      boxShadow: "none",
      background: "none",
      width: "-webkit-fill-available"
    },
    actionsContainer: {
      marginBottom: theme.spacing(2)
    },
    actionButtons: {
      display: "flex",
      justifyContent: "space-between",
      padding: theme.spacing(5, 0, 0, 0)
    },
    actionIcons: {
      color: "#E4E9EA"
    },
    arrowIcons: {
      fontSize: "15px",
      margin: "0px 3px"
    },
    inputLabel: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "27px",
      color: "#58696D"
    },
    editImageContainer: {
      position: "relative",
      "&:hover $addImage": {
        opacity: 0.8,
        zIndex: 1
      },
      "&:hover $editAndDelete": {
        opacity: 0.8,
        zIndex: 1
      }
    },
    addImage: {
      position: "absolute",
      width: " 125px",
      height: "125px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(255,255,255,0.7)",
      borderRadius: "6px",
      cursor: "pointer",
      opacity: 0,
      transition: "all .3s"
    },
    editAndDelete: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "125px",
      height: "45px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      background: "#58696D33",
      backdropFilter: "blur(26px)",
      borderRadius: "6px",
      cursor: "pointer",
      opacity: 0,
      transition: "all .3s",
      [theme.breakpoints.down("sm")]: {
        opacity: 0.8,
        zIndex: 1,
        height: "35px"
      }
    },
    userProfilePic: {
      width: "125px",
      height: "125px",
      margin: "auto",
      marginRight: "5px",
      borderRadius: "10px"
    },
    icons: {
      color: "#E4E9EA"
    },
    redText: {
      color: "red"
    },
    userinfo: {
      padding: theme.spacing(2, 1),
      border: `1px solid ${theme.palette.gray[600]}`,
      boxSizing: "border-box",
      filter: "drop-shadow(0px 31px 51px rgba(0, 0, 0, 0.03))",
      borderRadius: "10px"
    },
    selectIcon: {
      color: theme.palette.gray[400],
      [theme.breakpoints.down("md")]: {
        fontSize: "14px"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px"
      }
    },
    deleteIcon: {
      color: "#414546"
    },
    selectLink: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        justifyContent: "space-between !important"
      }
    },
    addButton: {
      background: theme.palette.gray[100],
      border: `1px solid ${theme.palette.gray[600]}`,
      borderRadius: "40px",
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
      padding: theme.spacing(1),
      marginTop: theme.spacing(2),
      cursor: "pointer",
      width: "100px",
      justifyContent: "center"
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

export const ProfileSetting: React.FC<Props> = props => {
  // INITIALS
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // STATES
  const [skill, setSkill] = React.useState<string[]>(["Reading", "Painting"]);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [checking, setChecking] = React.useState<boolean>(false);

  // CONTEXT
  const { handleClose, setDrawerOpen, setShowSettingsTab } = React.useContext(DrawerContext);

  // MUTATE
  const { mutate: checkUserName, isError } = useCheckUsername();

  React.useEffect(() => {
    if (isError) {
      formik.setFieldError("username", "Username already exists");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  // FORMIK INITIAL STATES
  const formik = useFormik({
    initialValues: {
      image: "",
      company_name: "Company Name",
      company_type: "Company Type",
      first_name: "First Name",
      last_name: "Last Name",
      username: "",
      about: "",
      contactInformation: [
        {
          name: "facebook",
          link: ""
        },
        {
          name: "twitter",
          link: ""
        },
        {
          name: "instagram",
          link: ""
        },
        {
          name: "linkedin",
          link: ""
        },
        {
          name: "youtube",
          link: ""
        }
      ]
    },

    onSubmit: values => {
      // eslint-disable-next-line no-console
      console.log(values);
    }
  });

  const URLS = [
    {
      label: "FaceBook",
      value: "facebook",
      icon: <MuiIcons className={classes.selectIcon} icon="facebook" fontSize="small" />
    },
    {
      label: "Instagram",
      value: "instagram",
      icon: <MuiIcons className={classes.selectIcon} icon="instagram" fontSize="small" />
    },
    {
      label: "Linkedin",
      value: "linkedin",
      icon: <MuiIcons className={classes.selectIcon} icon="linkedin" fontSize="small" />
    },
    {
      label: "Twitter",
      value: "twitter",
      icon: <MuiIcons className={classes.selectIcon} icon="twitter" fontSize="small" />
    },
    {
      label: "YouTube",
      value: "youtube",
      icon: (
        <MuiIcons className={classes.selectIcon} icon="YouTubeIcon" fontSize="small" />
      )
    }
  ];

  // FUNCTIONS

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let typingTimer: any; //Don't know the type oftimer identifier
  const doneTypingInterval = 100;

  const onSearchKeyUp = () => {
    formik.setFieldTouched("username", true);
    if (formik.values.username.length > 4) {
      setChecking(true);
      clearTimeout(typingTimer);
      typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
  };

  const onSearcKeyDown = () => {
    clearTimeout(typingTimer);
  };
  const doneTyping = () => {
    if (formik.values.username.length > 4) {
      checkUserName({
        username: formik.values.username
      });
      setTimeout(() => {
        setChecking(false);
      }, 700);
    }
  };

  const onSelectChange = (value: string, index: number) => {
    const newArr = formik.values.contactInformation?.map((link, i) => {
      if (i === index) {
        link.name = value;
      }
      return link;
    });
    // setProfileLinks(newArr);
    formik.setValues({ ...formik.values, contactInformation: newArr });
  };

  const onInputLinkChange = (value: string, index: number) => {
    const newArr = formik.values.contactInformation?.map((link, i) => {
      if (i === index) {
        link.link = value;
      }
      return link;
    });
    // setProfileLinks(newArr);
    formik.setValues({ ...formik.values, contactInformation: newArr });
  };

  const addNewLink = () => {
    const prevRows = [...formik.values.contactInformation];
    prevRows.push({
      name: "",
      link: ""
    });
    formik.setValues({ ...formik.values, contactInformation: prevRows });
  };

  const onDeleteLink = (index: number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newArr = formik.values.contactInformation.filter((link, i) => {
      return i !== index;
    });
    formik.setValues({ ...formik.values, contactInformation: newArr });
  };

  const handleBackArrow = () => {
    handleClose()
    setDrawerOpen(true)
    setShowSettingsTab(true)
  }

  return (
    <div className={classes.root}>
      <Grid className={classes.container} container justifyContent="space-between">
        {smallScreen &&
          <Grid item xs={12}>
            <div className={classes.flex}>
              <MuiIcons icon="backArrow" className={classes.icon} fontSize="medium" onClick={handleBackArrow} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Typography className={classes.settingLabel}>Profile Settings</Typography>
            </div>
          </Grid>
        }
        <Grid item xs={12} md={5}>
          <label>
            <Typography className={classes.inputLabel}>Info:</Typography>
          </label>
          <br />
          <Grid container justifyContent={"space-between"}>
            <Grid item xs={4}>
              <AddImageModal
                openModal={openModal}
                handleCloseModal={() => setOpenModal(false)}
                handleSaveChanges={function (): void {
                  throw new Error("Function not implemented.");
                }}
                formValues={formik.values}
                setFormValues={formik.setValues}
                setOpenModal={setOpenModal}
              />
              <div className={classes.editImageContainer}>
                {formik.values.image !== "" ? (
                  <span className={classes.editAndDelete}>
                    <MuiIcons
                      className={classes.actionIcons}
                      icon="cancel"
                      onClick={() => formik.setValues({ ...formik.values, image: "" })}
                      fontSize="small"
                    />
                    <MuiIcons
                      className={classes.actionIcons}
                      onClick={() => setOpenModal(true)}
                      icon="edit"
                      fontSize="small"
                    />
                  </span>
                ) : (
                  <span className={classes.addImage}>
                    <MuiIcons
                      icon="addPhoto"
                      fontSize="large"
                      onClick={() => setOpenModal(true)}
                    />
                  </span>
                )}
                {/* <div> */}
                <Avatar
                  src={formik.values.image ? formik.values.image : ""}
                  className={classes.userProfilePic}
                  variant="rounded"
                />
              </div>
            </Grid>
            <Grid item xs={6} md={6} lg={7}>
              {props.accountType === "Institution" ? (
                <>
                  <TextInput
                    id="company_name"
                    name="company_name"
                    type="text"
                    placeholder={"Company name"}
                    value={formik.values.company_name}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.company_name && Boolean(formik.errors.company_name)
                    }
                    helperText={formik.touched.company_name && formik.errors.company_name}
                  />
                  <TextInput
                    id="company_type"
                    name="company_type"
                    type="text"
                    placeholder={"Company Type"}
                    value={formik.values.company_type}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.company_type && Boolean(formik.errors.company_type)
                    }
                    helperText={formik.touched.company_type && formik.errors.company_type}
                  />
                </>
              ) : (
                <>
                  <TextInput
                    id="first_name"
                    name="first_name"
                    type="text"
                    placeholder={"First name"}
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                    helperText={formik.touched.first_name && formik.errors.first_name}
                  />
                  <TextInput
                    id="last_name"
                    name="last_name"
                    type="text"
                    placeholder={"Last name"}
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                    helperText={formik.touched.last_name && formik.errors.last_name}
                  />
                </>
              )}

              <TextInput
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onKeyUp={onSearchKeyUp}
                onKeyDown={onSearcKeyDown}
                loading={checking}
                // --- GETTING ERROR NEED TO ADD THIS IN PROP LATER
                // checked={formik.touched.username && !isError && Boolean(!formik.errors.username) && error === null}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
            </Grid>
          </Grid>
          <br />
          <br />
          <Typography className={classes.inputLabel}>Tags:</Typography>
          <br />
          <AddTag
            placeHolder="Press Enter To Add Skills and tags"
            data={skill}
            setData={setSkill} onAdd={function (skills: string[]): void {
              throw new Error("Function not implemented.");
            }} />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <label>
            <Typography className={classes.inputLabel}>About:</Typography>
          </label>
          <br />
          <TextArea
            style={{
              minWidth: "100%",
              maxWidth: "-webkit-fill-available",
              maxHeight: "100px",
              minHeight: "100px"
              // margin: "0px 8px"
            }}
            rows={3}
            maxLength={300}
            columns={33}
            id="about"
            name="about"
            placeholder="About"
            value={formik.values.about}
            onChange={formik.handleChange}
            error={formik.touched.about && Boolean(formik.errors.about)}
            helperText={formik.touched.about && formik.errors.about}
          />
          <br />
          <br />
          <label>
            <Typography className={classes.inputLabel}>Profile Social Links:</Typography>
          </label>
          <br />
          <section className={classes.userinfo}>
            {formik.values.contactInformation?.map((link, index) => (
              <Grid key={index} alignItems="center" container>
                <div className={classes.selectLink}>
                  <Grid item xs={4} sm={3} md={4}>
                    <SelectWithInput
                      type="dark"
                      value={link.name}
                      options={URLS}
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      handleChange={(e: any) => onSelectChange(e.target.value, index)}
                    />
                  </Grid>
                  <Grid item xs={7} sm={6} md={7}>
                    <TextInput
                      style={{ borderRadius: "20px" }}
                      name="link"
                      value={link.link}
                      type="text"
                      placeholder={
                        link.name === "facebook"
                          ? "FaceBook Profile Link Here"
                          : link.name === "instagram"
                            ? "Instagram Profile Link Here"
                            : link.name === "twitter"
                              ? "Twitter Profile Link Here"
                              : link.name === "linkedin"
                                ? "Linkedin Profile Link Here"
                                : link.name === "youtube"
                                  ? "Youtube Profile Link Here"
                                  : "Add your link here"
                      }
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      onChange={(e: any) => onInputLinkChange(e.target.value, index)}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <div
                      style={{ display: "flex", alignItems: "center", float: "right" }}
                    >
                      <MuiIcons
                        className={classes.deleteIcon}
                        icon="cancel"
                        onClick={() => onDeleteLink(index)}
                      />
                    </div>
                  </Grid>
                </div>
              </Grid>
            ))}
          </section>
          {formik.values.contactInformation.length !== 5 ? (
            <div className={classes.addButton} onClick={() => addNewLink()}>
              <MuiIcons
                // className={classes.likeIcon}
                icon="add"
                fontSize="small"
              />
              &nbsp;Add&nbsp;
            </div>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </div>
  );
};
