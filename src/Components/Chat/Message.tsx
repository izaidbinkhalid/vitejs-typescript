import * as React from 'react';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";


export interface MessageProps {
  message: string
  timeStamp: string
  isReceiver: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    messageContainer: {
      marginBottom: theme.spacing(1),
    },
    message: ({ isReceiver }: MessageProps) => ({
      borderRadius: isReceiver ? '11px 11px 11px 0px' : '11px 11px 0px 11px',
      background: isReceiver ? theme.palette.gray[700] : theme.palette.gray[900],
      padding: '10px 30px',
      width: 'fit-content',
      color: isReceiver ? theme.palette.secondary.dark : theme.palette.gray[100],
      fontWeight: 500,
      marginLeft: isReceiver ? "none" : 'auto',
    }),
    timestamp: ({ isReceiver }: MessageProps) => ({
      marginLeft: isReceiver ? "none" : 'auto',
      color: theme.palette.gray[400],
      width: 'fit-content',
      fontSize: '12px',
      marginTop: '5px'
    })

  })
);

const MessageComponent: React.FC<MessageProps> = ({ message, timeStamp, isReceiver }) => {
  const classes = useStyles({ message, timeStamp, isReceiver });

  return <div className={classes.messageContainer}>
    <div className={classes.message}>{message}</div>
    <div className={classes.timestamp}>{timeStamp}</div>
  </div>
}
export default MessageComponent;