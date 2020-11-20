import React from "react";
import { Grid, InputAdornment } from "@material-ui/core";
import { BccTypography, BccTooltip, BccTabs, BccTab } from "./BccComponents";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        backgroundColor: "#ffffff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "48px 48px 0",
        boxSizing: "border-box",
      },
      tabs: {
        width: "100%",
        fontSize: 16,
        backgroundColor: "#fafafa",
      },
      table: {
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 48px",
        "& > div:last-child": {
          borderBottom: "none",
        },
        "& > div": {
          padding: "48px 0",
          borderBottom: "1px solid #CCCFD1",
          "& > div": {
            width: "40%",
          },
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "1px solid #F3F3F3",
          overflowX: "scroll",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
      benefits: {
        "& > div:first-child": {
          marginBottom: 20,
        },
        "& > div:nth-child(2)": {
          marginBottom: 20,
        },
        "& > div": {
          width: "calc(50% - 16px)",
          borderRadius: 10,
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: "#FAFAFA",
          padding: 24,
          "& > div:first-child": {
            background: "#FFFFFF",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            maxHeight: 80,
            minHeight: 80,
            maxWidth: 80,
            minWidth: 80,
            boxSizing: "border-box",
            padding: "0",
            "& > img": {
              width: 40,
              margin: "0 auto",
            },
          },
          "& > div:last-child": {
            marginLeft: 32,
          },
        },
      },
      textHint: {
        display: "flex",
        alignItems: "center",
      },
      docs: {
        marginTop: 24,
        backgroundColor: "#ffffff",
        boxShadow:
          "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        "& > div:nth-child(2n)": {
          backgroundColor: "#fafafa",
        },
        "& > div:first-child": {
          display: "block",
        },
        "& > div": {
          width: "100%",
          marginBottom: 0,
          display: "flex",
          boxSizing: "border-box",
          padding: "24px",
          flexWrap: "nowrap",
          alignItems: "center",
          "& > a": {
            color: "#000D1A",
          },
          "& > img": {
            marginRight: 24,
          },
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      container: {
        backgroundColor: "#ffffff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "48px 48px 0",
        boxSizing: "border-box",
      },
      tabs: {
        width: "100%",
        fontSize: 16,
        backgroundColor: "#fafafa",
      },
      table: {
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 48px",
        "& > div:last-child": {
          borderBottom: "none",
        },
        "& > div": {
          padding: "48px 0",
          borderBottom: "1px solid #CCCFD1",
          justifyContent: "space-between",
          "& > div": {
            width: "40%",
          },
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "1px solid #F3F3F3",
          overflowX: "scroll",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
      benefits: {
        "& > div:first-child": {
          marginBottom: 20,
        },
        "& > div:nth-child(2)": {
          marginBottom: 20,
        },
        "& > div": {
          width: "calc(50% - 16px)",
          borderRadius: 10,
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: "#FAFAFA",
          padding: 24,
          "& > div:first-child": {
            background: "#FFFFFF",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            maxHeight: 80,
            minHeight: 80,
            maxWidth: 80,
            minWidth: 80,
            boxSizing: "border-box",
            padding: "0",
            "& > img": {
              width: 40,
              margin: "0 auto",
            },
          },
          "& > div:last-child": {
            marginLeft: 32,
          },
        },
      },
      textHint: {
        display: "flex",
        alignItems: "center",
      },
      docs: {
        marginTop: 24,
        backgroundColor: "#ffffff",
        boxShadow:
          "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        "& > div:nth-child(2n)": {
          backgroundColor: "#fafafa",
        },
        "& > div:first-child": {
          display: "block",
        },
        "& > div": {
          width: "100%",
          marginBottom: 0,
          display: "flex",
          boxSizing: "border-box",
          padding: "24px",
          flexWrap: "nowrap",
          alignItems: "center",
          "& > a": {
            color: "#000D1A",
          },
          "& > img": {
            marginRight: 24,
          },
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      innerContainer: {
        padding: "24px 24px 0",
      },
      table: {
        padding: "0 24px",
        "& > div  > div": {
          width: "50%",
        },
      },
    },
  })
);

const Tabs = (props: any) => {
  const classes = useStyles({});
  const [index, setIndex] = React.useState(0);
  const { t, i18n } = useTranslation();

  return (
    <div className={classes.container} style={{ backgroundColor: "white" }}>
      <div className={classes.innerContainer}>
        <BccTypography type="h2" block mb="30px">
          {props.title}
        </BccTypography>

        <BccTabs
          value={index}
          onChange={(e: any, i: number) => setIndex(i)}
          className={classes.tab}
        >
          <BccTab label={t("tab.text")} />
        </BccTabs>
      </div>
      <div className={classes.tabs}>
        {index === 0 ? (
          <Grid container direction="column" className={classes.table}>
            <Grid item container direction="row" wrap="nowrap">
              <Grid item>
                <BccTypography type="p2" color="#4D565F">
                  {t("tab.text1")}
                </BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="p2" className={classes.textHint}>
                  {t("tab.text11")}
                  <BccTooltip
                    title={t("tab.text111")}
                    placement="right"
                    arrow
                    enterTouchDelay={0}
                    leaveTouchDelay={2500}
                    interactive
                  >
                    <InputAdornment position="end">
                      <InfoOutlinedIcon style={{ color: "#80868C" }} />
                    </InputAdornment>
                  </BccTooltip>
                </BccTypography>
              </Grid>
            </Grid>
            <Grid item container direction="row" wrap="nowrap">
              <Grid item>
                <BccTypography type="p2" color="#4D565F">
                  {t("tab.text2")}
                </BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="p2" block mb="8px">
                  {t("tab.text22")}
                </BccTypography>
                <BccTypography type="p2" block className={classes.textHint}>
                  {t("tab.text222")}
                  <BccTooltip
                    title={t("tab.text2222")}
                    placement="right"
                    enterTouchDelay={0}
                    leaveTouchDelay={3500}
                    arrow
                    interactive
                  >
                    <InputAdornment position="end">
                      <InfoOutlinedIcon style={{ color: "#80868C" }} />
                    </InputAdornment>
                  </BccTooltip>
                </BccTypography>
              </Grid>
            </Grid>
            <Grid item container direction="row" wrap="nowrap">
              <Grid item>
                <BccTypography type="p2" color="#4D565F">
                  {t("tab.text3")}
                </BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="p2" block>
                  {t("tab.text33")}
                </BccTypography>
              </Grid>
            </Grid>
            <Grid item container direction="row" wrap="nowrap">
              <Grid item>
                <BccTypography type="p2" color="#4D565F">
                  {t("tab.text4")}
                </BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="p2" block mb="8px">
                  {t("tab.text44")}
                </BccTypography>
                <BccTypography type="p3" block color="#4D565F">
                  {t("tab.text444")}
                </BccTypography>
              </Grid>
            </Grid>
            <Grid item container direction="row" wrap="nowrap">
              <Grid item>
                <BccTypography type="p2" color="#4D565F">
                  {t("tab.text5")}
                </BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="p2" block mb="8px">
                  {t("tab.text5")}
                </BccTypography>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Tabs;
