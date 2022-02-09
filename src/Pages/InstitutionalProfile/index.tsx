import * as React from "react";
import { makeStyles, Theme, createStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Header } from "Components/Header";
import { maxContainerWidth } from "../../theme";
import Drawer from "Components/Drawer";
import DrawerRoutes from "Components/Layout/Components/DrawerRoutes";
import Messages from "Components/Layout/Components/Messages";
import { ProfileCover } from "Components/InstitutionalProfile/ProfileCover";
import { ProfileOptions } from "Components/ProfileLayout/Components/ProfileOptions";
import { SocialLinks } from "Components/InstitutionalProfile/SocialLinks";
import { AboutSection } from "Components/InstitutionalProfile/About";
import Post from "Components/Post";
import { Posts } from "Components/Layout/Data/Data";
import RecommendationCard from "Components/CommanCards/RecommendationCard";
import menCard from "assets/profile.jpg";
import ActivitiesInstitute from "Components/Dashboard/ActivitiesInstitute";
import InsitutionalProfileButtons from "Components/InstitutionalProfile/InsitutionalProfileButtons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      maxWidth: maxContainerWidth,
      margin: "auto",
      marginTop: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(1)
      }
    },
    container: {
      margin: "auto",
      justifyContent: "center",
      padding: theme.spacing(1),
      marginTop: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(1)
      }
    },
    rightwrapper: {
      width: "100%",
      minHeight: "87vh",
      maxHeight: "90vh",
      position: "sticky",
      top: "14vh"
    },
    rightSideContainer: {
      position: "relative",
      width: "100%"
    },
    recomendations: {
      color: theme.palette.secondary.light
    },
    activities: {
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "27px",
      color: theme.palette.gray[900],
      alignContent: "center",
      cursor: "pointer",
      display: "flex"
    },
    postContainer: {
      maxWidth: '600px',
      margin: "auto"
    },
    messageContainer: {
      position: "fixed",
      width: "290px",
      bottom: "0px",
      right: 0,
      padding: '0px !important'
    }
  })
);

export const InsitutionalProfilePage: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isNotMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Header />
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <Grid container spacing={isNotMobile ? 3 : 4} justifyContent="center">
            <Grid item xl={9} lg={9} md={9} sm={8} xs={12}>
              <ProfileCover />
              <br />
              <br />
              <InsitutionalProfileButtons />
              <br />
              <br />
              <AboutSection />
              <br />
              <br />
              <Typography variant="h6" className={classes.recomendations}>
                Cristina Beauty LLC Recomendations
              </Typography>
              <br />
              <RecommendationCard
                title="Alena Grey"
                skillSet="Product Designer"
                image={menCard}
                timeStamp="today"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                likes="31"
                connections="173"
                size="xl"
              />
              <br />
              <br />
              <br />
              <Typography variant="h6" className={classes.recomendations}>
                Activity
              </Typography>
              <br />
              <ActivitiesInstitute />
              <div>
                <Typography variant="h6" className={classes.recomendations}>
                  Publications
                </Typography>
                <br />
                <div className={classes.postContainer}>
                  {Posts?.map((post, index) => (

                    <Post
                      key={index}
                      title={post.title}
                      image={post.image}
                      author={post.author}
                      postSize="xl"
                    />
                  ))}
                </div>
              </div>
            </Grid>

            {isMobile ? null : (
              <Grid item xl={3} lg={3} md={3} sm={4} xs={3}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                  className={classes.rightwrapper}
                  direction="column"
                >
                  <Grid item xs={12} className={classes.rightSideContainer}>
                    <ProfileOptions />
                    <br />
                    <SocialLinks />
                  </Grid>
                  <Grid item xs={12} className={classes.messageContainer}>
                    <Messages />
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
          <Drawer>
            <DrawerRoutes />
          </Drawer>
        </div>
      </div>
    </div>
  );
};
