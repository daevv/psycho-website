import { useRef } from "react";

const scriptUrl = 'https://script.google.com/macros/s/AKfycbyGA7KeEhYSqQvVotY4IlqtZ9Qxccgzo4w66_BXP8dyqWGrXGnQgKEeq9FVgu9Umhiuag/exec';




const Form = () => {
  const formRef = useRef(null);
  const handleSubmit = (e) =>{
    e.preventDefault()
  
    fetch(scriptUrl, {method: 'POST', body: new FormData(formRef.current)})
    .then(res => {
        console.log("SUCCESSFULLY SUBMITTED")
    })
    .catch(err => console.log(err))
  }
  return (
    <form className="form" ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label className="label" htmlFor="name">
          Имя
        </label>
        <input
          className="input-field"
          type="text"
          id="name"
          name="name"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          placeholder="Имя"
        />
      </div>
      <div>
        <label className="label" htmlFor="request">
          Опишите свой запрос в нескольких словах
        </label>
        <input
          className="input-field"
          type="text"
          id="request"
          name="Запрос"
          placeholder="Опишите свой запрос в нескольких словах"
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
          name="Телефон"
          placeholder="Номер телефона"
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
          name="Почта"

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
      <button className="signup-button">Записаться</button>
    </form>
  );
};

export default Form;
