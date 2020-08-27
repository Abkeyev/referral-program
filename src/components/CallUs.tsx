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
        padding: "0 48px 120px",
        margin: "0 auto",
      },
      cards: {
        "& > div": {
          width: "calc(33% - 16px)",
          border: "1px solid #CCCFD1",
          padding: "24px 32px",
          borderRadius: 10,
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

const CallUs = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <BccTypography type="h3" block align="center" mb="56px">
          Остались вопросы? Задайте их менеджеру по телефонам:
        </BccTypography>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.cards}
        >
          <Grid
            item
            container
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/call.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h3" block mb="12px">
                505
              </BccTypography>
              <BccTypography type="h5" weight="normal" block>
                Бесплатно с мобильного
              </BccTypography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/call.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h3" block mb="12px">
                +7 (727) 244 30 30
              </BccTypography>
              <BccTypography type="h5" weight="normal" block>
                Бесплатно с мобильного
              </BccTypography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            wrap="nowrap"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/phone.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h3" block>
                8 (7272) 44 77 77
              </BccTypography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CallUs;
