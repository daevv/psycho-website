import "./styles.css"
const SignUpForm = () => {
  const handleSubmit = () => {};

  return (
    <div className="form-container">
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label className='label' htmlFor="name">Имя</label>
          <input
          className="input-field"
            type="text"
            id="name"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Имя"
          />
        </div>
        <div>
          <label className='label' htmlFor="request">Опишите свой запрос в нескольких словах</label>
          <input
            className="input-field"
            type="text"
            id="request"
            placeholder="Опишите свой запрос в нескольких словах"
          />
        </div>
        <div>
          <label className='label' htmlFor="phone">Номер телефона</label>
          <input
            className="input-field"
            type="phone"
            id="phone"
            placeholder="Номер телефона"
          />
        </div>
        <div>
          <label className='label' htmlFor="email">Email</label>
          <input
            className="input-field"
            type="email"
            id="email"
            placeholder="Email"
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
      <div className="main-img"></div>
    </div>
  );
};

export default SignUpForm;
