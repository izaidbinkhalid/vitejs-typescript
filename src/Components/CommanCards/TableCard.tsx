import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      padding: theme.spacing(0.5),
      background: theme.palette.gray[700],
      borderRadius: "5%",
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(3)
      }
    },

    postImage: (props: Props) => ({
      width: "100%",
      height: props.size === "xl" ? theme.spacing(47) : theme.spacing(36),
      [theme.breakpoints.down("sm")]: {
        maxHeight: "300px"
      },
      borderRadius: "5%",
      boxShadow: "0px 31px 74px -10px #0000001A"
    }),

    cardText: (props: Props) => ({
      // padding: theme.spacing(3),
      padding: props.size === "xl" ? theme.spacing(7, 3) : theme.spacing(5, 3),
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(5)
      }
    })
  })
);

interface Props {
  readonly text: string | React.ReactElement;
  readonly image: string;
  readonly size?: "xl";
}

const TableCard: React.FC<Props> = ({ image, text, size }: Props) => {
  const classes = useStyles({ image, text, size });
  return (
    <div className={classes.wrapper}>
      <Avatar src={image} variant="rounded" className={classes.postImage} />
      <div>
        <Typography className={classes.cardText}>{text}</Typography>
      </div>
    </div>
  );
};

export default TableCard;
