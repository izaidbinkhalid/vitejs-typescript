import * as React from "react";
import { makeStyles, Theme, createStyles, withStyles } from "@material-ui/core/styles";
import { Grid, Avatar } from "@material-ui/core";
import { CreateCardContext } from "Context/CreateCard";
import TextInput from "Components/Form/TextInput";
import TextArea from "Components/Form/TextArea";
import MuiIcons from "Components/Icons";
import Switch from "Components/Switch";
import { SelectWithInput } from "Components/Form/SelectWithIcon";
import { IntialValues } from "Pages/Card/CreateCard";
import AddImageModal from "Components/AddImage/AddImageModal";

interface Props {
  formValues: IntialValues;
  setFormValues: React.Dispatch<React.SetStateAction<IntialValues>>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper2: {
      maxWidth: "450px",
      minHeight: "510px",
      // margin: theme.spacing(0, 5, 0, 0),
      padding: theme.spacing(1),
      background: "#FBFBFBB2",
      boxShadow: "0px 102px 155px -58px rgba(0, 0, 0, 0.25)",
      borderRadius: "18px",
      [theme.breakpoints.down("md")]: {
        margin: "auto"
      },
      [theme.breakpoints.down("sm")]: {
        background: theme.palette.gray[600]
      }
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
      width: " 100px",
      height: "100px",
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
      width: "100px",
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
      width: "100px",
      height: "100px",
      margin: "auto",
      marginRight: "5px",
      borderRadius: "10px"
    },
    Muinput: {
      margin: theme.spacing(0, 2, 0, 2),
      borderRadius: "12px"
    },
    userinfo: {
      padding: theme.spacing(0, 1)
    },
    userinfo1: {
      padding: theme.spacing(0, 1),
      marginBottom: theme.spacing(1)
    },
    userinfo3: {
      padding: theme.spacing(0, 0.75)
    },
    addLink: {
      width: "100%",
      padding: theme.spacing(0, 1),
      margin: theme.spacing(1, 0)
    },

    colorContainer: {
      display: "flex",
      margin: theme.spacing(3, 1, 2, 1),
      justifyContent: "space-between",
      alignItems: "center"
    },
    colorDiv: {
      cursor: "pointer",
      padding: theme.spacing(0.5),
      borderRadius: "20px",
      width: "54px",
      height: "20px",
      border: `5px hidden ${theme.palette.gray[100]}`,
      [theme.breakpoints.down("xs")]: {
        height: "14px",
        width: "40px"
      }
    },
    colorDivSelected: {
      height: "30px",
      width: "54px",
      cursor: "pointer",
      padding: theme.spacing(0.5),
      borderRadius: "20px",
      border: `5px solid ${theme.palette.gray[100]}`,
      transform: "scale(1.5)",
      [theme.breakpoints.down("xs")]: {
        height: "22px",
        width: "40px",
        transform: "scale(1.5)"
      }
    },
    actionButtons: {
      color: theme.palette.secondary.dark,
      [theme.breakpoints.down("xs")]: {
        color: theme.palette.gray[700]
      }
    },
    selectIcon: {
      color: theme.palette.gray[400],
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px"
      }
    },
    deleteIcon: {
      color: "#414546"
    },
    addButton: {
      background: theme.palette.gray[100],
      borderRadius: "40px",
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
      padding: theme.spacing(1),
      cursor: "pointer",
      width: "100px",
      justifyContent: "center"
    },
    selectLink: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: theme.spacing(1.5)
    },
    showInstitution: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "18px",
      color: "#58696D",
      margin: theme.spacing(0, 1)
    },
    iconSmall: {
      fontSize: "16px",
      marginRight: theme.spacing(0.5)
    },
    switchInstitution: {
      // justifyContent: "end",
      display: "flex",
      alignItems: "center"
    }
  })
);

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: "flex"
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      "&$checked": {
        transform: "translateX(12px)",
        color: theme.palette.common.white,
        "& + $track": {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main
        }
      }
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: "none"
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white
    },
    checked: {}
  })
)(Switch);

const BackroundColorPicker = [
  "#414546B2",
  "#31474BB2",
  "#60675BB2",
  "#728689",
  "#5C475EB2"
];

export const CardInput: React.FC<Props> = ({ formValues, setFormValues }: Props) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const { showInstitution, setShowInstitution, institutionButton } =
    React.useContext(CreateCardContext);

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

  const handleHeaderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowInstitution(!showInstitution);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const onSelectChange = (value: string, index: number) => {
    const newArr = formValues.contactInformation?.map((link, i) => {
      if (i === index) {
        link.name = value;
      }
      return link;
    });
    // setProfileLinks(newArr);
    setFormValues({ ...formValues, contactInformation: newArr });
  };
  const onInputLinkChange = (value: string, index: number) => {
    const newArr = formValues.contactInformation?.map((link, i) => {
      if (i === index) {
        link.link = value;
      }
      return link;
    });
    // setProfileLinks(newArr);
    setFormValues({ ...formValues, contactInformation: newArr });
  };

  const addNewLink = () => {
    const prevRows = [...formValues.contactInformation];
    prevRows.push({
      name: "",
      link: ""
    });
    setFormValues({ ...formValues, contactInformation: prevRows });
  };

  const onDeleteLink = (index: number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newArr = formValues.contactInformation.filter((link, i) => {
      return i !== index;
    });
    setFormValues({ ...formValues, contactInformation: newArr });
  };

  return (
    <>
      <div className={classes.wrapper2}>
        <section className={classes.userinfo1}>
          <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
            <Grid item xs={3}>
              <AddImageModal
                openModal={openModal}
                handleCloseModal={() => setOpenModal(false)}
                handleSaveChanges={function (): void {
                  throw new Error("Function not implemented.");
                }}
                formValues={formValues}
                setFormValues={setFormValues}
                setOpenModal={setOpenModal}
              />
              <div className={classes.editImageContainer}>
                {formValues.image !== "" ? (
                  <span className={classes.editAndDelete}>
                    <MuiIcons
                      className={classes.actionButtons}
                      icon="cancel"
                      onClick={() => setFormValues({ ...formValues, image: "" })}
                      fontSize="small"
                    />
                    <MuiIcons
                      className={classes.actionButtons}
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
                  src={formValues.image ? formValues.image : ""}
                  className={classes.userProfilePic}
                  variant="rounded"
                />
              </div>
            </Grid>
            <Grid item xs={8} sm={9} md={8} lg={9}>
              <TextInput
                id="fullname"
                name="fullname"
                value={formValues.fullname}
                type="text"
                autoFocus={true}
                maxLength={24}
                placeholder="Full Name"
                onChange={handleChange}
              />
              <TextInput
                id="title"
                name="title"
                value={formValues.title}
                maxLength={24}
                type="text"
                autoFocus={true}
                placeholder="Title"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </section>
        <section className={classes.userinfo3}>
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={12}>
              <TextArea
                style={{
                  minWidth: "100%",
                  maxWidth: "-webkit-fill-available",
                  maxHeight: "150px",
                  minHeight: "150px"
                  // margin: "0px 8px"
                }}
                value={formValues.about}
                name="about"
                id="about"
                rows={5}
                maxLength={300}
                columns={33}
                placeholder="About"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </section>
        <section className={classes.userinfo}>
          <Grid alignItems="center" container justifyContent="space-around">
            <Grid item xs={12}>
              <div className={classes.colorContainer}>
                {BackroundColorPicker.map((background, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setFormValues({
                        ...formValues,
                        background: background
                      });
                    }}
                    className={
                      formValues.background !== background
                        ? classes.colorDiv
                        : classes.colorDivSelected
                    }
                    style={{
                      backgroundColor: `${background}`
                    }}
                  ></div>
                ))}
              </div>
            </Grid>
          </Grid>
        </section>
        <section className={classes.userinfo}>
          {formValues.contactInformation?.map((link, index) => (
            <Grid
              key={index}
              alignItems="center"
              container
              justifyContent="space-between"
            >
              <div className={classes.selectLink}>
                <Grid item xs={4}>
                  <SelectWithInput
                    value={link.name}
                    options={URLS}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    handleChange={(e: any) => onSelectChange(e.target.value, index)}
                  />
                </Grid>
                <Grid item xs={7}>
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
                  <div style={{ display: "flex", alignItems: "center", float: "right" }}>
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
        <section className={classes.addLink}>
          <Grid container alignItems="center">
            <div
              style={
                formValues.contactInformation.length === 5
                  ? { justifyContent: "flex-end", display: "flex", width: "100%" }
                  : { justifyContent: "space-between", display: "flex", width: "100%" }
              }
            >
              {formValues.contactInformation.length !== 5 ? (
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
              {institutionButton === false ? (
                <div className={classes.switchInstitution}>
                  <p className={classes.showInstitution}>
                    <MuiIcons icon="briefCase" className={classes.iconSmall} />
                    Show Institution
                  </p>
                  <AntSwitch
                    checked={showInstitution}
                    name="cardInstitutionCheck"
                    onChange={handleHeaderChange}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </Grid>
        </section>
      </div>
    </>
  );
};
