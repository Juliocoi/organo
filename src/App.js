import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';

function App() {

  const [contributors, setContributors] = useState([]);

  const toNewContributor = (contributor) => {
    console.log(contributor);
    setContributors([...contributors, contributor])
  }

  return (
    <div className="App">
      <Banner />
     <Formulario registeredContributor={contributor => toNewContributor(contributor)}/>
    </div>
  );
}

export default App;
