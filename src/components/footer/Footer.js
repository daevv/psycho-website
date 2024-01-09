import './styles.css';

const Footer = () => {
  return ( 
    <div className="footer">
      <div className="container">
        <div className='footer-container'>
          <div className="footer-options">
            <p className="footer-options_item">Обо мне</p>
            <p className="footer-options_item">Консультации</p>
            <p className="footer-options_item">Книги</p>
            <p className="footer-options_item">Карты</p>
          </div>
          <img className="logo" src="" alt="logo"/>
          <p className="copyrights">@something</p>
        </div>
      </div>
    </div>
   );
}
 
export default Footer;