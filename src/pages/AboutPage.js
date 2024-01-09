import Services from "../components/mainPage/services/Services";
import SignUpForm from "../components/mainPage/signUpForm/SignUpForm";

const AboutPage = () => {
  return (
    <div className="about-bg">
      <div className="container">
        <div className="main-section">
          <div className="main-img"></div>
          <div className="main-section__info">
            <h2 className="name">о психологе</h2>
            <h1 className="title">МАРИНА СКИРКО</h1>
            <p className="about-info">
            Помогаю достичь гармонию с миром через гармонию с собой, поймать баланс, ощутить внутренний комфорт, несмотря на внешние условия и обстоятельства
            </p>
            <button className="signup-button">
              Записаться на консультацию
            </button>
          </div>
        </div>
        <div className="personality-section">
          <div className="personality-section__img"></div>
          <div className="personality-section__info">
            <h3 className="title">Кто я?</h3>
            <p className="paragraph">Меня зовут Марина Скирко. Я личный психолог, член ассоциации когнитивно-поведенческой психотерапии</p>
            <p className="paragraph">Я помогаю проработать иррациональность в мышлении, найти истинную проблему и увидеть пути ее решения. Я постараюсь понять и почувствовать ваше состояние и эмоции, а затем поговорить с вами о своем видении ситуации</p>
            <p className="paragraph">Я помогаю проработать иррациональность в мышлении, найти истинную проблему и увидеть пути ее решения. Я постараюсь понять и почувствовать ваше состояние и эмоции, а затем поговорить с вами о своем видении ситуации</p>
            <div className="add-info">
              <p className="add-info__paragraph">1000 часов практики</p>
              <p className="add-info__paragraph">4 года обучения</p>
            </div>
          </div>

        </div>
        <div className="my-may-section">
          <h3 className="title">Почему я решила стать психологом?</h3>
          <div className="textbox">
            <h4 className="textbox__title">Детство</h4>
            <p className="textbox__paragraph">В 16 лет я впервые обратилась к психологу. Да-да, я была по ту сторону. Поэтому прекрасно понимаю с какими сложностями может столкнуться клиент.</p>
            <p className="textbox__paragraph">В 16 лет я впервые обратилась к психологу. Да-да, я была по ту сторону. Поэтому прекрасно понимаю с какими сложностями может столкнуться клиент.</p>
          </div>
          <div className="textbox">
            <h4 className="textbox__title">Детство</h4>
            <p className="textbox__paragraph">В 16 лет я впервые обратилась к психологу. Да-да, я была по ту сторону. Поэтому прекрасно понимаю с какими сложностями может столкнуться клиент.</p>
            <p className="textbox__paragraph">В 16 лет я впервые обратилась к психологу. Да-да, я была по ту сторону. Поэтому прекрасно понимаю с какими сложностями может столкнуться клиент.</p>
          </div>

        </div>
        <div className='services-section'>
          <h3 className='title'>Услуги</h3>
          <p className='services-section__paragraph'>
          Я провожу личные консультации
          в онлайн формате (WhatsApp/Skype)
          </p>
          <Services />
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

export default AboutPage;
