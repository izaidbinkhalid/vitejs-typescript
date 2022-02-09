import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Avatar, Collapse, Grid, Typography } from "@material-ui/core";
import MuiIcons from "Components/Icons";

type Card = {
  image: string;
  name: string;
  title: string;
  username: string;
  email?: string;
  website?: string;
  phone?: string;
};

interface Props {
  setShowHeader: React.Dispatch<React.SetStateAction<boolean>>;
  setHeaderImage: React.Dispatch<React.SetStateAction<string>>;
  setHeaderName: React.Dispatch<React.SetStateAction<string>>;
  setHeaderTitle: React.Dispatch<React.SetStateAction<string>>;
  setHeaderUsername: React.Dispatch<React.SetStateAction<string>>;
  cards: Card[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      minWidth: "345px",
      [theme.breakpoints.down("md")]: {
        minWidth: "290px"
      },
      [theme.breakpoints.down("sm")]: {
        minWidth: "345px"
      }
    },
    heading: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "18px",
      color: "#58696D",
      marginBottom: theme.spacing(0.5)
    },
    editIcon: {
      fontSize: "14px",
      color: "#58696D",
      marginBottom: theme.spacing(0.5),
      cursor: "pointer"
    },
    cardSection1: {
      padding: theme.spacing(0.5),
      backgroundColor: theme.palette.gray[100],
      boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)",
      borderRadius: "12px",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1)
      }
    },
    cardSection2: {
      padding: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5),
      borderRadius: "12px",
      justifyContent: "space-between",
      cursor: "pointer",
      "&:hover": {
        background: theme.palette.gray[700],
        boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)"
      },
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1)
      }
    },
    subsection1_1: {
      display: "flex",
      alignItems: "center"
    },
    subsection1_2: {
      display: "flex",
      alignItems: "flex-start"
    },
    smallPic: {
      borderRadius: "8px",
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: theme.spacing(1.5)
    },
    companyNameSmall: {
      color: theme.palette.secondary.dark,
      fontFamily: "Poppins",
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "16px",
      letterSpacing: "0em",
      textAlign: "left",
      margin: "0px",
      overflow: "hidden",
      [theme.breakpoints.down("md")]: {
        fontSize: "13px",
        lineHeight: "16px"
      }
    },
    companyTypeSmall: {
      color: theme.palette.secondary.dark,
      fontFamily: "Poppins",
      fontSize: "10px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "left",
      margin: "0px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      [theme.breakpoints.down("xs")]: {
        fontSize: "8px"
      }
    },
    userName: {
      margin: "0px",
      fontSize: "10px",
      fontWeight: "bold",
      color: theme.palette.primary.main,
      maxWidth: "100px"
    },
    collapse: {
      borderRadius: "14px",
      background: "#58696D33"
      // width: "345px"
    },
    innerCollapse: {
      padding: theme.spacing(1)
    },
    info: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#58696D",
      margin: "0px"
    },
    infoFeild: {
      borderRadius: "12px",
      cursor: "pointer",
      "&:hover": {
        background: theme.palette.gray[700],
        boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)"
      }
    },
    icon: {
      color: "#58696D"
    },
    iconDiv: {
      alignItems: "center",
      justifyContent: "center",
      display: "flex"
    },
    noheader: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "13.5656px",
      lineHeight: "20px",
      color: theme.palette.gray[400],
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    removeCSS: {
      background: "none",
      boxShadow: "none",
      border: "none",
      margin: "0px",
      padding: "0px",
      display: "flex"
    },
    removeButton: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "18px",
      textAlign: "center",
      color: "#58696D",
      margin: theme.spacing(1),
      cursor: "pointer"
    }
  })
);

export const HeaderSimple: React.FC<Props> = props => {
  const classes = useStyles(props);
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [title, setTitle] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");

  const handleRemoveHeader = () => {
    setImage("");
    setName("");
    setTitle("");
    setUsername("");
    setExpanded(!expanded);
    props.setShowHeader(false);
    props.setHeaderImage("");
    props.setHeaderName("");
    props.setHeaderTitle("");
    props.setHeaderUsername("");
  };

  return (
    <Grid className={classes.wrapper}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline"
        }}
      >
        <p className={classes.heading}>Header</p>
      </div>
      <div className={classes.collapse}>
        <div>
          <section className={classes.cardSection1}>
            <Grid container alignItems="center">
              {!image && !name && !title && !username ? (
                <Grid item xs={10}>
                  <Typography className={classes.noheader}>
                    No Company Profile Selected
                  </Typography>
                </Grid>
              ) : (
                <Grid
                  container
                  className={classes.subsection1_1}
                  item
                  xs={10}
                  alignItems="center"
                >
                  <Avatar className={classes.smallPic} variant="rounded" src={image} />
                  <div>
                    <Typography className={classes.companyNameSmall}>{name}</Typography>
                    <Typography className={classes.companyTypeSmall}>{title}</Typography>
                    <Typography noWrap className={classes.userName}>
                      @{username}
                    </Typography>
                  </div>
                </Grid>
              )}

              <Grid item xs={2}>
                <div
                  style={{
                    padding: "9px 5px",
                    float: "right",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-evenly"
                  }}
                >
                  {expanded === true ? (
                    <MuiIcons
                      className={classes.icon}
                      onClick={() => setExpanded(!expanded)}
                      icon="arrowUp"
                      fontSize="medium"
                    />
                  ) : (
                    <MuiIcons
                      className={classes.icon}
                      onClick={() => setExpanded(!expanded)}
                      icon="arrowDown"
                      fontSize="medium"
                    />
                  )}
                </div>
              </Grid>
            </Grid>
          </section>
        </div>

        <Collapse
          style={{ width: "100%", transition: ".5s  all ease" }}
          in={expanded}
          timeout="auto"
          unmountOnExit
        >
          <div className={classes.innerCollapse}>
            {props.cards.map((card, i) => {
              return (
                <div
                  key={i}
                  className={classes.cardSection2}
                  onClick={() => {
                    setExpanded(!expanded);
                    setImage(card.image);
                    setName(card.name);
                    setTitle(card.title);
                    setUsername(card.username);
                    props.setShowHeader(true);
                    props.setHeaderImage(card.image);
                    props.setHeaderName(card.name);
                    props.setHeaderTitle(card.title);
                    props.setHeaderUsername(card.username);
                  }}
                >
                  <Grid
                    container
                    className={classes.subsection1_2}
                    item
                    xs={12}
                    alignItems="center"
                  >
                    <Avatar
                      className={classes.smallPic}
                      variant="rounded"
                      src={card.image}
                    />
                    <div>
                      <Typography className={classes.companyNameSmall}>
                        {card.name}
                      </Typography>
                      <Typography className={classes.companyTypeSmall}>
                        {card.title}
                      </Typography>
                      <Typography noWrap className={classes.userName}>
                        @{card.username}
                      </Typography>
                    </div>
                  </Grid>
                </div>
              );
            })}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              onClick={handleRemoveHeader}
            >
              <MuiIcons className={classes.icon} icon="close" fontSize="small" />
              <p className={classes.removeButton}>Dont use company profile</p>
            </div>
          </div>
        </Collapse>
      </div>
    </Grid>
  );
};
