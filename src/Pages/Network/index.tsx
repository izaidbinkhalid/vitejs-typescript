import React, { useState } from "react";
import TextInput from "Components/Form/TextInput";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography, Collapse, Grid } from "@material-ui/core";
import Layout from "Components/Layout";
import MuiIcons from "Components/Icons";
import { WhatsNew } from "Components/Network/WhatsNew";
import Activities from "Components/Network/Activities";
import ProfileCard from "Components/CommanCards/ProfileCard";
import ProfileImg from "assets/profile.jpg";
import menCard from "assets/menCard.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    addTag: {
      width: "100%",
      position: "relative",
      boxSizing: "border-box",
      borderRadius: "100px",
      paddingBottom: theme.spacing(4)
    },
    addTagIcon: {
      position: "absolute",
      right: "1rem",
      top: "0.8rem",
      cursor: "pointer"
    },
    chip: {
      margin: "0.3rem",
      background: "#FBFBFB"
    },

    relative: {
      position: "relative"
    },
    alignText: {
      alignContent: "center",
      userSelect: "none",
      display: "flex",
      cursor: "pointer",
      color: theme.palette.gray["900"]
    },
    whatsNew: {
      color: theme.palette.gray["900"],
      alignContent: "center",
      userSelect: "none",
      display: "flex",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "27px",
      cursor: "pointer"
    },
    pointer: {
      cursor: "pointer"
    },
    activities: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "27px",
      color: theme.palette.gray["900"],
      alignContent: "center",
      userSelect: "none",
      cursor: "pointer",
      display: "flex"
    },
    searchInputDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "100px",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      border: `0.5px solid ${theme.palette.gray[600]}`,
      marginBottom: theme.spacing(2)
    },
    searchInput: {
      background: theme.palette.background.paper,
      border: theme.palette.background.paper,
      color: theme.palette.secondary.main,
      boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)",
      borderRadius: "6px",
      fontSize: "14px",
      outline: "none",
      height: "40px",
      width: "95%",
      padding: theme.spacing(1.5),
      "&:focus": {
        color: "#5e6278"
      }
    },
    cursor: {
      cursor: "pointer"
    }
  })
);

const usersData = [
  {
    id: 1,
    img: ProfileImg,
    name: "Muhammad Ali",
    skill: "Product Designer"
  },
  {
    id: 2,
    img: menCard,
    name: "Ayesha Ali",
    skill: "Product Designer"
  },
  {
    id: 3,
    img: ProfileImg,
    name: "Sahil Ahmad",
    skill: "Product Designer"
  },
  {
    id: 4,
    img: ProfileImg,
    name: "John Doe",
    skill: "Product Designer"
  },
  {
    id: 5,
    img: ProfileImg,
    name: "Hamaza Ali",
    skill: "Product Designer"
  }
];

export const NetworkPage: React.FC = () => {
  const classes = useStyles();
  const [perPage] = useState(3);
  const [sliceList, setSliceList] = useState(3);
  const [openWhatsNew, setOpenWhatsNew] = React.useState(true);
  const [openActivities, setOpenActivities] = React.useState(true);

  const handleClick = (type: string) => {
    if (type === "whatsNew") setOpenWhatsNew(!openWhatsNew);
    if (type === "activities") setOpenActivities(!openActivities);
  };

  const loadMore = () => {
    return sliceList < usersData.length
      ? setSliceList(sliceList + sliceList)
      : setSliceList(sliceList);
  };
  const loadLess = () => {
    return sliceList > 1 ? setSliceList(sliceList - perPage) : setSliceList(perPage);
  };
  return (
    <Layout>
      <div className={classes.addTag}>
        <div className={classes.searchInputDiv}>
          <TextInput
            className={classes.searchInput}
            type="text"
            placeholder="Search My Network"
            name="tag"
            onChange={function (
              e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
          <MuiIcons
            icon="add"
            fontSize="small"
            color="secondary"
            className={classes.cursor}
          />
        </div>

        <Grid container spacing={1} alignItems="center">
          {usersData.slice(0, sliceList)?.map(({ id, name, img, skill }, index) => {
            return (
              <Grid item xs={6} sm={6} md={6} lg={4}>
                <ProfileCard key={index} id={id} title={name} image={img} text={skill} />
              </Grid>
            );
          })}

          <br />
        </Grid>
        <Grid container justifyContent="center">
          <Grid item lg={3}>
            <br />
            {sliceList > usersData.length ? (
              <Typography className={classes.alignText} onClick={loadLess}>
                Load Less
                <MuiIcons icon="arrowUp" />
              </Typography>
            ) : (
              <span className={classes.alignText} onClick={loadMore}>
                Load More
                <MuiIcons icon="arrowDown" />
              </span>
            )}
          </Grid>
        </Grid>
        <br />
        {/* Whats new section */}
        <span className={classes.whatsNew} onClick={() => handleClick("whatsNew")}>
          Whats new
          <MuiIcons icon={!openWhatsNew ? "arrowDown" : "arrowUp"} />
        </span>
        <Collapse in={openWhatsNew} timeout="auto" unmountOnExit>
          <br />

          <WhatsNew />
        </Collapse>

        {/*  All Activities  section*/}
        <Grid container justifyContent="flex-start" alignItems="center">
          <Grid item lg={6}>
            <br />
            <span
              className={classes.activities}
              onClick={() => handleClick("activities")}
            >
              Activities
              <MuiIcons icon={!openActivities ? "arrowDown" : "arrowUp"} />
            </span>
          </Grid>
        </Grid>
        <Collapse in={openActivities} timeout="auto" unmountOnExit>
          <br />
          <Activities />
        </Collapse>
      </div>
    </Layout>
  );
};
