import React from "react";
import { Slider, Tabs, Order, Footer } from "../components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { animateScroll } from "react-scroll";

const useStyles = makeStyles((theme: Theme) => createStyles({}));
const MainPage = () => {
  const orderRef: any = React.useRef(null);
  const scrollToOrderRef = () => {
    animateScroll.scrollTo(orderRef.current.offsetTop);
  };
  const classes = useStyles({});
  return (
    <div className="main-page">
      <div className="container">
        <Slider
          steps={{
            title: "Отсрочка по оплате кредита",
            desc: "Перерыв в оплате кредита на определённый срок",
            img: "/img/bg.png",
            btnText: "Отправить заявку онлайн",
          }}
          scrollToOrder={scrollToOrderRef}
        />
        <Tabs />
        <Order refProp={orderRef} scrollToOrder={scrollToOrderRef} />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
