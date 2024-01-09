import { useState } from "react";
import './styles.css'

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
  const handleSignUp = () => {console.log('signed up')};
  return !isHovered ? (
    <div className="card" onMouseEnter={handleMouseEnter} >
      <p className="card__title">{serviceName}</p>
      <p className="card__price">{`${price} рублей`}</p>
      <p className="card__price">{duration}</p>
    </div>
  ) : (
    <div className="card__selected card" onMouseLeave={handleMouseLeave} >
      <p className="card__title">{serviceName}</p>

      <p className="card__info">{additionalInfo}</p>
      <p className="card__price">{`${price} рублей`}</p>
      <p className="card__price">{duration}</p>
      <button className='signup-button' nClick={handleSignUp}>Записаться</button>
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