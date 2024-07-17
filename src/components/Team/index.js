import './Team.css';

const Team = ({ title, primaryColor, secondaryColor }) => {
  return (
    <section className='team' style={ { backgroundColor: secondaryColor} }>
      <h3 style={ { borderColor: primaryColor } }>{ title }</h3>
    </section>
  )
}

export default Team;