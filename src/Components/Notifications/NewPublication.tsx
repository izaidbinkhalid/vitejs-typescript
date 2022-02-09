import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Avatar, Typography } from "@material-ui/core";

interface Props {
  readonly userName: string;
  readonly userPostImage: string;
  readonly bigPost?: boolean;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      justifyContent: "space-between",
      background: "rgba(255, 255, 255, 0.53)",
      borderRadius: "10px",
      padding: theme.spacing(0.5),
      cursor: "pointer",
      marginBottom: theme.spacing(1),
      alignItems: "center"
    },

    postImage: {
      width: "150px",
      height: "80px",
      borderRadius: "8px"
    },
    postImageBig: {
      borderRadius: "8px",
      width: "150px",
      minHeight: "120px",
      maxHeight: "120px"
    },

    content: {
      paddingLeft: theme.spacing(1.5)
    },
    userName: {
      fontSize: "12px"
    }
  })
);

export const NewPublication: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div>
          <Avatar
            variant="rounded"
            alt="profile pic"
            src={props.userPostImage}
            className={props.bigPost ? classes.postImageBig: classes.postImage}
          />
      </div>
      <div className={classes.content}>
        <Typography variant="body2" color="secondary" className={classes.userName}>
          <b>{props.userName} </b> made a new publication, Check it out!
        </Typography>
      </div>
    </div>
  );
};
