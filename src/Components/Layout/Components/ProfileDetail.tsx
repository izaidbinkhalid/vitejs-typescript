import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Paper, Chip, Avatar, Button, Typography, Divider } from "@material-ui/core";
import { Tags, MyNetworks, MyCards } from "../Data/Data";
import MyCard from "Components/MyCard";
import { SpeakerIcon } from "Components/Icons/SpeakerIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      // marginTop: theme.spacing(3)
    },
    paper: {
      cursor: "pointer",
      background: theme.palette.gray[100],
      padding: theme.spacing(1)
    },
    heading: {
      marginBottom: theme.spacing(1),
      fontSize: theme.spacing(2.2),
      [theme.breakpoints.down("md")]: {
        fontSize: theme.spacing(2)
      },
      fontWeight: 500,
      color: theme.palette.secondary.main,
      transition: "0.5s"
    },

    contentContainer: {
      marginTop: theme.spacing(2)
    },
    MainSection: {
      margin: theme.spacing(1),
      background: theme.palette.gray[100],
      marginBottom: theme.spacing(2)
    },
    scrollContainer: {
      marginBottom: theme.spacing(2),
      padding: theme.spacing(0.5),
      border: `1px solid ${theme.palette.gray[600]}`,
      borderRadius: "8px"
    },
    InScrollContainerTag: {
      maxHeight: "60px",
      overflowY: "auto"
    },
    InScrollContainerNetwork: {
      maxHeight: "160px",
      overflowY: "auto"
    },
    InScrollContainerCard: {
      maxHeight: "175px",
      overflowY: "auto",
    },
    tags: {
      background: theme.palette.gray[200],
      margin: theme.spacing(0.5),
      height: theme.spacing(3),
      [theme.breakpoints.down("md")]: {
        fontSize: theme.spacing(1.3)
      },
      transition: "0.5s"
    },
    networkDiv: {
      background: theme.palette.gray[200],
      border: "1px solid white",
      borderRadius: "50px",
      marginBottom: theme.spacing(0.5),
      marginRight: theme.spacing(0.5)
    },
    network: {
      maxHeight: "40px",
      margin: theme.spacing(0.5),
      marginLeft: "0px",
      padding: theme.spacing(0.3),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center "
    },
    alignStart: {
      display: "flex",
      justifyContent: "start"
    },
    cardDetails: {
      marginLeft: theme.spacing(0.5),
      alignItems: "center",
      margin: "auto"
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
    notificationIconButton: {
      textDecoration: "none",
      "&focus": {
        border: "1px solid black"
      }
    },
    networkProfilePic: {
      width: "35px",
      height: "35px",
      marginLeft: theme.spacing(1)
    },
    cardsContainer: {
      marginRight: theme.spacing(0.2)
    }
  })
);

const ProfileDetail = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div>
        <Paper className={classes.paper}>
          {/* My Tags Section */}
          <div className={classes.MainSection}>
            <div>
              <Typography className={classes.heading} noWrap>
                &nbsp;My Tags
              </Typography>
            </div>
            <div>
              <div className={classes.InScrollContainerTag}>
                {Tags.map((tag, index) => (
                  <Chip className={classes.tags} label={tag} key={index} />
                ))}
              </div>
            </div>
          </div>
          <Divider />

          {/* My Network Section */}
          <div className={classes.contentContainer}>
            <div className={classes.MainSection}>
              <div>
                <Typography className={classes.heading} noWrap>
                  &nbsp;My Network
                </Typography>
              </div>
              <div>
                <div className={classes.InScrollContainerNetwork}>
                  {MyNetworks.map((profile, index) => (
                    <div className={classes.networkDiv} key={index}>
                      <div className={classes.network}>
                        <div className={classes.ProfileLink}>
                          <Avatar
                            alt={profile.name}
                            src={profile.profilePic}
                            className={classes.networkProfilePic}
                          />
                          <Typography noWrap>{profile.name}</Typography>
                        </div>
                        <div>
                          <Button className={classes.notificationIconButton}>
                            {profile.notifications === 0 ? (
                              <span style={{ transform: 'rotate(20deg)' }}>
                                <SpeakerIcon noColor={true} />
                              </span>
                            ) : (
                              <>
                                <SpeakerIcon /> &nbsp; {profile.notifications}
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Divider />

          {/* My Cards */}
          <div className={classes.contentContainer}>
            <div className={classes.MainSection}>
              <div>
                <Typography className={classes.heading} noWrap>
                  &nbsp;My Cards
                </Typography>
              </div>
              <div>
                <div className={classes.InScrollContainerCard}>
                  <div className={classes.cardsContainer}>
                    {MyCards.map((card, index) => (
                      <MyCard
                        background="grey"
                        live={card.live}
                        key={index}
                        name={card.name}
                        profilePic={card.profilePic}
                        description={card.description}
                        business={card.business}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ProfileDetail;
