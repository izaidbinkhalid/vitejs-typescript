import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import MuiIcons from "Components/Icons";
import TextInput from "Components/Form/TextInput";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchInputDiv: {
      display: "flex",
      alignItems: "center",
      margin: "0 0.3rem 0 0.5rem",
      justifyContent: "space-between",
      backgroundColor: theme.palette.gray[100],
      borderRadius: "100px",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      border: `0.5px solid ${theme.palette.gray[600]}`,
      marginBottom: theme.spacing(2)
    },
    searchInput: {
      background: theme.palette.gray[100],
      border: theme.palette.gray[100],
      color: theme.palette.secondary.main,
      boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)",
      borderRadius: "6px",
      fontSize: "14px",
      outline: "none",
      height: "40px",
      width: "95%",
      padding: theme.spacing(1.5),
      "&:focus": {
        color: "#5e6278"
      }
    },
    cursor: {
      cursor: "pointer"
    },
    smallInput: {
      color: "#414546",
      width: "100%",
      border: theme.palette.gray[100],
      height: "30px",
      outline: "none",
      padding: "0px",
      fontSize: "9px",
      background: "#E4E9EA",
      boxShadow: "0px 31px 51px rgb(000/3%)",
      borderRadius: "2px"
    },
    smallSearchInput: {
      display: "flex",
      alignItems: "center",
      margin: "0 0.2rem 0 0.5rem",
      justifyContent: "space-between",
      backgroundColor: "#E4E9EA",
      borderRadius: "100px",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      border: `0.5px solid ${theme.palette.gray[600]}`
    }
  })
);
interface Props {
  readonly smallInput?: boolean;
}

const AddInput: React.FC<Props> = ({ smallInput }: Props) => {
  const classes = useStyles();

  return (
    <>
      <div className={smallInput ? classes.smallSearchInput : classes.searchInputDiv}>
        <TextInput
          className={smallInput ? classes.smallInput : classes.searchInput}
          type="text"
          placeholder="Search My Network"
          name="tag"
          onChange={function (
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ): void {
            throw new Error("Function not implemented.");
          }}
        />
        <MuiIcons
          icon="add"
          fontSize="small"
          color="secondary"
          className={classes.cursor}
        />
      </div>
    </>
  );
};

export default AddInput;
