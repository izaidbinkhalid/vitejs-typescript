import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Typography,
  Collapse,
  Grid,
  Divider,
  Dialog,
  useMediaQuery,
  DialogActions,
  useTheme
} from "@material-ui/core";
import MuiIcons from "Components/Icons";
import { Card } from "Interfaces/User";
import MyCard from "Components/MyCard";
import TextInput from "Components/Form/TextInput";
import { SendIcon } from "Components/Icons/SendIcon";
import { CardInfoContext } from "Context/CardInfo";
import CardInfo from "Components/MyCard/CardInfo/CardInfo";
import { DrawerContext } from "Context/DrawerContext";
import { useHistory } from "react-router-dom";
import Logo from "Components/Logo";
import { HumburgerIcon } from "Components/Icons/humburger";
import MuiIcon from "Components/Icons";

interface Props {
  readonly profilePic: string;
  readonly name: string;
  readonly description: string;
  readonly live: boolean;
  readonly business?: boolean;
  readonly userName?: string;
  readonly background?: string;
  readonly cards?: Card[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    InScrollContainerCard: {
      maxHeight: "150px",
      overflowY: "auto",
      cursor: "pointer",
      background: "#E4E9EA"
    },
    cardDiv: (props: Props) => ({
      background:
        props.background === "grey" ? theme.palette.gray[700] : theme.palette.gray[100],
      border: `1px solid ${props.background === "grey" ? theme.palette.gray[700] : theme.palette.gray[100]
        } `,
      borderRadius: "11px",
      boxShadow: "0px 31px 51px 0px #00000008",

      padding: theme.spacing(0.2)
    }),
    cardDivExpanded: (props: Props) => ({
      boxShadow: "0px 31px 51px 0px #00000008",
      background:
        props.background === "grey" ? theme.palette.gray[700] : theme.palette.gray[100],
      border: `1px solid ${props.background === "grey" ? theme.palette.gray[900] : theme.palette.gray[100]
        } `,
      borderRadius: "11px",

      padding: theme.spacing(0.2)
    }),

    card: {
      height: "60px",
      marginLeft: "0px",
      padding: theme.spacing(0.3),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center "
    },

    profileImage: {
      width: "100%",
      height: "62px",
      padding: theme.spacing(0.5),
      borderRadius: "20px",
      transition: "0.5s"
    },
    cardName: {
      margin: "0px",
      fontSize: "15px",
      maxWidth: "160px",
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

    noCardsDibv: {
      padding: theme.spacing(2),
      color: theme.palette.gray[400],
      fontSize: "10px",
      textAlign: "center"
    },
    inviteContainer: {
      padding: theme.spacing(1),
      paddingTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
      background: theme.palette.gray[700],
      borderBottomRightRadius: "11px",
      boxShadow: "0px 31px 51px 0px #00000008",
      borderBottomLeftRadius: "11px"
    },
    inviteHeading: {
      fontSize: "10px",
      marginBottom: theme.spacing(1)
    },
    inviteHeading2: {
      fontSize: "10px"
    },
    invitesContainer: {
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5)
    },
    inviteUsernameContainer: {
      marginBottom: theme.spacing(1),
      background: theme.palette.gray[100],
      boxShadow: "0px 31px 51px 0px #00000008",
      borderRadius: "5px",
      padding: theme.spacing(0.35),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    },
    inviteInput: {
      outline: "none",
      maxHeight: "20px",
      border: "none",
      color: theme.palette.primary.main,
      padding: theme.spacing(1),
      fontWeight: "bold",
      background: "transparent",
      width: "90%"
    },
    inviteInputContainer: {
      maxWidth: "98%",
      background: theme.palette.gray[100],
      borderRadius: "100px",
      paddingRight: theme.spacing(0.5),
      paddingLeft: theme.spacing(0.5)
    },
    inviteInputEmail: {
      outline: "none",
      maxHeight: "30px",
      border: "none",
      color: theme.palette.primary.main,
      padding: theme.spacing(0.5),
      fontWeight: "bold",
      background: "transparent",
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1)
    },
    inviteDate: {
      color: theme.palette.gray[400],
      fontSize: "8px"
    },
    inviteInputDiv: {
      paddingLeft: theme.spacing(1),
      maxWidth: "55%"
    },
    invitedName: {
      fontSize: theme.spacing(1.3)
    },
    inviteDateDiv: {
      color: theme.palette.gray[400],
      fontSize: "10px"
    },
    cancelIconDiv: {
      paddingTop: theme.spacing(0.5),
      paddingRight: theme.spacing(1),
      cursor: "pointer",
      textAlign: "right"
    },
    invitebyEmailContainer: {
      boxShadow: "0px 31px 51px 0px #00000008"
    },
    inviteEmailInputDiv: {
      background: theme.palette.gray[100],
      borderRadius: "15px",
      paddingRight: theme.spacing(0.5),
      paddingLeft: theme.spacing(0.5)
    },
    sendInviteBtn: {
      background: theme.palette.gray[100],
      borderRadius: "15px",
      display: "flex",
      alignItems: "center",
      fontSize: "12px",
      padding: theme.spacing(1),
      cursor: "pointer"
    },
    adminsList: {
      padding: theme.spacing(1)
    },
    eachAdminTag: {
      color: theme.palette.primary.main,
      background: theme.palette.gray[100],
      borderRadius: "15px",
      padding: theme.spacing(0.5),
      fontSize: theme.spacing(1.3),
      marginBottom: theme.spacing(1),
      textAlign: "center"
    },
    countDivider: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: theme.spacing(2)
    },
    remainingCount: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxHeight: "10px",
      fontSize: "11px",
      color: theme.palette.gray[400]
    },
    currentNumber: {
      background: theme.palette.gray[100],
      padding: theme.spacing(0.2),
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      borderRadius: "100px",
      marginRight: theme.spacing(0.2),
      boxShadow: "0px 31px 51px 0px #00000008"
    },
    moreVertIcon: {
      color: theme.palette.secondary.light,
      textAlign: "right"
    },
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

const MyCompanies: React.FC<Props> = props => {
  const classes = useStyles(props);
  const theme = useTheme();
  const history = useHistory();
  const { description, profilePic, name, userName } = props;
  const [expanded, setExpanded] = React.useState<boolean>(true);
  const [checked, setChecked] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { setShowCardInfo, setCompanyProfie } =
    React.useContext(CardInfoContext);
  const { setDrawerOpen } = React.useContext(DrawerContext);

  const handleClickOpen = () => {
    setCompanyProfie("business");
    setOpen(true);
    setShowCardInfo(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowCardInfo(false);
    setCompanyProfie("");
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
    <>
      <div
        className={classes.InScrollContainerCard}
        style={expanded === true && props.cards ? {} : { borderRadius: "11px" }}
      >
        <div className={expanded ? classes.cardDivExpanded : classes.cardDiv}>
          <div className={classes.card}>
            <Grid
              container
              alignItems="center"
              justifyContent={props.cards ? "space-between" : "flex-start"}
            >
              <Grid item xs={3}>
                <Avatar
                  variant="rounded"
                  alt={name}
                  src={profilePic}
                  className={classes.profileImage}
                />
              </Grid>
              <Grid item xs={6} onClick={handleClickOpen}>
                <div>
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
                </div>
              </Grid>
              {props.cards && props.cards.length > 0 ? (
                <Grid item xs={3}>
                  <div className={classes.moreVertIcon}>
                    <MuiIcons
                      onClick={() => setExpanded(!expanded)}
                      icon="dotsVertical"
                      fontSize="medium"
                      className={classes.moreVertIcon}
                    />
                  </div>
                </Grid>
              ) : null}
            </Grid>
          </div>
        </div>
      </div>
      {props.cards && props.cards.length > 0 ? (
        <Collapse in={expanded} timeout="auto">
          <div className={classes.inviteContainer}>
            <Typography
              variant="body2"
              color="secondary"
              className={classes.inviteHeading}
            >
              Invite other users to assign a card under this institutional profile (users
              will be able use one card count)
            </Typography>
            <div className={classes.invitesContainer}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                className={classes.inviteUsernameContainer}
                spacing={1}
              >
                <Grid item xs={8}>
                  <Typography
                    variant="body2"
                    color="primary"
                    noWrap
                    className={classes.invitedName}
                  >
                    @myofficialusernamesatsomethign
                  </Typography>
                </Grid>
                <Grid item xs={2} className={classes.inviteDateDiv}>
                  11/23/2021
                </Grid>
                <Grid item xs={2} className={classes.cancelIconDiv}>
                  <MuiIcons icon="close" fontSize="small" color="disabled" />
                </Grid>
              </Grid>
            </div>

            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              className={classes.invitebyEmailContainer}
            >
              <Grid item xs={9}>
                <div className={classes.inviteInputContainer}>
                  <TextInput
                    type="text"
                    name="email"
                    onChange={function (
                      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                    placeholder="Enter reciever email here"
                    className={classes.inviteInputEmail}
                  />
                </div>
              </Grid>
              <Grid item xs={3} className={classes.sendInviteBtn}>
                &nbsp;Send&nbsp; <SendIcon />
              </Grid>
            </Grid>
            <div>
              <br />
              <Divider />
              <br />
            </div>
            <Typography
              variant="body2"
              color="secondary"
              className={classes.inviteHeading}
            >
              Admin access to this institutional profile :
            </Typography>
            <Grid
              container
              alignItems="center"
              justifyContent="flex-start"
              className={classes.adminsList}
              spacing={1}
            >
              <Grid item xs={4}>
                <div className={classes.eachAdminTag}>@Agencyxyz</div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.eachAdminTag}>@Agencyxyz</div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.eachAdminTag}>@Agencyxyz</div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.eachAdminTag}>@Agencyxyz</div>
              </Grid>
            </Grid>
            <div className={classes.countDivider}>
              <div>
                <Typography
                  variant="body2"
                  color="secondary"
                  className={classes.inviteHeading2}
                >
                  card use limit by Admins
                </Typography>
              </div>
              <div className={classes.remainingCount}>
                <p className={classes.currentNumber}>210</p>/<p>230</p>
              </div>
            </div>
          </div>
          <Grid container justifyContent="center" id="companiesCard">
            {props.cards?.map((card, index) => (
              <Grid item lg={12} md={12} sm={12} xs={12} key={index}>
                <MyCard
                  background="white"
                  live={card.live}
                  key={index}
                  name={card.name}
                  profilePic={card.profilePic}
                  description={card.description}
                  business={card.business}
                  userName="saad"
                />
              </Grid>
            ))}
          </Grid>
        </Collapse>
      ) : (
        <div className={classes.noCardsDibv}>
          There are no cards assigned to this institutional profile
          <br />
          <br />
          <Divider />
        </div>
      )}

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
            </>
          )}
        </Dialog>
      </div>
    </>
  );
};

export default MyCompanies;
