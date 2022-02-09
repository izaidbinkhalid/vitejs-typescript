import * as React from "react";
import { Grid } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ModalPopup from "../ModalPopup";
import ImageCropper from "./ImageCropper";
import Button from "Components/Button";
import MuiIcon from "Components/Icons";
import UploadComponent from "./UploadComponent";

interface Props {
  readonly handleSaveChanges: () => void;
  readonly handleCloseModal: () => void;
  readonly openModal: boolean;
  readonly setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formValues: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFormValues: React.Dispatch<React.SetStateAction<any>>;
}

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
    footer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
      alignItems: "center"
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
      borderRadius: "64.2998px",
      padding: theme.spacing(2, 3)
    }
  })
);

const AddImageModal: React.FC<Props> = props => {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [imageData, setImageData] = React.useState<any>(null);

  // eslint-disable-next-line no-console
  // console.log("imagedtata", imageData);

  const handleSetImage = (file: File) => {
    setImageData({ ...imageData, image: file });
  };

  return (
    <ModalPopup maxWidth="sm" modalTitle="Crop Image" noFooter={true} {...props}>
      {imageData?.image ? (
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <div style={{ height: "400px", position: "relative" }}>
              <p className={classes.imageTitle}>Image</p>
              <ImageCropper
                image={imageData?.image}
                formValues={props.formValues}
                setFormValues={props.setFormValues}
                setCloseModal={props.setOpenModal}
              />
            </div>
            <Grid item xs={12}>
              <div className={classes.changeImage}>
                <Button
                  className={classes.buttonSave}
                  text="Change Image"
                  onClick={() => setImageData({ ...imageData, image: null })}
                  icon={<MuiIcon icon="loop" />}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <UploadComponent handleSetImage={handleSetImage} />
      )}
    </ModalPopup>
  );
};

export default AddImageModal;
