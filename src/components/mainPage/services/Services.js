import { useState } from "react";
import './styles.css'
import SignUpButton from "../../signUpButton/SignUpButton";
import Modal from "../../modal/Modal";

const SERVICES_LIST = [
  {
    serviceName: 'Индивидуальная консультация',
    price: 2500,
    duration: '60 минут',
    additionalInfo: 'В офисе в центре города',
  },
  {
    serviceName: 'Индивидуальная консультация',
    price: 2500,
    duration: '60 минут',
    additionalInfo: 'В офисе в центре города',
  },
  {
    serviceName: 'Индивидуальная консультация',
    price: 2500,
    duration: '60 минут',
    additionalInfo: 'В офисе в центре города',
  },
  {
    serviceName: 'Индивидуальная консультация',
    price: 2500,
    duration: '60 минут',
    additionalInfo: 'В офисе в центре города',
  },
  {
    serviceName: 'Индивидуальная консультация',
    price: 2500,
    duration: '60 минут',
    additionalInfo: 'В офисе в центре города',
  },
];

const ServiceBlock = ({blockInfo}) => {
  const {serviceName, price, duration, additionalInfo} = blockInfo;
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => { setIsHovered(true) };
  const handleMouseLeave = () => { setIsHovered(false) };

  const [modalActive, setModalActive] = useState(false);
  const handleClick = () => setModalActive(!modalActive);
  return !isHovered ? (
    <div className="card" onMouseEnter={handleMouseEnter} >
      <p className="card__title">{serviceName}</p>
      <p className="card__price">{`${price} рублей`}</p>
      <p className="card__price">{duration}</p>
    </div>
  ) : (
    <div className="card__selected card" onMouseLeave={handleMouseLeave} >
      <Modal isActive={modalActive} setIsActive={setModalActive}>
        <p className="subtitle">i am modal</p>
      </Modal>
      <p className="card__title">{serviceName}</p>

      <p className="card__info">{additionalInfo}</p>
      <p className="card__price">{`${price} рублей`}</p>
      <p className="card__price">{duration}</p>
      <SignUpButton handleClick={handleClick}/>
    </div>
  );
}

const Services = () => {
  return ( 
    <div className="services">
      {SERVICES_LIST.map((blockInfo, ind) => <ServiceBlock key={ind} blockInfo={blockInfo} />)}
    </div>
  );
}
 
export default Services;