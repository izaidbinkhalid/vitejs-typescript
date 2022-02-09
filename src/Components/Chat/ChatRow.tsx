import * as React from "react";
import { makeStyles, Theme, createStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Grid, Avatar, Badge } from "@material-ui/core";
import { ChatRowProps } from 'Interfaces/User'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    networkProfilePic: {
      width: "47px",
      height: "47px",
      border: `3px solid ${theme.palette.gray[100]}`,
      boxShadow: "0px 7.376511096954346px 16.39224624633789px 0px #0000001A"

    },
    userActivecontainer: {
      position: 'relative',
    },
    chatName: {
      margin: theme.spacing(.5, 0, 0, 1),
      fontWeight: 600,
      color: theme.palette.secondary.dark
    },
    chatMessage: {
      margin: theme.spacing(0, 0, 0, 1),
      fontSize: "10px"
    },
    chatMessageUnread: {
      margin: theme.spacing(0, 0, 0, 1),
      fontSize: "10px",
      fontWeight: "bold"
    },
    chatAndTime: {
      margin: theme.spacing(0.75, 0, 0, 0),
      fontSize: "10px"
    },
    chatRowContainer: {
      padding: theme.spacing(1),
      borderBottom: `1px solid ${theme.palette.gray[700]}`,
      cursor: 'pointer',
      "&:hover": {
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      }
    },
    chatRowContainerUnread: {
      padding: theme.spacing(1),
      borderBottom: `1px solid ${theme.palette.gray[700]}`,
      background: theme.palette.gray[100],
      cursor: 'pointer',
      "&:hover": {
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      }
    },
    unreadBadge: {
      float: "right",
      marginTop: "15px",
      fontSize: "10px",
      marginRight: "10px"
    },

  })
);
const ChatRow: React.FC<ChatRowProps> = (props) => {
  const classes = useStyles();
  const { isOnline, unreadMessageCount, avatar, name, lastMessage, date, onClick } = props;

  return <Grid container alignItems='flex-start' justifyContent="space-between"
    className={unreadMessageCount ? classes.chatRowContainerUnread : classes.chatRowContainer}
    onClick={onClick}>
    <Grid item xs={2} className={classes.userActivecontainer}>
      {!isOnline ? <Avatar
        alt='me'
        src={avatar}
        className={classes.networkProfilePic}
      /> : <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
        variant="dot"
      >
        <Avatar
          alt='me'
          src={avatar}
          className={classes.networkProfilePic}
        />
      </StyledBadge>}
    </Grid>
    <Grid item xs={8}>
      <Typography color="secondary" align="left" className={classes.chatName}>{name}</Typography>
      <Typography color="secondary" align="left" noWrap className={unreadMessageCount ? classes.chatMessageUnread : classes.chatMessage}>{lastMessage}</Typography>
    </Grid>
    <Grid item xs={2}>
      <Typography color="secondary" align="right" className={classes.chatAndTime}>{date}</Typography>
      {Boolean(unreadMessageCount) && <Badge badgeContent={unreadMessageCount} color="primary" className={classes.unreadBadge} />}
    </Grid>
  </Grid>
}
export default ChatRow;

export const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out', // in case you want animation
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);