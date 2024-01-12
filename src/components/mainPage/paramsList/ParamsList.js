import './styles.css'

const ParamsList = ( {params}) => {
  return params.length > 0 && (
    <ul className="options-list">
      {params.map((el, ind) => <li className='subtitle' key={ind} >{el}</li>)}
    </ul>
  );
}
 
export default ParamsList;