import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    {
      name: '',
      primaryColor: null,
      secondaryColor: null,
      },

    {
    name: 'Programação',
    primaryColor: '#57C278',
    secondaryColor: '#D9F7E9',
    },

    {
    name: 'Front-end',
    primaryColor: '#82CFFA',
    secondaryColor: '#E8F8FF',
    },

    {
    name: 'Data Science',
    primaryColor: '#A6D157',
    secondaryColor: '#F0F8E2',
    },

    
    {
    name: 'Devops',
    primaryColor: '#E06B69',
    secondaryColor: '#FDE7E8'
    },

    {
    name: 'UX e Design',
    primaryColor: '#DB6EBF',
    secondaryColor: '#FAE5F5'
    },

    {
    name: 'Mobile',
    primaryColor: '#FEBA05',
    secondaryColor: '#FFF5D9'
    },

    {
    name: 'Inovação e Gestão',
    primaryColor: '#FF8A29',
    secondaryColor: '#FFEEDF'
    },

  ]

  const [contributors, setContributors] = useState([]);

  const toNewContributor = (contributor) => {
    console.log(contributor);
    setContributors([...contributors, contributor])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario teams={teams.map(team => team.name)} registeredContributor={contributor => toNewContributor(contributor)}/>
      
      {/* usando o map para renderizar componentes */}
      {teams.map(team => <Team 
        key={team.name} 
        title={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        collaborators={ contributors.filter(collaborator => collaborator.team === team.name) }
      />)}

      <Footer />
      
    </div>
  );
}

export default App;
