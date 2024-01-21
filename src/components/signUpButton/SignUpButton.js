import "./styles.css"

const SignUpButton = ({handleClick, type}) => {
  const isProduct = type && type === 'product';
  return <button className="signup-button" onClick={handleClick}>{isProduct ? 'Купить' : "Записаться"}</button> ;
}
 
export default SignUpButton;