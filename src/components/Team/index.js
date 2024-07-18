import Colaborator from '../Colaborator';
import './Team.css';

const Team = ({ title, primaryColor, secondaryColor, collaborators  }) => {
  return (
    // estipulando condição para que times vazios não sejam exibidos
    collaborators.length > 0 && <section className='team' style={ { backgroundColor: secondaryColor} }>

      <h3 style={ { borderColor: primaryColor } }>{ title }</h3>

      <div className='colaboradores'>
        {collaborators.map(collaborator => <Colaborator name={collaborator.name} position={collaborator.position} picture={collaborator.picture}/>)}
      </div>

    </section>
  )
}

export default Team;