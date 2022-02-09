import React from "react";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import { Dialog, Typography, Grid, Avatar, useMediaQuery, } from "@material-ui/core";
import MuiIcons from "Components/Icons";
import { DrawerContext } from "Context/DrawerContext";
import CustomButton from "Components/Button";
import { chatsList, messagesList } from 'Components/Chat/Data'
import ChatRow, { StyledBadge } from "Components/Chat/ChatRow";
import MessageComponent from './Message';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100%"
  },
  paper: {
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.gray[200]}`,
    borderTop: "none",
    boxShadow: "0px 250px 250px -58px rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(15px)",
    width: "100%",
    maxHeight: "90%",
    borderRadius: "27px",
    overflowY: "hidden",
    "&:focus": {
      outline: "none"
    },
    [theme.breakpoints.down("md")]: {
      maxHeight: "100%",
      borderRadius: "0px",
      overflowY: "auto",
    }
  },
  backdrop: {
    backgroundColor: "rgb(0 0 0 / 21%)"
  },
  closeButtonDiv: {
    position: "absolute",
    cursor: "pointer",
    top: "10px",
    right: "15px"
  },
  mainGridContainer: {
    minHeight: '100%'
  },
  chatListContainer: {
    background: '#FBFBFBB2',
    minHeight: '100%',
  },
  chatListHeadingContainer: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(1)
  },
  chatContainer: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingrRight: theme.spacing(3),
    overflowX: "hidden",
    background: theme.palette.gray[100],
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
  chatBoxContainer: {
    minHeight: '100%',
  },
  selectedChatAvatar: {
    border: `1px solid ${theme.palette.gray[700]}`,
    width: '65px',
    height: '65px',
    [theme.breakpoints.down('xs')]: {
      width: '55px',
      height: '55px',
    },
  },
  selectedChatName: {
    fontWeight: 500,
    color: theme.palette.secondary.dark,
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px'
    },
  },
  selectedChatDesignation: {
    color: theme.palette.secondary.dark,
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px'
    },
  },
  chatIcons: {
    marginRight: '-30px'
  },
  chatOptionsIcon: {
    color: theme.palette.gray[400],
    cursor: 'pointer',
    "&:hover": {
      color: theme.palette.gray[900],
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '25px'
    },
  },
  chatNavConatiner: {
    width: '100%',
    paddingBottom: theme.spacing(1),
    borderBottom: `1px solid ${theme.palette.gray[600]}`
  },
  chatMessagesContainer: {
    maxHeight: '450px',
    minHeight: '450px',
    overflowY: 'scroll',
    scrollBehavior: 'smooth',
    padding: theme.spacing(2),
    paddingLeft: 0,
    width: '100%',
    scrollTop: "300px",
    "&::-webkit-scrollbar-thumb": {
      background: theme.palette.gray[400],
      borderRadius: '10px',
    }
  },
  inputBoxContainer: {
    width: '100%',
    marginTop: theme.spacing(1),
    paddingTop: theme.spacing(1),
    borderTop: `1px solid ${theme.palette.gray[200]}`
  },
  micIconContainer: {
    background: theme.palette.gray[900],
    borderRadius: '5px',
    color: "white",
    textAlign: 'center',
    height: '40px',
    maxWidth: '40px',
    paddingTop: theme.spacing(1),
    cursor: 'pointer'
  },
  chatInputBox: {
    background: theme.palette.gray[700],
    borderRadius: '10px',
    marginLeft: theme.spacing(-1)
  },
  cameraIcon: {
    marginTop: '10px',
    marginLeft: '12px'
  },
  textArea: {
    outline: 'none',
    border: 'none',
    background: "transparent",
    width: '100%',
    height: '100%',
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(0.5),
  },
  chatlistsDiv: {
    paddingTop: theme.spacing(1),
    overflowY: 'scroll',
    maxHeight: '580px',
    paddingBottom: theme.spacing(1),
    "&::-webkit-scrollbar-thumb": {
      background: theme.palette.gray[400],
      borderRadius: '10px',
    }
  },
  onlineText: {
    color: theme.palette.info.main
  }

}));

export const ChatModal = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { chatModalOpen, handleCloseChat } = React.useContext(DrawerContext);
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        maxWidth={"lg"}
        open={chatModalOpen}
        BackdropProps={{ className: classes.backdrop }}
        PaperProps={{ className: classes.paper }}
        keepMounted
      >
        <div>{!fullScreen && <div className={classes.closeButtonDiv}><MuiIcons icon="close" fontSize="large" onClick={handleCloseChat} color="secondary" /></div>}

          <div className={classes.root}>
            <Grid container justifyContent="space-between" className={classes.mainGridContainer}>
              <Grid item xs={12} md={3} className={classes.chatListContainer} >
                <Grid container alignItems="center" justifyContent='space-between' className={classes.chatListHeadingContainer}>
                  <Grid xs={10}><Typography variant="h5" color='secondary'>All Messages</Typography></Grid>
                  <Grid xs={1}><MuiIcons icon='dots' fontSize="large" color='secondary' /></Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} className={classes.chatlistsDiv}>
                    <Grid container >
                      {chatsList?.map((chat, index) => <Grid key={index} item xs={12} >
                        <ChatRow avatar={chat.avatar} name={chat.name} date={chat.date} isOnline={chat.isOnline}
                          unreadMessageCount={chat.unreadMessageCount} lastMessage={chat.lastMessage} onClick={() => null} />
                      </Grid>)}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* TopBar */}
              <Grid item xs={12} md={9} className={classes.chatContainer}>
                <Grid container alignItems="center" direction="column" justifyContent="space-between" className={classes.chatBoxContainer} >
                  <Grid item xs={12} className={classes.chatNavConatiner}>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item xs={6} sm={6} md={4}>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item xs={4} sm={3}>
                            <StyledBadge
                              overlap="circular"
                              anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                              variant="dot"
                            >
                              <Avatar alt='me' src='https://image.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg' className={classes.selectedChatAvatar} />
                            </StyledBadge>
                          </Grid>
                          <Grid item xs={8} sm={9}>
                            <Typography variant='h5' className={classes.selectedChatName} noWrap>Khalid Ali Kashmiri</Typography>
                            <Typography variant='body1' className={classes.selectedChatDesignation} noWrap>Product Designer</Typography>
                            <Typography variant='body1' className={classes.onlineText} noWrap>online</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={4} sm={3} className={classes.chatIcons} >
                        <Grid container alignItems='center' justifyContent="flex-end">
                          <Grid item xs={4}><MuiIcons icon='call' fontSize="large" className={classes.chatOptionsIcon} /></Grid>
                          <Grid item xs={4}><MuiIcons icon='video' fontSize="large" className={classes.chatOptionsIcon} /></Grid>
                          <Grid item xs={4}><MuiIcons icon='dotsVertical' fontSize="large" className={classes.chatOptionsIcon} /></Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className={classes.chatMessagesContainer}>
                    {messagesList?.map(({ message, timeStamp, isReceiver }, i) => <MessageComponent key={i} message={message} timeStamp={timeStamp} isReceiver={isReceiver} />)}

                  </Grid>
                  <Grid item xs={12} className={classes.inputBoxContainer}>
                    <Grid container alignItems="center" justifyContent="space-between" >
                      <Grid item xs={1} ><MuiIcons icon='smile' fontSize="large" className={classes.chatOptionsIcon} /></Grid>
                      <Grid item xs={9}>
                        <Grid container alignItems="center" justifyContent="space-evenly" >
                          <Grid item xs={11}>
                            <Grid container justifyContent="space-evenly" className={classes.chatInputBox}>
                              <Grid item xs={11}>
                                <textarea className={classes.textArea}>
                                </textarea>
                              </Grid>
                              <Grid item xs={1} ><MuiIcons icon='camera' fontSize="medium" color='secondary' className={classes.cameraIcon} /></Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={1} className={classes.micIconContainer}><MuiIcons icon='microphone' fontSize="medium" /></Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={2} style={{ textAlign: 'center' }}>
                        <CustomButton text='Send' type="secondary" style={{ borderRadius: '20px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} />
                      </Grid>

                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* TopBar */}
            </Grid>
          </div>
        </div>
      </Dialog >
    </div >
  );
};
