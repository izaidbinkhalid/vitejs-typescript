import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import sampleImage from "assets/sampleImage.jpg";
import fullSizeImage from "assets/fullSizeImage.jpg";
import benchImage from "assets/benchImage.jpg";
import ProfileImg from "assets/profile.jpg";
import TableCard from "Components/CommanCards/TableCard";
import { RecommedYou } from "Components/Notifications/RecommedByOther";
import { NewtworkActivityNotification } from "Components/CommanCards/NetworkActivityNotification";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    line: {
      height: "2px",
      display: "flex",
      justifyContent: "center",
      width: "210px",
      background: "rgba(255, 255, 255, 0.53)"
    },
    spacing: {
      marginTop: "20px"
    },
    pl: {
      paddingLeft: "0.5rem"
    }
  })
);

export const WhatsNew = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container alignItems="center" className={classes.spacing}>
        <Grid item xs={12}>
          <NewtworkActivityNotification
            name="Tom Cruise"
            picture="https://phantom-marca.unidadeditorial.es/4b2d00cc48f41c0ebfd371ad4b22fd23/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/29/16302497179732.jpg"
            notificationCount={3}
          />
        </Grid>
        <Grid item lg={6} className={classes.pl}>
          <div>
            <RecommedYou
              recommendedBy="Tom Cruise"
              recommendedByPicture="https://phantom-marca.unidadeditorial.es/4b2d00cc48f41c0ebfd371ad4b22fd23/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/29/16302497179732.jpg"
              recommendedPost={false}
              disorder={true}
              text={
                <>
                  {" "}
                  Recomended <strong>Hafeez’s</strong> Publication
                </>
              }
            />
          </div>
        </Grid>
        <Grid item lg={6}>
          <RecommedYou
            recommendedBy="Tom Cruise"
            recommendedByPicture="https://phantom-marca.unidadeditorial.es/4b2d00cc48f41c0ebfd371ad4b22fd23/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/29/16302497179732.jpg"
            recommendedPost={false}
            disorder={true}
            text={
              <>
                {" "}
                Recomended <strong>Hafeez’s</strong> Publication
              </>
            }
          />
        </Grid>
      </Grid>
      <br />
      <Grid container justifyContent="center" className={classes.spacing}>
        <Grid item xs={12} lg={4}>
          <Typography className={classes.line}> {""}</Typography>
        </Grid>
      </Grid>

      <br />
      <Grid container justifyContent="space-between" className={classes.spacing}>
        <Grid item lg={6}>
          <NewtworkActivityNotification
            name="Nabeela Afzal"
            picture={ProfileImg}
            notificationCount={3}
            variant="sm"
          />
          {/* <MyCard
            background="white"
            name={"Cristina Adams"}
            profilePic={ProfileImg}
            count={2}
            size="xl"
            icon={<CampaignIcon />}
          /> */}

          <RecommedYou
            recommendedBy="Adam"
            recommendedByPicture="https://image.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg"
            recommendedPost={false}
            text={
              <>
                Recomended <strong>Ahmed’s</strong> Publication{" "}
              </>
            }
          />

          <RecommedYou
            recommendedBy="Adam"
            recommendedByPicture="https://image.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg"
            recommendedPost={false}
            text={
              <>
                Recomended <strong>Ahmed’s</strong> Publication{" "}
              </>
            }
          />

          <RecommedYou
            recommendedBy="Adam"
            recommendedByPicture={sampleImage}
            recommendedPost={false}
            imageSize="xl"
            disorder={true}
            text={"made a new publication, Check it out!"}
          />

          <RecommedYou
            recommendedBy="Adam"
            recommendedByPicture={fullSizeImage}
            recommendedPost={false}
            imageSize="xxl"
            disorder={true}
            text={"made a new publication, Check it out!"}
          />
        </Grid>
        <Grid item lg={6}>
          <TableCard
            image={benchImage}
            text={
              <>
                <strong>Adam's</strong> publication got 100 Recomends!{" "}
              </>
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};
