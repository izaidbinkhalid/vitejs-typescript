import * as React from "react";
import { useHistory } from 'react-router-dom'
import { makeStyles, Theme, createStyles, useTheme } from "@material-ui/core/styles";
import { Dialog, Typography, Grid, useMediaQuery, } from "@material-ui/core";
import { NotFound } from 'Components/SvgIllustration/404'
import Button from 'Components/Button'
import MuiIcon from 'Components/Icons'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
    },
    paper: {
      backgroundColor: theme.palette.gray[100],
      border: `1px solid ${theme.palette.gray[200]}`,
      borderTop: "none",
      boxShadow: '0px 10px 40px 0px #0000000D',
      backdropFilter: "blur(15px)",
      width: "100%",
      padding: theme.spacing(3),
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      borderRadius: "27px",
      overflowY: "auto",
      "&:focus": {
        outline: "none"
      },
      [theme.breakpoints.down("md")]: {
        display: "block"
      }
    },
    backdrop: {
      backgroundColor: "transparent"
    },
    heading: {
      color: theme.palette.secondary.dark,
      fontWeight: "bold"
    },
    subHeading: {
      color: theme.palette.secondary.dark,
    },
    textContainer: {
      paddingLeft: theme.spacing(5),
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(1),
      }
    },
    paragraph: {
      color: theme.palette.secondary.dark,
      lineHeight: 1.7,
      maxWidth: "500px"
    },
    changeBtn: {
      background: theme.palette.gray[700],
      borderRadius: "56px",
      fontWeight: 500,
      fontSize: "15px",
      color: theme.palette.secondary.dark,
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
      padding: theme.spacing(1)
    },
    mainGrid: {
      [theme.breakpoints.down('md')]: {
        flexDirection: "column-reverse"
      }
    }
  })
);

export const NotFoundPage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  let width = 511;
  let height = 400;
  if (fullScreen) {
    width = 330;
    height = 290;
  }

  return (
    <div className={classes.wrapper}>
      <Dialog
        fullScreen={fullScreen}
        maxWidth={"lg"}
        open={true}
        BackdropProps={{ className: classes.backdrop }}
        PaperProps={{ className: classes.paper }}
        keepMounted
      >
        <Grid container alignItems="center" justifyContent="space-between" className={classes.mainGrid}>
          <Grid item xs={12} md={6} className={classes.textContainer}>
            <Typography variant="h3" className={classes.heading}>
              Ooops...
            </Typography>
            <br />
            <Typography variant="h4" className={classes.subHeading}>
              Page Not Found
            </Typography>
            <br />
            <Typography variant="body2" className={classes.paragraph}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </Typography>
            <br />
            <br />
            <Button text='Go Back' icon={<MuiIcon icon='backArrow' />} className={classes.changeBtn} onClick={() => history.push('/')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <NotFound width={width} height={height} />
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
};
