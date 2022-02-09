import { usersCardsData } from "Data/userCardsData";
import ProfileCard from "Components/CommanCards/ProfileCard";
import React from "react";
import Slider from "react-slick";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import MuiIcons from "Components/Icons";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sliderContainer: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      backgroundColor: theme.palette.gray[100],
      maxHeight: "193px",
      borderTopRightRadius: "12px",
      borderBottomRightRadius: "12px"
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
const NetworkSlider = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.sliderContainer}>
        <Slider
          className={classes.slider}
          {...settings}
          nextArrow={
            <MuiIcons icon="arrowRight" color="secondary" className={classes.arrow} />
          }
          prevArrow={
            <MuiIcons icon="arrowLeft" color="secondary" className={classes.arrow} />
          }
        >
          {usersCardsData?.map(({ id, name, img, skill }, index) => {
            return (
              <ProfileCard
                key={index}
                id={id}
                noSpace={true}
                title={name}
                wrap={true}
                rounded={false}
                image={img}
                text={skill}
              />
            );
          })}
        </Slider>
        <br />
      </div>
    </div>
  );
};

export default NetworkSlider;
