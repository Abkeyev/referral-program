import React from "react";
import { Grid, MenuItem, FormControlLabel } from "@material-ui/core";
import {
  BccTypography,
  BccCheckbox,
  BccInput,
  BccLink,
  BccSelect,
  BccButton,
  BccAlert,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MaskedInput from "react-maskedinput";
import BlockUi from "react-block-ui";
import api from "../api/Api";
const webConfigEnv = (window as any).env;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    outerContainer: {
      background: "#ffffff",
    },
    innerOrderForm: {},
    container: {
      maxWidth: 1280,
      margin: "0 auto",
      textAlign: "center",
      boxSizing: "border-box",
      padding: "48px 96px",
    },
    orderTitle: {
      width: "65%",
      margin: "0 auto",
    },
    orderNum: {
      color: "#249052",
      paddingRight: 10,
      borderRight: ".5px solid rgba(20, 20, 20, .7)",
    },
    orderNumTitle: {
      paddingLeft: 10,
      color: "#141414",
    },
    orderNumText: {
      marginTop: 20,
      opacity: 0.7,
    },
    item: {
      width: "calc(33% - 20px)",
    },
    orderForm: {
      background: "#FFFFFF",
      boxShadow:
        "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
      borderRadius: 8,
      width: "60%",
      padding: 46,
      boxSizing: "border-box",
      maxWidth: "60%",
      margin: "0 auto",
      textAlign: "center",
    },
    titleForm: {
      marginBottom: 16,
    },
    subTitleForm: {
      marginBottom: 46,
      opacity: 0.7,
    },
    inputStyle: {
      marginBottom: 24,
      textAlign: "left",
    },
    inputStyleText: {
      textAlign: "left",
      marginBottom: 32,
    },
    checkboxText: {
      alignItems: "center",
      marginBottom: 48,
    },
    btnWrap: {
      width: "calc(50% - 10px)",
      "& > button": { width: "100%" },
    },
    icon: {
      width: "18px",
      height: "19px",
    },
    progress: {
      backgroundColor: "#E0E0E0",
      height: 36,
      borderRadius: 4,
      marginBottom: 24,
      textAlign: "center",
      "& > span": {
        lineHeight: "36px",
      },
    },
    alert: {
      marginBottom: 32,
    },
    garant: { textAlign: "left" },
    orderSteps: {
      marginBottom: 48,
      boxSizing: "border-box",
      "& > div:first-child": {
        "& > div:first-child": {
          marginLeft: "calc(33% / 2 - 20px)",
        },
        "& > div:nth-child(2n+1)": {
          height: 40,
          width: 40,
          borderRadius: "50%",
          backgroundColor: "#F3F3F3",
          textAlign: "center",
          "& > span": {
            lineHeight: "40px",
          },
        },
        "& > div:nth-child(2n)": {
          width: "calc(33% - 48px - 40px)",
          height: 1,
          backgroundColor: "#CCCFD1",
          margin: "20px 24px",
        },
      },
      "& > div:last-child": {
        marginTop: 12,
        "& > div": {
          width: "33%",
        },
      },
    },
    code: {
      margin: 0,
      "& input": {
        height: 62,
        boxSizing: "border-box",
      },
    },
    timer: {
      fontSize: 16,
      color: "#4D565F",
    },
    docForm: {
      height: 64,
      border: "1px solid #F3F3F3",
      borderRadius: 4,
      marginBottom: 24,
      padding: "8px 14px",
      lineHeight: "48px",
    },
    linkReSendSms: {
      color: "#3F0259",
      fontSize: 16,
      height: "auto",
      padding: 0,
      lineHeight: "initial",
      cursor: "pointer",
      textTransform: "none",
      "&:hover, &:active": {
        textDecoration: "underline",
        opacity: 0.8,
      },
    },
    progressBarSuccess: {
      borderRadius: 5,
      display: "block",
      margin: "12px 0 32px",
      height: 36,
      lineHeight: "36px",
      textAlign: "center",
      position: "relative",
      fontSize: 16,
      "& > span": {
        zIndex: 5,
        color: "white",
        fontWeight: "bold",
        position: "relative",
      },
    },
    successForm: {
      backgroundColor: "rgba(125, 206, 160, 0.1)",
      textAlign: "center",
      padding: "56px 64px 112px",
      "& > img": {
        display: "block",
        margin: "0 auto",
        marginBottom: 24,
      },
    },
    progressBarInnerSuccess: {
      position: "absolute",
      background: "#27AE60",
      transition: "width .5s ease-out",
      top: 0,
      height: 36,
      borderRadius: 5,
      bottom: 0,
      zIndex: 4,
    },
  })
);

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const BccMaskedInput = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="+7(111) 111 11 11"
      placeholder={"+7(707) 707 77 77"}
    />
  );
};

const Order = (props: any) => {
  const classes = useStyles({});
  const [type, setType] = React.useState("1");
  const [step, setStep] = React.useState(0);
  const [filial, setFilial] = React.useState("");
  const [iin, setIin] = React.useState("");
  const [fio, setFio] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [phoneError, setPhoneError] = React.useState<boolean>(false);
  const [agree, setAgree] = React.useState<boolean>(true);
  const [isLoading, setLoading] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [other, setOther] = React.useState("");
  const [period, setPeriod] = React.useState("");
  const [reason, setReason] = React.useState("");
  const [creditNumber, setCreditNumber] = React.useState("");
  const [timer, setTimer] = React.useState(0);
  const [file1, setFile1] = React.useState("");
  const [file2, setFile2] = React.useState("");
  const [file3, setFile3] = React.useState("");
  const [branches, setBranches] = React.useState([] as any);

  React.useEffect(() => {
    api.reference.getCityBranches().then((m: any) => setBranches(m));
    let timeOut = setInterval(() => {
      if (timer !== 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(timeOut);
  }, [timer]);

  const formatPhoneNumber = () => {
    let res = phone;
    if (phone.slice(0, 1) === "8") res = "+7" + phone.slice(1);
    return res.replace(/\(|\)| /g, "");
  };

  const isValid = () => {
    if (step === 0)
      return (
        type &&
        filial &&
        iin.length === 12 &&
        phone.replace("_", "").length === 17 &&
        agree
      );
    else if (step === 1) return code.length === 6;
    else if (step === 2)
      return type === "1"
        ? creditNumber.length > 5 && period && reason && file1 && file2 && file3
        : creditNumber.length > 5 &&
            other.length > 5 &&
            file1 &&
            file2 &&
            file3;
    else return true;
  };

  const handleClose = () => {
    setOpenError(false);
  };

  const startProcess = () => {
    api.camunda
      .start({
        env: {
          production: webConfigEnv.PRODUCTION === "1",
        },
        requestInfo: {
          type,
          filial,
          fio,
          iin,
          phone: formatPhoneNumber(),
        },
      })
      .then((res: any) => {
        setStep(2);
        props.scrollToOrder(false);
        setLoading(false);
      })
      .catch((e: any) => {
        console.error(e);
        setOpenError(true);
        setLoading(false);
      });
  };

  const getOtp = () => {
    if (phone.substr(3, 1) !== "7") {
      setPhoneError(true);
      return;
    } else setPhoneError(false);
    setLoading(true);
    setTimer(60);
    api.authOtp
      .sendOtp({ iin: iin, phone: formatPhoneNumber() })
      .then(() => {
        localStorage.removeItem("userContext");
        setStep(1);
        props.scrollToOrder(false);
        setLoading(false);
      })
      .catch((e: any) => {
        console.error(e);
        props.scrollToOrder(false);
        setOpenError(true);
        setLoading(false);
      });
  };

  const onSubmitOtp = () => {
    setLoading(true);
    api.authOtp
      .confirmOtp({
        iin: iin,
        phone: formatPhoneNumber(),
        otp: code,
      })
      .then((userContext) => {
        props.scrollToOrder(false);
        localStorage.setItem("userContext", JSON.stringify(userContext));
        startProcess();
      })
      .catch((e: any) => {
        props.scrollToOrder(false);
        console.error(e);
        setOpenError(true);
        setLoading(false);
      });
  };

  const onReSend = () => {
    setLoading(true);
    api.authOtp
      .sendOtp({ iin: iin, phone: formatPhoneNumber() })
      .then(() => {
        props.scrollToOrder(false);
        setTimer(90);
        setCode("");
        setLoading(false);
      })
      .catch((e: any) => {
        console.error(e);
        props.scrollToOrder(false);
        setOpenError(true);
        setLoading(false);
      });
  };

  return (
    <div className={classes.outerContainer} ref={props.refProp}>
      <div className={classes.container}>
        <div className={classes.orderTitle}>
          <BccTypography type="h3" weight="medium" block mb="16px">
            Оформите заявку на отсрочку по кредиту
          </BccTypography>
          <BccTypography type="p1" block color="#4D565F" mb="48px">
            Заполните форму для заявления на предоставление отсрочки
          </BccTypography>
          <Grid
            container
            direction="column"
            justify="center"
            className={classes.orderSteps}
          >
            <Grid item container direction="row">
              <Grid item>
                <BccTypography type="h5">1</BccTypography>
              </Grid>
              <Grid item></Grid>
              <Grid item>
                <BccTypography type="h5">2</BccTypography>
              </Grid>
              <Grid item></Grid>
              <Grid item>
                <BccTypography type="h5">3</BccTypography>
              </Grid>
            </Grid>
            <Grid item container direction="row" justify="center">
              <Grid item>
                <BccTypography type="p2" weight="medium" block mb="8px">
                  Заполните онлайн-заявку
                </BccTypography>
                <BccTypography type="p3" block color="#4D565F">
                  За 3 минуты онлайн
                </BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="p2" weight="medium" block mb="8px">
                  Получите SMS
                </BccTypography>
                <BccTypography type="p3" block color="#4D565F">
                  Мы отправим вам код подтверждения
                </BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="p2" weight="medium" block mb="8px">
                  Дождитесь решения
                </BccTypography>
                <BccTypography type="p3" block color="#4D565F">
                  Мы уведомим вас сообщением
                </BccTypography>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className={classes.orderForm}>
          <Grid direction="column" container className={classes.innerOrderForm}>
            <Grid item style={{ display: step === 3 ? "none" : "block" }}>
              <BccTypography
                type="p2"
                block
                color="#4D565F"
                mb="12px"
                align="left"
              >
                Шаг {step + 1}:{" "}
                {step === 0
                  ? "Заполнение данных"
                  : step === 1
                  ? "Подтверждение"
                  : "Заявка"}
              </BccTypography>
              <div className={classes.progress}>
                <div className={classes.progressBarSuccess}>
                  <BccTypography type="p2" color="black">
                    {step * 33 + " %"}
                  </BccTypography>
                  <div
                    style={{ width: `${step * 33 + "%"}` }}
                    className={classes.progressBarInnerSuccess}
                  ></div>
                </div>
              </div>
            </Grid>

            <BlockUi tag="div" blocking={isLoading}>
              {step === 0 ? (
                <>
                  <Grid item className={classes.alert}>
                    <BccAlert severity="error">
                      <BccTypography type="p3">
                        Важно! Отсрочка не является прощением кредита и/или
                        вознаграждения
                      </BccTypography>
                    </BccAlert>
                  </Grid>
                  <Grid item>
                    <BccInput
                      fullWidth={true}
                      className={classes.inputStyle}
                      label="Тип заявки"
                      id="type"
                      name="type"
                      value={type}
                      onChange={(e: any) => setType(e.target.value)}
                      variant="outlined"
                      select
                    >
                      <MenuItem key={1} value={1}>
                        Отсрочка по кредиту
                      </MenuItem>
                      <MenuItem key={2} value={2}>
                        Заявка по иным вопросам
                      </MenuItem>
                    </BccInput>
                  </Grid>
                  <Grid item>
                    <BccInput
                      fullWidth={true}
                      className={classes.inputStyle}
                      label={"Выберите филиал"}
                      id="filial"
                      name="filial"
                      value={filial}
                      onChange={(e: any) => setFilial(e.target.value)}
                      variant="outlined"
                      select
                    >
                      {branches !== null &&
                        branches?.map((b: any) =>
                          b.markers?.map((bb: any) => {
                            return (
                              <MenuItem key={1} value={1}>
                                {b.value + " " + bb.name}
                              </MenuItem>
                            );
                          })
                        )}
                    </BccInput>
                  </Grid>
                  <Grid item>
                    <BccInput
                      className={classes.inputStyle}
                      fullWidth
                      label="ИИН"
                      variant="filled"
                      id="iin"
                      name="iin"
                      value={iin}
                      onChange={(e: any) => setIin(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      className={classes.inputStyle}
                      fullWidth
                      label="ФИО"
                      variant="filled"
                      id="fio"
                      name="fio"
                      value={fio}
                      onChange={(e: any) => setFio(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      variant="filled"
                      fullWidth
                      label="Номер телефона"
                      onChange={(e: any) => setPhone(e.target.value)}
                      className={classes.inputStyle}
                      helperText={
                        phoneError ? "Неверный формат номера телефона" : ""
                      }
                      error={phoneError ? true : false}
                      id="phone"
                      name="phone"
                      value={phone}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        inputComponent: BccMaskedInput as any,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      justify="flex-start"
                      wrap="nowrap"
                      className={classes.checkboxText}
                    >
                      <Grid item>
                        <BccCheckbox
                          value="remember"
                          color="primary"
                          checked={agree}
                          onChange={() => setAgree(!agree)}
                        />
                      </Grid>
                      <Grid item>
                        <BccTypography type="p3" ml="10px">
                          Соглашаюсь с обработкой данных и{" "}
                          <BccLink href="https://www.bcc.kz/" target="_blank">
                            c условиями передачи информации
                          </BccLink>
                        </BccTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container justify="space-between">
                      <Grid item className={classes.btnWrap}>
                        <Grid container spacing={2}>
                          <Grid item>
                            <img
                              src={process.env.PUBLIC_URL + "/img/safety.svg"}
                              className={classes.icon}
                              alt="order_security"
                            />
                          </Grid>
                          <Grid
                            item
                            xl={true}
                            lg={true}
                            md={true}
                            sm={true}
                            xs={true}
                          >
                            <BccTypography type="p3" className={classes.garant}>
                              Мы гарантируем безопасность и сохранность ваших
                              данных
                            </BccTypography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item className={classes.btnWrap}>
                        <BccButton
                          variant="contained"
                          disabled={!isValid()}
                          color="primary"
                          onClick={() => getOtp()}
                        >
                          Продолжить
                        </BccButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              ) : step === 1 ? (
                <>
                  <Grid
                    item
                    container
                    justify="space-between"
                    alignItems="center"
                    spacing={4}
                  >
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                      <BccInput
                        variant="outlined"
                        className={classes.code}
                        margin="normal"
                        fullWidth
                        id="code"
                        name="code"
                        value={code}
                        onChange={(e: any) =>
                          setCode(
                            e.target.value.replace(/\D/g, "").substr(0, 6)
                          )
                        }
                        label={"Код подтверждения"}
                      />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                      <BccButton
                        onClick={() => onSubmitOtp()}
                        variant="contained"
                        fullWidth
                        disabled={!isValid()}
                      >
                        Подтвердить
                      </BccButton>
                    </Grid>
                    {timer !== 0 ? (
                      <Grid item>
                        <BccTypography type="p3" className={classes.timer}>
                          Отправить повторно СМС через 00:{timer}
                        </BccTypography>
                      </Grid>
                    ) : (
                      <Grid item>
                        <BccButton
                          variant="text"
                          className={classes.linkReSendSms}
                          onClick={() => onReSend()}
                        >
                          Отправить повторно
                        </BccButton>
                      </Grid>
                    )}
                  </Grid>
                </>
              ) : step === 2 ? (
                type === "1" ? (
                  <>
                    <Grid item>
                      <BccInput
                        className={classes.inputStyle}
                        fullWidth
                        label="Номер кредитного договора"
                        variant="filled"
                        id="creditNumber"
                        name="creditNumber"
                        value={creditNumber}
                        onChange={(e: any) => setCreditNumber(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <BccInput
                        fullWidth={true}
                        className={classes.inputStyle}
                        label={"Период отсрочки"}
                        id="period"
                        name="period"
                        value={period}
                        onChange={(e: any) => setPeriod(e.target.value)}
                        variant="outlined"
                        select
                      >
                        <MenuItem key={1} value={1}>
                          12 месяцев
                        </MenuItem>
                        <MenuItem key={2} value={2}>
                          24 месяца
                        </MenuItem>
                      </BccInput>
                    </Grid>
                    <Grid item>
                      <BccInput
                        fullWidth={true}
                        className={classes.inputStyle}
                        label={"Причина отсрочки"}
                        id="reason"
                        name="reason"
                        value={reason}
                        onChange={(e: any) => setReason(e.target.value)}
                        variant="outlined"
                        select
                      >
                        <MenuItem key={1} value={1}>
                          Причина
                        </MenuItem>
                        <MenuItem key={2} value={2}>
                          Еще какая-та причина
                        </MenuItem>
                      </BccInput>
                    </Grid>
                    <Grid
                      item
                      container
                      justify="space-between"
                      wrap="nowrap"
                      className={classes.docForm}
                    >
                      <Grid item>
                        <BccTypography type="p2" color="#4D565F">
                          Подтверждающий документ
                        </BccTypography>
                      </Grid>
                      <Grid item>
                        <input
                          accept="application/msword"
                          style={{ display: "none" }}
                          id="upload1"
                          value={file1}
                          type="file"
                        />
                        <label htmlFor="upload1">
                          <BccButton
                            variant="outlined"
                            color="secondary"
                            component="span"
                            size="small"
                          >
                            Выбрать файл
                          </BccButton>
                        </label>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      justify="space-between"
                      wrap="nowrap"
                      className={classes.docForm}
                    >
                      <Grid item>
                        <BccTypography type="p2" color="#4D565F">
                          Подтверждающий документ
                        </BccTypography>
                      </Grid>
                      <Grid item>
                        <input
                          accept="application/msword"
                          style={{ display: "none" }}
                          id="upload2"
                          value={file2}
                          type="file"
                        />
                        <label htmlFor="upload2">
                          <BccButton
                            variant="outlined"
                            color="secondary"
                            component="span"
                            size="small"
                          >
                            Выбрать файл
                          </BccButton>
                        </label>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      justify="space-between"
                      wrap="nowrap"
                      className={classes.docForm}
                    >
                      <Grid item>
                        <BccTypography type="p2" color="#4D565F">
                          Подтверждающий документ
                        </BccTypography>
                      </Grid>
                      <Grid item>
                        <input
                          accept="application/msword"
                          style={{ display: "none" }}
                          id="upload3"
                          value={file3}
                          type="file"
                        />
                        <label htmlFor="upload3">
                          <BccButton
                            variant="outlined"
                            color="secondary"
                            component="span"
                            size="small"
                          >
                            Выбрать файл
                          </BccButton>
                        </label>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <BccButton
                        variant="contained"
                        disabled={!isValid()}
                        onClick={() => startProcess()}
                        color="primary"
                        fullWidth
                      >
                        Отправить заявку
                      </BccButton>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item>
                      <BccInput
                        className={classes.inputStyle}
                        fullWidth
                        label="Номер кредитного договора"
                        variant="filled"
                        id="creditNumber"
                        name="creditNumber"
                        value={creditNumber}
                        onChange={(e: any) => setCreditNumber(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <BccInput
                        className={classes.inputStyleText}
                        fullWidth
                        label="Текст заявления"
                        variant="filled"
                        id="other"
                        name="other"
                        multiline
                        value={other}
                        onChange={(e: any) => setOther(e.target.value)}
                      />
                    </Grid>
                    <Grid
                      item
                      container
                      justify="space-between"
                      wrap="nowrap"
                      className={classes.docForm}
                    >
                      <Grid item>
                        <BccTypography type="p2" color="#4D565F">
                          Подтверждающий документ
                        </BccTypography>
                      </Grid>
                      <Grid item>
                        <input
                          accept="application/msword"
                          value={file1}
                          style={{ display: "none" }}
                          id="upload11"
                          type="file"
                        />
                        <label htmlFor="upload11">
                          <BccButton
                            variant="outlined"
                            color="secondary"
                            component="span"
                            size="small"
                          >
                            Выбрать файл
                          </BccButton>
                        </label>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      justify="space-between"
                      wrap="nowrap"
                      className={classes.docForm}
                    >
                      <Grid item>
                        <BccTypography type="p2" color="#4D565F">
                          Подтверждающий документ
                        </BccTypography>
                      </Grid>
                      <Grid item>
                        <input
                          accept="application/msword"
                          style={{ display: "none" }}
                          id="upload22"
                          value={file2}
                          type="file"
                        />
                        <label htmlFor="upload22">
                          <BccButton
                            variant="outlined"
                            color="secondary"
                            component="span"
                            size="small"
                          >
                            Выбрать файл
                          </BccButton>
                        </label>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      justify="space-between"
                      wrap="nowrap"
                      className={classes.docForm}
                    >
                      <Grid item>
                        <BccTypography type="p2" color="#4D565F">
                          Подтверждающий документ
                        </BccTypography>
                      </Grid>
                      <Grid item>
                        <input
                          accept="application/msword"
                          style={{ display: "none" }}
                          id="upload33"
                          value={file3}
                          type="file"
                        />
                        <label htmlFor="upload33">
                          <BccButton
                            variant="outlined"
                            color="secondary"
                            component="span"
                            size="small"
                          >
                            Выбрать файл
                          </BccButton>
                        </label>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <BccButton
                        variant="contained"
                        disabled={!isValid()}
                        onClick={() => startProcess()}
                        color="primary"
                        fullWidth
                      >
                        Отправить заявку
                      </BccButton>
                    </Grid>
                  </>
                )
              ) : (
                <Grid item>
                  <div className={classes.successForm}>
                    <img
                      src={process.env.PUBLIC_URL + "/img/success.svg"}
                      alt=""
                    />
                    <BccTypography type="h6" color="#1F7042" mb="16px">
                      Заявка успешно отправлена
                    </BccTypography>
                    <BccTypography type="p2" color="#1F7042">
                      Следуйте инструкции, которые мы отправили по СМС
                    </BccTypography>
                  </div>
                </Grid>
              )}
            </BlockUi>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Order;
