import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Collapse, Grow } from "@material-ui/core";
import MuiIcons from "Components/Icons";
import Slider from "react-slick"
import TextArea from "Components/Form/TextArea";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // POST Images
    containerWrapper: {
      marginBottom: theme.spacing(3)
    },
    wrapper: {
      width: "100%",
      borderRadius: "13px",
      background: theme.palette.gray[100],
      padding: theme.spacing(0.5),
      marginBottom: theme.spacing(2),
      boxShadow:
        "0px 110.76798248291016px 168.3238983154297px -62.9857177734375px #00000008"
    },
    postImage: (props: Post) => ({
      width: "100%",
      height: "100%",
      minHeight: props.postSize === "xl" ? "600px" : "500px",
      [theme.breakpoints.down("sm")]: {
        height: "300px"
      }
    }),
    singleImage: (props: Post) => ({
      width: "100%",
      height: "100%",
      minHeight: props.postSize === "xl" ? "600px" : "500px",
      objectFit: "cover",
      borderRadius: "12px",
      boxShadow:
        "0px 102px 155px -58px rgba(0, 0, 0, 0.06), inset 0px -196px 120px -93px rgba(0, 0, 0, 0.57)",
      [theme.breakpoints.down("sm")]: {
        height: "300px"
      }
    }),
    flexAlign: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer"
    },
    flexAlignCenter: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    content: {
      padding: theme.spacing(2)
    },
    postTitle: {
      overflow: "hidden",
      width: "100%",
      color: theme.palette.secondary.dark,
      marginBottom: theme.spacing(2)
    },
    authorSection: {
      padding: theme.spacing(1)
    },
    authorName: {
      color: theme.palette.secondary.dark,
      fontWeight: "bold"
    },
    authorTitle: {
      color: theme.palette.secondary.dark,
      fontSize: "10px"
    },
    // POST DESCRIPTION
    postDescriptionContainer: {
      position: "relative",
      padding: theme.spacing(1),
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2)
    },
    tagsAndLikesContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      margin: theme.spacing(2, 2, 0, 2)
    },
    tagsContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "60%",
      flexWrap: "wrap",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "100%"
      }
    },
    postTag: {
      borderRadius: "20px",
      minWidth: "40px",
      fontSize: "14px",
      color: theme.palette.secondary.main,
      background: theme.palette.gray[700],
      padding: theme.spacing(0.5),
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      marginRight: theme.spacing(0.5),
      textAlign: "center",
      marginBottom: theme.spacing(0.5),
      cursor: "pointer"
    },
    recommedToggle: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer"
    },
    recommedationsAndSavedContainer: {
      marginLeft: "auto",
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(2)
      }
    },

    sharingOptionsContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexWrap: "wrap"
    },
    recommendedSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        alignItems: "unset",
        flexDirection: "column-reverse"
      }
    },
    commentsSection: {
      marginTop: theme.spacing(1)
    },
    eachRecommend: {
      borderRadius: "12px",
      marginBottom: theme.spacing(2),
      background: theme.palette.gray[300]
    },
    userSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(0.5)
    },
    commentedUserPic: {
      width: "60px",
      height: "60px",
      padding: theme.spacing(0.5),
      borderRadius: "17px"
    },
    commentedUserName: {
      margin: "0px",
      fontSize: "18px",
      color: theme.palette.secondary.main
    },
    commentedUserDesignation: {
      margin: "0px",
      fontSize: "10px",
      color: theme.palette.secondary.main
    },
    commentedUserSection: {
      marginLeft: theme.spacing(1)
    },
    likeComment: {
      marginRight: theme.spacing(1)
    },
    userComment: {
      padding: theme.spacing(1),
      paddingBottom: theme.spacing(2),
      color: theme.palette.secondary.main
    },
    moreDiv: {
      textAlign: "right",
      paddingRight: theme.spacing(1)
    },
    moreIcon: {
      color: theme.palette.background.paper,
      cursor: "pointer"
    },
    noImagePostContainer: {
      padding: theme.spacing(2)
    },
    noImageAuthor: {
      width: "60px",
      height: "60px"
    },
    authorName2: {
      color: theme.palette.secondary.dark,
      fontWeight: 600
    },
    authorTitle2: {
      fontWeight: 600,
      color: theme.palette.secondary.dark
    },
    postTitle2: {
      fontWeight: 600,
      color: theme.palette.secondary.dark,
      marginTop: theme.spacing(2),
      fontSize: theme.spacing(3)
    },
    flexBetween: {
      display: "flex",
      justifyContent: "space-between"
    },
    closeFeedBack: {
      cursor: "pointer",
      position: "absolute",
      right: 10,
      top: 15
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
  postSize?: "lg" | "xl";
}


const PostComponent: React.FC<Post> = props => {
  const classes = useStyles(props);
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [showRecommends, setShowRecommends] = React.useState<boolean>(false);
  const [clickOnRecommend, setClickOnRecommend] = React.useState<boolean>(false);
  const [feedBack, setFeedBack] = React.useState<string>("");
  const [feedBackField, setFeedBackField] = React.useState<boolean>(false);

  const SampleNextArrow = (props: { className?: string; style?: React.CSSProperties; onClick?: () => void; }) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const SamplePrevArrow = (props: { className?: string; style?: React.CSSProperties; onClick?: () => void; }) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipeToSlide: true,
    arrows: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandRecommend = () => {
    setShowRecommends(!showRecommends);
  };
  return (
    <div className={classes.containerWrapper}>
      <div className={classes.wrapper}>
        {props.image ? (
          <>
            {props.image?.length === 1 ? (
              <div className={classes.postImage}>
                <img src={props.image[0]} className={classes.singleImage} alt="post" />
              </div>
            ) : props.image?.length > 1 ? (
              <Slider {...settings}>
                {props.image?.map((image, i) => (
                  <div className={classes.postImage} key={i}>
                    <img src={image} alt="post" />
                  </div>
                ))}
              </Slider>
            ) : null}
            <div className={classes.tagsAndLikesContainer}>
              <div className={classes.tagsContainer}>
                <div className={classes.postTag}>Tag</div>
                <div className={classes.postTag}>Tag</div>
                <div className={classes.postTag}>Tag</div>
                <div className={classes.postTag}>Tag</div>
              </div>
              <div className={classes.recommedationsAndSavedContainer}>
                <div className={classes.flexAlign}>
                  <div className={classes.flexAlign}>
                    <span>85</span> &nbsp;&nbsp;
                    <MuiIcons icon="like" fontSize="small" color="secondary" />
                  </div>
                  &nbsp;&nbsp; &nbsp;
                  <div className={classes.flexAlign}>
                    <span>85</span> &nbsp;&nbsp;
                    <MuiIcons icon="saved" fontSize="small" color="secondary" />
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.content}>
              <Typography variant="h4" className={classes.postTitle} noWrap>
                {props.title}
              </Typography>
              <div className={classes.flexAlign}>
                <div>
                  <Avatar src={props.author.image} />
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
          </>
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
        {/* POST IMage Section */}
        {/* POST Description Section */}
        <div className={classes.postDescriptionContainer}>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large
            plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay
            leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often
            until thickened and fragrant, about 10 minutes. Add saffron broth and
            remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>{" "}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <div>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                large plate and set aside, leaving chicken and chorizo in the pan. Add
                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                stirring often until thickened and fragrant, about 10 minutes. Add saffron
                broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and
                peppers, and cook without stirring, until most of the liquid is absorbed,
                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                mussels, tucking them down into the rice, and cook again without stirring,
                until mussels have opened and rice is just tender, 5 to 7 minutes more.
                (Discard any mussels that dont open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </div>
          </Collapse>
          <div className={classes.flexAlignCenter} onClick={() => handleExpandClick()}>
            <span>{expanded ? "Show Less" : "Show More"}</span> &nbsp;&nbsp;
            <MuiIcons
              icon={expanded ? "arrowUp" : "arrowDown"}
              fontSize="small"
              color="secondary"
            />
          </div>
        </div>
        {/* POST Description Section */}
      </div>
      {/* POST Sharing Section */}
      <div className={classes.recommendedSection}>
        <div className={classes.recommedToggle} onClick={() => handleExpandRecommend()}>
          <span>Recommends</span> &nbsp;&nbsp;
          <MuiIcons
            icon={showRecommends ? "arrowUp" : "arrowDown"}
            fontSize="small"
            color="secondary"
          />
        </div>
        {/* Sharing Option */}
        <div className={classes.sharingOptionsContainer}>
          <div className={classes.postTag}>
            <div className={classes.flexAlign}>
              <span className={classes.flexAlign} onClick={() => setClickOnRecommend(!clickOnRecommend)}>
                <span>Recommend</span> &nbsp;&nbsp;
                <MuiIcons icon="like" fontSize="small" color={!clickOnRecommend ? "secondary" : "primary"} />
              </span>
              {clickOnRecommend &&
                <span className={classes.flexAlign}>
                  &nbsp;
                  <Grow in={clickOnRecommend} {...(clickOnRecommend ? { timeout: 500 } : {})}>
                    <MuiIcons icon="add" fontSize="small" onClick={() => setFeedBackField(!feedBackField)} />
                  </Grow>
                </span>
              }
            </div>
          </div>
          <div className={classes.postTag}>
            <div className={classes.flexAlignCenter}>
              <MuiIcons icon="saved" fontSize="small" color="secondary" />
            </div>
          </div>
          <div className={classes.postTag}>
            <div className={classes.flexAlignCenter}>
              <MuiIcons icon="share" fontSize="small" color="secondary" />
            </div>
          </div>
        </div>
        {/* Sharing Option */}
      </div>
      <Collapse in={feedBackField}>
        <div style={{ position: "relative", marginTop: "8px" }}>
          <span className={classes.closeFeedBack}>
            <MuiIcons icon="cancel" color="secondary" fontSize="small" onClick={() => setFeedBackField(!feedBackField)} />
          </span>
          <TextArea
            style={{
              minWidth: "100%",
              maxWidth: "-webkit-fill-available",
              maxHeight: "100px",
              minHeight: "100px",
              // margin: "0px 8px",
              paddingRight: "30px",
            }}
            rows={3}
            maxLength={300}
            columns={33}
            id="feedBack"
            name="feedBack"
            placeholder="Leave Your Feed Back"
            value={feedBack}
            onChange={(e) => setFeedBack(e.target.value)}
          />
        </div>
      </Collapse>
      {/* POST Sharing Section */}

      {/* Recommendations Comments */}
      <Collapse in={showRecommends} timeout="auto" unmountOnExit>
        <div className={classes.commentsSection}>
          <div className={classes.eachRecommend}>
            <div className={classes.userSection}>
              <div className={classes.flexAlign}>
                <div>
                  <Avatar
                    variant="rounded"
                    src={props.author.image}
                    className={classes.commentedUserPic}
                  />
                </div>
                <div className={classes.commentedUserSection}>
                  <p className={classes.commentedUserName}>Saad Bin Khalid</p>
                  <p className={classes.commentedUserDesignation}>CEO of Nothing</p>
                </div>
              </div>
              <div className={classes.likeComment}>
                <MuiIcons icon="like" fontSize="small" color="secondary" />
              </div>
            </div>
            <div className={classes.userComment}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rerum
              quisquam quasi nobis labore eligendi doloremque sequi ipsum ratione
              repudiandae! Facere non numquam consectetur assumenda enim aliquid aliquam
              veritatis qui!
            </div>
          </div>
          <div className={classes.eachRecommend}>
            <div className={classes.userSection}>
              <div className={classes.flexAlign}>
                <div>
                  <Avatar
                    variant="rounded"
                    src={props.author.image}
                    className={classes.commentedUserPic}
                  />
                </div>
                <div className={classes.commentedUserSection}>
                  <p className={classes.commentedUserName}>Saad Bin Khalid</p>
                  <p className={classes.commentedUserDesignation}>CEO of Nothing</p>
                </div>
              </div>
              <div className={classes.likeComment}>
                <MuiIcons icon="like" fontSize="small" color="secondary" />
              </div>
            </div>
            <div className={classes.userComment}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rerum
              quisquam quasi nobis labore eligendi doloremque sequi ipsum ratione
              repudiandae! Facere non numquam consectetur assumenda enim aliquid aliquam
              <br />
              veritatis qui! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magnam rerum quisquam quasi nobis labore eligendi doloremque sequi ipsum
              ratione repudiandae! Facere non numquam consectetur assumenda enim aliquid
              aliquam veritatis qui!
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rerum
              quisquam quasi nobis labore eligendi doloremque sequi ipsum ratione
              repudiandae! Facere non numquam consectetur assumenda enim aliquid aliquam
              veritatis qui!
            </div>
          </div>
        </div>
      </Collapse>
      {/* Recommendations Comments */}
    </div>
  );
};

export default PostComponent;
