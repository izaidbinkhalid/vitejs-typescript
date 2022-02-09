/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Grid } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Point, Area } from "react-easy-crop/types";
import ModalPopup from "../ModalPopup";
import Button from "Components/Button";
import MuiIcon from "Components/Icons";
import UploadComponent from "./UploadComponent";
import ImageSlider from "react-slick"
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropper";

interface Props {
  readonly handleSaveChanges: () => void;
  readonly handleCloseModal: () => void;
  readonly openModal: boolean;
  readonly setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  croppedImages: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCroppedImages: React.Dispatch<React.SetStateAction<any>>;
}

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
      style={{ ...style, display: "block", color: "yellow" }}
      onClick={onClick}
    />
  );
}


const SliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // initialSlide: 0,
  variableWidth: true,
  prevArrow: <SamplePrevArrow className="prevArrow" />,
  nextArrow: <SampleNextArrow />
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fieldLabel: {
      marginBottom: "0px",
      marginTop: "0px"
    },
    imageTitle: {
      fontSize: "12px",
      fontWeight: "bold"
    },
    changeImage: {
      width: "100%",
      textAlign: "right",
      marginTop: "-68px",
      marginBottom: "17px",
      [theme.breakpoints.down("sm")]: {
        textAlign: "left",
        marginTop: "8px"
      }
    },
    switchBody: {},
    buttonsBody: { display: "flex" },
    buttonSave: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "30px",
      textAlign: "center",
      color: "#455154",
      background: "#FBFBFB",
      border: "0.642998px solid #E3E3E3",
      boxSizing: "border-box",
      boxShadow: "0px 19.9329px 32.7929px rgba(0, 0, 0, 0.03)",
      borderRadius: "64.2998px"
    },
    imageDiv: {
      position: "relative",
      cursor: "pointer"
    },
    cancelIcon: {
      position: "absolute",
      right: "0px",
      top: "2px",
      fontSize: '15px'
    },
    app: {
      top: "29px",
      left: "0px",
      right: "0px",
      bottom: "10px",
      position: "absolute"
    },
    cropContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: "80px",
      "& > div": {
        borderRadius: "5px"
      }
    },
    controls: {
      position: "absolute",
      bottom: 0,
      left: "20%",
      width: "40%",
      transform: "translateX(-50%)",
      height: "80px",
      display: "flex",
      color: theme.palette.gray[400],
      alignItems: "center"
    },
    slider: {
      color: theme.palette.gray[400],
      padding: "22px 0px"
    },
    footerWrapper: {
      position: "absolute",
      bottom: "5%",
      width: "100%"
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
      alignItems: "center"
    }
  })
);

const MultiImageModal: React.FC<Props> = props => {
  const classes = useStyles();
  const [uploadedFiles, setUploadedFiles] = React.useState<any>(null);
  const [blobs, setBlobs] = React.useState<any>([]);
  // const [currentImage, setCurrentImage] = React.useState<string>(blobs?.[0])
  const [crop, setCrop] = React.useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const [crp, setCrp] = React.useState<Area>({} as Area);
  const [currentImage, setCurrentImage] = React.useState<string>("")

  const onCropComplete = React.useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCrp(croppedAreaPixels);
      // console.log(croppedArea, croppedAreaPixels);
    },
    []
  );

  const showCroppedImage = React.useCallback(async () => {
    try {
      const croppedBlobs = []
      // resolving promise
      for (let i = 0; i < blobs.length; i++) {
        const blob = blobs[i];
        const croppedResult = await getCroppedImg(blob, crp);
        croppedBlobs.push(croppedResult);
      }
      props.setCroppedImages(croppedBlobs);
      props.setOpenModal(false);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }, [blobs, crp, props]);


  React.useEffect(() => {
    const imageBlobs = uploadedFiles?.map((image: Blob | MediaSource) => { return URL?.createObjectURL(image) })

    setBlobs(imageBlobs)
    setCurrentImage(imageBlobs?.[0])
  }, [setBlobs, uploadedFiles]);

  const handleSetImages = (files: File) => {
    setUploadedFiles(files);
  };

  const deleteImage = async (img: string) => {
    const newBlobs = blobs.filter((blob: string) => blob !== img);
    await setBlobs(newBlobs)
    await setCurrentImage(newBlobs[0])
  }


  // React.useEffect(() => { if (blobs?.length === 0) setUploadedFiles([]) }, [blobs])

  return (
    <ModalPopup maxWidth="sm" modalTitle="Crop Image" noFooter={true} {...props}>
      {uploadedFiles?.length && blobs?.length > 0 ? (
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <div>
              <ImageSlider {...SliderSettings}>
                {blobs?.map((img: string, i: number) => (
                  <div className={classes.imageDiv} key={i} onClick={() => setCurrentImage(img)}>
                    <img src={img} style={{ padding: "5px", textAlign: "center" }} alt="crop" width="100%" height="100px" />
                    <MuiIcon icon="cancel" className={classes.cancelIcon} onClick={() => deleteImage(img)} />
                  </div>
                ))}
              </ImageSlider>
            </div>
            {/* Image Cropper Section ---start */}
            <div style={{ height: "400px", position: "relative" }}>
              <div className={classes.app}>
                <div className={classes.cropContainer}>
                  <Cropper
                    image={currentImage}
                    crop={crop}
                    zoom={zoom}
                    aspect={1 / 1}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                  />
                </div>
              </div>
              <div className={classes.footerWrapper}>
                <div className={classes.footer}>
                  <div className={classes.buttonsBody}>
                    <Button
                      className={classes.buttonSave}
                      text="Change Image"
                      onClick={() => setUploadedFiles([])}
                      icon={<MuiIcon icon="loop" />}
                    />
                  </div>
                  <div className={classes.buttonsBody}>
                    <Button
                      variant="contained"
                      className={classes.buttonSave}
                      onClick={showCroppedImage}
                      text="Save"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Image Cropper Section ---end */}
          </Grid>
        </Grid>
      ) : (
        <UploadComponent handleSetImages={handleSetImages} />
      )}
    </ModalPopup>
  );
};

export default MultiImageModal;
