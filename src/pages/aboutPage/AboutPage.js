import Services from "../../components/mainPage/services/Services";
import SignUpForm from "../../components/mainPage/signUpForm/SignUpForm";
import PageHeader from "../../components/pageHeader/PageHeader";
import "./styles.css";

const AboutPage = () => {
  return (
    <div className="about-bg">
      <PageHeader />

      <div className="personality-section">
        <div className="container">
          <div className="content-container">
            <div className="main-img__personality main-img"></div>
            <div className="personality-section__info">
              <h3 className="title">Кто я?</h3>
              <p className="subtitle">
                Меня зовут Марина Скирко. Я личный психолог, член ассоциации
                когнитивно-поведенческой психотерапии
              </p>
              <p className="paragraph">
                Я помогаю проработать иррациональность в мышлении, найти
                истинную проблему и увидеть пути ее решения. Я постараюсь понять
                и почувствовать ваше состояние и эмоции, а затем поговорить с
                вами о своем видении ситуации
              </p>
              <p className="paragraph">
                Я помогаю проработать иррациональность в мышлении, найти
                истинную проблему и увидеть пути ее решения. Я постараюсь понять
                и почувствовать ваше состояние и эмоции, а затем поговорить с
                вами о своем видении ситуации
              </p>
              <div className="add-info">
                <p className="parapraph--emphasised paragraph">
                  <strong className="paragraph-title title">1000+</strong>часов
                  практики
                </p>
                <p className="parapraph--emphasised paragraph">
                  <strong className="paragraph-title title">4</strong> года
                  обучения
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-may-section">
        <div className="container">
          <h3 className="title">Почему я решила стать психологом?</h3>
          <div className="content-container">
            <div className="textbox">
              <h4 className="subtitle">Детство</h4>
              <p className="paragraph">
                В 16 лет я впервые обратилась к психологу. Да-да, я была по ту
                сторону. Поэтому прекрасно понимаю с какими сложностями может
                столкнуться клиент.
              </p>
              <p className="paragraph">
                В 16 лет я впервые обратилась к психологу. Да-да, я была по ту
                сторону. Поэтому прекрасно понимаю с какими сложностями может
                столкнуться клиент.
              </p>
            </div>
            <div className="textbox">
              <h4 className="subtitle">Детство</h4>
              <p className="paragraph">
                В 16 лет я впервые обратилась к психологу. Да-да, я была по ту
                сторону. Поэтому прекрасно понимаю с какими сложностями может
                столкнуться клиент.
              </p>
              <p className="paragraph">
                В 16 лет я впервые обратилась к психологу. Да-да, я была по ту
                сторону. Поэтому прекрасно понимаю с какими сложностями может
                столкнуться клиент.
              </p>
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

export default AboutPage;
