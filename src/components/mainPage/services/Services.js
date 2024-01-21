import { useState, useEffect } from "react";
import "./styles.css";
import SignUpButton from "../../signUpButton/SignUpButton";
import Modal from "../../modal/Modal";

const SERVICES_LIST = [
  {
    serviceName: "Индивидуальная консультация",
    price: 3000,
    duration: "90 минут",
    additionalInfo: "В офисе в центре города",
  },
  {
    serviceName: "Пакет 5 консультаций",
    price: 12000,
    duration: "60 минут",
    additionalInfo: "В офисе в центре города",
  },
];

const ServiceBlock = ({ blockInfo }) => {
  const { serviceName, price, duration, additionalInfo } = blockInfo;
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 500px)"); // Adjust the breakpoint as needed

    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
    };

    mobileMediaQuery.addEventListener("change", handleMobileChange);
    setIsMobile(mobileMediaQuery.matches);

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMobileChange);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [modalActive, setModalActive] = useState(false);
  const handleClick = () => setModalActive(!modalActive);

  if (isMobile) {
    return (
      <div className="card__mobile card" >
        <Modal isActive={modalActive} setIsActive={setModalActive} />

        <p className="card__title">{serviceName}</p>

        <p className="card__info">{additionalInfo}</p>
        <p className="card__price">{`${price} рублей`}</p>
        <p className="card__price">{duration}</p>
        <SignUpButton handleClick={handleClick} />
      </div>
    );
  }

  return !isHovered ? (
    <div className="card" onMouseEnter={handleMouseEnter}>
      <p className="card__title">{serviceName}</p>
      <p className="card__price">{`${price} рублей`}</p>
      <p className="card__price">{duration}</p>
    </div>
  ) : (
    <div className="card__selected card" onMouseLeave={handleMouseLeave}>
      <Modal isActive={modalActive} setIsActive={setModalActive} />

      <p className="card__title">{serviceName}</p>

      <p className="card__info">{additionalInfo}</p>
      <p className="card__price">{`${price} рублей`}</p>
      <p className="card__price">{duration}</p>
      <SignUpButton handleClick={handleClick} />
    </div>
  );
};

const Services = () => {
  return (
    <div className="services">
      {SERVICES_LIST.map((blockInfo, ind) => (
        <ServiceBlock key={ind} blockInfo={blockInfo} />
      ))}
    </div>
  );
};

export default Services;
