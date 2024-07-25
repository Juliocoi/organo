import Colaborator from '../Colaborator';
import './Team.css';

const Team = ({ title, primaryColor, secondaryColor, collaborators, deleteColaborator, changeColor }) => {
  return (
    // estipulando condição para que times vazios não sejam exibidos
    collaborators.length > 0 && <section className='team' style={ { backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: secondaryColor} }>

      <input onChange={event => changeColor(event.target.value, title) }  value={ primaryColor } type='color' className='input-color' />

      <h3 style={ { borderColor: primaryColor } }>{ title }</h3>

      <div className='colaboradores'>
        {collaborators.map((collaborator, index) => {

          return <Colaborator key={index} color={primaryColor} name={collaborator.name} position={collaborator.position} picture={collaborator.picture} atDelete={deleteColaborator}/>
        })}
      </div>
    </section>
  )
}

export default Team;