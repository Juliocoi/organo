import './Colaborator.css'

const Colaborator = ({ name, picture, position }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho">
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