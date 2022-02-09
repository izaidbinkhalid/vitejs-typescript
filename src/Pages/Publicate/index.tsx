import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Layout from "Components/Layout";
import { Typography, Avatar } from "@material-ui/core";
import AddTag from "Components/AddTag";
import MuiIcons from "Components/Icons";
import { Editor } from "Components/Editor";
import Slider from "react-slick"
import MultiImageModal from "Components/AddMultiImage/MultiImageModal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      borderRadius: "8px",
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(0.5)
    },
    imageContainer: {
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "column",
      boxShadow:
        "0px 102px 155px -58px rgba(0, 0, 0, 0.06), inset 0px -196px 120px -93px rgba(0, 0, 0, 0.57)"
    },
    postTitleCotainer: {
      border: "1px solid red"
    },
    flexAlign: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer"
    },
    content: {
      height: "100%",
      justifyContent: "flex-end",
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(2, 2, 0, 2),
      width: "100%",
      opacity: 1
    },
    postTitle: {
      overflow: "hidden",
      width: "100%",
      color: "white",
      marginBottom: "5px"
    },
    authorSection: {
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(2)
    },
    authorName: {
      color: theme.palette.secondary.dark,
      textAlign: "start"
    },
    authorTitle: {
      color: theme.palette.secondary.dark,
      fontSize: theme.spacing(1.5),
      textAlign: "start"
    },
    titleInput: {
      background: "transparent",
      border: "none",
      outline: "none",
      color: theme.palette.secondary.dark,
      fontWeight: "bolder",
      fontSize: "25px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "100%",
      margin: theme.spacing(2, 0),
      "::placeholder": {
        color: theme.palette.secondary.dark
      }
    },
    titleInput2: {
      background: "transparent",
      border: "none",
      outline: "none",
      color: theme.palette.secondary.main,
      fontWeight: "bolder",
      fontSize: "25px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "100%",
      maxWidth: "95%",
      "::placeholder": {
        color: theme.palette.secondary.light
      }
    },
    addTagContainer: {
      marginTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      width: "100%"
    },
    editor: {
      padding: theme.spacing(0.5),
      margin: theme.spacing(2)
    },
    editImageContainer: {
      width: "100%",
      position: "relative",
      "&:hover $editImage": {
        opacity: 1,
        zIndex: 1
      }
    },
    addImageContainer: {
      width: "100%",
      position: "relative",
      "&:hover $addImage": {
        opacity: 1,
        zIndex: 1
      }
    },
    addImage: {
      position: "absolute",
      top: "75px",
      width: "40px",
      right: "10px",
      minHeight: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(255,255,255,0.7)",
      borderRadius: "50px",
      cursor: "pointer",
      opacity: 0.5,
      transition: "all .3s"
    },
    editImage: {
      position: "absolute",
      top: "20px",
      width: "40px",
      right: "10px",
      minHeight: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(255,255,255,0.7)",
      borderRadius: "50px",
      cursor: "pointer",
      opacity: 0.5,
      transition: "all .3s"
    },
    userProfilePic: {
      width: "100px",
      height: "100px",
      margin: "auto"
    },
    onChangeImageDiv: {},
    imageVariantDiv: {},
    onlyTextVariant: {
      padding: theme.spacing(2)
    },
    onlyTextVariantUser: {
      width: "60px",
      height: "60px"
    },
    authorName2: {
      color: theme.palette.secondary.main,
      fontWeight: 500,
      textAlign: "start"
    },
    authorTitle2: {
      fontWeight: 500,
      color: theme.palette.secondary.main,
      fontSize: theme.spacing(1.5),
      textAlign: "start"
    },
    flexBetween: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    addPhotoIcon: {
      color: theme.palette.secondary.light,
      fontSize: theme.spacing(6),
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.secondary.dark
      }
    },
    addPhotoIcon2: {
      color: theme.palette.secondary.light,
      fontSize: theme.spacing(3),
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.secondary.dark
      }
    },
    addPhotoIcon3: {
      marginTop: "5px",
      color: theme.palette.secondary.light,
      fontSize: theme.spacing(3),
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.secondary.dark
      }
    },
    titleInputContainer: {
      marginTop: theme.spacing(2)
    },
    publishBtnContainer: {
      marginTop: theme.spacing(2)
      // border: "1px solid red",
    },
    publishBtn: {
      color: theme.palette.secondary.dark,
      background: theme.palette.gray[100],
      width: "fit-content",
      height: "fit-content",
      padding: theme.spacing(1.5),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      borderRadius: "100px",
      marginLeft: "auto",
      cursor: "pointer",
      transition: "0.5s",
      fontSize: theme.spacing(2),
      "&:hover": {
        background: theme.palette.gray[400],
        color: theme.palette.background.paper
      }
    },
    sliderContainer: {
    },
    arrow: {
      fontSize: theme.spacing(8),
      color: "red"
    },
    slider: {
      "&>svg": {
        color: theme.palette.secondary.light,
        "&:hover": {
          color: theme.palette.secondary.dark
        }
      }
    }
  })
);

function SampleNextArrow(props: { className?: string; style?: React.CSSProperties; onClick?: () => void; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className?: string; style?: React.CSSProperties; onClick?: () => void; }) {
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
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  swipeToSlide: true,
  arrows: true,
  prevArrow: <SamplePrevArrow />,
  nextArrow: <SampleNextArrow />
};

export const PublicatePage: React.FC = () => {
  const classes = useStyles();
  const [postTitle, setPostTite] = React.useState<string>("Please Enter your title");
  const [skill, setSkill] = React.useState<string[]>(["Reading", "Painting"]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [imageUrl, setImageUrl] = React.useState<any[]>([
    // "blob:http://localhost:3000/21901a0e-2b0f-47f4-ab17-5406a6a6d1e7",
    // "blob:http://localhost:3000/7f53ca95-8e2f-4737-9840-99af345c5a83",
    // "blob:http://localhost:3000/43255264-0656-4f3f-b2ca-2bc7be93985b"
  ]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const [croppedImages, setCroppedImages] = React.useState<any[]>([]);
  const [openCropModal, setOpenCropModal] = React.useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createImageUrl = (e: any) => {
    const urls = Object.keys(e.target.files).map(function (key, index) {
      return URL.createObjectURL(e.target.files[key]);
    });
    setImageUrl(urls);
  };

  const deleteImage = (image: string) => {
    const newImages = imageUrl?.filter((img: string) => img !== image)
    setImageUrl(newImages)
  }

  return (
    <Layout>
      <div>
        <div className={classes.wrapper}>
          {/* Single Picture  */}
          {imageUrl?.length === 1 ? (
            <div className={classes.imageVariantDiv}>
              <div className={classes.onChangeImageDiv}>
                <div className={classes.editImageContainer}>
                  <div className={classes.editImage}>
                    <MuiIcons
                      icon="cancel"
                      onClick={() => setImageUrl([])}
                      className={classes.addPhotoIcon2}
                    />
                  </div>
                </div>
                <div className={classes.addImageContainer}>
                  <div className={classes.addImage}>
                    <input
                      accept="image/*"
                      style={{ display: "none" }}
                      id="raised-button-file"
                      multiple
                      type="file"
                      onChange={e => createImageUrl(e)}
                    />
                    <label htmlFor="raised-button-file">
                      <MuiIcons icon="addPhoto" className={classes.addPhotoIcon3} />
                    </label>
                  </div>
                </div>
              </div>
              <div
                className={classes.imageContainer}
              >
                <img src={imageUrl[0]} width="100%" alt="ok" />

              </div>
              <div className={classes.content}>
                <input
                  className={classes.titleInput}
                  value={postTitle}
                  placeholder="Please Enter yout Title"
                  onChange={({ target }) => setPostTite(target.value)}
                  autoFocus
                />

                <div className={classes.flexAlign}>
                  <div>
                    <Avatar src="https://image.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg" />
                  </div>

                  <div className={classes.authorSection}>
                    <Typography className={classes.authorName} variant="h6" noWrap>
                      Saad Bin Khalid
                    </Typography>
                    <Typography className={classes.authorTitle} variant="body2" noWrap>
                      CEO
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          ) : // Carousel
            imageUrl?.length > 1 ? (
              <div>
                <div className={classes.sliderContainer}>
                  <Slider {...settings}>
                    {imageUrl?.reverse().map((image, i) => (
                      <div className={classes.imageVariantDiv} key={i}>
                        <div className={classes.onChangeImageDiv}>
                          <div className={classes.editImageContainer}>
                            <div className={classes.editImage}>
                              <MuiIcons
                                icon="cancel"
                                onClick={() => deleteImage(image)}
                                className={classes.addPhotoIcon2}
                              />
                            </div>
                          </div>
                          <div className={classes.addImageContainer}>
                            <div className={classes.addImage}>
                              <input
                                accept="image/*"
                                style={{ display: "none" }}
                                id="raised-button-file"
                                multiple
                                type="file"
                                onChange={e => createImageUrl(e)}
                              />
                              <label htmlFor="raised-button-file">
                                <MuiIcons
                                  icon="addPhoto"
                                  className={classes.addPhotoIcon3}
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div
                          className={classes.imageContainer}
                        >
                          <img src={image} width="100%" alt="ok" />
                        </div>
                      </div>
                    ))}
                  </Slider>
                  <div className={classes.content}>
                    <input
                      className={classes.titleInput}
                      value={postTitle}
                      placeholder="Add your title here"
                      onChange={({ target }) => setPostTite(target.value)}
                      autoFocus
                    />

                    <div className={classes.flexAlign}>
                      <div>
                        <Avatar src="https://image.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg" />
                      </div>

                      <div className={classes.authorSection}>
                        <Typography
                          className={classes.authorName}
                          variant="h6"
                          noWrap
                        >
                          Saad Bin Khalid
                        </Typography>
                        <Typography
                          className={classes.authorTitle}
                          variant="body2"
                          noWrap
                        >
                          CEO
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // No Picture
              <div className={classes.onlyTextVariant}>
                <div className={classes.flexBetween}>
                  <div className={classes.flexAlign}>
                    <div>
                      <Avatar
                        src="https://image.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg"
                        className={classes.onlyTextVariantUser}
                      />
                    </div>

                    <div className={classes.authorSection}>
                      <Typography className={classes.authorName2} variant="h5" noWrap>
                        Saad Bin Khalid
                      </Typography>

                      <Typography className={classes.authorTitle2} variant="body2" noWrap>
                        Product Designer
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <MultiImageModal
                      openModal={openCropModal}
                      handleCloseModal={() => setOpenCropModal(false)}
                      handleSaveChanges={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      croppedImages={imageUrl}
                      setCroppedImages={setImageUrl}
                      setOpenModal={setOpenCropModal}
                    />
                    <label >
                      <MuiIcons
                        icon="addPhoto"
                        fontSize="large"
                        className={classes.addPhotoIcon}
                        onClick={() => setOpenCropModal(true)}
                      />
                    </label>
                  </div>
                </div>
                <div className={classes.titleInputContainer}>
                  <input
                    className={classes.titleInput2}
                    value={postTitle}
                    onChange={({ target }) => setPostTite(target.value)}
                    placeholder="Please Enter yout Title"
                    autoFocus
                  />
                </div>
              </div>
            )}
          <div className={classes.addTagContainer}>
            <AddTag
              placeHolder="Press Enter To Add Skills and tags"
              data={skill}
              onAdd={(skills: string[]) => setSkill(skills)}
            />
          </div>

          <div className={classes.editor}>
            <Editor />
          </div>
        </div>
        <div className={classes.publishBtnContainer}>
          <div className={classes.publishBtn}>Publish</div>
        </div>
      </div >
    </Layout >
  );
};
