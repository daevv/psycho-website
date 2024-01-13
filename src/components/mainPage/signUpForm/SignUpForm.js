import "./styles.css";
import { useState, useRef } from "react";
import ReactLoading from "react-loading";
import generateSubmitHandler from "../../../api/formSubmit";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formRef = useRef(null);

  return (
    <div className="form-container">
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
          <textarea
            className="input-field textarea"
            type="text"
            id="request"
            name="Description"
            rows={3}
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
            placeholder="Номер телефона"
            name="Phone"
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
            autocomplete="off"
            name="Email"
          />
        </div>
        {/* <div>
          <input
            type="radio"
            value="male"
            name="gender"
          />
          Male
          <input
            type="radio"
            value="female"
            name="gender"
          />
          Female
        </div> */}
        {isSuccess && (
          <p className="success-msg paragraph">Форма успешно отправлена!</p>
        )}
        {isLoading && (
          <ReactLoading
            className="loading-spinner"
            type="spin"
            color="darkgreen"
            height={45}
            width={45}
          />
        )}
        <button className="signup-button">Записаться</button>
      </form>
      <div className="main-img__form main-img"></div>
    </div>
  );
};

export default SignUpForm;
