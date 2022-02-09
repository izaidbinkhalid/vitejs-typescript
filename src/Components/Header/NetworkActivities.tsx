import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Popover, Typography } from "@material-ui/core";
import { RecommedYou } from "Components/Notifications/RecommedByOther";
import { NewPublication } from "Components/Notifications/NewPublication";
import { useHistory } from "react-router-dom";

interface Props {
  readonly open: boolean;
  readonly anchorEl: HTMLElement | null;
  readonly handleClose: () => void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    userDropDown: {
      width: "290px",
      padding: theme.spacing(2),
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      borderRadius: "20px"
    },
    goToNetworkDiv: {
      borderRadius: "20px",
      backgroundColor: "rgb(255 255 255 / 50%)",
      width: "fit-content",
      padding: theme.spacing(1.5),
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
      margin: "auto",
      cursor: "pointer"
    },
    notificationContent: {
      overflowY: "auto",
      maxHeight: "450px",
      marginBottom: theme.spacing(2)
    },
    contentSection: {
      marginRight: theme.spacing(1)
    },
    headingSection: {
      marginBottom: theme.spacing(1),
      paddingLeft: theme.spacing(1)
    }
  })
);

export const NetworkActivities: React.FC<Props> = props => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Popover
      style={{
        marginTop: "1%",
        marginLeft: "-3%"
      }}
      id="simple-popover"
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
    >
      <div className={classes.userDropDown}>
        <div className={classes.headingSection}>
          <Typography variant="subtitle2" color="secondary">
            Network Activities
          </Typography>
        </div>
        {/* Newer Content */}
        <div className={classes.notificationContent} id="networkActivitiesPopper">
          <div className={classes.contentSection}>
            <RecommedYou
              recommendedBy="Mousa"
              recommendedByPicture="https://image.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg"
              recommendedPost={true}
              variant="white"
            />

            <RecommedYou
              recommendedBy="Khalid"
              recommendedByPicture="https://image.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg"
              recommendedReview="Khalid is Very profeesional, Lorem Ipsum is simply dummy text of the printing and typesetting industry though... "
              variant="white"
            />
            <div className={classes.headingSection}>
              <Typography variant="subtitle2" color="secondary">
                Older
              </Typography>
            </div>
            <NewPublication
              userName="Khalid"
              userPostImage="https://i1.wp.com/dmtalkies.com/wp-content/uploads/2021/11/ezgif-3-ebf1a6547ad8-compressed.jpg?resize=696%2C347&ssl=1"
            />
            <NewPublication
              userName="John"
              userPostImage="https://i.insider.com/605a42480d155e0019ef64b4?width=1136&format=jpeg"
              bigPost={true}
            />
            <RecommedYou
              recommendedBy="Mousa"
              recommendedByPicture="https://image.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg"
              recommendedPost={true}
              variant="white"
            />
            <RecommedYou
              recommendedBy="Mousa"
              recommendedByPicture="https://previews.123rf.com/images/rawpixel/rawpixel1702/rawpixel170209764/112318649-young-adult-woman-smiling.jpg"
              recommendedPost={true}
              variant="white"
            />
          </div>
        </div>

        {/* Newer Content */}

        {/* last Div */}
        <div className={classes.goToNetworkDiv} onClick={() => history.push("/network")}>
          <Typography variant="body2" color="secondary">
            Go to my Network
          </Typography>
        </div>
        {/* last Div */}
      </div>
    </Popover>
  );
};
