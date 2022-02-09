import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography, Grid, Collapse } from "@material-ui/core";
import Button from "Components/Button";
import MuiIcon from "Components/Icons";
import { SocialLinksData } from "Data/SocialLinksData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    recommendedBtnDiv: {},
    connectBtn: {
      borderRadius: "30px",
      color: theme.palette.secondary.main,
      background: theme.palette.gray[100],
      boxShadow: "0px 31px 51px 0px #00000008",
      width: "100%",
      fontSize: theme.spacing(1.8),
      [theme.breakpoints.down("md")]: {
        fontSize: theme.spacing(1.5)
      }
    },
    aboutHeading: {
      color: theme.palette.secondary.dark
    },
    bioContainer: {
      borderRadius: "12px",
      color: theme.palette.secondary.main,
      background: theme.palette.gray[100],
      marginTop: theme.spacing(0.5),
      padding: theme.spacing(1),
      fontSize: theme.spacing(1.6),
      textAlign: "justify",
      boxShadow: "0px 31px 74px -10px #0000001A",
      marginBottom: theme.spacing(1.2)
    },
    iconColor: {
      color: theme.palette.secondary.dark,
      textAlign: "center"
    },
    alignText: {
      alignContent: "center",
      display: "flex",
      cursor: "pointer",
      color: theme.palette.gray[900],
      textAlign: "center",
      justifyContent: "center "
    }
  })
);

const ProfileDetail = () => {
  const classes = useStyles();
  const [showMoreIcons, setShowMoreIcons] = React.useState<boolean>(false);

  return (
    <div>
      <Grid container alignItems="center" justifyContent="center" spacing={1}>
        <Grid item xs={5}>
          <Button
            text="Connect"
            className={classes.connectBtn}
            midIcon={<MuiIcon icon="add" fontSize="small" />}
          />
        </Grid>
        <Grid item xs={7}>
          <Button
            text="Recommend"
            className={classes.connectBtn}
            midIcon={<MuiIcon icon="like" fontSize="small" />}
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.aboutHeading}>
            About Khalid
          </Typography>
          <div className={classes.bioContainer}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas officiis odit
            voluptatem! Ad, suscipit doloremque! Quisquam, dolorum, aliquid cum repellat
            incidunt asperiores earum labore sint vitae esse ipsum voluptatum architecto!
          </div>
        </Grid>
      </Grid>{" "}
      <Grid container alignItems="center" justifyContent="center" spacing={1}>
        <Grid item xs={6}>
          <Button text="Add to contacts" className={classes.connectBtn} />
        </Grid>
        <Grid item xs={6}>
          <Button text="Message" className={classes.connectBtn} />
        </Grid>
      </Grid>
      <br />
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={1}>
            {SocialLinksData.map((social, index) => (
              <Grid item xs={2} key={index}>
                <p className={classes.iconColor}>{social.icon}</p>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Collapse in={showMoreIcons} timeout="auto" unmountOnExit>
          <Grid item xs={12}>
            <Grid container alignItems="center" spacing={1}>
              {SocialLinksData.map((social, index) => (
                <Grid item xs={2} key={index}>
                  <p className={classes.iconColor}>{social.icon}</p>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Collapse>{" "}
        <Grid item xs={12}>
          <div
            className={classes.alignText}
            onClick={() => setShowMoreIcons(!showMoreIcons)}
          >
            Load {showMoreIcons ? "less" : "more"}
            <MuiIcon icon={showMoreIcons ? "arrowUp" : "arrowDown"} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileDetail;
