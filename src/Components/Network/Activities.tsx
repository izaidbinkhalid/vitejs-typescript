import React from "react";
import { Grid } from "@material-ui/core";
import { RecommedYou } from "Components/Notifications/RecommedByOther";
import TableCard from "Components/CommanCards/TableCard";
import benchImage from "assets/postImage.jpg";
import fullSizeImage from "assets/fullSizeImage.jpg";
import sampleImage from "assets/sampleImage.jpg";
import menCard from "assets/menCard.jpg";

const Activities = () => {
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item lg={6}>
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
            recommendedByPicture={menCard}
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

          <br />
          <TableCard
            image={benchImage}
            text={
              <>
                <strong>Adam's</strong> publication got 200 Recomends!{" "}
              </>
            }
          />
        </Grid>
        <Grid item lg={6}>
          <TableCard
            image={benchImage}
            text={
              <>
                <strong>Adam's</strong> publication got 300 Recomends!{" "}
              </>
            }
          />
          <br />
          <div style={{ paddingLeft: "0.3rem" }}>
            <RecommedYou
              recommendedBy="Adams"
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
              recommendedByPicture={menCard}
              recommendedPost={false}
              imageSize="xl"
              disorder={false}
              text={"made a new publication, Check it out!"}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Activities;
