import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { Grid, Tooltip, Snackbar } from "@material-ui/core";
import MuiIcons from "Components/Icons";
import { QRCode } from "react-qrcode-logo";

interface Props {
  value: string;
}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: { maxWidth: "140px" },
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
      bottom: 5,
      left: 0,
      width: "100%",
      height: "45px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      background: theme.palette.secondary.dark,
      backdropFilter: "blur(26px)",
      borderRadius: "6px 6px 14px 14px",
      cursor: "pointer",
      opacity: 0,
      transition: "all .3s",
      [theme.breakpoints.down("sm")]: {
        opacity: 0.8,
        zIndex: 1,
        height: "35px"
      }
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

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const QRcode: React.FC<Props> = ({ value }: Props) => {
  const classes = useStyle();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const qrRef: React.MutableRefObject<any> = React.useRef();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleDownload = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const image = canvas.toDataURL("image/png");
    const anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = "qr-code-sailspad.png";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(value);
    handleClick();
  };

  return (
    <Grid style={{ display: "flex" }} item xs={12} md={6} lg={5} justifyContent="center">
      <div className={classes.wrapper}>
        <p className={classes.heading}>QR Code</p>
        <Grid item xs={12}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div className={classes.editImageContainer}>
              <span className={classes.editAndDelete}>
                <Tooltip title="Copy" aria-label="copy" placement="bottom" arrow>
                  <button className={classes.removeCSS}>
                    <MuiIcons
                      className={classes.actionButtons}
                      icon="copy"
                      fontSize="small"
                      onClick={copy}
                    />
                  </button>
                </Tooltip>
                <Tooltip title="View" aria-label="view" placement="bottom" arrow>
                  <button className={classes.removeCSS}>
                    <MuiIcons
                      className={classes.actionButtons}
                      icon="view"
                      fontSize="small"
                    />
                  </button>
                </Tooltip>
                <Tooltip title="Download" aria-label="download" placement="bottom" arrow>
                  <button className={classes.removeCSS}>
                    <MuiIcons
                      className={classes.actionButtons}
                      icon="download"
                      fontSize="small"
                      onClick={handleDownload}
                    />
                  </button>
                </Tooltip>
              </span>

              {/* <div> */}
              <div ref={qrRef}>
                <QRCode size={110} value={value} qrStyle="dots" eyeRadius={8} />
              </div>

              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <Alert onClose={handleClose} severity="success">
                  Copied...
                </Alert>
              </Snackbar>
            </div>
          </div>
        </Grid>
      </div>
    </Grid>
  );
};
