import Colaborator from '../Colaborator';
import './Team.css';
import hexToRgba from 'hex-to-rgba';

const Team = ({ id, title, color, collaborators, deleteColaborator, changeColor, atFavorite }) => {
  return (
    // estipulando condição para que times vazios não sejam exibidos
    collaborators.length > 0 && <section className='team' style={ { backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(color, '0.6')} }>

      <input onChange={event => changeColor(event.target.value, id) }  value={ color } type='color' className='input-team-color' />

      <h3 style={ { borderColor: color } }>{ title }</h3>

      <div className='colaboradores'>
        {collaborators.map((collaborator, index) => {

          return (
            <Colaborator 
              key={index} 
              id={collaborator.id}
              favorite={collaborator.favorite} 
              color={color} 
              name={collaborator.name}
              position={collaborator.position} 
              picture={collaborator.picture} 
              atDelete={deleteColaborator}
              atFavorite={atFavorite}  
            />
          );
        })}
      </div>
    </section>
  )
}

export default Team;