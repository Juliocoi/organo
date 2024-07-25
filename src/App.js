import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [

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
            title={team.name}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
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
