import React from "react";
import { Grid, InputAdornment } from "@material-ui/core";
import { BccTypography, BccTooltip, BccTabs, BccTab } from "./BccComponents";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);

const Tabs = (props: any) => {
  const classes = useStyles({});
  const [index, setIndex] = React.useState(0);

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
          <BccTab label="Условия предоставления отсрочки" />
          <BccTab label="Часто задаваемые вопросы" />
        </BccTabs>
      </div>
      <div className={classes.tabs}>
        {index === 0 ? (
          <Grid container direction="column" className={classes.table}>
            <Grid item container direction="row" wrap="nowrap">
              <Grid item>
                <BccTypography type="p2" color="#4D565F">
                  Подача заявления
                </BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="p2" className={classes.textHint}>
                  Только от Заёмщика
                  <BccTooltip
                    title="Физическое лицо, на которое оформлен кредит"
                    placement="right"
                    arrow
                    enterTouchDelay={0}
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
                  Обязательные документы
                </BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="p2" block mb="8px">
                  - Документ, удостоверяющий личность заёмщика
                </BccTypography>
                <BccTypography type="p2" block className={classes.textHint}>
                  - Документ, подтверждающий документ об ухудшении финансового
                  состояния
                  <BccTooltip
                    title="Например, справка с места работы о предоставлении отпуска без содержания или уменьшении заработной платы; документ подтверждающий потерю работы; в случаях, когда отсрочка запрашивается по состоянию здоровья, необходимо предоставить больничный лист или заключение врача и т.д."
                    placement="right"
                    enterTouchDelay={0}
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
                  Комиссия
                </BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="p2" block>
                  По решению Уполномоченного Органа Банка
                </BccTypography>
              </Grid>
            </Grid>
            <Grid item container direction="row" wrap="nowrap">
              <Grid item>
                <BccTypography type="p2" color="#4D565F">
                  Срок рассмотрения
                </BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="p2" block mb="8px">
                  В течение 15 дней
                </BccTypography>
                <BccTypography type="p3" block color="#4D565F">
                  если иное не установлено другими нормативно-правовыми актами
                  Республики Казахстан
                </BccTypography>
              </Grid>
            </Grid>
            <Grid item container direction="row" wrap="nowrap">
              <Grid item>
                <BccTypography type="p2" color="#4D565F">
                  Дополнительно
                </BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="p2" block mb="8px">
                  Банк вправе запросить дополнительные документы для
                  рассмотрения
                </BccTypography>
              </Grid>
            </Grid>
          </Grid>
        ) : index === 1 ? (
          <Grid container direction="column" className={classes.table}>
            <Grid item container direction="row" wrap="nowrap">
              <Grid item>
                <BccTypography type="p2">Подача заявления</BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="p2">Только от Заёмщика</BccTypography>
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
