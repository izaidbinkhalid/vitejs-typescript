import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { useDropzone } from "react-dropzone";
import { ImageUploadIcon } from "Components/Icons/ImageUploadIcon";
import Button from "Components/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    uploadDiv: {
      background: "transparent",
      border: `0.5px dashed ${theme.palette.gray[300]}`,
      boxSizing: "border-box",
      borderRadius: "5px",
      height: "315px",
      width: "100%",
      textAlign: "center",
      paddingTop: "58px",
      marginTop: "10px",
      marginBottom: "10px"
    },
    heading: {
      fontWeight: "bold",
      fontSize: "12px",
      lineHeight: "18px",
      color: theme.palette.gray[500]
    },
    detail: {
      fontSize: "12px",
      lineHeight: "18px",
      color: theme.palette.gray[400]
    },
    redText: {
      color: theme.palette.primary.main
    }
  })
);
interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly handleSetImages: (file: any) => void;
  //dont know the type of file
}

const ImageUploader: React.FC<Props> = ({ handleSetImages }) => {
  const classes = useStyles();
  const { getRootProps, acceptedFiles, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true
  });

  React.useEffect(() => { handleSetImages(acceptedFiles); }, [acceptedFiles, handleSetImages]);

  return (
    <div className={classes.root}>
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <div className={classes.uploadDiv}>
            <ImageUploadIcon />
            <h2 className={classes.heading}>No Cover/feature product Image</h2>
            <p className={classes.detail}>
              Drag and drop images here or <br />
              <span className={classes.redText}>Browse</span> to add images
            </p>
            <Button onClick={open} type="primaryOutlined" text="Browse" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageUploader;
