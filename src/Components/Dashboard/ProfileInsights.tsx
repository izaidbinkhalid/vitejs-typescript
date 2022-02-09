import { Grid, Typography, Collapse } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import SocialLinks from "./SocialLinks";
import Button from "Components/Button";
import MuiIcons from "Components/Icons";
import { SocialLinksData } from "Data/SocialLinksData";
import ProfileVisits from "../Dashboard/ProfileVisits";
import VisitHistory from "./VisitHistory";
import TotalRecommends from "./TotalRecommends";
import VisitInsight from "./VisitInsight";
import MuiIcon from "Components/Icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Wrapper: {
      background: theme.palette.gray[100],
      borderRadius: "11px",
      padding: "1rem 0 1rem 0"
      // boxShadow: "0px 31px 160px -10px rgba(0, 0, 0, 0.1)"
    },
    title: {
      padding: "0 0.7rem ",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "27px",
      headingColor: theme.palette.secondary.dark,
      display: "flex",
      alignItems: "center"
    },
    flex: {
      display: "flex",
      justifyContent: "space-between"
    },
    cursor: {
      cursor: "pointer"
    },
    buttonsSections: {
      padding: "2rem 0rem 1rem 0.5rem"
    },
    buttonDivider: {
      margin: "0",
      color: theme.palette.secondary.dark,
      opacity: 0.1
    },
    alignText: {
      textAlign: "center",
      padding: "0.5rem 0"
    },
    alignTextSecond: {
      alignContent: "center",
      display: "flex",
      cursor: "pointer",
      color: theme.palette.gray[900],
      textAlign: "center",
      justifyContent: "center "
    }
  })
);

const ProfileInsights = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(true);
  const [showMoreIcons, setShowMoreIcons] = React.useState<boolean>(false);

  return (
    <div>
      <div className={classes.Wrapper}>
        <Typography className={classes.title}>
          My Profile Insights
          <MuiIcons
            onClick={() => setExpanded(!expanded)}
            icon={expanded ? "arrowUp" : "arrowDown"}
            fontSize="small"
            color="secondary"
            className={classes.cursor}
          />
        </Typography>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Grid container>
            {SocialLinksData?.map((icons, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <SocialLinks showCount={true} icons={icons} />
                </Grid>
              );
            })}
          </Grid>
          <hr className={classes.buttonDivider} />
          <div className={classes.buttonsSections}>
            <Grid container justifyContent="space-between">
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Button
                  type="darkOutlined"
                  size="small"
                  endIcon={<MuiIcons icon="add" fontSize="small" color="secondary" />}
                  text="Connect"
                />
                <Typography className={classes.alignText}>90</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} style={{ marginRight: "0.5rem" }}>
                <Button
                  type="darkOutlined"
                  size="small"
                  endIcon={<MuiIcons icon="like" fontSize="small" color="secondary" />}
                  text="Recommended"
                />
                <Typography className={classes.alignText}>140</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Button type="darkOutlined" size="small" text="Add to Contacts" />
                <Typography className={classes.alignText}>180</Typography>
              </Grid>
            </Grid>
          </div>
          <hr className={classes.buttonDivider} />
          <ProfileVisits />
          <hr className={classes.buttonDivider} />
          <VisitHistory />
          <hr className={classes.buttonDivider} />
          <VisitInsight />
          <hr className={classes.buttonDivider} />
          <TotalRecommends />
          <br />
          <Grid item xs={12}>
            <div
              className={classes.alignTextSecond}
              onClick={() => setShowMoreIcons(!showMoreIcons)}
            >
              Load {showMoreIcons ? "less" : "more"}
              <MuiIcon icon={showMoreIcons ? "arrowUp" : "arrowDown"} />
            </div>
          </Grid>
        </Collapse>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default ProfileInsights;
