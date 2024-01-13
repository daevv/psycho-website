import SignUpButton from "../signUpButton/SignUpButton";
import Modal from "../modal/Modal";
import "./styles.css"
import { useState } from "react";

const PageHeader = () => {
  const [modalActive, setModalActive] = useState(false);
  const handleClick = () => setModalActive(!modalActive);
  return (
    <div className="content-box">
      <Modal isActive={modalActive} setIsActive={setModalActive} />

      <div className="main-section">
        <div className="container">
          <div className="content-container">
            <div className="main-section__info">
              <h2 className="name">личный психолог Марина Скирко</h2>
              <h1 className="title">КОНСУЛЬТАЦИИ ПСИХОЛОГА ОНЛАЙН</h1>
              <div className="main-img--mobile"></div>

              <p className="paragraph">
                Дипломированный психолог. Практика с 2015 года. Член Ассоциации
                когнитивно-поведенческой психотерапии. Приглашенный эксперт
                Psychologies Russia, LIFE, 1 канал, НТВ, MarieClaire.
              </p>
              <SignUpButton handleClick={handleClick}/>
            </div>
            <div className="main-img"></div>
          </div>
        </div>
      </div>
      <div className="main-section__bg"></div>
    </div>
  );
};

export default PageHeader;
