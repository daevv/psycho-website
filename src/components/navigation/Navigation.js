import { Link } from 'react-router-dom';
import './styles.css';
import classNames from 'classnames';

const Navigation = ({isOpen, closeMenu}) => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  const handleClick = () => {
    scrollTop();
    closeMenu()
  }
  return (
    <nav className='nav'>
      <ul className={classNames({active: isOpen, 'nav-list': true})}>
        <li className="nav-item">
          <Link to="/about" onClick={handleClick}>Обо мне</Link>
        </li>
        <li className="nav-item">
          <Link to="/consultations" onClick={handleClick}>Консультации</Link>
        </li>
        <li className="nav-item">
          <Link to="/books" onClick={handleClick}>Книги</Link>
        </li>
        <li className="nav-item">
          <Link to="/cards" onClick={handleClick}>Карты</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacts" onClick={handleClick}>Контакты</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
