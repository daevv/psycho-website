import ParamsList from "../components/mainPage/paramsList/ParamsList";
import Services from "../components/mainPage/services/Services";
import Cases from "../components/mainPage/cases/Cases";
import ToggleInfo from "../components/toggleInfo/ToggleInfo";
import SignUpForm from "../components/mainPage/signUpForm/SignUpForm";
import PageHeader from "../components/pageHeader/PageHeader";

const REQUESTS_FIRST = ["Низкая самооценка", "Работа со страхами", "Работа с обидами и гневом", "Трудности в переживании кризисных ситуаций"];
const REQUESTS_SECOND = ["Психологические травмы", "Проблемы в межличностных отношениях", "Созавимые отношения", "Личностная самореализация и эффективность"];
const PAGEHEADER_TEXT = `
  Я провожу личные консультации в дистанционном формате. 
  `;
const PAGENAME = 'консультации';

const ConsultationPage = () => {
  return (
    <div className="consultations-bg">
      <PageHeader text={PAGEHEADER_TEXT} pageName={PAGENAME}/>

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

      <div className="work-methods-section">
        <div className="container">
          <h3 className="title">КАК БУДЕТ ПРОХОДИТЬ НАША РАБОТА</h3>
          <ToggleInfo />
        </div>
      </div>

      <div className="results-section">
        <div className="container">
          <h3 className="title">Отзывы</h3>
          <p className="services-section__paragraph">
            Реальные истории моих клиентов, которым я смогла помочь
          </p>
          <Cases />
        </div>
      </div>

      <div className="signup-section">
        <div className="container">
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

export default ConsultationPage;
