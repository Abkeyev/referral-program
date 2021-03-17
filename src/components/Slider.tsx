import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      outerContainer: {
        backgroundSize: "cover",
        background: '#fafafa'
      },
      container: {
        position: "relative",
        margin: "0 auto",
        padding: "0 48px",
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
        background: '#fafafa'
      },
      container: {
        position: "relative",
        margin: "0 auto",
        padding: "0 48px",
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
        lineHeight: "inherit",
      },
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        height: "auto",
        padding: '0 24px'
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
        marginBottom: 24,
        fontSize: 18,
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
          marginTop: 24,
          marginBottom: 24,
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
      padding: '24px 0',
    },
    select: {
      color: "#000D1A",
      paddingLeft: 7,
      fontSize: 14,
      backgroundColor: "white",
      borderRadius: 8,
      "& > svg": {
        color: "#000D1A",
      },
      "&:hover:not(.Mui-disabled):before": {
        borderBottom: 0,
      },
      "&::after, &::before": {
        borderBottom: 0,
      },
      "& > div:focus": {
        backgroundColor: "transparent",
      },
    },
    logo: {
      display: 'block',
      height: 40,
      '& > img': {
        height: 'inherit'
      }
    }
  })
);

const Slider = () => {
  const classes = useStyles({});

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <div className={classes.slider}>
          <div>
            <Grid
              container
              justify="space-between"
              wrap="nowrap"
              className={classes.header}
            >
              <Grid item>
                <a href="https://www.bcc.kz/" className={classes.logo}>
                  <img src={process.env.PUBLIC_URL + "/new-logo.svg"} />
                </a>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
