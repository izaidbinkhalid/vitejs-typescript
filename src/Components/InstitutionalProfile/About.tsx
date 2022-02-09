import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Avatar, Typography } from "@material-ui/core";
import MapImage from "assets/mapImage.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      borderRadius: "11px",
      boxShadow:
        "0px 32.07466506958008px 76.5653305053711px -10.34666633605957px #0000001A",
      background: theme.palette.gray[100],
      padding: theme.spacing(1.5),
      lineHeight: 1.8
    },
    mainWrapper: {},
    aboutHeading: {
      color: theme.palette.secondary.light,
      marginBottom: theme.spacing(2)
    },
    mapImage: {
      height: theme.spacing(35),
      width: "100%",
      borderRadius: "11px"
    }
  })
);

export const AboutSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainWrapper}>
      <Typography variant="h6" align="justify" className={classes.aboutHeading}>
        About{" "}
      </Typography>
      <div className={classes.wrapper}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod iure maiores
        excepturi obcaecati! Inventore laudantium autem labore, tempore mollitia aperiam
        ducimus deserunt rerum officiis a eum omnis odio in eius? Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Quod iure maiores excepturi obcaecati!
        Inventore laudantium autem labore, tempore mollitia aperiam ducimus deserunt rerum
        officiis a eum omnis odio in eius? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Quod iure maiores excepturi obcaecati! Inventore laudantium
        autem labore, tempore mollitia aperiam ducimus deserunt rerum officiis a eum omnis
        odio in eius? Lorctetur adipisicing elit. Quod iure maiores excepturi obcaecati!
        Inventore laudantium autem labore, tempore mollitia aperiam ducimus deserunt rerum
        officiis a eum omnis odio in eius?
      </div>
      <br />
      <br />
      <br />
      <Typography variant="h6" align="justify" className={classes.aboutHeading}>
        Visit Us{" "}
      </Typography>
      <div>
        <Avatar src={MapImage} className={classes.mapImage} variant="rounded" />
      </div>
    </div>
  );
};
