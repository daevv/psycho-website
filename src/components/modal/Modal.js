import './styles.css';

const Modal = ({isActive, setIsActive, children}) => {
  return ( 
    <div className={isActive ? "modal active" : "modal"} onClick={() => setIsActive(false)}>
      <div className={isActive ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
   );
}
 
export default Modal;