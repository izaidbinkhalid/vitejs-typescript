import * as React from "react";
import { makeStyles, Theme, createStyles, useTheme } from "@material-ui/core/styles";
import {
  Avatar,
  Typography,
  Grid,
  Dialog,
  useMediaQuery,
  DialogActions
} from "@material-ui/core";
import Switch from "Components/Switch";
import MuiIcons from "Components/Icons";
import CardInfo from "./CardInfo/CardInfo";
import { CardInfoContext } from "Context/CardInfo";
import { HumburgerIcon } from "Components/Icons/humburger";
import Logo from "Components/Logo";
import { DrawerContext } from "Context/DrawerContext";
import { useHistory } from "react-router-dom";
import MuiIcon from "Components/Icons";

interface Props {
  readonly profilePic: string;
  readonly name: string;
  readonly description?: string;
  readonly live: boolean;
  readonly business?: boolean;
  readonly userName?: string;
  readonly background?: "grey" | "white";
  readonly count?: string | number;
  readonly onlyTitle?: boolean;
  readonly icon?: React.ReactNode;
  readonly size?: "xl";
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    InScrollContainerCard: {
      maxHeight: "150px",
      overflowY: "auto",
      width: "100%",
      borderRadius: "8px",
      overflowX: "hidden"
    },
    cardDiv: (props: Props) => ({
      background:
        props.background === "grey" ? theme.palette.gray[700] : theme.palette.gray[100],
      border: `1px solid ${props.background === "grey" ? theme.palette.gray[700] : theme.palette.gray[100]
        }`,
      borderRadius: "8px",
      boxshadow: "0px 31px 74px -10px #0000001A",
      marginBottom: theme.spacing(1),
      padding: theme.spacing(0.1),
      width: "100%"
    }),
    wrapper: { padding: theme.spacing(0, 1), overflowY: "scroll" },
    wrapper2: {
      padding: theme.spacing(0.5, 1.5),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2, 5)
      },
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(2, 2)
      }
    },
    heading: {
      padding: "0px",
      margin: "0px 10px 30px 10px",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "30px",
      color: theme.palette.secondary.dark
    },
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
      width: "95%",
      height: theme.spacing(6.8),
      [theme.breakpoints.down("md")]: {
        height: theme.spacing(6)
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
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
      overflowY: "unset",
      background: "#517A8F4A",
      border: `1px solid ${theme.palette.gray[700]}`,
      borderTop: "none",
      boxShadow: "0px 188px 250px rgba(61, 84, 97, 0.35)",
      backdropFilter: "blur(20px)",
      width: "100%",
      height: "90%",
      borderRadius: "27px",
      marginTop: theme.spacing(-3),
      padding: theme.spacing(3),
      "&:focus": {
        outline: "none"
      },
      [theme.breakpoints.down("md")]: {
        height: "100%"
      },
      [theme.breakpoints.down("sm")]: {
        overflowY: "auto",
        marginTop: theme.spacing(0),
        padding: theme.spacing(0),
        background: theme.palette.gray[200],
        boxShadow: "none",
        backdropFilter: "none",
        borderRadius: "0px",
      }
    },
    createCardText: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: "36px",
      color: theme.palette.gray[100]
    },
    closeButton: {
      color: theme.palette.secondary.dark,
      cursor: "pointer",
      "& hover": {
        color: theme.palette.gray[100]
      }
    },
    editCardIcon: {
      color: theme.palette.secondary.dark,
      fontSize: "18px",
      margin: theme.spacing(0, 0, 0, 1),
      cursor: "pointer",
      "& hover": {
        color: theme.palette.gray[100]
      }
    },
    drawer: {
      margin: theme.spacing(0.5)
    },
    close: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "space-between",
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(1.5)
      }
    },
    edit: {
      position: "absolute",
      bottom: "-75px",
      right: 0,
      width: "170px",
      height: "42px",
      borderRadius: "20px",
      backgroundColor: theme.palette.gray[100],
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      cursor: "pointer",
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(1.5)
      }
    },
    logoDiv: {
      marginLeft: theme.spacing(6),
      cursor: "pointer",
      width: "50%",
      marginTop: theme.spacing(-4),
      [theme.breakpoints.down("sm")]: {
        marginTop: 0,
        marginLeft: theme.spacing(7),
        width: "20%"
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: 0,
        marginLeft: theme.spacing(8),
        width: "30%"
      }
    },
    flexAlign: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "60px",
      marginLeft: "-55px",
      backgroundColor: "transparent",
    },
    icon: {
      color: theme.palette.secondary.light,
      cursor: "pointer",
      margin: "0px 10px 30px 10px",
    },
    flexContainer: {
      justifyContent: "flex-start",
      display: "flex",
      alignItems: "center"
    }
  })
);

const MyCard: React.FC<Props> = props => {
  const classes = useStyles(props);
  const history = useHistory();
  const theme = useTheme();
  const { description, profilePic, name, business, userName, live } = props;
  const [checked, setChecked] = React.useState<boolean>(live);
  const [open, setOpen] = React.useState<boolean>(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { setShowCardInfo } = React.useContext(CardInfoContext);
  const { setDrawerOpen } = React.useContext(DrawerContext);

  const handleClickOpen = () => {
    setOpen(true);
    setShowCardInfo(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowCardInfo(false);
  };

  const SmallHeader = () => (
    <Grid container>
      <Grid item lg={3} md={3} sm={12} xs={12}>
        <div className={classes.flexAlign}>
          <div className={classes.logoDiv} onClick={() => history.push("/")}>
            <Logo />
          </div>
          <span style={{ marginRight: "10px", cursor: "pointer" }} onClick={() => setDrawerOpen(true)}>
            <HumburgerIcon />
          </span>
        </div>
      </Grid>
    </Grid>
  )

  return (
    <div className={classes.InScrollContainerCard}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        className={classes.cardDiv}
      >
        <Grid item lg={9} md={9} sm={9} xs={10}>
          <div style={{ display: "flex", cursor: "pointer" }} onClick={handleClickOpen}>
            <Grid container alignItems="center" justifyContent="flex-start">
              <Grid item lg={4} md={4} sm={4} xs={2}>
                <Avatar
                  variant="rounded"
                  alt={name}
                  src={profilePic}
                  className={classes.profileImage}
                />
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={10}>
                <Typography noWrap className={classes.cardName}>
                  {name}
                </Typography>
                <Typography noWrap className={classes.cardDescription}>
                  {description}
                </Typography>
                {userName && (
                  <Typography noWrap className={classes.userName}>
                    @{userName}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={2} className={classes.switchContainer}>
          <Grid container alignItems="center" justifyContent="flex-end" spacing={1}>
            {business && (
              <Grid item xs={6}>
                <MuiIcons
                  icon="briefCase"
                  color="secondary"
                  fontSize="small"
                  className={classes.buisnessIcon}
                />
              </Grid>
            )}
            <Grid item xs={6}>
              <Switch
                checked={checked}
                name="cardCheck"
                onChange={() => setChecked(!checked)}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div>
        <Dialog
          fullScreen={isMobile}
          maxWidth={"lg"}
          open={open}
          BackdropProps={{
            className: classes.backdrop
          }}
          PaperProps={{
            className: classes.paper
          }}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          {isMobile ? (
            <div className={classes.wrapper2}>
              <SmallHeader />
              <Grid item xs={12}>
                <div className={classes.flexContainer}>
                  <MuiIcon icon="backArrow" className={classes.icon} fontSize="medium" onClick={handleClose} />
                  &nbsp;&nbsp;
                  <Typography className={classes.heading}>Card Info</Typography>
                </div>
              </Grid>
              <CardInfo checked={checked} setChecked={setChecked} />
            </div>
          ) : (
            <>
              <div className={classes.close}>
                <Typography className={classes.createCardText}>Card Info</Typography>
                <MuiIcons
                  className={classes.closeButton}
                  fontSize="large"
                  icon="close"
                  onClick={handleClose}
                />
              </div>
              <div id="cardInfoContainer" className={classes.wrapper}>
                <CardInfo checked={checked} setChecked={setChecked} />
              </div>
              <DialogActions>
                <div className={classes.edit}>
                  <p>Edit Card</p>
                  <MuiIcons
                    className={classes.editCardIcon}
                    fontSize="large"
                    icon="edit"
                    onClick={handleClose}
                  />
                </div>
              </DialogActions>
            </>)
          }
        </Dialog >
      </div >
    </div >
  );
};

export default MyCard;
