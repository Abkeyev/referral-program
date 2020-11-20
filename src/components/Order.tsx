import React from "react";
import { Grid, MenuItem } from "@material-ui/core";
import {
  BccTypography,
  BccCheckbox,
  BccInput,
  BccLink,
  BccSlider,
  BccButton,
  BccAlert,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import InputMask from "react-input-mask";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import api from "../api/Api";
import FileReaderInput from "react-file-reader-input";
import { useTranslation } from "react-i18next";

const webConfigEnv = (window as any).env;
const cityList = [
  "Нур-Султан",
  "Алматы",
  "Шымкент",
  "Актау",
  "Актобе",
  "Атырау",
  "Жезказган",
  "Караганда",
  "Кокшетау",
  "Костанай",
  "Кызылорда",
  "Павлодар",
  "Петропавловск",
  "Семей",
  "Талдыкорган",
  "Тараз",
  "Уральск",
  "Усть-Каменогорск",
];
const cityListKz = [
  "Нұр-Сұлтан",
  "Алматы",
  "Шымкент",
  "Ақтау",
  "Ақтөбе",
  "Атырау",
  "Жезқазған",
  "Қарағанды",
  "Көкшетау",
  "Қостанай",
  "Қызылорда",
  "Павлодар",
  "Петропавл",
  "Семей",
  "Талдықорған",
  "Тараз",
  "Орал",
  "Өскемен",
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
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
        maxWidth: "inherit",
        "& > div > div": {
          whiteSpace: "initial",
        },
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
        border: "1px solid #F3F3F3",
        borderRadius: 4,
        marginBottom: 24,
        padding: "12px",
        lineHeight: "48px",
        "& > div:first-child": {
          textAlign: "left",
          width: "60%",
        },
      },
      hintText: {
        marginBottom: 24,
        padding: "8px 14px",
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
        borderRadius: 8,
        textAlign: "center",
        padding: "56px 64px 112px",
        "& > img": {
          display: "block",
          margin: "0 auto",
          marginBottom: 24,
        },
      },
      errorForm: {
        backgroundColor: "rgba(200, 79, 79, 0.1)",
        textAlign: "center",
        borderRadius: 8,
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
      paymentWrap: {
        position: "relative",
        marginBottom: 40,
      },
      sliderWrap: {
        position: "relative",
        width: "100%",
      },
      input: {
        display: "block",
        width: "100%",
        "& > div": {
          width: "inherit",
        },
      },
      sliderRange: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -20,
        color: "#b3b6ba",
        display: "flex",
        justifyContent: "space-between",
        fontSize: 12,
      },
      btnStyle: {
        minWidth: 150,
        "& > span": {
          lineHeight: "normal",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        background: "#ffffff",
      },
      innerOrderForm: {},
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        textAlign: "center",
        boxSizing: "border-box",
        padding: "24px 48px",
      },
      orderTitle: {
        width: "90%",
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
        width: "90%",
        padding: 46,
        boxSizing: "border-box",
        maxWidth: "90%",
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
        maxWidth: "inherit",
        "& > div > div": {
          whiteSpace: "initial",
        },
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
        border: "1px solid #F3F3F3",
        borderRadius: 4,
        marginBottom: 24,
        padding: 12,
        lineHeight: "48px",
        "& > div:first-child": {
          textAlign: "left",
          width: "60%",
        },
      },
      hintText: {
        marginBottom: 24,
        padding: "8px 14px",
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
        borderRadius: 8,
        textAlign: "center",
        padding: "56px 64px 112px",
        "& > img": {
          display: "block",
          margin: "0 auto",
          marginBottom: 24,
        },
      },
      errorForm: {
        backgroundColor: "rgba(200, 79, 79, 0.1)",
        textAlign: "center",
        borderRadius: 8,
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
      paymentWrap: {
        position: "relative",
        marginBottom: 40,
      },
      sliderWrap: {
        position: "relative",
        width: "100%",
      },
      input: {
        display: "block",
        width: "100%",
        "& > div": {
          width: "inherit",
        },
      },
      sliderRange: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -20,
        color: "#b3b6ba",
        display: "flex",
        justifyContent: "space-between",
        fontSize: 12,
      },
      btnStyle: {
        minWidth: 150,
        "& > span": {
          lineHeight: "normal",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      orderTitle: {
        width: "100%",
        margin: "0 auto",
      },
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        textAlign: "center",
        boxSizing: "border-box",
        padding: "24px",
      },
      orderForm: {
        width: "100%",
        maxWidth: "100%",
        padding: 24,
      },
    },
  })
);

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const BccMaskedInput = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <InputMask
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="+7(999) 999 99 99"
      maskChar=""
      placeholder={"+7(707) 707 77 77"}
    />
  );
};

const BccMaskedIinInput = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <InputMask
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="999 999 999 999"
      maskChar=""
      placeholder={"000 000 000 000"}
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
  const [iinError, setIinError] = React.useState<boolean>(false);
  const [agree, setAgree] = React.useState<boolean>(true);
  const [success, setSuccess] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [other, setOther] = React.useState("");
  const [period, setPeriod] = React.useState(1);
  const [reason, setReason] = React.useState("");
  const [creditNumber, setCreditNumber] = React.useState("");
  const [timer, setTimer] = React.useState(0);
  const [file1, setFile1] = React.useState("");
  const [file2, setFile2] = React.useState("");
  const [file3, setFile3] = React.useState("");
  const [file1Error, setFile1Error] = React.useState(false);
  const [file2Error, setFile2Error] = React.useState(false);
  const [file3Error, setFile3Error] = React.useState(false);
  const { t, i18n } = useTranslation();

  const reasons = [
    t("order.reason1"),
    t("order.reason2"),
    t("order.reason3"),
    t("order.reason4"),
    t("order.reason5"),
    t("order.reason6"),
  ];

  React.useEffect(() => {
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
        fio !== "" &&
        filial !== "" &&
        iin.replace(/ /g, "").length === 12 &&
        phone.replace("_", "").length === 17 &&
        agree
      );
    else if (step === 1) return code.length === 6;
    else if (step === 2) {
      return type === "1"
        ? creditNumber.length > 0 &&
            +period > 0 &&
            reason.length > 0 &&
            (file1.length > 0 || file2.length > 0 || file3.length > 0)
        : creditNumber.length > 0 &&
            other.length > 0 &&
            (file1.length > 0 || file2.length > 0 || file3.length > 0);
    } else return true;
  };

  const getFio = (num: number) => {
    const fioArray = fio.split(" ");
    return fioArray && fioArray[num] ? fioArray[num] : "";
  };

  const generateJSON = () => {
    const JSON = {
      type: "SYNC",
      body: {
        ELMARun: {
          token: "4e44afcd-a5e9-4710-bf8f-835792d24827",
          data: {
            Items: [
              {
                Name: "IINS",
                Value: iin,
              },
              {
                Name: "Surname",
                Value: getFio(0),
              },
              {
                Name: "Name",
                Value: getFio(1),
              },
              {
                Name: "MiddleName",
                Value: getFio(2),
              },
              {
                Name: "Branch",
                Value: filial,
              },
              {
                Name: "DeferralRequiredNumber",
                Value: creditNumber,
              },
              {
                Name: "DelayPeriod",
                Value: period.toString(),
              },
              {
                Name: "DelayReason",
                Value: type === "1" ? reason : other,
              },
              {
                Name: "PhoneNumber",
                Value: formatPhoneNumber(),
              },
              {
                Name: "EMail",
                Value: "",
              },
              {
                Name: "Base64",
                DataArray: {
                  WebData: [
                    {
                      Items: [
                        {
                          Name: "AddFiles",
                          Value: file1,
                        },
                      ],
                    },
                    {
                      Items: [
                        {
                          Name: "AddFiles",
                          Value: file2,
                        },
                      ],
                    },
                    {
                      Items: [
                        {
                          Name: "AddFiles",
                          Value: file3,
                        },
                      ],
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    };
    return JSON;
  };

  const startProcess = () => {
    setLoading(true);
    api.camunda
      .start({
        env: {
          production: true,
        },
        client: {
          request: generateJSON(),
        },
      })
      .then((r: any) => {
        let res = r.variables.callResult;
        res.RunResponse &&
        res.RunResponse.RunResult &&
        res.RunResponse.RunResult.length > 0
          ? setSuccess(true)
          : setSuccess(false);
        setStep(3);
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
      .sendOtp({ iin: iin.replace(/ /g, ""), phone: formatPhoneNumber() })
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
        iin: iin.replace(/ /g, ""),
        phone: formatPhoneNumber(),
        otp: code,
      })
      .then((userContext) => {
        props.scrollToOrder(false);
        localStorage.setItem("userContext", JSON.stringify(userContext));
        setStep(2);
        setLoading(false);
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
      .sendOtp({ iin: iin.replace(/ /g, ""), phone: formatPhoneNumber() })
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

  const handleChange1 = (e: any, results: any) => {
    results.forEach((result: any) => {
      const [e, file] = result;
      const res = e.target.result.split(",");
      console.log(res[1]);
      console.log(file.size);
      if (file.size > 5000000) {
        setFile1Error(true);
      } else {
        setFile1Error(false);
        setFile1(res[1]);
      }
    });
  };

  const handleChange2 = (e: any, results: any) => {
    results.forEach((result: any) => {
      const [e, file] = result;
      const res = e.target.result.split(",");
      if (file.size > 5000000) {
        setFile2Error(true);
      } else {
        setFile2Error(false);
        setFile2(res[1]);
      }
    });
  };

  const handleChange3 = (e: any, results: any) => {
    results.forEach((result: any) => {
      const [e, file] = result;
      const res = e.target.result.split(",");
      if (file.size > 5000000) {
        setFile3Error(true);
      } else {
        setFile3Error(false);
        setFile3(res[1]);
      }
    });
  };

  return (
    <div className={classes.outerContainer} ref={props.refProp}>
      <div className={classes.container}>
        <div className={classes.orderTitle}>
          <BccTypography type="h3" weight="medium" block mb="16px">
            {t("order.title")}
          </BccTypography>
          <BccTypography type="p1" block color="#4D565F" mb="48px">
            {t("order.subtitle")}
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
                  {t("order.1")}
                </BccTypography>
                <BccTypography type="p3" block color="#4D565F">
                  {t("order.11")}
                </BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="p2" weight="medium" block mb="8px">
                  {t("order.2")}
                </BccTypography>
                <BccTypography type="p3" block color="#4D565F">
                  {t("order.22")}
                </BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="p2" weight="medium" block mb="8px">
                  {t("order.3")}
                </BccTypography>
                <BccTypography type="p3" block color="#4D565F">
                  {t("order.33")}
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
                {step + 1 === 1
                  ? t("order.step1")
                  : step + 1 === 2
                  ? t("order.step2")
                  : t("order.step3")}
              </BccTypography>
              <div className={classes.progress}>
                <div className={classes.progressBarSuccess}>
                  <BccTypography
                    type="p2"
                    color={`${step * 33 > 33 ? "white" : "black"}`}
                  >
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
                        {t("order.notice")}
                      </BccTypography>
                    </BccAlert>
                  </Grid>
                  <Grid item>
                    <BccInput
                      fullWidth={true}
                      className={classes.inputStyle}
                      label={t("order.type")}
                      id="type"
                      name="type"
                      value={type}
                      onChange={(e: any) => setType(e.target.value)}
                      variant="outlined"
                      select
                    >
                      <MenuItem key="1" value="1">
                        {t("order.type1")}
                      </MenuItem>
                      <MenuItem key="2" value="2">
                        {t("order.type2")}
                      </MenuItem>
                    </BccInput>
                  </Grid>
                  <Grid item>
                    <BccInput
                      fullWidth={true}
                      className={classes.inputStyle}
                      label={t("order.branch")}
                      id="filial"
                      name="filial"
                      value={filial}
                      onChange={(e: any) => setFilial(e.target.value)}
                      variant="outlined"
                      select
                    >
                      {props.lang === "ru"
                        ? cityList.map((b: any, index: number) => {
                            return (
                              <MenuItem key={index} value={b}>
                                {b}
                              </MenuItem>
                            );
                          })
                        : cityListKz.map((b: any, index: number) => {
                            return (
                              <MenuItem key={index} value={b}>
                                {b}
                              </MenuItem>
                            );
                          })}
                    </BccInput>
                  </Grid>
                  <Grid item>
                    <BccInput
                      className={classes.inputStyle}
                      fullWidth
                      label={t("order.iin")}
                      variant="filled"
                      id="iin"
                      name="iin"
                      value={iin}
                      onChange={(e: any) => setIin(e.target.value)}
                      helperText={iinError ? t("order.iinError") : ""}
                      error={iinError ? true : false}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        inputComponent: BccMaskedIinInput as any,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      className={classes.inputStyle}
                      fullWidth
                      label={t("order.fio")}
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
                      label={t("order.phone")}
                      onChange={(e: any) => setPhone(e.target.value)}
                      className={classes.inputStyle}
                      helperText={phoneError ? t("order.phoneError") : ""}
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
                          {t("order.agree")}{" "}
                          <BccLink
                            href={
                              process.env.PUBLIC_URL + props.lang === "ru"
                                ? "/agreement.pdf"
                                : "/agreementKz.pdf"
                            }
                            target="_blank"
                          >
                            {t("order.agree2")}
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
                              {t("order.security")}
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
                          {t("order.next")}
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
                        label={t("order.code")}
                      />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                      <BccButton
                        onClick={() => onSubmitOtp()}
                        variant="contained"
                        fullWidth
                        disabled={!isValid()}
                      >
                        {t("order.confirm")}
                      </BccButton>
                    </Grid>
                    {timer !== 0 ? (
                      <Grid item>
                        <BccTypography type="p3" className={classes.timer}>
                          {props.lang === "ru"
                            ? `${t("order.resendFull")} 00:${timer}`
                            : `00:${timer} ${t("order.resendFull")}`}
                        </BccTypography>
                      </Grid>
                    ) : (
                      <Grid item>
                        <BccButton
                          variant="text"
                          className={classes.linkReSendSms}
                          onClick={() => onReSend()}
                        >
                          {t("order.resend")}
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
                        label={t("order.number")}
                        variant="filled"
                        id="creditNumber"
                        name="creditNumber"
                        value={creditNumber}
                        onChange={(e: any) => setCreditNumber(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <div className={classes.paymentWrap}>
                        <div className={classes.sliderWrap}>
                          <BccInput
                            label={t("order.period")}
                            key="period"
                            value={`${period
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${t(
                              "order.month"
                            )}`}
                            variant="filled"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            onFocus={() => setPeriod(1)}
                            onChange={(e: any) => {
                              console.log(e.target.value.slice(-1));
                              const s = +e.target.value
                                .slice(-1)
                                .replace(/[^0-9]/g, "");
                              if (s > 6) setPeriod(6);
                              else setPeriod(s);
                            }}
                            className={classes.input}
                          />
                          <BccSlider
                            style={{
                              left: 6,
                              right: 6,
                              width: "calc(100% - 12px)",
                              bottom: -1,
                              padding: 0,
                              position: "absolute",
                            }}
                            min={1}
                            max={6}
                            step={1}
                            value={period}
                            valueLabelDisplay="off"
                            defaultValue={period}
                            onChange={(e: any, val: any) =>
                              setPeriod(val instanceof Array ? val[1] : val)
                            }
                          />
                          <div className={classes.sliderRange}>
                            <span>1 {t("order.month")}</span>
                            <span>6 {t("order.month")}</span>
                          </div>
                        </div>
                      </div>
                    </Grid>
                    <Grid item>
                      <BccInput
                        fullWidth={true}
                        className={classes.inputStyle}
                        label={t("order.reason")}
                        id="reason"
                        name="reason"
                        value={reason}
                        onChange={(e: any) => setReason(e.target.value)}
                        variant="outlined"
                        select
                      >
                        {reasons.map((r: any, index: number) => {
                          return (
                            <MenuItem key={index} value={r}>
                              {r}
                            </MenuItem>
                          );
                        })}
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
                        <BccTypography type="p3" color="#4D565F" mb="4px" block>
                          {t("order.doc")}
                        </BccTypography>
                        <BccTypography type="p4" color="#80868C" block>
                          {t("order.docDesc")}
                        </BccTypography>
                        {file1Error && (
                          <BccTypography
                            type="p4"
                            mt="4px"
                            color="#C84F4F"
                            block
                          >
                            {t("order.docError")}
                          </BccTypography>
                        )}
                      </Grid>
                      <Grid item>
                        <FileReaderInput
                          as="url"
                          accept="image/jpeg,image/png,image/gif,application/pdf"
                          onChange={handleChange1}
                        >
                          <BccButton
                            variant="outlined"
                            color="secondary"
                            component="span"
                            size="small"
                            className={classes.btnStyle}
                          >
                            {file1
                              ? t("order.fileChoosed")
                              : t("order.fileNotChoosed")}
                          </BccButton>
                        </FileReaderInput>
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
                        <BccTypography type="p3" color="#4D565F" mb="4px" block>
                          {t("order.doc")}
                        </BccTypography>
                        <BccTypography type="p4" color="#80868C" block>
                          {t("order.docDesc")}
                        </BccTypography>
                        {file2Error && (
                          <BccTypography
                            type="p4"
                            mt="4px"
                            color="#C84F4F"
                            block
                          >
                            {t("order.docError")}
                          </BccTypography>
                        )}
                      </Grid>
                      <Grid item>
                        <FileReaderInput
                          as="url"
                          accept="image/jpeg,image/png,image/gif,application/pdf"
                          onChange={handleChange2}
                        >
                          <BccButton
                            variant="outlined"
                            color="secondary"
                            component="span"
                            size="small"
                            className={classes.btnStyle}
                          >
                            {file1
                              ? t("order.fileChoosed")
                              : t("order.fileNotChoosed")}
                          </BccButton>
                        </FileReaderInput>
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
                        <BccTypography type="p3" color="#4D565F" mb="4px" block>
                          {t("order.doc")}
                        </BccTypography>
                        <BccTypography type="p4" color="#80868C" block>
                          {t("order.docDesc")}
                        </BccTypography>
                        {file3Error && (
                          <BccTypography
                            type="p4"
                            mt="4px"
                            color="#C84F4F"
                            block
                          >
                            {t("order.docError")}
                          </BccTypography>
                        )}
                      </Grid>
                      <Grid item>
                        <FileReaderInput
                          as="url"
                          accept="image/jpeg,image/png,image/gif,application/pdf"
                          onChange={handleChange3}
                        >
                          <BccButton
                            variant="outlined"
                            color="secondary"
                            component="span"
                            size="small"
                            className={classes.btnStyle}
                          >
                            {file1
                              ? t("order.fileChoosed")
                              : t("order.fileNotChoosed")}
                          </BccButton>
                        </FileReaderInput>
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
                        {t("order.sendOrder")}
                      </BccButton>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item>
                      <BccInput
                        className={classes.inputStyle}
                        fullWidth
                        label={t("order.number")}
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
                        label={t("order.text")}
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
                        <BccTypography type="p3" color="#4D565F" mb="4px" block>
                          {t("order.doc")}
                        </BccTypography>
                        <BccTypography type="p4" color="#80868C" block>
                          {t("order.docDesc")}
                        </BccTypography>
                        {file1Error && (
                          <BccTypography
                            type="p4"
                            mt="4px"
                            color="#C84F4F"
                            block
                          >
                            {t("order.docError")}
                          </BccTypography>
                        )}
                      </Grid>
                      <Grid item>
                        <FileReaderInput
                          as="url"
                          accept="image/jpeg,image/png,image/gif,application/pdf"
                          onChange={handleChange1}
                        >
                          <BccButton
                            variant="outlined"
                            color="secondary"
                            component="span"
                            size="small"
                            className={classes.btnStyle}
                          >
                            {file1
                              ? t("order.fileChoosed")
                              : t("order.fileNotChoosed")}
                          </BccButton>
                        </FileReaderInput>
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
                        <BccTypography type="p3" color="#4D565F" mb="4px" block>
                          {t("order.doc")}
                        </BccTypography>
                        <BccTypography type="p4" color="#80868C" block>
                          {t("order.docDesc")}
                        </BccTypography>
                        {file2Error && (
                          <BccTypography
                            type="p4"
                            mt="4px"
                            color="#C84F4F"
                            block
                          >
                            {t("order.docError")}
                          </BccTypography>
                        )}
                      </Grid>
                      <Grid item>
                        <FileReaderInput
                          as="url"
                          accept="image/jpeg,image/png,image/gif,application/pdf"
                          onChange={handleChange2}
                        >
                          <BccButton
                            variant="outlined"
                            color="secondary"
                            component="span"
                            size="small"
                            className={classes.btnStyle}
                          >
                            {file1
                              ? t("order.fileChoosed")
                              : t("order.fileNotChoosed")}
                          </BccButton>
                        </FileReaderInput>
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
                        <BccTypography type="p3" color="#4D565F" mb="4px" block>
                          {t("order.doc")}
                        </BccTypography>
                        <BccTypography type="p4" color="#80868C" block>
                          {t("order.docDesc")}
                        </BccTypography>
                        {file3Error && (
                          <BccTypography
                            type="p4"
                            mt="4px"
                            color="#C84F4F"
                            block
                          >
                            {t("order.docError")}
                          </BccTypography>
                        )}
                      </Grid>
                      <Grid item>
                        <FileReaderInput
                          as="url"
                          accept="image/jpeg,image/png,image/gif,application/pdf"
                          onChange={handleChange3}
                        >
                          <BccButton
                            variant="outlined"
                            color="secondary"
                            component="span"
                            size="small"
                            className={classes.btnStyle}
                          >
                            {file1
                              ? t("order.fileChoosed")
                              : t("order.fileNotChoosed")}
                          </BccButton>
                        </FileReaderInput>
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
                        {t("order.sendOrder")}
                      </BccButton>
                    </Grid>
                  </>
                )
              ) : success ? (
                <Grid item>
                  <div className={classes.successForm}>
                    <img
                      src={process.env.PUBLIC_URL + "/img/success.svg"}
                      alt=""
                    />
                    <BccTypography type="h6" color="#1F7042" mb="16px">
                      {t("order.success")}
                    </BccTypography>
                    <BccTypography type="p2" color="#1F7042">
                      {t("order.successDesc")}
                    </BccTypography>
                  </div>
                </Grid>
              ) : (
                <Grid item>
                  <div className={classes.errorForm}>
                    <img
                      src={process.env.PUBLIC_URL + "/img/error.svg"}
                      alt=""
                    />
                    <BccTypography type="h6" color="initial" mb="16px">
                      {t("order.error")}
                    </BccTypography>
                    <BccTypography type="p2" color="initial">
                      {t("order.errorDesc")}
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
