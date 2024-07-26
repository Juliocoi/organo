import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const [teams, setTeams] = useState([

    {
    name: 'Programação',
    color: '#57C278',
    },

    {
    name: 'Front-end',
    color: '#82CFFA',
    },

    {
    name: 'Data Science',
    color: '#A6D157',
    },

    
    {
    name: 'Devops',
    color: '#E06B69',
    },

    {
    name: 'UX e Design',
    color: '#DB6EBF',
    },

    {
    name: 'Mobile',
    color: '#FEBA05',
    },

    {
    name: 'Inovação e Gestão',
    color: '#FF8A29',
    },

  ])

  const inicialData = [
    {
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      picture: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].name
    },
    {
      name: 'DANIEL ARTINE',
      position:'Engenheiro de Software na Stone Age',
      picture: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[0].name
    },
    {
      name: 'GUILHERME LIMA',
      position:'Desenvolvedor Python e JavaScript na Alura',
      picture: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].name
    },
    {
      name: 'PAULO SILVEIRA',
      position:'Hipster e CEO da Alura',
      picture: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].name
    },
    {
      name: 'JULIANA AMOASEI',
      position:'Desenvolvedora de software e instrutora',
      picture: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[1].name
    },
    {
      name: 'DANIEL ARTINE',
      position:'Engenheiro de Software na Stone Age',
      picture: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[1].name
    },
    {
      name: 'GUILHERME LIMA',
      position:'Desenvolvedor Python e JavaScript na Alura',
      picture: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name
    },
    {
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      picture: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[1].name
    },
    {
      name: 'JULIANA AMOASEI',
      position:'Desenvolvedora de software e instrutora',
      picture: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].name
    },
    {
      name: 'DANIEL ARTINE',
      position:'Engenheiro de Software na Stone Age',
      picture: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[2].name
    },
    {
      name: 'GUILHERME LIMA',
      position:'Desenvolvedor Python e JavaScript na Alura',
      picture: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].name
    },
    {
      name: 'PAULO SILVEIRA',
      position:'Hipster e CEO da Alura',
      picture: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[2].name
    },
    {
      name: 'JULIANA AMOASEI',
      position:'Desenvolvedora de software e instrutora',
      picture: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[3].name
    },
    {
      name: 'DANIEL ARTINE',
      position:'Engenheiro de Software na Stone Age',
      picture: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].name
    },
    {
      name: 'GUILHERME LIMA',
      position:'Desenvolvedor Python e JavaScript na Alura',
      picture: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].name
    },
    {
      name: 'PAULO SILVEIRA',
      position:'Hipster e CEO da Alura',
      picture: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[3].name
    },
    {
      name: 'JULIANA AMOASEI',
      position:'Desenvolvedora de software e instrutora',
      picture: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].name
    },
    {
      name: 'DANIEL ARTINE',
      position:'Engenheiro de Software na Stone Age',
      picture: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[4].name
    },
    {
      name: 'GUILHERME LIMA',
      position:'Desenvolvedor Python e JavaScript na Alura',
      picture: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].name
    },
    {
      name: 'PAULO SILVEIRA',
      position:'Hipster e CEO da Alura',
      picture: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[4].name
    },
    {
      name: 'JULIANA AMOASEI',
      position:'Desenvolvedora de software e instrutora',
      picture: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[5].name
    },
    {
      name: 'DANIEL ARTINE',
      position:'Engenheiro de Software na Stone Age',
      picture: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[5].name
    },
    {
      name: 'GUILHERME LIMA',
      position:'Desenvolvedor Python e JavaScript na Alura',
      picture: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name
    },
    {
      name: 'PAULO SILVEIRA',
      position:'Hipster e CEO da Alura',
      picture: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[5].name
    },
  ]

  const [contributors, setContributors] = useState(inicialData);

  function deleteContributors() {
    console.log("nada deletado ainda.")
  }

  function changeTeamColor(color, name){
    setTeams(teams.map(team => {
      if(team.name === name){
        team.color = color;
      }
      return team;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario teams={teams.map(team => team.name)} registeredContributor={contributor => setContributors([...contributors, contributor])}/>
      
      
      <section class="teams">
        <h1>Minha organização</h1>
        {/* usando o map para renderizar componentes e o filter para separar os cards por categoria */}
        {teams.map((team, index) => 
          <Team 
            key={index}
            changeColor={changeTeamColor}
            title={team.name}
            color={team.color}
            collaborators={ contributors.filter(collaborator => collaborator.team === team.name) }
            deleteColaborator={deleteContributors}
          />
        )}
      </section>

      <Footer />
      
    </div>
  );
}

export default App;
