import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Avatar, Typography } from "@material-ui/core";
import MuiIcon from "Components/Icons";
import { UserContext } from 'Context/AuthContext'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      marginBottom: theme.spacing(2)
    },
    profileCard: {
      background: theme.palette.gray[100],
      borderRadius: "11px",
      // height: "123px"
    },
    largeCardDetails: {
      paddingRight: theme.spacing(1),
      border: "1px solid #FBFBFB",
      background: "#FBFBFB",
      borderRadius: "11px 0 0 11px",
      borderRightRadius: "10px",
      height: "12rem",
      [theme.breakpoints.down("sm")]: {
        borderRadius: "11px"
      }
    },
    profileImage: ({ isLarge }: IProfileCardProps) => ({
      width: "100%",
      height: isLarge ? theme.spacing(23) : theme.spacing(15),

      [theme.breakpoints.down("md")]: {
        height: isLarge ? theme.spacing(23) : theme.spacing(13)
      },
      [theme.breakpoints.down("xs")]: {
        height: isLarge ? theme.spacing(23) : theme.spacing(16)
      },
      borderRadius: "11px",
      boxShadow: "25px 0px 51px 0px #00000017",
      transition: "0.5s"
    }),
    profileDetails: {
      paddingLeft: theme.spacing(1),
      color: theme.palette.secondary.main,
      float: "right",
      [theme.breakpoints.down('xs')]: {

        padding: theme.spacing(2)
      }
    },
    profileName: ({ isLarge }: IProfileCardProps) => ({
      fontSize: theme.spacing(3),
      [theme.breakpoints.down("md")]: {
        fontSize: theme.spacing(2.5)
      },
      fontWeight: 500,
      transition: "0.5s",
      lineHeight: 1.1,
    }),
    profileDescription: {
      fontFamily: "Poppins",
      fontSize: "12px",
      fontWeight: 400,
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1)
    },
    profileFollowers: {
      display: "flex",
      justifyContent: "start",
      // paddingLeft: theme.spacing(1),
      // paddingRight: theme.spacing(2),
    },
    text: {
      fontSize: theme.spacing(1.7),
      fontWeight: 600,
      verticalAlign: "middle",
      display: "inline-block",
      color: theme.palette.secondary.main,
      transition: "0.5s"
    },
    textIcon: {
      [theme.breakpoints.down("md")]: {
        fontSize: theme.spacing(2)
      },
      fontSize: theme.spacing(2.3),
      marginLeft: theme.spacing(0.5),
      verticalAlign: "middle",
      display: "inline-block",
      transition: "0.5s"
    },
    customImage: {
      width: "10.9rem",
      height: "11.6rem",
      objectFit: "cover",
      borderRadius: "11px",
      margin: "0.3rem 0rem 0.3rem 0.1rem",
      boxShadow: "25px 0px 51px 0px #00000017"
    }
  })
);
interface IProfileCardProps {
  readonly isLarge?: boolean;
}

const ProfileCard: React.FC<IProfileCardProps> = ({ isLarge }) => {
  const classes = useStyles({ isLarge });
  const { user } = React.useContext(UserContext);

  return (
    <div className={classes.wrapper}>
      {/* <Paper> */}
      <Grid container alignItems="center" className={isLarge ? classes.largeCardDetails : classes.profileCard}>
        <Grid item xs={isLarge ? 4 : 3} sm={isLarge ? 6 : 5}>
          <Avatar
            variant="square"
            alt="profile pic"
            src="https://image.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg"
            className={classes.profileImage}
          />
        </Grid>
        <Grid item xs={isLarge ? 8 : 9} sm={isLarge ? 6 : 7} className={classes.profileDetails}>
          <Typography className={classes.profileName} >{`${user.firstName}`}</Typography>
          <Typography className={classes.profileName} >{` ${user.lastName}`}</Typography>
          <Typography className={classes.profileDescription} noWrap>Full Stack Developer</Typography>
          <div className={classes.profileFollowers}>
            <div>
              <span className={classes.text}>173 </span>
              <MuiIcon
                icon="persons"
                className={classes.textIcon}
                color="secondary"
                fontSize="small"
              />
            </div>&nbsp;&nbsp;&nbsp;
            <div>
              <span className={classes.text}>31 </span>
              <MuiIcon icon="like" className={classes.textIcon} color="secondary" />
            </div>
          </div>
        </Grid>
      </Grid>
      {/* </Paper> */}
    </div>
  );
};

export default ProfileCard;
