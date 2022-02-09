import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Paper, Typography, Collapse, Grid, Avatar } from "@material-ui/core";
import MuiIcon from "Components/Icons";
import { chatsList } from 'Components/Chat/Data'
import ChatRow, { StyledBadge } from "Components/Chat/ChatRow";
import { DrawerContext } from "Context/DrawerContext";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      cursor: "pointer",
      border: `1px solid ${theme.palette.gray[100]}`,
      borderRadius: "20px 20px 0px 0px",
      width: "100%",
      paddingBottom: 0,
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'

    },
    heading: {
      fontSize: "16px",
      fontWeight: 600,
    },
    networkProfilePic: {
      width: "40px",
      height: "40px",
      border: `3px solid ${theme.palette.gray[100]}`,
      boxShadow: "0px 7.376511096954346px 16.39224624633789px 0px #0000001A"
    },
    messagediv: {
      padding: theme.spacing(1),
      borderBottom: `1px solid ${theme.palette.gray[200]}`
    },
    collapseContainer: {
      maxHeight: "455px",
      overflowY: "auto",
      "&::-webkit-scrollbar-thumb": {
        background: theme.palette.gray[400],
        borderRadius: '10px',
      }
    },
    userActivecontainer: {
      position: 'relative',
    },
    newMesaageHeading: {
      color: theme.palette.secondary.dark,
      padding: theme.spacing(1),
      fontSize: "18px"
    },
    activeDiv: {
      width: '8px',
      minHeight: '8px',
      borderRadius: '20px',
      background: theme.palette.info.main,
      border: `0.3px solid ${theme.palette.gray[100]}`,
      position: 'absolute'
    },

  })
);

const Messages = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(false);
  const { setChatModalOpen } = React.useContext(DrawerContext);

  const onChatRowClick = () => {
    // extra logic here
    setChatModalOpen(true);
    setOpen(false);
  }
  return (
    <Paper className={classes.paper}>
      <Grid container alignItems='center' justifyContent="space-between" className={classes.messagediv} >
        <Grid item xs={3} className={classes.userActivecontainer}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
            variant="dot"
          >
            <Avatar
              alt='me'
              src='https://image.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg'
              className={classes.networkProfilePic}
            />
          </StyledBadge>
        </Grid>
        <Grid item xs={6}>
          <Typography color="secondary" align="left" className={classes.heading}>
            Messages
          </Typography>
        </Grid>
        <Grid item xs={3} onClick={() => setOpen(!open)}>
          <Typography color="secondary" align="right" style={{ paddingTop: "5px" }}>
            <MuiIcon icon={open ? "arrowDown" : 'arrowUp'} />
          </Typography>
        </Grid>
      </Grid>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Grid container alignItems="center" justifyContent='center' className={classes.collapseContainer} >
          {chatsList?.map((chat, index) => <Grid key={index} item xs={12} >
            <ChatRow avatar={chat.avatar} name={chat.name} date={chat.date} isOnline={chat.isOnline}
              unreadMessageCount={chat.unreadMessageCount} lastMessage={chat.lastMessage} onClick={onChatRowClick} />
          </Grid>)}
        </Grid>

      </Collapse>
    </Paper >
  );
};

export default Messages;
