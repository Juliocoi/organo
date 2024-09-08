import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = useState([

    {
      id: uuidv4(),
      name: 'Programação',  
      color: '#57C278',
    },

    {
      id: uuidv4(),
      name: 'Front-end',
      color: '#82CFFA',
    },

    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157',
    },

    
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E06B69',
    },

    {
      id: uuidv4(),
      name: 'UX e Design',  
      color: '#DB6EBF',
    },

    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FEBA05',
    },

    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29',
    },

  ])

  const inicialData = [
    {
      id: uuidv4(),
      favorite: false,
      name: 'Caio',
      position: 'Desenvolvedor de software',
      picture: 'https://uploadimage.io/images/2024/09/08/p01.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Tícia',
      position:'Engenheira de Software',
      picture: 'https://uploadimage.io/images/2024/09/08/p02.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Mévia',
      position:'Desenvolvedora fullstack JavaScript',
      picture: 'https://uploadimage.io/images/2024/09/08/p03.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Semprônio',
      position:'Designer',
      picture: 'https://uploadimage.io/images/2024/09/08/p04.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Caio',
      position: 'Desenvolvedor de software',
      picture: 'https://uploadimage.io/images/2024/09/08/p01.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Tícia',
      position:'Engenheira de Software',
      picture: 'https://uploadimage.io/images/2024/09/08/p02.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Mévia',
      position:'Desenvolvedora fullstack JavaScript',
      picture: 'https://uploadimage.io/images/2024/09/08/p03.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Semprônio',
      position:'Designer',
      picture: 'https://uploadimage.io/images/2024/09/08/p04.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Caio',
      position: 'Desenvolvedor de software',
      picture: 'https://uploadimage.io/images/2024/09/08/p01.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Tícia',
      position:'Engenheira de Software',
      picture: 'https://uploadimage.io/images/2024/09/08/p02.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Mévia',
      position:'Desenvolvedora fullstack JavaScript',
      picture: 'https://uploadimage.io/images/2024/09/08/p03.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Semprônio',
      position:'Designer',
      picture: 'https://uploadimage.io/images/2024/09/08/p04.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Caio',
      position: 'Desenvolvedor de software',
      picture: 'https://uploadimage.io/images/2024/09/08/p01.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Tícia',
      position:'Engenheira de Software',
      picture: 'https://uploadimage.io/images/2024/09/08/p02.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Mévia',
      position:'Desenvolvedora fullstack JavaScript',
      picture: 'https://uploadimage.io/images/2024/09/08/p03.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Semprônio',
      position:'Designer',
      picture: 'https://uploadimage.io/images/2024/09/08/p04.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Caio',
      position: 'Desenvolvedor de software',
      picture: 'https://uploadimage.io/images/2024/09/08/p01.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Tícia',
      position:'Engenheira de Software',
      picture: 'https://uploadimage.io/images/2024/09/08/p02.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Mévia',
      position:'Desenvolvedora fullstack JavaScript',
      picture: 'https://uploadimage.io/images/2024/09/08/p03.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Semprônio',
      position:'Designer',
      picture: 'https://uploadimage.io/images/2024/09/08/p04.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Caio',
      position: 'Desenvolvedor de software',
      picture: 'https://uploadimage.io/images/2024/09/08/p01.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Tícia',
      position:'Engenheira de Software',
      picture: 'https://uploadimage.io/images/2024/09/08/p02.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Mévia',
      position:'Desenvolvedora fullstack JavaScript',
      picture: 'https://uploadimage.io/images/2024/09/08/p03.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Semprônio',
      position:'Designer',
      picture: 'https://uploadimage.io/images/2024/09/08/p04.jpeg',
      team: teams[5].name
    },
  ]

  const [contributors, setContributors] = useState(inicialData);

  function deleteContributors(id) {
    setContributors(contributors.filter(contributor => contributor.id !== id))
  }

  function changeTeamColor(color, id){
    setTeams(teams.map(team => {
      if(team.id === id){
        team.color = color;
      }
      return team;
    }));
  }

  function newTeam(newTeam){
    setTeams([...teams, { ...newTeam, id: uuidv4() }])
  }

  function isFavorite(id){
    setContributors(contributors.map(contributor => {      
      if(contributor.id === id) contributor.favorite = !contributor.favorite;
      return contributor;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        teams={teams.map(team => team.name)} registeredContributor={contributor => setContributors([...contributors, contributor])}
        registerNewTeam={ newTeam }
      />
      
      <section className="teams">
        <h1>Minha organização</h1>
        {/* usando o map para renderizar componentes e o filter para separar os cards por categoria */}
        {teams.map((team, index) => 
          <Team 
            key={index}
            changeColor={changeTeamColor}
            id={team.id}
            title={team.name}
            color={team.color}
            collaborators={ contributors.filter(collaborator => collaborator.team === team.name) }
            deleteColaborator={deleteContributors}
            atFavorite={isFavorite}
          />
        )}
      </section>

      <Footer />
      
    </div>
  );
}

export default App;
