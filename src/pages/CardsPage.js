const CardsPage = () => {
  return (
    <div className="main-bg">
      <div className="container">
        <div className="main-section">
          <div className="main-img"></div>
          <div className="main-section__info">
            <h2 className="name">Стихи для диалога с вашим подсознанием</h2>
            <h1 className="title">Мак Карты</h1>
            {/* <p className="about-info">
              Дипломированный психолог. Практика с 2015 года. Член Ассоциации
              когнитивно-поведенческой психотерапии. Приглашенный эксперт
              Psychologies Russia, LIFE, 1 канал, НТВ, MarieClaire.
            </p> */}
            <button className="signup-button">
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
