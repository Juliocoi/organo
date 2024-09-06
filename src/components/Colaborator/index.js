import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart  } from "react-icons/ai";

import './Colaborator.css'

const Colaborator = ({ id, name, picture, position, color, atDelete, favorite, atFavorite }) => {

  function favoritar(){
    atFavorite(id)
  }

  return (
    <div className="colaborador">
      
      <AiFillCloseCircle 
        size={25} 
        className="deletar" 
        onClick={() => atDelete(id)} 
      />

      <div className="cabecalho" style={{backgroundColor: color}}>
        <img src={ picture } alt={ name }/>
      </div>

      <div className="rodape">
        <h4>{ name }</h4>
        <h5>{ position }</h5>
        <div className='favoritar'>
          {favorite 
          ? <AiFillHeart size={25} onClick={favoritar} color="#ff0000" /> 
          : <AiOutlineHeart size={25} onClick={favoritar} /> }
        </div>

      </div>
    </div>
  )
}

export default Colaborator;