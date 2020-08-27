import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccButton } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      outerContainer: {
        backgroundColor: "#FFFFFF",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "0 48px 114px",
        margin: "0 auto",
      },
      mobileApp: {
        backgroundColor: "#fafafa",
        padding: "32px 64px",
        borderRadius: 30,
        "& > div:first-child": {
          marginRight: 96,
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
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        padding: "48px 48px 32px",
      },
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

const MobileApp = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          alignItems="center"
          className={classes.mobileApp}
        >
          <Grid item>
            <BccTypography type="h2" block mb="32px">
              Мобильное приложение BCC.KZ
            </BccTypography>
            <BccTypography type="h5" weight="normal" mb="48px" block>
              Оплачивайте услуги, управляйте рассрочкой и кэшбэком, пополняйте
              карту онлайн с карт других банков РК
            </BccTypography>

            <Grid container wrap="nowrap" alignItems="center">
              <Grid style={{ marginRight: 36 }} item>
                <img src={process.env.PUBLIC_URL + "/img/as.svg"} />
              </Grid>
              <Grid style={{ marginRight: 40 }} item>
                <img src={process.env.PUBLIC_URL + "/img/gp.svg"} />
              </Grid>
              <Grid
                style={{
                  padding: 4,
                  backgroundColor: "white",
                  borderRadius: 4,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.04)",
                }}
                item
              >
                <img src={process.env.PUBLIC_URL + "/img/qr.png"} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <img src={process.env.PUBLIC_URL + "/img/mobile-app.png"} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default MobileApp;
