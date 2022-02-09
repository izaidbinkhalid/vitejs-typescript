import * as React from "react";
import { makeStyles, Theme, createStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Button from "Components/Button";
import MuiIcons from "Components/Icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      justifyContent: "space-between"
    },
    icon: {
      fontSize: theme.spacing(4)
    }
  })
);

export default function InsitutionalProfileButtons() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTab = useMediaQuery(theme.breakpoints.down("sm"));
  const isNotMobile = useMediaQuery(theme.breakpoints.down("md"));

  /**
   * * The Button are Overide in this components.
   * ! Change the CSS Carefully.
   * ? Change the CSS Entirely on every Button if you want to change.
   */

  return (
    <div className={classes.wrapper}>
      <Button
        style={
          isMobile
            ? {
                borderRadius: "30px",
                fontSize: theme.spacing(1.2),
                fontWeight: 400,
                background: theme.palette.gray[100],
                boxShadow:
                  "0px 29.435239791870117px 70.2647705078125px -9.495238304138184px rgba(0, 0, 0, 0.1)"
              }
            : isTab
            ? {
                borderRadius: "30px",
                fontSize: theme.spacing(1.25),
                fontWeight: 400,
                background: theme.palette.gray[100],
                boxShadow:
                  "0px 29.435239791870117px 70.2647705078125px -9.495238304138184px rgba(0, 0, 0, 0.1)"
              }
            : isNotMobile
            ? {
                borderRadius: "30px",
                fontSize: theme.spacing(2),
                fontWeight: 400,
                background: theme.palette.gray[100],
                boxShadow:
                  "0px 29.435239791870117px 70.2647705078125px -9.495238304138184px rgba(0, 0, 0, 0.1)"
              }
            : {
                borderRadius: "30px",
                fontSize: theme.spacing(3),
                fontWeight: 400,
                background: theme.palette.gray[100],
                boxShadow:
                  "0px 29.435239791870117px 70.2647705078125px -9.495238304138184px rgba(0, 0, 0, 0.1)"
              }
        }
        type="secondary"
        variant="outlined"
        size="medium"
        endIcon={
          <MuiIcons
            icon="add"
            className={classes.icon}
            fontSize="large"
            color="secondary"
          />
        }
        text="Connect"
      />

      <Button
        style={
          isMobile
            ? {
                borderRadius: "30px",
                fontSize: theme.spacing(1.2),
                fontWeight: 400,
                background: theme.palette.gray[100],
                boxShadow:
                  "0px 29.435239791870117px 70.2647705078125px -9.495238304138184px rgba(0, 0, 0, 0.1)"
              }
            : isTab
            ? {
                borderRadius: "30px",
                fontSize: theme.spacing(1.25),
                fontWeight: 400,
                background: theme.palette.gray[100],
                boxShadow:
                  "0px 29.435239791870117px 70.2647705078125px -9.495238304138184px rgba(0, 0, 0, 0.1)"
              }
            : isNotMobile
            ? {
                borderRadius: "30px",
                fontSize: theme.spacing(2),
                fontWeight: 400,
                background: theme.palette.gray[100],
                boxShadow:
                  "0px 29.435239791870117px 70.2647705078125px -9.495238304138184px rgba(0, 0, 0, 0.1)"
              }
            : {
                borderRadius: "30px",
                fontSize: theme.spacing(3),
                fontWeight: 400,
                background: theme.palette.gray[100],
                boxShadow:
                  "0px 29.435239791870117px 70.2647705078125px -9.495238304138184px rgba(0, 0, 0, 0.1)"
              }
        }
        type="secondary"
        variant="outlined"
        size="medium"
        text="Add Contacts"
      />

      <Button
        style={
          isMobile
            ? {
                borderRadius: "30px",
                fontSize: theme.spacing(1.2),
                fontWeight: 400,
                background: theme.palette.gray[100],
                boxShadow:
                  "0px 29.435239791870117px 70.2647705078125px -9.495238304138184px rgba(0, 0, 0, 0.1)"
              }
            : isTab
            ? {
                borderRadius: "30px",
                fontSize: theme.spacing(1.25),
                fontWeight: 400,
                background: theme.palette.gray[100],
                boxShadow:
                  "0px 29.435239791870117px 70.2647705078125px -9.495238304138184px rgba(0, 0, 0, 0.1)"
              }
            : isNotMobile
            ? {
                borderRadius: "30px",
                fontSize: theme.spacing(2),
                fontWeight: 400,
                background: theme.palette.gray[100],
                boxShadow:
                  "0px 29.435239791870117px 70.2647705078125px -9.495238304138184px rgba(0, 0, 0, 0.1)"
              }
            : {
                borderRadius: "30px",
                fontSize: theme.spacing(3),
                fontWeight: 400,
                background: theme.palette.gray[100],
                boxShadow:
                  "0px 29.435239791870117px 70.2647705078125px -9.495238304138184px rgba(0, 0, 0, 0.1)"
              }
        }
        type="secondary"
        variant="outlined"
        size="medium"
        endIcon={<MuiIcons icon="like" fontSize="large" color="secondary" />}
        text="Recommended"
      />

      <Button
        style={
          isMobile
            ? {
                borderRadius: "30px",
                fontSize: theme.spacing(1.2),
                fontWeight: 400,
                background: theme.palette.gray[100],
                boxShadow:
                  "0px 29.435239791870117px 70.2647705078125px -9.495238304138184px rgba(0, 0, 0, 0.1)"
              }
            : isTab
            ? {
                borderRadius: "30px",
                fontSize: theme.spacing(1.25),
                fontWeight: 400,
                background: theme.palette.gray[100],
                boxShadow:
                  "0px 29.435239791870117px 70.2647705078125px -9.495238304138184px rgba(0, 0, 0, 0.1)"
              }
            : isNotMobile
            ? {
                borderRadius: "30px",
                fontSize: theme.spacing(2),
                fontWeight: 400,
                background: theme.palette.gray[100],
                boxShadow:
                  "0px 29.435239791870117px 70.2647705078125px -9.495238304138184px rgba(0, 0, 0, 0.1)"
              }
            : {
                borderRadius: "30px",
                fontSize: theme.spacing(3),
                fontWeight: 400,
                background: theme.palette.gray[100],
                boxShadow:
                  "0px 29.435239791870117px 70.2647705078125px -9.495238304138184px rgba(0, 0, 0, 0.1)"
              }
        }
        type="secondary"
        variant="outlined"
        size="medium"
        text="Message"
      />
    </div>
  );
}
