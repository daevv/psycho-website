import { Link } from "react-router-dom";
import "./styles.css";

const MSG = "Добрый день, Марина. Хочу записаться к вам на косультацию!";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <Link to="/">
            <div className="logo" />
          </Link>
          <div className="line">
            <ul className="links">
              <li className="links__link">
                <a
                  className="social-link footer-text"
                  href={`https://wa.me/89619521246/?text=${MSG}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="wa-logo link-logo" />
                  <p className="link-text">WHATSAPP</p>
                </a>
              </li>
              <li className="links__link">
                <a
                  className="social-link footer-text"
                  href="https://vk.com/marinamur78"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="vk-logo link-logo" />
                  <p className="link-text">VKONTAKTE</p>
                </a>
              </li>
              <li className="links__link">
                <a
                  className="social-link footer-text"
                  href="https://telegram.me/Marina_Skirko"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="tg-logo link-logo" />
                  <p className="link-text">TG</p>
                </a>
              </li>
              <li className="links__link">
                <a
                  className="social-link footer-text"
                  href="mailto:marinamur78@rambler.ru"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="mail-logo link-logo" />
                  <p className="link-text">email</p>
                </a>
              </li>
            </ul>
            <div className="contacts">
              <p className="footer-text">Телефон</p>
              <p className="footer-text">+7 (961) 952-12-46</p>
            </div>

            <ul className="nav-list__footer">
              <li className="nav-link footer-text">
                <Link className="black" to="/about" onClick={scrollTop}>
                  Обо мне
                </Link>
              </li>
              <li className="nav-link footer-text">
                <Link className="black" to="/consultations" onClick={scrollTop}>
                  Консультации
                </Link>
              </li>
              <li className="nav-link footer-text">
                <Link className="black" to="/books" onClick={scrollTop}>
                  Книги
                </Link>
              </li>
              <li className="nav-link footer-text">
                <Link className="black" to="/cards" onClick={scrollTop}>
                  Карты
                </Link>
              </li>
              <li className="nav-link footer-text">
                <Link className="black" to="/contacts" onClick={scrollTop}>
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
