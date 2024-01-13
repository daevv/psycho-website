import classNames from "classnames";
import "./styles.css";
import { useRef, useState } from "react";
import ReactLoading from "react-loading";
import generateSubmitHandler from "../../api/formSubmit";


const Modal = ({ isActive, setIsActive }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formRef = useRef(null);
  const handleClick = () => {
    if (!isLoading) {
      setIsActive(false);
      formRef.current.reset();
    }
  };

  return (
    <div
      className={classNames({
        modal: true,
        active: isActive,
        loading: isLoading,
      })}
      onClick={handleClick}
    >
      <div
        className={classNames({ modal__content: true, active: isActive })}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="center smaller title">Заполните форму</p>
        {isLoading && (
          <ReactLoading
            className="loading-spinner"
            type="spin"
            color="darkgreen"
            height={45}
            width={45}
          />
        )}
        <p className="subtitle">
          Я свяжусь с вами в ближайшее время, чтобы уточнить детали
        </p>
        <form
          className="form"
          ref={formRef}
          onSubmit={generateSubmitHandler(setIsLoading, setIsSuccess, formRef)}
          onChange={() => setIsSuccess(false)}
        >
          <div>
            <label className="label" htmlFor="name">
              Имя
            </label>
            <input
              className="input-field"
              type="text"
              id="name"
              name="Name"
              placeholder="Имя"
              required
              autocomplete="off"
            />
          </div>
          <div>
            <label className="label" htmlFor="request">
              Опишите свой запрос в нескольких словах
            </label>
            <input
              className="input-field"
              type="text"
              id="description"
              name="Description"
              placeholder="Опишите свой запрос в нескольких словах"
              autocomplete="off"
            />
          </div>
          <div>
            <label className="label" htmlFor="phone">
              Номер телефона
            </label>
            <input
              className="input-field"
              type="phone"
              id="phone"
              name="Phone"
              placeholder="Номер телефона"
              required
              autocomplete="off"
            />
          </div>
          <div>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="input-field"
              type="email"
              id="email"
              placeholder="Email"
              name="Email"
              autocomplete="off"
            />
          </div>
          {isSuccess && (
            <p className="success-msg paragraph">Форма успешно отправлена!</p>
          )}
          <button className="signup-button">Записаться</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
