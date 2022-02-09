import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import MuiIcons from "Components/Icons";
import BarChart from "Components/Chart/BarChart";
import { SocialLinksData } from "Components/Card/Data/SocialIcons";
import SocialClicks from "Components/Card/SocialClicks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    InScrollContainerCard: {
      maxHeight: "150px",
      overflowY: "auto",
      width: "100%",
      borderRadius: "8px",
      overflowX: "hidden"
    },
    wrapper: { padding: theme.spacing(0, 1) },
    card: {
      height: "auto",
      marginLeft: "0px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center ",
      flexWrap: "wrap"
    },
    ProfileLink: {
      display: "inline-flex",
      verticalAlign: "middle",
      overflow: "hidden",
      alignItems: "center",
      "&>p": {
        marginLeft: theme.spacing(1)
      }
    },
    cardProfileLink: {
      display: "inline-block"
    },
    notificationIconButton: {
      textDecoration: "none",
      "&focus": {
        border: "1px solid black"
      }
    },
    profileImage: {
      width: "100%",
      height: theme.spacing(6.6),
      [theme.breakpoints.down("md")]: {
        width: theme.spacing(6),
        height: theme.spacing(6)
      },
      padding: theme.spacing(0.5),
      transition: "0.5s",
      borderRadius: "20px"
    },
    cardName: {
      [theme.breakpoints.down("md")]: {
        fontSize: theme.spacing(1.3)
      },
      margin: "0px",
      fontSize: theme.spacing(1.7),
      fontWeight: 500,
      color: theme.palette.secondary.main
    },

    cardDescription: {
      margin: "0px",
      fontSize: "10px",
      maxWidth: "100px",
      marginTop: "-5px",
      color: theme.palette.secondary.main
    },
    userName: {
      margin: "0px",
      fontSize: "10px",
      fontWeight: "bold",
      color: theme.palette.primary.main,
      maxWidth: "100px"
    },
    switchContainer: {
      paddingRight: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
        paddingRight: theme.spacing(2.3)
      }
    },
    buisnessIcon: {
      fontSize: theme.spacing(2.5),
      [theme.breakpoints.down("md")]: {
        fontSize: theme.spacing(2)
      }
    },
    backdrop: {
      backgroundColor: "transparent"
    },
    paper: {
      background: "#517A8F4A",
      border: "none",
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
    },
    close: {
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "space-between",
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(1.5)
      }
    },
    heading: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "18px",
      color: "#58696D",
      marginBottom: theme.spacing(0.5)
    },
    clicks: {
      background: "rgba(251, 251, 251, 0.7)",
      // boxShadow: "0px 102px 155px -58px rgba(0, 0, 0, 0.25)",
      borderRadius: "15px",
      padding: theme.spacing(5, 0, 0, 0)
    },
    linksClicks: {
      padding: theme.spacing(3)
    },
    buttonsSections: {
      padding: theme.spacing(0, 3)
    },
    alignText: {
      textAlign: "center",
      padding: "0.5rem 0"
    },
    button2: {
      background: "transparent",
      borderRadius: "40px",
      border: `1px solid ${theme.palette.gray[900]}`,
      height: "24px",
      width: "fit-content",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "9px",
      padding: theme.spacing(1),
      cursor: "pointer",
      [theme.breakpoints.down("md")]: {
        fontSize: "7px"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "9px",
        width: "100px",
        height: "35px"
      }
    },
    plusIcon: {
      color: theme.palette.gray[500],
      // margin: theme.spacing(0, 0.25),
      fontSize: "10px"
    },
    section2: {
      // maxWidth: "90%",
      maxWidth: "345px"
    },
    section3: {
      // maxWidth: "90%",
      maxWidth: "370px"
    },
    employer: {
      background: "rgba(251, 251, 251, 0.7)",
      boxShadow: "0px 102px 155px -58px rgba(0, 0, 0, 0.25)",
      borderRadius: "15px",
      padding: theme.spacing(2)
    },
    emoloyerSubSection: {
      padding: theme.spacing(1),
      display: "flex",
      alignItems: "center"
    },
    countDiv: {
      justifyContent: "center"
    },
    numberCount: {
      margin: "0px",
      justifyContent: "flex-start",
      display: "flex",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 200,
      fontSize: "48px",
      lineHeight: "72px",
      textTransform: "uppercase",
      color: "#58696D"
    },
    countDetail: {
      margin: "0px",
      justifyContent: "flex-start",
      display: "flex",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#58696D"
    },
    interactDetail: {
      margin: "0px",
      justifyContent: "flex-start",
      display: "flex",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "13px",
      lineHeight: "18px",
      color: "#58696D"
    },
    chartDiv: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      marginRight: theme.spacing(2)
    },
    flex: {
      display: "flex",
      alignItems: "center"
    }
  })
);

export const Clicks = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.section3}>
        <p className={classes.heading}>Clicks</p>
        <div className={classes.clicks}>
          <Grid item xs={12}>
            <div className={classes.buttonsSections}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Grid item xs={3}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className={classes.button2}>
                      &nbsp;Connect&nbsp;
                      <MuiIcons
                        className={classes.plusIcon}
                        icon="add"
                        fontSize="small"
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={5}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className={classes.button2}>
                      &nbsp;Recommend&nbsp;
                      <MuiIcons
                        className={classes.plusIcon}
                        icon="like"
                        fontSize="small"
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className={classes.button2}>&nbsp;Add to Contact&nbsp;</div>
                  </div>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid className={classes.linksClicks} container>
            {SocialLinksData?.map((icon, index) => {
              return (
                <Grid className={classes.flex} item xs={2} key={index}>
                  <SocialClicks showCount={true} icons={icon} />
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={12}>
            <BarChart
              radius={10}
              width={18}
              data={[
                { x: "Jan", y: 1 },
                { x: "Feb", y: 1 },
                { x: "Mar", y: 2 },
                { x: "Apr", y: 3 },
                { x: "May", y: 5 },
                { x: "Jun", y: 3 },
                { x: "July", y: 4 },
                { x: "Aug", y: 1 },
                { x: "Sep", y: 3 },
                { x: "Oct", y: 4 },
                { x: "Nov", y: 7 },
                { x: "Dec", y: 4 }
              ]}
              showLabel={true}
              padding={10}
            />
          </Grid>
        </div>
      </div>
    </div>
  );
};
