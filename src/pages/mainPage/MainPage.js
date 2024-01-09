import "./styles.css";
import ParamsList from "../../components/mainPage/paramsList/ParamsList";
import Services from "../../components/mainPage/services/Services";
import Cases from "../../components/mainPage/cases/Cases";
import SignUpForm from "../../components/mainPage/signUpForm/SignUpForm";

const REQUESTS_FIRST = ["Низкая самооценка", "ещё", "ещё", "ещё"];
const REQUESTS_SECOND = ["Низкая самооценка", "ещё", "ещё", "ещё"];

const MainPage = () => {
  return (
    <div className="main-bg">
      <div className="main-section">
        <div className="container">
          <div className="content-container">
            <div className="main-section__info">
              <h2 className="name">личный психолог Марина Скирко</h2>
              <h1 className="title">КОНСУЛЬТАЦИИ ПСИХОЛОГА ОНЛАЙН</h1>
              <p className="about-info">
                Дипломированный психолог. Практика с 2015 года. Член Ассоциации
                когнитивно-поведенческой психотерапии. Приглашенный эксперт
                Psychologies Russia, LIFE, 1 канал, НТВ, MarieClaire.
              </p>
              <button className="signup-button ml">Записаться</button>
            </div>
            <div className="main-img"></div>
          </div>
        </div>
      </div>
      <div className="main-section__bg"></div>

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
            </div>
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="container">
          <h3 className="title">Услуги</h3>
          <p className="services-section__paragraph">
            Я провожу личные консультации в онлайн формате (WhatsApp/Skype)
          </p>
          <Services />
        </div>
      </div>

      <div className="results-section">
        <div className="container">
          <h3 className="title">Кейсы</h3>
          <p className="services-section__paragraph">
            Реальные истории моих клиентов, которые благодаря терапии смогли
            изменить свою жизнь
          </p>
          <Cases />
        </div>
      </div>
      <div className="signup-section">
        <div className="mb-0 container">
          <h3 className="title">ЗАПИШИТЕСЬ НА КОНСУЛЬТАЦИЮ</h3>
          <p className="services-section__paragraph">
            Заполните форму и я свяжусь с вами в ближайшее время
          </p>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
