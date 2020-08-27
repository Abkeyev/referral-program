import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccButton } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      outerContainer: {
        backgroundColor: "#ffffff",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "80px 48px 100px",
        margin: "0 auto",
      },
      cards: {
        "& > div:nth-child(2)": { textAlign: "center" },
        "& > div": {
          width: "calc(33% - 16px)",
          "& > div:first-child": {
            fontSize: 64,
            lineHeight: "75px",
            fontWeight: "bold",
            marginRight: 32,
          },
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      outerContainer: {
        backgroundColor: "#ffffff",
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
  })
);

const HowToGet = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <BccTypography type="h2" block mb="56px">
          Как получить карту
        </BccTypography>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.cards}
        >
          <Grid item container wrap="nowrap" justify="space-between">
            <Grid item>1</Grid>
            <Grid item>
              <BccTypography type="h6" block mb="12px">
                Заполните заявку
              </BccTypography>
              <BccTypography type="p2l" block>
                В ближайшем офисе или на сайте. Это займет всего несколько минут
              </BccTypography>
            </Grid>
          </Grid>
          <Grid item>
            <img src={process.env.PUBLIC_URL + "/img/arrow.svg"} />
          </Grid>
          <Grid item container wrap="nowrap" justify="space-between">
            <Grid item>2</Grid>
            <Grid item>
              <BccTypography type="h6" block mb="12px">
                Получите карту
              </BccTypography>
              <BccTypography type="p2l" block>
                В офисе или представитель Банка доставит по указанному адресу
              </BccTypography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HowToGet;
