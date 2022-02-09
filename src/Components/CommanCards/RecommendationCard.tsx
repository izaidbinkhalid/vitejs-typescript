import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Typography, Avatar } from "@material-ui/core";
import MuiIcons from "Components/Icons";
import Switch from "Components/Switch";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      background: theme.palette.gray[100],
      borderRadius: "12px",
      padding: theme.spacing(0.5),
      maxHeight: "180px"
    },
    activities: {
      fontWeight: 500,
      fontSize: "18px",
      color: theme.palette.gray["900"],
      alignContent: "center",
      userSelect: "none",
      cursor: "pointer",
      display: "flex"
    },
    alignText: {
      alignContent: "center",
      userSelect: "none",
      display: "flex",
      cursor: "pointer",
      color: theme.palette.gray["900"]
    },
    imgStyle: (props: IDetailedCardProps) => ({
      // marginTop: theme.spacing(1),
      borderRadius: "12px",
      transition: "0.3s",
      boxShadow:
        "0px 28.024744033813477px 66.89777374267578px -9.040241241455078px #0000001A",
      width: "100%",
      // width: theme.spacing(17.5),
      height: theme.spacing(19.5),
      [theme.breakpoints.down("md")]: {
        width: props.size === "xl" ? theme.spacing(17.5) : "95%",
        height: props.size === "xl" ? theme.spacing(19.5) : "95%%"
        // width: "95%"
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }

      // [theme.breakpoints.down("xs")]: {
      //   width: theme.spacing(11),
      //   height: theme.spacing(11)
      // }
    }),
    spacing: {
      padding: "0.5rem"
    },
    iconsStyle: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "100%"
    },
    timeStamp: {
      fontSize: theme.spacing(1.2),
      marginTop: theme.spacing(1.5),
      paddingRight: theme.spacing(3),
      headingColor: theme.palette.secondary.dark,
      [theme.breakpoints.down("xs")]: {
        paddingRight: theme.spacing(3)
      }
    },
    description: {
      fontSize: theme.spacing(1.6),
      textAlign: "justify",
      color: theme.palette.secondary.dark,
      padding: theme.spacing(0.5),
      paddingRight: theme.spacing(1),
      overflow: "hidden",
      maxHeight: "80px",
      [theme.breakpoints.down("sm")]: {
        // maxHeight: "30px"
      }
    },
    title: {
      fontWeight: 600,
      padding: theme.spacing(0.5),

      color: theme.palette.secondary.main,
      margin: 0,
      lineHeight: 1.2,
      [theme.breakpoints.down("sm")]: {
        color: theme.palette.secondary.light
      }
    },
    skillSet: {
      padding: theme.spacing(0.5),

      lineHeight: 1.2,
      color: theme.palette.secondary.main,
      fontWeight: 500,
      margin: 0,
      fontSize: theme.spacing(1.2),
      [theme.breakpoints.down("sm")]: {
        color: theme.palette.secondary.light
      }
    },
    middleIcon: {
      display: "flex",
      alignItems: "center",
      color: theme.palette.secondary.main,
      [theme.breakpoints.down("sm")]: {
        color: theme.palette.secondary.light
      }
    },
    count: {
      marginRight: theme.spacing(0.5)
    },
    headDiv: {
      paddingTop: theme.spacing(1),
      paddingRight: theme.spacing(3)
    }
  })
);

interface IDetailedCardProps {
  readonly image: string;
  readonly title: string;
  readonly description: string;
  readonly skillSet: string;
  readonly timeStamp: string;
  readonly connections?: string | number;
  readonly likes?: string | number;
  readonly size?: "xl";
}

const DetailedCard: React.FC<IDetailedCardProps> = ({
  image,
  title,
  description,
  skillSet,
  timeStamp,
  connections,
  likes,
  size
}) => {
  const classes = useStyles({
    image,
    title,
    description,
    skillSet,
    timeStamp,
    connections,
    likes,
    size
  });

  const [checked, setChecked] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };

  return (
    <div>
      <div className={classes.wrapper}>
        <Grid container justifyContent="space-between" alignContent="center" spacing={1}>
          <Grid item xs={4} sm={3} lg={size === "xl" ? 2 : 3}>
            <Avatar
              variant="rounded"
              src={image}
              className={classes.imgStyle}
              alt="profile"
            />{" "}
          </Grid>
          <Grid item xs={8} sm={9} lg={size === "xl" ? 10 : 9}>
            <Grid container justifyContent="space-between" className={classes.headDiv}>
              <Grid item lg={10} sm={9} xs={8}>
                <Typography variant="h6" className={classes.title} noWrap>
                  {title}
                </Typography>
                <Typography variant="body2" className={classes.skillSet}>
                  {skillSet}
                </Typography>
              </Grid>
              <Grid item lg={2} sm={3} xs={4}>
                <div className={classes.iconsStyle}>
                  <div className={classes.middleIcon}>
                    <div className={classes.count}>{connections}</div>

                    <MuiIcons icon="persons" fontSize="small" />
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div className={classes.middleIcon}>
                    <div className={classes.count}>{likes}</div>{" "}
                    <MuiIcons icon="like" fontSize="small" />
                  </div>
                </div>
              </Grid>
            </Grid>
            <Typography align="justify" className={classes.description}>
              {description}
            </Typography>
            <footer>
              <Typography align="right" className={classes.timeStamp}>
                {timeStamp}
              </Typography>
            </footer>
          </Grid>
        </Grid>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", margin: "5px 2px" }}>
        <div>
          Show on profile &nbsp;
          <Switch
            checked={checked}
            name="cardCheck"
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
