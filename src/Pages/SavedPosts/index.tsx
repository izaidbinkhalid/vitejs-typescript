import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Sponsored from "Components/Layout/Components/Sponsored";
import SavedPost from "Components/SavedPosts";
import TextInput from "Components/Form/TextInput";
import MuiIcons from "Components/Icons";
import AddTag from "Components/AddTag";
import { Header } from "Components/Header";
import { maxContainerWidth } from "../../theme";
import { Posts } from "Components/Layout/Data/Data";
import Masonry from "react-masonry-css";

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
    postsContainer: {
      marginTop: theme.spacing(3)
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1)
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
      borderRadius: "6px",
      fontSize: "16px",
      outline: "none",
      height: "40px",
      width: "95%",
      padding: theme.spacing(1.5),
      "&:focus": {
        color: "#5e6278"
      }
    },
    postsContainerWrapper: {
      // maxHeight: "90vh",
      // overflowY: "auto"
    },
    gridItem: {
      boxSizing: "border-box",
      padding: theme.spacing(1)
    }
  })
);

export const SavedPostPage: React.FC = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:800px)");
  const [skill, setSkill] = React.useState<string[]>(["Reading", "Painting"]);
  const [posts, setPosts] = React.useState(Posts);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  // search post
  const searchPost = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const searchedValue = e.target.value;
    if (searchedValue === "") return setPosts(Posts);
    const filterPosts = posts.filter(
      post =>
        post?.title?.toLowerCase().includes(searchedValue) ||
        post.author.name.toLowerCase().includes(searchedValue)
    );
    setPosts(filterPosts);
  };

  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.container}>
        <Grid container justifyContent="space-between" spacing={4}>
          <Grid item lg={9} md={9} sm={12} xs={12} className={classes.postsContainer}>
            <Grid container justifyContent="space-between" spacing={4}>
              <Grid item xs={12} sm={7}>
                <div className={classes.searchInputDiv}>
                  <TextInput
                    className={classes.searchInput}
                    type="text"
                    name="searchPost"
                    placeholder="Search by Title or Auther or content"
                    onChange={searchPost}
                  />
                  <MuiIcons icon="search" fontSize="small" color="secondary" />
                </div>
              </Grid>
              <Grid item xs={12} sm={5}>
                <AddTag
                  placeHolder="Press Enter To Add Skills and tags"
                  data={skill}
                  setData={setSkill} onAdd={function (skills: string[]): void {
                    throw new Error("Function not implemented.");
                  }} />
              </Grid>
              {/* Posts Conatiner */}
              <Grid item xs={12} className={classes.postsContainerWrapper}>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {posts?.map((post, index) => (
                    <div key={index}>
                      <SavedPost
                        title={post.title}
                        image={post.image}
                        author={post.author}
                      />
                    </div>
                  ))}
                </Masonry>
              </Grid>
            </Grid>
          </Grid>

          {!isMobile && (
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Sponsored />
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
};
