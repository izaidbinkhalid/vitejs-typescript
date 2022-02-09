import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import TextInput from "Components/Form/TextInput";
import MuiIcons from "Components/Icons";

interface Props {
  readonly placeHolder: string;
  readonly data: string[];
  readonly setData?: React.Dispatch<React.SetStateAction<string[]>>;
  readonly error?: boolean;
  readonly helperText?: string | string[] | undefined;
  onAdd: (skills: string[]) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      listStyle: "none",
      padding: theme.spacing(0.5),
      margin: 0
    },
    chip: {
      margin: theme.spacing(0.5)
    },
    searchInputDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "100px",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      border: `0.5px solid ${theme.palette.gray[600]}`
    },
    searchInput: {
      background: theme.palette.background.paper,
      border: theme.palette.background.paper,
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
    delete: {
      background: "black",
      height: "16px",
      color: "#E4E9EA",
      cursor: "pointer"
    },
    errorText: {
      paddingLeft: theme.spacing(2),
      color: "red"
    }
  })
);

export default function ChipsArray({ placeHolder, data, setData, error, helperText, onAdd }: Props) {
  const classes = useStyles();

  // states
  const [tag, setTag] = React.useState<string>("");

  // functions

  const handleDelete = (index: number) => () => {
    const arr = data.filter((chip, i) => i !== index);
    onAdd(arr)
  };

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { setTag(e.target.value); };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onEnter = (e?: any) => {
    if (e.key === "Enter" && tag !== '') {
      setTag("");
      onAdd([...data, tag])
    }
  };

  const onAddTag = () => {
    if (data?.length >= 5) return;
    if (tag !== '') {
      // setData(presvState => [...presvState, tag]);
      setTag("");
      onAdd([...data, tag])
    }
  };

  return (
    <div>
      <div>
        <div className={classes.searchInputDiv}>
          <TextInput
            className={classes.searchInput}
            type="text"
            placeholder={placeHolder}
            name="tag"
            value={tag}
            onChange={onTextChange}
            disabled={data?.length >= 5}
            onKeyDown={onEnter}
          />
          <MuiIcons
            icon="add"
            fontSize="small"
            color="secondary"
            onClick={() => onAddTag()}
            className={classes.cursor}
          />
        </div>
      </div>
      <div className={classes.root}>
        {data.map((data, index) => {
          let icon;

          return (
            <li key={index} className={classes.chip}>
              <Chip icon={icon} label={data} onDelete={handleDelete(index)} />
            </li>
          );
        })}
      </div>
      {error && (<span className={classes.errorText}>{helperText}</span>)}
    </div>
  );
}
