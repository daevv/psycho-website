import { Link } from 'react-router-dom';
import './styles.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/about">Обо мне</Link>
        </li>
        <li className="nav-item">
          <Link to="/consultations">Консультации</Link>
        </li>
        <li className="nav-item">
          <Link to="/books">Книги</Link>
        </li>
        <li className="nav-item">
          <Link to="/cards">Карты</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacts">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
