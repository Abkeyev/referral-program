import React from "react";
import { Grid, MenuItem } from "@material-ui/core";
import {
  BccTypography,
  BccCheckbox,
  BccInput,
  BccLink,
  BccButton,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import InputMask from "react-input-mask";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import api from "../api/Api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        background: "#fafafa",
        minHeight: 'calc(100vh - 264px)'
      },
      title: {
        marginBottom: 36
      },
      innerOrderForm: {},
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "0 48px",
        height: 'inherit',
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
        padding: '36px 48px',
        boxSizing: "border-box",
        maxWidth: "60%",
        margin: "0 auto 24px",
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
      checkboxText: {
        marginBottom: 12,
      },
      btnWrap: {
        marginTop: 24,
        "& > button": { width: "100%" },
      },
      icon: {
        width: "20px",
        height: "20px",
        padding: 2,
        marginRight: 10
      },
      garant: { textAlign: "left" },
      code: {
        margin: 0,
        "& input": {
          height: 62,
          boxSizing: "border-box",
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
      warningForm: {
        backgroundColor: "rgb(206 125 125 / 10%)",
        borderRadius: 8,
        textAlign: "center",
        padding: "56px 64px 112px",
        "& > img": {
          display: "block",
          margin: "0 auto",
          marginBottom: 24,
        },
      }
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        background: "#fafafa",
      },
      title: {
        marginBottom: 36
      },
      innerOrderForm: {},
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "20px",
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
        width: "100%",
        padding: '36px 48px',
        boxSizing: "border-box",
        maxWidth: "100%",
        margin: "0 auto 24px",
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
      checkboxText: {
        marginBottom: 12,
      },
      btnWrap: {
        marginTop: 24,
        "& > button": { width: "100%" },
      },
      icon: {
        width: "20px",
        height: "20px",
        padding: 2,
        marginRight: 10
      },
      garant: { textAlign: "left" },
      code: {
        margin: 0,
        "& input": {
          height: 62,
          boxSizing: "border-box",
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
      warningForm: {
        backgroundColor: "rgb(206 125 125 / 10%)",
        borderRadius: 8,
        textAlign: "center",
        padding: "56px 64px 112px",
        "& > img": {
          display: "block",
          margin: "0 auto",
          marginBottom: 24,
        },
      }
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        paddingTop: 0
      },
      title: {
        marginBottom: 24,
        fontSize: 24
      },
      orderForm: {
        width: "100%",
        maxWidth: "100%",
        padding: 20,
      },
      checkboxText: {
        textAlign: "left",
        marginBottom: 12,
      },
      inputStyle: {
        marginBottom: 20,
      },
      btnWrap: {
        width: "100%",
        marginBottom: 12,
        "& > button": { width: "100%" },
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

const Order = () => {
  const classes = useStyles({});
  const [step, setStep] = React.useState(0);
  const [timer, setTimer] = React.useState(0);
  const [code, setCode] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [phoneRef, setPhoneRef] = React.useState("");
  const [fioRef, setFioRef] = React.useState("");
  const [agree, setAgree] = React.useState<boolean>(true);
  const [phoneError, setPhoneError] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState(false);
  const [product, setProduct] = React.useState("0.201.1.0307###Кредит наличными");
  const [city, setCity] = React.useState("");
  const [resStatus, setResStatus] = React.useState();
  
  const isValid = () => {
    if (step === 0) {
      return product.length > 0 && fioRef.length > 1 && phone.replace("_", "").length === 17
        && phoneRef.replace("_", "").length === 17 && city.length > 0 && agree;
    } else if (step === 1) {
      return code.length === 6;
    } else {
      return true;
    }
  };

  React.useEffect(() => {
    let timeOut = setInterval(() => {
      if (timer !== 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(timeOut);
  }, [timer]);

  const formatPhoneNumber = (tag: boolean = false) => {
    let res = phone;
    console.log(phone.slice(1))
    if (phone.slice(1, 2) === "8") 
      res = "7" + phone.slice(2);
    return res.replace(/\(|\)|\+| /g, "");
  };

  const formatPhoneRefNumber = () => {
    let res = phoneRef.slice(2);
    if (phoneRef.slice(1, 2) === "8")
      res = phoneRef.slice(2);
    return res.replace(/\(|\)|\+| /g, "");
  };

  const getOtp = () => {
    if (phone.substr(3, 1) !== "7") {
      setPhoneError(true);
      return;
    } else setPhoneError(false);
    setLoading(true);
    setTimer(60);
    api.authOtp
      .sendOtp({phone: formatPhoneNumber()})
      .then(() => {
        setStep(1);
        setLoading(false);
      })
      .catch((e: any) => {
        console.error(e);
        setLoading(false);
      });
  };

  const onReSend = () => {
    setLoading(true);
    api.authOtp
      .sendOtp({ phone: formatPhoneNumber() })
      .then(() => {
        setTimer(90);
        setCode("");
        setLoading(false);
      })
      .catch((e: any) => {
        console.error(e);
        setLoading(false);
      });
  };

  const onSubmitOtp = () => {
    setLoading(true);
    api.authOtp
      .confirmOtp({
        phone: formatPhoneNumber(),
        otp: code,
      })
      .then((userContext) => {
        localStorage.setItem("userContext", JSON.stringify(userContext));
        startProcess()
      })
      .catch((e: any) => {
        console.error(e);
        setLoading(false);
      });
  };

  const startProcess = () => {
    api.camunda
      .start({
        phone: '+' + formatPhoneNumber(),
        referral: {
            name: fioRef,
            phone: formatPhoneRefNumber(),
            productName: product.split('###')[1],
            city: city,
            product: product.split('###')[0]
        }
      })
      .then((res: any) => {
        if(res && res.variables) {
          setResStatus(res.variables.status);
          setStep(2);
        }
        setLoading(false);
      })
      .catch((e: any) => {
        console.error(e);
        setLoading(false);
      });
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <div className={classes.orderForm}>
          <Grid direction="column" container className={classes.innerOrderForm}>
            <Grid item>
              <BccTypography type="h3" weight="medium" className={classes.title} block>
                {step === 0 ? "Пригласи друга и получи денежки" : step === 1 ? "Подтвердите заявку кодом из SMS" : ""}
              </BccTypography>
            </Grid>
            <BlockUi tag="div" blocking={isLoading}>
            {
              step === 0 ? (
                <>
                  <Grid item>
                    <BccInput
                      variant="filled"
                      fullWidth
                      label="Ваш номер телефона"
                      onChange={(e: any) => setPhone(e.target.value)}
                      className={classes.inputStyle}
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
                    <BccInput
                      fullWidth={true}
                      className={classes.inputStyle}
                      label="Продукт"
                      id="product"
                      name="product"
                      value={product}
                      onChange={(e: any) => setProduct(e.target.value)}
                      variant="outlined"
                      select
                    >
                      <MenuItem key="1" value="0.201.1.0307###Кредит наличными">
                        Кредит наличными
                      </MenuItem>
                      {/* <MenuItem key="2" value="0.100.1.1.127###Эталон">
                        Эталон
                      </MenuItem>
                      <MenuItem key="3" value="0.100.1.1.128###Эталон+">
                        Эталон+
                      </MenuItem> */}
                    </BccInput>
                  </Grid>
                  <Grid item>
                    <BccInput
                      className={classes.inputStyle}
                      fullWidth
                      label="ФИО реферала"
                      variant="filled"
                      id="fio"
                      name="fio"
                      value={fioRef}
                      onChange={(e: any) => setFioRef(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      variant="filled"
                      fullWidth
                      label="Номер телефона друга"
                      onChange={(e: any) => setPhoneRef(e.target.value)}
                      className={classes.inputStyle}
                      id="phone"
                      name="phone"
                      value={phoneRef}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        inputComponent: BccMaskedInput as any,
                      }}
                    />
                  </Grid><Grid item>
                    <BccInput
                      fullWidth={true}
                      className={classes.inputStyle}
                      label="Город"
                      id="city"
                      name="city"
                      value={city}
                      onChange={(e: any) => setCity(e.target.value)}
                      variant="outlined"
                      select
                    >
                      {cityList.map((b: any, index: number) => {
                            return (
                              <MenuItem key={index} value={b}>
                                {b}
                              </MenuItem>
                            );
                          })}
                    </BccInput>
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
                        <BccTypography type="p3" ml="10px" align="left">
                          Соглашаюсь с обработкой данных и с{" "}
                          <BccLink href="https://www.bcc.kz/">
                            условиями передачи информации
                          </BccLink>
                        </BccTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container wrap="nowrap">
                      <Grid item>
                        <img
                          src={process.env.PUBLIC_URL + "/img/safety.svg"}
                          className={classes.icon}
                          alt="order_security"
                        />
                      </Grid>
                      <Grid
                        item
                      >
                        <BccTypography type="p3" className={classes.garant}>
                          Мы гарантируем безопасность и сохранность ваших данных
                        </BccTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.btnWrap}>
                    <BccButton
                      variant="contained"
                      disabled={!isValid()}
                      onClick={() => getOtp()}
                      color="primary"
                    >
                      Отправить заявку
                    </BccButton>
                  </Grid>
                </>
              ) : step === 1 ? (
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
                      label="Код подтверждения"
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
                        {`Отправить повторно СМС через 00:${timer}`}
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
              ) : (
                <Grid item>
                  {resStatus === 0 ? (<div className={classes.successForm}>
                    <img
                      src={process.env.PUBLIC_URL + "/img/success.svg"}
                      alt=""
                    />
                    <BccTypography type="h6" color="#1F7042" mb="16px">
                      Заявка успешно отправлена
                    </BccTypography>
                  </div>) : (<div className={classes.warningForm}>
                    <img
                      src={process.env.PUBLIC_URL + "/img/warning.svg"}
                      alt=""
                    />
                    <BccTypography type="h6" mb="16px">
                      В привлечении продуктов физических лиц участвуют только действующие сотрудники Банка!
                    </BccTypography>
                  </div>)}
                </Grid>
              )
            }
            </BlockUi>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Order;
