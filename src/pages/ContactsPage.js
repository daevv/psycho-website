import SignUpForm from "../components/mainPage/signUpForm/SignUpForm";

const ContactsPage = () => {
  return (
    <div className="contacts-bg">
      <div className="container">
        <div className="main-section">
          <div className="main-img"></div>
          <div className="main-section__info">
            <h2 className="name">личный психолог Марина Скирко</h2>
            <h1 className="title">КОНТАКТЫ</h1>
            <p className="about-info">
              Если у вас есть вопросы или вы хотите записаться на консультацию,
              свяжитесь со мной любым удобным способом
            </p>
            <p className="about-info">
              Также записаться на консультацию можно на сайте, заполнив форму
              ниже
            </p>
            <button className="signup-button">
              Записаться на консультацию
            </button>
          </div>
        </div>
        <div className="contact-me-section">
          <h3 className="title">СВЯЖИТЕСЬ СО МНОЙ</h3>
          <p className="contact-me-section__paragraph">
            Если у вас остались вопросы, вы можете связаться со мной любым
            удобным способом
          </p>
          <ul className="contacts-list">
            <li className="contacts-list__item">
              <div className="contacts-logo"></div>
              <a className="contacts-lick" href="#">+7 961 952 12 46 </a>
              написать в watsapp
            </li>
            <li className="contacts-list__item">
              <div className="contacts-logo"></div>
              <a className="contacts-lick" href="#">marinamur78@rambler.ru</a> 
            </li>
            <li className="contacts-list__item">
              <div className="contacts-logo"></div>
              <a className="contacts-lick" href="#">@marinaskirko</a>
            </li>
          </ul>
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

export default ContactsPage;
