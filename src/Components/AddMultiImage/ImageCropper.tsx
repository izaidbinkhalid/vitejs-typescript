/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import Cropper from "react-easy-crop";
import Button from "Components/Button";
import { Point, Area } from "react-easy-crop/types";
import MuiIcons from "Components/Icons";
import getCroppedImg from "./cropper";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      bottom: "-12%",
      width: "100%"
    },
    footer: {
      display: "flex",
      justifyContent: "end",
      marginTop: "20px",
      alignItems: "center"
    },
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
    imageSlider: {
      // position: ""
    }
  })
);


interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageToBeCropped: any; //dont know the type of file
  croppedImages: any;
  setCroppedImages: React.Dispatch<React.SetStateAction<any>>;
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentImage: string;
  // to show images slider
  setBlobs: React.Dispatch<React.SetStateAction<any>>;
  blobs: any
}
const ImageCropper: React.FC<Props> = ({
  imageToBeCropped,
  croppedImages,
  setCroppedImages,
  setCloseModal,
  setBlobs,
  currentImage, blobs
}) => {
  const classes = useStyles();
  const [crop, setCrop] = React.useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const [crp, setCrp] = React.useState<Area>({} as Area);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [result, setResult] = React.useState(null);
  const onCropComplete = React.useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCrp(croppedAreaPixels);
      // console.log(croppedArea, croppedAreaPixels);
    },
    []
  );

  const showCroppedImage = React.useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(blobs[0], crp);
      setResult(croppedImage);
      setCroppedImages({ ...croppedImages, croppedImage });
      setCloseModal(false);
    } catch (e) {
      alert(e)
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }, [croppedImages, crp, blobs, setCloseModal, setCroppedImages]);


  React.useEffect(() => {
    const imageBlobs = imageToBeCropped?.map((image: Blob | MediaSource) => { return URL?.createObjectURL(image) })

    setBlobs(imageBlobs)
  }, [imageToBeCropped, setBlobs]);

  return (
    <>

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

        <div className={classes.controls}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={2} lg={2}>
              <MuiIcons fontSize="small" icon="image" />
            </Grid>
            <Grid item xs={8} lg={8}>
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                onChange={(e, zoom) => setZoom(Number(zoom))}
                classes={{ root: classes.slider }}
              />
            </Grid>
            <Grid item xs={1} lg={1}>
              <MuiIcons fontSize="large" icon="image" />
            </Grid>
          </Grid>
        </div>

      </div>
      <div className={classes.footerWrapper}>
        <hr />
        <div className={classes.footer}>
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
    </>
  );
};

export default ImageCropper;
