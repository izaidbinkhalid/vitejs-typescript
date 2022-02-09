import * as React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

interface Props {
  readonly checked: boolean;
  readonly name?: string;
  readonly disabled?: boolean;
  readonly handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // height: "18px",
      // width: "18px",
      color: theme.palette.primary.light,
      "&$checked": {
        color: theme.palette.gray[900]
      }
    },
    checked: {}
  })
);
const CustomCheckbox: React.FC<Props> = props => {
  const classes = useStyles();
  return (
    <Checkbox
      classes={{
        root: classes.root,
        checked: classes.checked
      }}
      checked={props.checked}
      name={props?.name}
      disabled={props?.disabled}
      onChange={props.handleChange}
      inputProps={{ "aria-label": "primary checkbox" }}
    />
  );
};

export default CustomCheckbox;
