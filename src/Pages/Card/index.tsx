import * as React from "react";
import { Grid, Typography, Collapse } from "@material-ui/core/";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Layout from "Components/Layout";
import { CreateCard } from "./CreateCard";
import TextInput from "Components/Form/TextInput";
import MuiIcons from "Components/Icons";
import Switch from "Components/Switch";
import { MyCards, MyCompanies } from "Components/Layout/Data/Data";
import MyCard from "Components/MyCard";
import MyCompany from "Components/MyCompany";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(7)
      }
    },
    searchInputDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "100px",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    searchInput: {
      background: theme.palette.background.paper,
      border: theme.palette.background.paper,
      color: theme.palette.secondary.main,
      boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)",
      borderRadius: "20px",
      fontSize: "16px",
      outline: "none",
      height: "40px",
      width: "95%",
      padding: theme.spacing(1.5),
      "&:focus": {
        color: "#5e6278"
      }
    },
    showOnlyCompany: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      display: "flex",
      alignItems: "center"
    },
    flexAlign: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(1)
    },
    flexAlignCenter: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: theme.spacing(1)
    },
    dropHeading: {
      color: theme.palette.secondary.light
    }
  })
);

export const CardsPage: React.FC = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<boolean>(true);
  const [expandedCompany, setExpandedCompany] = React.useState<boolean>(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandCompany = () => {
    setExpandedCompany(!expandedCompany);
  };

  return (
    <Layout>
      <div className={classes.wrapper}>
        <Grid container spacing={1} alignItems="center">
          <Grid item lg={8} md={7} sm={9} xs={6}>
            <div className={classes.searchInputDiv}>
              <TextInput
                className={classes.searchInput}
                type="text"
                name="searchCard"
                placeholder="Search Cards or company profiles"
                onChange={function (
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <MuiIcons icon="search" fontSize="small" color="secondary" />
            </div>
          </Grid>

          {/* Create Card Dialog Box */}
          <Grid item lg={4} md={5} sm={3} xs={6}>
            <CreateCard />
          </Grid>
          {/* Create Card Dialog Box */}
        </Grid>
        <div className={classes.showOnlyCompany}>
          <MuiIcons icon="briefCase" fontSize="small" color="secondary" /> &nbsp;&nbsp;
          <Typography>Show cards by company profile</Typography> &nbsp; <Switch />
        </div>
        <div className={classes.flexAlign} onClick={() => handleExpandClick()}>
          <Typography variant="body2" className={classes.dropHeading}>
            Individual Cards
          </Typography>{" "}
          &nbsp;&nbsp;
          <MuiIcons
            icon={expanded ? "arrowUp" : "arrowDown"}
            fontSize="small"
            color="disabled"
          />
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Grid container alignItems="center" justifyContent="space-between" spacing={1}>
            {MyCards?.map((card, index) => (
              <Grid item lg={6} md={6} sm={6} xs={12} key={index}>
                <MyCard
                  background="white"
                  live={card.live}
                  key={index}
                  name={card.name}
                  profilePic={card.profilePic}
                  description={card.description}
                  business={card.business}
                  userName={card.username}
                />
              </Grid>
            ))}
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={classes.flexAlignCenter}
            >
              <span>Load More</span> &nbsp;&nbsp;
              <MuiIcons
                icon={!expanded ? "arrowUp" : "arrowDown"}
                fontSize="small"
                color="secondary"
              />
            </Grid>
          </Grid>{" "}
        </Collapse>

        <div className={classes.flexAlign} onClick={() => handleExpandCompany()}>
          <Typography variant="body2" className={classes.dropHeading}>
            Institutional Profiles
          </Typography>{" "}
          &nbsp;&nbsp;
          <MuiIcons
            icon={expandedCompany ? "arrowUp" : "arrowDown"}
            fontSize="small"
            color="disabled"
          />
        </div>
        <Collapse in={expandedCompany} timeout="auto" unmountOnExit>
          <Grid container justifyContent="space-between" spacing={1}>
            {MyCompanies?.map((card, index) => (
              <Grid item lg={6} md={6} sm={6} xs={12} key={index}>
                <MyCompany
                  background={card?.color}
                  live={card.live}
                  key={index}
                  name={card.name}
                  profilePic={card.profilePic}
                  description={card.description}
                  business={card.business}
                  userName={"saad"}
                  cards={card.cards}
                />
              </Grid>
            ))}
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={classes.flexAlignCenter}
            >
              <span>Load More</span> &nbsp;&nbsp;
              <MuiIcons
                icon={!expanded ? "arrowUp" : "arrowDown"}
                fontSize="small"
                color="secondary"
              />
            </Grid>
          </Grid>{" "}
        </Collapse>
      </div>
    </Layout>
  );
};
