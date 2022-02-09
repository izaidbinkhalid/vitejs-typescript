import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "Components/Button";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardStyle: {
      padding: theme.spacing(2),
      width: "100%",
      background: theme.palette.gray[100],
      textAlign: "center"
    },
    wrapper: {
      minWidth: "10rem",
      maxWidth: "14rem",
      height: "100%"
    },
    imageStyle: {
      width: theme.spacing(9),
      height: theme.spacing(9),
      margin: "auto",
      border: `1px solid ${theme.palette.gray[100]}`,
      profileCircleFilter: "drop-shadow(0px 9px 20px rgba(0,0,0,0.1))"
    },
    title: {
      color: theme.palette.gray["500"],
      padding: "0.2rem 0rem"
    },
    scope: {
      color: theme.palette.gray["400"]
    },
    scrollContainer: {
      minWidth: "10rem",
      minHeight: "13rem",
      overflowY: "hidden",
      overflowX: "auto"
    },
    rounded: {
      borderRadius: "8px",
      paddingBottom: "0.5rem"
    }
  })
);

interface Props {
  readonly id?: string | number;
  readonly image: string;
  readonly title: string;
  readonly text: string;
  readonly buttonText?: string;
  readonly noSpace?: boolean;
  readonly wrap?: boolean;
  readonly rounded?: boolean;
}

const defaultProps: Partial<Props> = {
  rounded: true
};
const ProfileCard: React.FC<Props> = ({
  id,
  image,
  title,
  text,
  buttonText,
  noSpace,
  wrap,
  rounded
}: Props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <div className={classes.wrapper}>
        <div className={`${classes.cardStyle} ${rounded ? classes.rounded : ""}`}>
          <div>
            <Avatar src={image} className={classes.imageStyle} alt="profile-card" />
          </div>
          <Typography className={classes.title}>{title}</Typography>
          <small className={classes.scope}>{text}</small>
          <Button
            type="secondary"
            style={{
              borderRadius: "30px",
              boxShadow: "0px 5px 11px rgba(0, 0, 0, 0.05)",
              background: "#FBFBFB"
            }}
            variant="outlined"
            text={buttonText ? buttonText : "View Profile"}
            onClick={() => history.push("/profile")}
          />
        </div>
      </div>
    </>
  );
};
ProfileCard.defaultProps = defaultProps;

export default ProfileCard;
