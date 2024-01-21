import SignUpButton from "../signUpButton/SignUpButton";
import Modal from "../modal/Modal";
import "./styles.css"
import { useState } from "react";

const PageHeader = ({text, pageName, type}) => {
  const [modalActive, setModalActive] = useState(false);
  const handleClick = () => setModalActive(!modalActive);
  return (
    <div className="content-box">
      <Modal isActive={modalActive} setIsActive={setModalActive} />

      <div className="main-section">
        <div className="container">
          <div className="content-container__header content-container">
            <div className="main-section__info">
              <h2 className="name">личный психолог Марина Скирко</h2>
              <h1 className="title">{pageName}</h1>
              <div className="main-img--mobile"></div>

              <p className="paragraph">
                {text}
              </p>
              {((type && type !== 'contacts') || !type) && <SignUpButton handleClick={handleClick} type={type}/>}
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
