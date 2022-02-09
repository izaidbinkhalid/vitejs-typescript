import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Avatar, Typography } from "@material-ui/core";
import CoverImage from "assets/cover.png";
import MuiIcon from "Components/Icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      borderRadius: "11px",
      boxShadow: "0px 102px 155px -58px #00000008",
      background: theme.palette.gray[100],
      padding: theme.spacing(0.2)
    },
    detailContainer: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      marginBottom: theme.spacing(6),
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(4)
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: theme.spacing(2)
      }
    },
    imageAndNameContainer: {
      transition: "0.3s",
      marginLeft: theme.spacing(3),
      marginTop: -theme.spacing(8),
      [theme.breakpoints.down("md")]: {
        marginTop: -theme.spacing(7),
        marginLeft: theme.spacing(0.5)
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: -theme.spacing(6),
        marginLeft: -theme.spacing(1)
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: -theme.spacing(4),
        marginLeft: -theme.spacing(1)
      }
    },
    userImage: {
      width: theme.spacing(20),
      height: theme.spacing(20),
      boxShadow: "0px 9px 20px 0px #0000001A",
      borderRadius: "11px",
      border: `5px solid ${theme.palette.gray[100]}`,
      [theme.breakpoints.down("md")]: {
        width: theme.spacing(18),
        height: theme.spacing(18)
      },
      [theme.breakpoints.down("sm")]: {
        width: theme.spacing(14),
        height: theme.spacing(14)
      },
      [theme.breakpoints.down("xs")]: {
        width: theme.spacing(11),
        height: theme.spacing(11)
      }
    },
    coverImage: {
      width: "100%",
      height: theme.spacing(30),
      boxShadow: "0px 9px 20px 0px #0000001A",
      borderRadius: "11px",
      [theme.breakpoints.down("md")]: {
        height: theme.spacing(25)
      },
      [theme.breakpoints.down("sm")]: {
        height: theme.spacing(20)
      },
      [theme.breakpoints.down("xs")]: {
        height: theme.spacing(17)
      }
    },
    nameDetailContainer: {
      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(1)
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: 0
      },
      [theme.breakpoints.down("xs")]: {
        paddingLeft: theme.spacing(1)
      }
    },
    profileName: {
      fontWeight: 600,
      lineHeight: 1,
      color: theme.palette.secondary.dark,
      [theme.breakpoints.down("sm")]: {
        color: theme.palette.secondary.light,
        fontSize: theme.spacing(2.5)
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.spacing(2)
      }
    },
    userOccupation: {
      fontWeight: 400,
      lineHeight: 1,
      color: theme.palette.secondary.dark,
      [theme.breakpoints.down("sm")]: {
        color: theme.palette.secondary.light,
        fontSize: theme.spacing(2)
      },
      [theme.breakpoints.down("xs")]: {
        color: theme.palette.secondary.light,
        fontSize: theme.spacing(1.5)
      }
    },
    userLocation: {
      fontWeight: 400,
      marginTop: theme.spacing(1),
      color: theme.palette.secondary.dark,
      [theme.breakpoints.down("sm")]: {
        color: theme.palette.secondary.light,
        marginTop: theme.spacing(0.3),
        fontSize: theme.spacing(1.3)
      }
    },
    profileConnections: {
      paddingRight: theme.spacing(1),
      justifyContent: "flex-end",
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      fontSize: theme.spacing(1),
      color: theme.palette.secondary.dark,
      [theme.breakpoints.down("md")]: {
        color: theme.palette.secondary.light,
        fontSize: theme.spacing(1)
      }
    },
    conectionCount: {
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.spacing(2)
      }
    },
    conectionIcon: {
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.spacing(2.5)
      }
    }
  })
);

export const ProfileCover = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <Avatar src={CoverImage} variant="square" className={classes.coverImage} />
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        className={classes.detailContainer}
      >
        <Grid item xs={10}>
          <Grid container alignItems="flex-end" className={classes.imageAndNameContainer}>
            <Grid item lg={3} md={3} sm={4} xs={4}>
              <Avatar
                src={
                  "https://i.pinimg.com/originals/74/8c/05/748c0557995b0028c4076d87cf1826d2.jpg"
                }
                variant="square"
                className={classes.userImage}
              />
            </Grid>
            <Grid
              item
              lg={9}
              md={9}
              sm={8}
              xs={8}
              className={classes.nameDetailContainer}
            >
              <Typography variant="h4" className={classes.profileName}>
                Cristina Adams
              </Typography>
              <Typography variant="h6" className={classes.userOccupation}>
                Product Designer
              </Typography>
              <Typography variant="body2" className={classes.userLocation}>
                New York
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <div className={classes.profileConnections}>
            <Typography variant="h5" className={classes.conectionCount}>
              173
            </Typography>
            &nbsp;&nbsp;
            <MuiIcon icon="persons" fontSize="large" className={classes.conectionIcon} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
