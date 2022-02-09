import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Avatar, Typography } from "@material-ui/core";
import MuiIcons from "Components/Icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      marginBottom: theme.spacing(1)
    },
    postSection: {
      background: theme.palette.gray[100],
      boxShadow: "0px 31px 74px -10px #0000001A",
      borderRadius: "15px",
      minHeight: "max-content",
      maxHeight: "320px",
      padding: theme.spacing(0.5, 0.5, 2, 0.5),
      boxSizing: "border-box"
    },
    ImageSection: (props: Post) => ({
      backgroundImage: `url(${props?.image ? props?.image[0] : ""})`,
      borderRadius: "10px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "180px",
      maxHeight: "180px",
      height: "100%",
      boxShadow: "0px -108px 82px -42px #00000096 inset",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }),
    moreDiv: {
      textAlign: "right",
      paddingRight: theme.spacing(1)
    },
    content: {
      padding: theme.spacing(1)
    },
    moreIcon: {
      color: theme.palette.background.paper,
      cursor: "pointer"
    },
    postTitle: {
      overflow: "hidden",
      width: "100%",
      color: theme.palette.background.paper,
      fontSize: theme.spacing(2)
    },
    postTitle2: {
      overflow: "hidden",
      width: "100%",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "14px",
      color: theme.palette.secondary.dark
    },
    authorImage: {
      width: "30px",
      height: "30px"
    },
    authorSection: {
      padding: theme.spacing(1)
    },
    authorName: {
      color: "white !important",
      fontSize: theme.spacing(1.5)
    },
    authorName2: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "15.4711px",
      lineHeight: "23px",
      color: theme.palette.secondary.dark
    },
    authorTitle: {
      color: "white !important",
      fontSize: theme.spacing(0.8)
    },
    authorTitle2: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "6.76859px",
      lineHeight: "10px",
      color: theme.palette.secondary.dark
    },
    flexAlign: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      fontSize: theme.spacing(1.5),
      color: theme.palette.secondary.light,
      fontWeight: "bold"
    },
    likesSection: {
      border: "1px solid green"
    },
    descriptionSection: {
      padding: theme.spacing(2),
      maxHeight: "120px",
      overflow: "hidden"
    },
    description: {
      overflow: "hidden",
      fontSize: theme.spacing(1.3),
      color: theme.palette.secondary.light,
      lineHeight: 1.2
    },
    tagsContainer: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: theme.spacing(1)
    },
    postTag: {
      borderRadius: "20px",
      fontSize: theme.spacing(1.3),
      color: theme.palette.secondary.light,
      background: theme.palette.gray[200],
      padding: theme.spacing(0.2),
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      marginRight: theme.spacing(0.7),
      textAlign: "center",
      marginBottom: theme.spacing(0.5),
      cursor: "pointer"
    },
    recommedationsAndSavedContainer: {
      textAlign: "right",
      width: "fit-content",
      marginLeft: "auto",
      marginTop: theme.spacing(1),
      paddingRight: theme.spacing(1)
    },
    icons: {
      color: theme.palette.secondary.light,
      fontSize: theme.spacing(1.7)
    },
    iconPrimary: {
      fontSize: theme.spacing(1.7)
    },
    noImageAuthor: {
      width: "30px",
      height: "30px"
    },
    noImagePostContainer: {
      padding: theme.spacing(0.5, 2)
    },
    flexBetween: {
      display: "flex",
      justifyContent: "space-between"
    }
  })
);
interface Post {
  title?: string;
  image?: string[];
  author: {
    image: string;
    name: string;
    title: string;
  };
}
const SavedPost: React.FC<Post> = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.postSection}>
        {props.image ? (
          <div className={classes.ImageSection}>
            <div className={classes.moreDiv}>
              <MuiIcons icon="dots" className={classes.moreIcon} fontSize="large" />
            </div>
            <div className={classes.content}>
              <Typography variant="h6" className={classes.postTitle} noWrap>
                {props.title}
              </Typography>
              <div className={classes.flexAlign}>
                <div>
                  <Avatar src={props.author.image} className={classes.authorImage} />
                </div>
                <div className={classes.authorSection}>
                  <Typography className={classes.authorName} variant="body2" noWrap>
                    {props.author.name}
                  </Typography>
                  <Typography className={classes.authorTitle} variant="body2" noWrap>
                    {props.author.title}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.noImagePostContainer}>
            <div className={classes.flexBetween}>
              <div className={classes.flexAlign}>
                <div>
                  <Avatar src={props.author.image} className={classes.noImageAuthor} />
                </div>
                <div className={classes.authorSection}>
                  <Typography className={classes.authorName2} variant="h6" noWrap>
                    {props.author.name}
                  </Typography>
                  <Typography className={classes.authorTitle2} variant="body2" noWrap>
                    {props.author.title}
                  </Typography>
                </div>{" "}
              </div>
              <div>
                <div className={classes.moreDiv}>
                  <MuiIcons icon="dots" color="secondary" fontSize="large" />
                </div>
              </div>
            </div>
            <Typography variant="h1" align="left" className={classes.postTitle2}>
              {props.title}
            </Typography>
          </div>
        )}
        <div className={classes.descriptionSection}>
          <div className={classes.tagsContainer}>
            <div className={classes.postTag}>Tag</div>
            <div className={classes.postTag}>Tag</div>
            <div className={classes.postTag}>Tag</div>
            <div className={classes.postTag}>Tag</div>
          </div>
          <Typography align="justify" className={classes.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries...
          </Typography>
        </div>
      </div>
      <div className={classes.recommedationsAndSavedContainer}>
        <div className={classes.flexAlign}>
          <div className={classes.flexAlign}>
            <span>85</span> &nbsp;&nbsp;
            <MuiIcons icon="like" fontSize="small" className={classes.icons} />
          </div>
          &nbsp;&nbsp; &nbsp;
          <div className={classes.flexAlign}>
            <span>85</span> &nbsp;&nbsp;
            <MuiIcons
              icon="saved"
              fontSize="small"
              color="primary"
              className={classes.iconPrimary}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedPost;
