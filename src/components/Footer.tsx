import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography } from "./BccComponents";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        backgroundColor: "#303030",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "48px",
        margin: "0 auto",
      },
      foot: {
        "& > div": {
          width: "40%",
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      outerContainer: {
        backgroundColor: "#303030",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "48px",
        margin: "0 auto",
      },
      foot: {
        "& > div": {
          width: "40%",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      foot: {
        flexWrap: "wrap",
        "& > div:first-child": {
          marginBottom: 24,
        },
        "& > div": {
          width: "100%",
        },
      },

      container: {
        padding: "24px",
      },
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

const Footer = (props: any) => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation();
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.foot}
        >
          <Grid item>
            <BccTypography type="p2" block color="#FAFAFA">
              © 2000 - 2020 {t("footer.bcc")}
            </BccTypography>
            <BccTypography type="p2" block color="#FAFAFA">
              {t("footer.rights")}
            </BccTypography>
          </Grid>
          <Grid item>
            <BccTypography type="p2" block color="#FAFAFA">
              {t("footer.lic")}
            </BccTypography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
