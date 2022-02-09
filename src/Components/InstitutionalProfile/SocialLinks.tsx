import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Collapse } from "@material-ui/core";
import MuiIcon from "Components/Icons";
import { SocialLinksData } from "Data/SocialLinksData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconColor: {
      color: theme.palette.secondary.dark,
      textAlign: "center"
    },
    alignText: {
      alignContent: "center",
      display: "flex",
      cursor: "pointer",
      color: theme.palette.gray[900],
      textAlign: "center",
      justifyContent: "center "
    }
  })
);

export const SocialLinks = () => {
  const classes = useStyles();
  const [showMoreIcons, setShowMoreIcons] = React.useState<boolean>(false);

  return (
    <div>
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={1}>
            {SocialLinksData.map((social, index) => (
              <Grid item xs={2} key={index}>
                <p className={classes.iconColor}>{social.icon}</p>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Collapse in={showMoreIcons} timeout="auto" unmountOnExit>
          <Grid item xs={12}>
            <Grid container alignItems="center" spacing={1}>
              {SocialLinksData.map((social, index) => (
                <Grid item xs={2} key={index}>
                  <p className={classes.iconColor}>{social.icon}</p>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Collapse>{" "}
        <Grid item xs={12}>
          <div
            className={classes.alignText}
            onClick={() => setShowMoreIcons(!showMoreIcons)}
          >
            Load {showMoreIcons ? "less" : "more"}
            <MuiIcon icon={showMoreIcons ? "arrowUp" : "arrowDown"} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
