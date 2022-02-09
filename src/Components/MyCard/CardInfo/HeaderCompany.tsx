import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Avatar, Collapse, Grid, Tooltip } from "@material-ui/core";
import MuiIcons from "Components/Icons";
import profileImg from "assets/profile.jpg";
import TextInput from "Components/Form/TextInput";
import { IntialValues } from "./CardInfo";

interface Props {
  formValues: IntialValues;
  setFormValues: React.Dispatch<React.SetStateAction<IntialValues>>;
  email?: string;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
  website?: string;
  setWebsite?: React.Dispatch<React.SetStateAction<string>>;
  phone?: string;
  setPhone?: React.Dispatch<React.SetStateAction<string>>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: { maxWidth: "345px" },
    heading: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "18px",
      color: "#58696D",
      marginBottom: theme.spacing(0.5)
    },
    editIcon: {
      fontSize: "14px",
      color: "#58696D",
      marginBottom: theme.spacing(0.5),
      cursor: "pointer"
    },
    cardSection1: {
      padding: theme.spacing(0.5),
      backgroundColor: theme.palette.gray[100],
      boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)",
      borderRadius: "12px",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1)
      }
    },
    subsection1_1: {
      display: "flex",
      alignItems: "center"
    },
    smallPic: {
      borderRadius: "8px",
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: theme.spacing(1.5)
    },
    companyNameSmall: {
      color: theme.palette.secondary.dark,
      fontFamily: "Poppins",
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "16px",
      letterSpacing: "0em",
      textAlign: "left",
      margin: "0px",
      overflow: "hidden",
      [theme.breakpoints.down("md")]: {
        fontSize: "13px",
        lineHeight: "16px"
      }
    },
    companyTypeSmall: {
      color: theme.palette.secondary.dark,
      fontFamily: "Poppins",
      fontSize: "10px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "left",
      margin: "0px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      [theme.breakpoints.down("xs")]: {
        fontSize: "8px"
      }
    },
    emailIcon: (props: Props) => ({
      color: props.email === "" ? theme.palette.gray[700] : theme.palette.secondary.dark,
      margin: theme.spacing(1),
      cursor: "pointer",
      pointerEvents: props.email === "" ? "none" : "auto",
      [theme.breakpoints.down("md")]: {
        margin: theme.spacing(0.5)
      },
      [theme.breakpoints.down("xs")]: {
        margin: theme.spacing(0.45)
      }
    }),
    webIcon: (props: Props) => ({
      color:
        props.website === "" ? theme.palette.gray[700] : theme.palette.secondary.dark,
      margin: theme.spacing(1),
      cursor: "pointer",
      [theme.breakpoints.down("md")]: {
        margin: theme.spacing(0.5)
      },
      [theme.breakpoints.down("xs")]: {
        margin: theme.spacing(0.45)
      }
    }),
    phoneIcon: (props: Props) => ({
      color: props.phone === "" ? theme.palette.gray[700] : theme.palette.secondary.dark,
      margin: theme.spacing(1),
      cursor: "pointer",
      [theme.breakpoints.down("md")]: {
        margin: theme.spacing(0.5)
      },
      [theme.breakpoints.down("xs")]: {
        margin: theme.spacing(0.45)
      }
    }),
    collapse: {
      borderRadius: "14px",
      background: "#58696D33"
    },
    innerCollapse: {
      padding: theme.spacing(1)
    },
    info: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#58696D",
      margin: "0px"
    },
    infoFeild: {
      borderRadius: "12px",
      cursor: "pointer",
      "&:hover": {
        background: "#E4E9EA",
        boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)"
      }
    },
    iconDiv: {
      alignItems: "center",
      justifyContent: "center",
      display: "flex"
    },
    removeCSS: {
      background: "none",
      boxShadow: "none",
      border: "none",
      margin: "0px",
      padding: "0px",
      display: "flex"
    }
  })
);

export const HeaderCompany: React.FC<Props> = props => {
  const classes = useStyles(props);
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [emailedit, setEmailEdit] = React.useState(false);
  const [websiteEdit, setWebsiteEdit] = React.useState(false);
  const [phoneEdit, setPhoneEdit] = React.useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    props.setFormValues({ ...props.formValues, [name]: value });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSaveEmail = (e: any) => {
    if (e.key === "Enter") {
      const { name, value } = e.target;
      props.setFormValues({ ...props.formValues, [name]: value });
      setEmailEdit(false);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSaveWeb = (e: any) => {
    if (e.key === "Enter") {
      const { name, value } = e.target;
      props.setFormValues({ ...props.formValues, [name]: value });
      setWebsiteEdit(false);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSavePhone = (e: any) => {
    if (e.key === "Enter") {
      const { name, value } = e.target;
      props.setFormValues({ ...props.formValues, [name]: value });
      setPhoneEdit(false);
    }
  };

  const handleEdit = () => {
    setEmailEdit(!emailedit);
    setWebsiteEdit(!websiteEdit);
    setPhoneEdit(!phoneEdit);
  };

  const handleSave = () => {
    setEmailEdit(false);
    setWebsiteEdit(false);
    setPhoneEdit(false);
    setExpanded(!expanded);
  };

  return (
    <Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline"
        }}
      >
        <p className={classes.heading}>Header</p>
        {emailedit === true && websiteEdit === true && phoneEdit === true ? (
          <Tooltip title="Save" aria-label="save" placement="top" arrow>
            <button className={classes.removeCSS}>
              <MuiIcons
                className={classes.editIcon}
                icon="check"
                fontSize="small"
                onClick={handleSave}
              />
            </button>
          </Tooltip>
        ) : expanded === true ? (
          <Tooltip title="Close" aria-label="close" placement="top" arrow>
            <button className={classes.removeCSS}>
              <MuiIcons
                className={classes.editIcon}
                icon="close"
                fontSize="small"
                onClick={() => setExpanded(!expanded)}
              />
            </button>
          </Tooltip>
        ) : (
          <Tooltip title="Edit" aria-label="edit" placement="top" arrow>
            <button className={classes.removeCSS}>
              <MuiIcons
                className={classes.editIcon}
                icon="edit"
                fontSize="small"
                onClick={() => setExpanded(!expanded)}
              />
            </button>
          </Tooltip>
        )}
      </div>
      <div className={classes.collapse}>
        <div className={classes.wrapper}>
          <section className={classes.cardSection1}>
            <Grid container>
              <Grid className={classes.subsection1_1} item xs={8} alignItems="center">
                <Avatar className={classes.smallPic} variant="rounded" src={profileImg} />

                <div>
                  <p className={classes.companyNameSmall}>Company with a long name</p>
                  <p className={classes.companyTypeSmall}>Company industry</p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div
                  style={{
                    padding: "9px 5px",
                    float: "right",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-evenly"
                  }}
                >
                  <MuiIcons
                    className={classes.webIcon}
                    icon="PublicIcon"
                    fontSize="medium"
                  />
                  <MuiIcons
                    className={classes.emailIcon}
                    icon="MailOutlineIcon"
                    fontSize="medium"
                  />
                  <MuiIcons
                    className={classes.phoneIcon}
                    icon="CallOutlinedIcon"
                    fontSize="medium"
                  />
                </div>
              </Grid>
            </Grid>
          </section>
        </div>

        <Collapse
          style={{ width: "100%", transition: ".5s  all ease" }}
          in={expanded}
          timeout="auto"
          unmountOnExit
        >
          <div className={classes.innerCollapse}>
            <Grid className={classes.infoFeild} container alignItems="center">
              <Grid item xs={2}>
                <div className={classes.iconDiv}>
                  <MuiIcons
                    className={classes.emailIcon}
                    icon="MailOutlineIcon"
                    fontSize="medium"
                  />
                </div>
              </Grid>
              <Grid item xs={10}>
                {emailedit === true ? (
                  <TextInput
                    style={{
                      backgroundColor: "#58696D33",
                      margin: "0px 4px 0px 0px",
                      height: "36px"
                    }}
                    name="email"
                    value={props.formValues.email}
                    type="email"
                    autoFocus={true}
                    placeholder="Email"
                    onChange={handleChange}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onKeyDown={(e: any) => handleSaveEmail(e)}
                  />
                ) : (
                  <Tooltip
                    title="Double Click To Edit"
                    aria-label="edit"
                    placement="right"
                    arrow
                  >
                    <button className={classes.removeCSS}>
                      <p className={classes.info} onDoubleClick={handleEdit}>
                        {props.formValues.email}
                      </p>
                    </button>
                  </Tooltip>
                )}
              </Grid>
            </Grid>
            <Grid className={classes.infoFeild} container alignItems="center">
              <Grid item xs={2}>
                <div className={classes.iconDiv}>
                  <MuiIcons
                    className={classes.webIcon}
                    icon="PublicIcon"
                    fontSize="medium"
                  />
                </div>
              </Grid>
              <Grid item xs={10}>
                {websiteEdit === true ? (
                  <TextInput
                    style={{
                      backgroundColor: "#58696D33",
                      margin: "0px 4px 0px 0px",
                      height: "36px"
                    }}
                    name="website"
                    value={props.formValues.website}
                    type="text"
                    autoFocus={true}
                    placeholder="Web Address"
                    onChange={handleChange}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onKeyDown={(e: any) => handleSaveWeb(e)}
                  />
                ) : (
                  <Tooltip
                    title="Double Click To Edit"
                    aria-label="edit"
                    placement="right"
                    arrow
                  >
                    <button className={classes.removeCSS}>
                      <p className={classes.info} onDoubleClick={handleEdit}>
                        {props.formValues.website}
                      </p>
                    </button>
                  </Tooltip>
                )}
              </Grid>
            </Grid>
            <Grid className={classes.infoFeild} container alignItems="center">
              <Grid item xs={2}>
                <div className={classes.iconDiv}>
                  <MuiIcons
                    className={classes.phoneIcon}
                    icon="CallOutlinedIcon"
                    fontSize="medium"
                  />
                </div>
              </Grid>
              <Grid item xs={10}>
                {phoneEdit === true ? (
                  <TextInput
                    style={{
                      backgroundColor: "#58696D33",
                      margin: "0px 4px 0px 0px",
                      height: "36px"
                    }}
                    name="phone"
                    value={props.formValues.phone}
                    type="text"
                    autoFocus={true}
                    placeholder="Phone Number"
                    onChange={handleChange}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onKeyDown={(e: any) => handleSavePhone(e)}
                  />
                ) : (
                  <Tooltip
                    title="Double Click To Edit"
                    aria-label="edit"
                    placement="right"
                    arrow
                  >
                    <button className={classes.removeCSS}>
                      <p className={classes.info} onDoubleClick={handleEdit}>
                        {props.formValues.phone}
                      </p>
                    </button>
                  </Tooltip>
                )}
              </Grid>
            </Grid>
          </div>
        </Collapse>
      </div>
    </Grid>
  );
};
