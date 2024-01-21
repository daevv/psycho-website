import SignUpForm from "../../components/mainPage/signUpForm/SignUpForm";
import PageHeader from "../../components/pageHeader/PageHeader";
import "./styles.css"

const PAGEHEADER_TEXT = `
  Вы можете связаться со мной в любом удобном формате, чтобы подробнее узнать о моих подходах, записаться на консультацию, заказать книги или карты.   
  `;
const PAGENAME = 'контакты';

const MSG = 'Добрый день, Марина. Хочу записаться к вам на косультацию!'
const ContactsPage = () => {
  return (
    <div className="contacts-bg">
      <PageHeader pageName={PAGENAME} text={PAGEHEADER_TEXT} type='contacts'/>

      <div className="contact-me-section">
        <div className="container">
          <h3 className="title">СВЯЖИТЕСЬ СО МНОЙ</h3>
          <p className="mb subtitle">
            Если у вас остались вопросы, вы можете связаться со мной любым
            удобным способом
          </p>
          <ul className="contacts-list">
            <li className="contacts-list__item--labled contacts-list__item">
              <div className="contacts-logo--wa contacts-logo"></div>
              <p className="absoluted subtitle">написать в watsapp</p>
              <a className="contacts-link subtitle" href={`https://wa.me/89619521246/?text=${MSG}`} target="_blank" rel='noreferrer'>
                +7 961 952 12 46{" "}
              </a>
            </li>
            <li className="contacts-list__item">
              <div className="contacts-logo--mail contacts-logo"></div>
              <a className="contacts-link subtitle" href="mailto:marinamur78@rambler.ru" target="_blank" rel='noreferrer'>
                marinamur78@rambler.ru
              </a>
            </li>
            <li className="contacts-list__item">
              <div className="contacts-logo--tg contacts-logo"></div>
              <a className="contacts-link subtitle" href="https://telegram.me/Marina_Skirko" target="_blank" rel='noreferrer'>
                @Marina_Skirko
              </a>
            </li>
          </ul>
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

export default ContactsPage;
