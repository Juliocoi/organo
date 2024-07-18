import './Colaborator.css'

const Colaborator = ({ name, picture, position, color }) => {
  return (
    <div className="colaborador">
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