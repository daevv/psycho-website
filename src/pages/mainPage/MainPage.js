import "./styles.css";
import ParamsList from "../../components/mainPage/paramsList/ParamsList";
import Services from "../../components/mainPage/services/Services";
import Cases from "../../components/mainPage/cases/Cases";
import SignUpForm from "../../components/mainPage/signUpForm/SignUpForm";
import PageHeader from "../../components/pageHeader/PageHeader";

const PAGEHEADER_TEXT = `
  Выпускница Института Ценностно-Ориентированной Психологии, ученица Олега Гадецкого. \n
  Практикующий психолог, Ведущая регионального клубного движения Института ЦОП, супервизор базового уровня Института ЦОП.
  `;
const PAGENAME = 'ЛИЧНЫЙ ПСИХОЛОГ МАРИНА СКИРКО';
const REQUESTS_FIRST = ["Низкая самооценка", "Работа со страхами", "Работа с обидами и гневом", "Трудности в переживании кризисных ситуаций"];
const REQUESTS_SECOND = ["Психологические травмы", "Проблемы в межличностных отношениях", "Созавимые отношения", "Личностная самореализация и эффективность"];

const MainPage = () => {
  return (
    <div className="main-bg">
      <PageHeader text={PAGEHEADER_TEXT} pageName={PAGENAME} />

      <div className="requests-section">
        <div className="container">
          <div className="content-container">
            <div className="main-img__requests main-img"></div>
            <div className="requests-section__info">
              <h3 className="title">С чем я работаю?</h3>
              <div className="lists-container">
                <ParamsList params={REQUESTS_FIRST} />
                <ParamsList params={REQUESTS_SECOND} />
              </div>
              <div className="main-img__requests--mobile main-img__requests main-img"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="container">
          <h3 className="title">Услуги</h3>
          <p className="subtitle">
            Я провожу личные консультации в онлайн формате (Zoom/Skype)
          </p>
          <Services />
        </div>
      </div>

      <div className="results-section">
        <div className="container">
          <h3 className="title">Отзывы</h3>
          <p className="subtitle">
            Реальные истории моих клиентов, которым я смогла помочь
          </p>
          <Cases />
        </div>
      </div>
      <div className="signup-section">
        <div className="mb-0 container">
          <h3 className="title">ЗАПИШИТЕСЬ НА КОНСУЛЬТАЦИЮ</h3>
          <p className="subtitle">
            Заполните форму и я свяжусь с вами в ближайшее время
          </p>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
