import ParamsList from "../components/mainPage/paramsList/ParamsList";
import Services from "../components/mainPage/services/Services";
import Cases from "../components/mainPage/cases/Cases";
import ToggleInfo from "../components/consultationPage/ToggleInfo";
import SignUpForm from "../components/mainPage/signUpForm/SignUpForm";

const REQUESTS_FIRST = ["Низкая самооценка", "ещё", "ещё", "ещё"];
const REQUESTS_SECOND = ["Низкая самооценка", "ещё", "ещё", "ещё"];
const ConsultationPage = () => {
  return (
    <div className="consultations-bg">
      <div className="container">
        <div className="main-section">
          <div className="main-img"></div>
          <div className="main-section__info">
            <h2 className="name">личный приём Марина Скирко</h2>
            <h1 className="title">Услуги и цены</h1>
            <p className="about-info">
              Помогаю достичь гармонию с миром через гармонию с собой, поймать
              баланс, ощутить внутренний комфорт, несмотря на внешние условия и
              обстоятельства
            </p>
            <button className="signup-button">
              Записаться на консультацию
            </button>
          </div>
        </div>
        <div className="requests-section">
          <div className="main-img"></div>
          <div className="requests-section__info">
            <h3 className="title">С чем я работаю?</h3>
            <ParamsList params={REQUESTS_FIRST} />
            <ParamsList params={REQUESTS_SECOND} />
          </div>
        </div>
        <div className="services-section">
          <h3 className="title">Услуги</h3>
          <p className="services-section__paragraph">
            Я провожу личные консультации в онлайн формате (WhatsApp/Skype)
          </p>
          <Services />
        </div>
        <div className="work-methods-section">
          <h3 className='title'>КАК БУДЕТ ПРОХОДИТЬ НАША РАБОТА</h3>
          <ToggleInfo />

        </div>
        <div className='results-section'>
          <h3 className='title'>Кейсы</h3>
          <p className='services-section__paragraph'>
            Реальные истории моих клиентов, которые благодаря терапии смогли изменить свою жизнь
          </p>
          <Cases/>
        </div>
        <div className='signup-section'>
          <h3 className='title'>ЗАПИШИТЕСЬ НА КОНСУЛЬТАЦИЮ</h3>
          <p className='services-section__paragraph'>
            Заполните форму и я свяжусь с вами в ближайшее время
          </p>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
