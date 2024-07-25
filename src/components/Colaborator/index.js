import { AiFillCloseCircle } from "react-icons/ai";
import './Colaborator.css'

const Colaborator = ({ name, picture, position, color, atDelete }) => {
  return (
    <div className="colaborador">
      
      <AiFillCloseCircle size={25} className="deletar" onClick={atDelete} />

      <div className="cabecalho" style={{backgroundColor: color}}>
        <img src={ picture } alt={ name }/>
      </div>

      <div className="rodape">
        <h4>{ name }</h4>
        <h5>{ position }</h5>
      </div>
    </div>
  )
}

export default Colaborator;