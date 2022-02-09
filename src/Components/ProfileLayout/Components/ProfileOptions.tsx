import * as React from "react";
import { makeStyles, Theme, createStyles, withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Grid,
  Collapse,
  MenuItem,
  FormControl,
  Select,
  InputBase
} from "@material-ui/core";
import { EditOutlinedIcon } from "Components/Icons/editOutlinedIcon";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3)
      }
    },
    input: {
      alignItems: "center",
      borderRadius: 4,
      position: "relative",
      // backgroundColor: theme.palette.background.paper,
      // border: '1px solid #ced4da',
      fontSize: "10.96px",
      fontWeight: 400,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      "&:focus": {
        border: "none",
        backgroundColor: "white"
        // borderRadius: 4,
        // borderColor: "#80bdff",
        // boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
      }
    }
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: "100%"
    },
    paper: {
      cursor: "pointer",
      padding: theme.spacing(2),
      width: "100%"
    },
    flex: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    heading: {
      color: theme.palette.secondary.dark
    },
    editIconGrid: {
      marginTop: theme.spacing(0.5),
      textAlign: "right"
    },
    profileOption: {
      display: "flex",
      justifyContent: "space-between"
    },
    break: {
      color: theme.palette.secondary.dark,
      opacity: 0.1
    },
    options: {
      fontSize: "16.44px",
      fontWeight: 400
    }
  })
);

export const ProfileOptions = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [about, setAbout] = React.useState("everyone");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAbout(event.target.value as string);
  };
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.paper}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid className={classes.profileOption} xs={12}>
            <Typography variant="h6" className={classes.heading}>
              Profile Options
            </Typography>
            <div className={classes.editIconGrid}>
              <EditOutlinedIcon onClick={() => setExpanded(!expanded)} />
            </div>
          </Grid>

          <Collapse style={{ width: "100%" }} in={expanded} timeout="auto" unmountOnExit>
            <Grid justifyContent="space-between" xs={12}>
              <br />
              <div className={classes.flex}>
                <Typography className={classes.options}>About</Typography>
                <div>
                  <FormControl>
                    {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
                    <Select
                      labelId="demo-customized-select-label"
                      id="demo-customized-select"
                      // defaultValue={10}
                      value={about}
                      onChange={handleChange}
                      input={<BootstrapInput />}
                    >
                      <MenuItem value={"everyone"}>Everyone</MenuItem>
                      <MenuItem value={"connection"}>Connection</MenuItem>
                      <MenuItem value={"hidden"}>Hidden</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <hr className={classes.break} />
              <div>
                <Typography className={classes.options}>Visit us</Typography>
              </div>
              <hr className={classes.break} />
              <div>
                <Typography className={classes.options}>Recommendations</Typography>
              </div>
              <hr className={classes.break} />
              <div>
                <Typography className={classes.options}>Activity</Typography>
              </div>
            </Grid>
          </Collapse>
        </Grid>
      </Paper>
    </div>
  );
};
