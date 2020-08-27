import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccChip, BccCard } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      outerContainer: {
        backgroundColor: "#ffffff",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "48px",
        margin: "0 auto",
      },
      title: {
        marginBottom: 32,
      },
      cards: {
        position: "relative",
        marginBottom: 54,
        padding: "54px 24px",
        border: "1px solid #DBDBDB",
        borderRadius: 10,
        "& > div": {
          width: "calc(33% - 32px)",
          "& > div:first-child": {
            "& > img": {
              width: 42,
            },
          },
          "& > div:last-child": {
            marginLeft: 24,
          },
        },
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
      title: {
        marginBottom: 32,
      },
      cards: {
        marginBottom: 24,
        "& > div": {
          width: "calc(33% - 8px)",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        padding: "48px 48px 32px",
      },
      cards: {
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: 0,
        "& > div:nth-child(2n + 1)": {
          marginRight: 16,
        },
        "& > div:last-child": {
          marginRight: 0,
          width: "80%",
          maxWidth: 400,
        },
        "& > div": {
          width: "calc(50% - 8px)",
          marginBottom: 16,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      cards: {
        "& > div": {
          width: "100%",
          marginRight: 0,
          maxWidth: "none",
        },
        "& > div:nth-child(2n + 1)": {
          marginRight: 0,
        },
        "& > div:last-child": {
          marginRight: 0,
          width: "100%",
          maxWidth: "none",
        },
      },
      title: {
        marginBottom: 24,
      },
    },
    topText: {
      position: "absolute",
      top: -14,
      padding: "0 40px 0 20px",
      left: 54,
      backgroundColor: "#ffffff",
    },
  })
);

const HowTo = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <BccTypography type="h1" block className={classes.title}>
          Как перевести пенсию
        </BccTypography>

        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.cards}
        >
          <BccTypography type="h4" className={classes.topText}>
            Клиенты, которые <span style={{ color: "#C35BC0" }}>впервые</span>{" "}
            получают пенсию
          </BccTypography>
          <Grid item container wrap="nowrap" justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/t1.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h5" block mb="20px">
                Оформите карту
              </BccTypography>
              <BccTypography type="p2l" block>
                В любом ближайшем отделении Банка за 15 минут или через{" "}
                <a href="" style={{ color: "#C35BC0" }}>
                  сайт
                </a>{" "}
                Банка с доставкой до дома.
              </BccTypography>
            </Grid>
          </Grid>
          <Grid item container wrap="nowrap" justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/t2.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h5" block mb="20px">
                Передача реквизитов
              </BccTypography>
              <BccTypography type="p2l" block>
                Банк в автоматическом режиме передает Ваши реквизиты в ЦОН
              </BccTypography>
            </Grid>
          </Grid>
          <Grid item container wrap="nowrap" justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/t3.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h5" block mb="20px">
                Получение пенсии
              </BccTypography>
              <BccTypography type="p2l" block>
                Получайте пенсию не выходя из дома
              </BccTypography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.cards}
        >
          <BccTypography type="h4" className={classes.topText}>
            Клиенты, которые{" "}
            <span style={{ color: "#C35BC0" }}>уже получают</span> пенсию
          </BccTypography>
          <Grid item container wrap="nowrap" justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/t1.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h5" block mb="20px">
                Оформите карту
              </BccTypography>
              <BccTypography type="p2l" block>
                В любом ближайшем отделении Банка за 15 минут или через{" "}
                <a href="" style={{ color: "#C35BC0" }}>
                  сайт
                </a>{" "}
                Банка с доставкой до дома.
              </BccTypography>
            </Grid>
          </Grid>
          <Grid item container wrap="nowrap" justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/t4.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h5" block mb="20px">
                Передача реквизитов
              </BccTypography>
              <BccTypography type="p2l" block>
                Клиенту необходимо передать реквизиты в ЦОН, в связи с
                изменениями реквизитов для получения выплат
              </BccTypography>
            </Grid>
          </Grid>
          <Grid item container wrap="nowrap" justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/t3.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h5" block mb="20px">
                Получение пенсии
              </BccTypography>
              <BccTypography type="p2l" block>
                Получайте пенсию не выходя из дома
              </BccTypography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HowTo;
