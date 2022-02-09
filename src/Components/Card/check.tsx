/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Avatar } from "@material-ui/core";
import MuiIcons from "Components/Icons";

export type Conatct = {
  readonly name: string;
  readonly link: string;
};

interface Props {
  readonly showHeader: boolean;
  readonly image: string;
  readonly companyName: string;
  readonly companyType: string;
  readonly about: string;
  readonly background: string;
  readonly contactInfo: Conatct[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainCard: {
      maxWidth: "450px",
      maxHeight: "570px",
      margin: "10% auto",
      marginBottom: "0px",
      [theme.breakpoints.down("md")]: {
        margin: "0 auto"
      }
    },
    mainCardWithColor: (props: Props) => ({
      background: props.background,
      boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)",
      borderRadius: "12px",
      transition: "0.5s",
      marginTop: theme.spacing(1)
    }),
    smallPic: {
      borderRadius: "8px",
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: theme.spacing(1.5)
    },
    largePic: {
      borderRadius: "10px",
      width: theme.spacing(14),
      height: theme.spacing(15),
      [theme.breakpoints.down("md")]: {
        width: theme.spacing(14),
        height: theme.spacing(15)
      },
      [theme.breakpoints.down("sm")]: {
        width: theme.spacing(17),
        height: theme.spacing(17)
      },
      [theme.breakpoints.down("xs")]: {
        width: "28vw",
        height: "28vw"
      }
    },
    cardSection1: {
      padding: theme.spacing(0.5, 0, 0.5, 0.5),
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1)
      }
    },
    cardSection2: {
      background:
        "radial-gradient(41.25% 129.1% at 20.68% 50%, #ECECEC 0%, #FFFFFF 100%)",
      boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)",
      borderRadius: "12px",
      padding: theme.spacing(0.75),
      justifyContent: "start",
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0.5, 0.75)
      }
    },
    subsection1_1: {
      display: "flex",
      alignItems: "center"
    },
    companyNameSmall: {
      color: theme.palette.gray[100],
      fontFamily: "Poppins",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "20px",
      letterSpacing: "0em",
      textAlign: "left",
      margin: "0px",
      overflow: "hidden",
      [theme.breakpoints.down("md")]: {
        fontSize: "11px",
        lineHeight: "16px"
      }
    },
    companyTypeSmall: {
      color: theme.palette.gray[100],
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
    companyNamelarge: {
      color: theme.palette.secondary.dark,
      fontFamily: "Poppins",
      fontSize: "30px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "30px",
      letterSpacing: "0em",
      textAlign: "left",
      margin: "0px",
      overflow: "hidden",
      [theme.breakpoints.down("md")]: {
        fontSize: "30px",
        lineHeight: "30px"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
        lineHeight: "30px"
      }
    },
    companyTypelarge: {
      color: theme.palette.secondary.dark,
      fontFamily: "Poppins",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "left",
      margin: "0px",
      marginBottom: "1px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      [theme.breakpoints.down("xs")]: {
        fontSize: "10px",
        lineHeight: "15px"
      }
    },
    cardIconsmall: {
      color: theme.palette.gray[100],
      margin: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        margin: theme.spacing(0.5)
      },
      [theme.breakpoints.down("xs")]: {
        margin: theme.spacing(0.45)
      }
    },
    cardLinkIcons: {
      color: theme.palette.gray[100],
      margin: theme.spacing(2)
    },
    likeIcon: {
      color: theme.palette.gray[500],
      margin: theme.spacing(0, 0.25),
      fontSize: "14px"
    },
    plusIcon: {
      color: theme.palette.gray[500],
      // margin: theme.spacing(0, 0.25),
      fontSize: "10px"
    },
    aboutHeading: {
      color: theme.palette.gray[100],
      fontFamily: "Poppins",
      fontSize: "36px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "54px",
      letterSpacing: "0em",
      textAlign: "left",
      margin: theme.spacing(0.75, 2)
    },
    aboutText: {
      color: theme.palette.gray[100],
      height: "135px",
      fontFamily: "Poppins",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "justify",
      margin: theme.spacing(0, 2),
      overflow: "hidden",
      [theme.breakpoints.down("xs")]: {
        margin: theme.spacing(0, 2, 2, 2),
        height: "110px"
      }
    },
    linkSection: {
      justifyContent: "flex-start",
      alignItems: "center",
      display: "flex",
      padding: theme.spacing(0, 3),
      margin: theme.spacing(1.5, 0),
      height: "50px"
    },
    buttonsDiv: {
      margin: theme.spacing(1.5, 0),
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start"
    },
    button1: {
      backgroundColor: theme.palette.gray[100],
      marginRight: theme.spacing(2),
      height: "42px",
      boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      fontSize: "14px",
      padding: theme.spacing(0.5, 3),
      cursor: "pointer",
      [theme.breakpoints.down("xs")]: {
        fontSize: "11px",
        height: "35px",
        padding: theme.spacing(2)
      }
    },
    button2: {
      background: theme.palette.gray[100],
      borderRadius: "40px",
      height: "42px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      padding: theme.spacing(1),
      cursor: "pointer",
      [theme.breakpoints.down("xs")]: {
        fontSize: "11px",
        width: "90px",
        height: "35px"
      }
    }
  })
);

export const BigCardSimple: React.FC<Props> = props => {
  const classes = useStyles(props);
  return (
    <div>
      <div className={classes.mainCard}>
        <section className={classes.cardSection2}>
          <Grid container alignItems="center">
            <Grid item xs={4}>
              <div style={{ alignItems: "center", justifyContent: "center" }}>
                <Avatar
                  className={classes.largePic}
                  variant="rounded"
                  src={props.image}
                />
              </div>
            </Grid>
            <Grid item xs={8}>
              <div>
                <p className={classes.companyNamelarge}>
                  {props.companyName ? props.companyName : "Company Name"}
                </p>
                <p className={classes.companyTypelarge}>
                  {props.companyType ? props.companyType : "Company Title"}
                </p>
              </div>
              <div style={{ alignItems: "center", display: "flex", height: "25px" }}>
                31
                <MuiIcons className={classes.likeIcon} icon="like" fontSize="small" />
              </div>
            </Grid>
          </Grid>
        </section>
        <div className={classes.mainCardWithColor}>
          <section>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={12}>
                <div className={classes.aboutHeading}>About</div>
                <p id="aboutText" className={classes.aboutText}>
                  {props.about ? props.about : "Enter something related to your card"}
                </p>
              </Grid>
            </Grid>

            <section>
              <Grid container>
                <Grid item xs={12}>
                  <div className={classes.linkSection}>
                    {props.contactInfo?.map((link, i) => (
                      <p key={i}>
                        {" "}
                        <a
                          href={link.link !== "" ? link.link : "#"}
                          target={link.link !== "#" ? "_blank" : "_self"}
                          rel="noreferrer"
                        >
                          <MuiIcons
                            className={classes.cardLinkIcons}
                            icon={
                              link.name === "facebook"
                                ? "facebook"
                                : link.name === "instagram"
                                ? "instagram"
                                : link.name === "linkedin"
                                ? "linkedin"
                                : link.name === "twitter"
                                ? "twitter"
                                : link.name === "youtube"
                                ? "YouTubeIcon"
                                : "add"
                            }
                            fontSize="large"
                          />
                        </a>
                      </p>
                    ))}
                  </div>
                </Grid>
              </Grid>
            </section>
          </section>
        </div>
        <Grid container className={classes.buttonsDiv}>
          <div className={classes.button1}>Add to Contacts</div>
          <div className={classes.button2}>
            &nbsp;Connect&nbsp;
            <MuiIcons className={classes.plusIcon} icon="add" fontSize="small" />
          </div>
        </Grid>
      </div>
    </div>
  );
};
