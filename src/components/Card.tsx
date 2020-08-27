import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccButton } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      outerContainer: {
        backgroundColor: "#fafaffa",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "48px",
        margin: "0 auto",
      },
      card: {
        padding: "0 32px",
        "& > div:first-child": {
          width: 400,
        },
        "& > div:nth-child(2)": {
          marginLeft: 56,
          "& > div": {
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            "& > img": {
              marginRight: 16,
            },
          },
        },
      },
      btn: {
        minWidth: 320,
        marginTop: 8,
      },
    },
    [theme.breakpoints.down("md")]: {
      outerContainer: {
        backgroundColor: "#FAFAFA",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "48px",
        margin: "0 auto",
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        padding: "48px 48px 32px",
      },
    },
    [theme.breakpoints.down("xs")]: {},
    btn: {},
  })
);

const Card = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <Grid
          container
          justify="flex-start"
          wrap="nowrap"
          alignItems="center"
          className={classes.card}
        >
          <Grid item>
            <img src={process.env.PUBLIC_URL + "/img/card.png"} />
          </Grid>
          <Grid item>
            <div>
              <img src={process.env.PUBLIC_URL + "/img/card-mark.svg"} />{" "}
              <BccTypography type="p2">
                Оплачивайте покупки одним касанием и получайте кэшбэк 1%
              </BccTypography>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + "/img/card-mark.svg"} />{" "}
              <BccTypography type="p2">Осуществляйте переводы</BccTypography>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + "/img/card-mark.svg"} />{" "}
              <BccTypography type="p2">
                Снимайте наличные деньги в любом ближайшем банкомате бесплатно
              </BccTypography>
            </div>
            <BccButton className={classes.btn} variant="contained">
              Открыть карту
            </BccButton>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Card;
