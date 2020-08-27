import React, { Children } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccButton, BccTypography } from "../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      outerContainer: {
        backgroundSize: "cover",
      },
      container: {
        position: "relative",
        margin: "0 auto",
        padding: "0 48px",
        paddingBottom: "32px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      slderTitle: {
        marginBottom: 24,
      },
      sliderSubTitle: {
        marginBottom: 96,
        color: "#4D565F",
      },
      sliderBtn: {
        height: 64,
        fontSize: 18,
        lineHeight: "64px",
        minWidth: 350,
      },
      slider: {
        width: "100%",
        overflowX: "hidden",
        "& > div": {
          width: "100%",
          transition: "all .7s ease-in-out",
          "& > div": {
            width: "100%",
          },
        },
      },
      slide: {
        "& > div:first-child": {
          width: "calc(50% - 16px)",
          padding: "80px 0 64px",
        },
        "& > div:last-child": {
          position: "relative",
          width: "calc(50% - 16px)",
          "& > img": {
            position: "absolute",
            right: "-40%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
          },
        },
      },
      sliderSteps: {
        position: "absolute",
        bottom: 0,
        width: 210,
        left: "calc(50% - 105px)",
        display: "flex",
        flexWrap: "nowrap",
        zIndex: 99,
        justifyContent: "space-between",
        alignItems: "center",
      },
      sliderStep: {
        cursor: "pointer",
        width: 10,
        marginRight: 16,
        height: 10,
        borderRadius: "50%",
        boxSizing: "border-box",
        border: "1px solid #27AE60",
        "&:hover": {
          backgroundColor: "#27AE60",
        },
      },
      active: {
        backgroundColor: "#27AE60",
      },
      slideLeft: {
        marginRight: 64,
        cursor: "pointer",
      },
      slideRight: {
        marginLeft: 48,
        cursor: "pointer",
      },
    },
    [theme.breakpoints.down("md")]: {
      outerContainer: {
        backgroundSize: "cover",
      },
      container: {
        position: "relative",
        margin: "0 auto",
        padding: "0 48px",
        paddingBottom: "32px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      slderTitle: {
        marginBottom: 24,
      },
      sliderSubTitle: {
        marginBottom: 48,
        color: "#4D565F",
      },
      sliderBtn: {
        minWidth: 300,
        height: 64,
        fontSize: 18,
        lineHeight: "64px",
      },
      slider: {
        width: "100%",
        overflowX: "hidden",
        "& > div": {
          width: "100%",
          transition: "all .7s ease-in-out",
          "& > div": {
            width: "100%",
          },
        },
      },
      slide: {
        "& > div:first-child": {
          width: "calc(50% - 16px)",
          padding: "80px 0 92px",
        },
        "& > div:last-child": {
          position: "relative",
          width: "calc(50% - 16px)",
          "& > img": {
            position: "absolute",
            right: "-40%",
            top: "10%",
            transform: "translate(-50%, 0)",
            width: "90%",
            maxHeight: "300px",
          },
        },
      },
      sliderSteps: {
        position: "absolute",
        bottom: 0,
        width: 210,
        left: "calc(50% - 105px)",
        display: "flex",
        flexWrap: "nowrap",
        zIndex: 99,
        justifyContent: "space-between",
        alignItems: "center",
      },
      sliderStep: {
        cursor: "pointer",
        width: 10,
        marginRight: 16,
        height: 10,
        borderRadius: "50%",
        boxSizing: "border-box",
        border: "1px solid #27AE60",
        "&:hover": {
          backgroundColor: "#27AE60",
        },
      },
      active: {
        backgroundColor: "#27AE60",
      },
      slideLeft: {
        marginRight: 64,
        cursor: "pointer",
      },
      slideRight: {
        marginLeft: 48,
        cursor: "pointer",
      },
    },
    [theme.breakpoints.down("sm")]: {
      sliderBtn: {
        minWidth: 250,
      },
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        height: "auto",
      },
      sliderBtn: {
        height: 56,
        fontSize: 16,
        minWidth: "none",
        width: "100%",
        boxSizing: "border-box",
        bottom: "initial",
        position: "relative",
      },
      sliderSteps: {
        width: 94,
        left: "calc(50% - 47px)",
      },
      sliderSubTitle: {
        marginBottom: 16,
      },
      slideRight: { display: "none" },
      slideLeft: { display: "none" },
      slide: {
        flexDirection: "column-reverse",
        flexWrap: "wrap",
        "& > div:first-child": {
          width: "100%",
          padding: "16px 0 0",
        },
        "& > div:last-child": {
          marginTop: 46,
          width: "100%",
          "& > img": {
            position: "relative",
            width: "100%",
            maxWidth: "none",
            top: "initial",
            right: "initial",
            transform: "none",
          },
        },
      },
    },
    cardsText: {
      "& > div": {
        width: "calc(50% - 12px)",
        marginBottom: 48,
      },
      "& > div:first-child": {
        marginBottom: 24,
      },
      "& > div:nth-child(2)": {
        marginBottom: 24,
      },
    },
    header: {
      paddingTop: 48,
    },
  })
);

interface SliderStepsProps {
  title: string;
  desc: any;
  img: string;
  btnText: string;
  bgColor?: string;
}

interface SliderProps {
  steps: Array<SliderStepsProps> | SliderStepsProps;
  scrollToOrder: any;
}

const Slider = (props: SliderProps) => {
  const classes = useStyles({});

  const goToOrder = () => {
    props.scrollToOrder();
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <div className={classes.slider}>
          <div>
            <Grid container className={classes.header}>
              <Grid item>
                <img src={process.env.PUBLIC_URL + "/img/logo.svg"} />
              </Grid>
            </Grid>
            {!Array.isArray(props.steps) && (
              <Grid
                container
                justify="space-between"
                wrap="nowrap"
                className={classes.slide}
              >
                <Grid item>
                  <BccTypography type="h2" block className={classes.slderTitle}>
                    {props.steps.title}
                  </BccTypography>
                  <BccTypography
                    type="h4"
                    weight="normal"
                    block
                    className={classes.sliderSubTitle}
                  >
                    {props.steps.desc}
                  </BccTypography>
                  <BccButton
                    variant="contained"
                    color="primary"
                    className={classes.sliderBtn}
                    onClick={() => goToOrder()}
                  >
                    {props.steps.btnText}
                  </BccButton>
                </Grid>
                <Grid item>
                  <img
                    src={process.env.PUBLIC_URL + props.steps.img}
                    alt="slide1"
                  />
                </Grid>
              </Grid>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
