import React from "react";
import { Slider, Tabs, Order, Footer } from "./components";
import { animateScroll } from "react-scroll";
import { useTranslation } from "react-i18next";

const App = () => {
  const orderRef: any = React.useRef(null);
  const { t, i18n } = useTranslation();
  const [lang, setLang] = React.useState(i18n.language ? i18n.language : "ru");
  const scrollToOrderRef = () => {
    animateScroll.scrollTo(orderRef.current.offsetTop);
  };

  React.useEffect(() => {
    if (window.location.search) {
      let query = window.location.search.split("=");
      query[1] && handleLangChange(query[1]);
    }
  }, []);

  const handleLangChange = (lang: string) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <div className="main-page">
      <div className="container">
        <Slider
          scrollToOrder={scrollToOrderRef}
          lang={lang}
          changeLang={handleLangChange}
        />
        <Tabs />
        <Order
          lang={lang}
          refProp={orderRef}
          scrollToOrder={scrollToOrderRef}
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;
