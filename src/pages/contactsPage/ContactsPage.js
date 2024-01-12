import SignUpForm from "../../components/mainPage/signUpForm/SignUpForm";
import PageHeader from "../../components/pageHeader/PageHeader";
import "./styles.css"

const ContactsPage = () => {
  return (
    <div className="contacts-bg">
      <PageHeader />

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
              <a className="contacts-link subtitle" href="#">
                +7 961 952 12 46{" "}
              </a>
            </li>
            <li className="contacts-list__item">
              <div className="contacts-logo--mail contacts-logo"></div>
              <a className="contacts-link subtitle" href="#">
                marinamur78@rambler.ru
              </a>
            </li>
            <li className="contacts-list__item">
              <div className="contacts-logo--tg contacts-logo"></div>
              <a className="contacts-link subtitle" href="#">
                @marinaskirko
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
