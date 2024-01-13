import { useRef } from "react";

const scriptUrl = 'https://script.google.com/macros/s/AKfycbzCVt8nfcVrIwMWh6Ur0Tu9l1o78Lyig5UXtSIv7R6OsAhFnhS08Km0TgMQK6h1Y1OVIQ/exec';

const Form = () => {
  const formRef = useRef(null);
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(new FormData(formRef.current))
    fetch(scriptUrl, {method: 'POST', body: new FormData(formRef.current)})
    .then(res => res.json())
    .then(({result}) => { 
      console.log(result);
      formRef.current.reset();
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
          name="Name"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          placeholder="Имя"
          required
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
