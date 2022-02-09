import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Avatar, Grid, Tooltip } from "@material-ui/core";
import MuiIcons from "Components/Icons";
import image from "assets/ar200.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "18px",
      color: "#58696D",
      marginBottom: theme.spacing(0.5)
    },
    actionButtons: {
      color: theme.palette.gray[100],
      [theme.breakpoints.down("xs")]: {
        color: theme.palette.gray[100]
      }
    },
    editImageContainer: {
      position: "relative",
      "&:hover $editAndDelete": {
        opacity: 0.8,
        zIndex: 1
      }
    },
    editAndDelete: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "45px",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      background: theme.palette.secondary.dark,
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
      width: "-webkit-fill-available",
      height: "130px",
      //   margin: "auto",
      //   marginRight: "5px",
      borderRadius: "10px"
    },
    removeCSS: {
      background: "none",
      boxShadow: "none",
      border: "none",
      margin: "0px",
      padding: "0px",
      alignItems: "center",
      display: "flex"
    },
    actionText: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12.2473px",
      lineHeight: "18px",
      color: theme.palette.gray[100],
      marginLeft: "5px"
    }
  })
);

export const ARMarker = () => {
  const classes = useStyles();
  // const [image, setImageUrl] = React.useState("");

  //   console.log(image);

  return (
    <Grid item xs={8} sm={6} md={6} lg={6}>
      <div>
        <p className={classes.heading}>AR Marker</p>
        <Grid item xs={12}>
          <div>
            <div className={classes.editImageContainer}>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                type="file"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              //   onChange={e => setImageUrl(URL.createObjectURL(e.target.files[0]))}
              />
              <span className={classes.editAndDelete}>
                <Tooltip title="Upload" aria-label="upload" placement="bottom" arrow>
                  <label htmlFor="raised-button-file">
                    <button className={classes.removeCSS}>
                      <MuiIcons
                        className={classes.actionButtons}
                        icon="CloudUploadIcon"
                        fontSize="small"
                      />
                      <p className={classes.actionText}>Upload</p>
                    </button>
                  </label>
                </Tooltip>
                <span style={{ color: "#FBFBFB" }}>|</span>
                <Tooltip title="Download" aria-label="download" placement="bottom" arrow>
                  <button className={classes.removeCSS}>
                    <MuiIcons
                      className={classes.actionButtons}
                      icon="CloudDownloadIcon"
                      fontSize="small"
                    />
                    <p className={classes.actionText}>Download</p>
                  </button>
                </Tooltip>
              </span>

              {/* <div> */}
              <Avatar src={image} className={classes.userProfilePic} variant="rounded" />
            </div>
          </div>
        </Grid>
      </div>
    </Grid>
  );
};
