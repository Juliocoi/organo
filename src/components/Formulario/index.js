import Input from "../Input"
import Dropdown from "../Dropdown";
import './Formulario.css'
import Button from "../Button";
import { useState } from "react";

const Formulario = ({registeredContributor, teams, registerNewTeam}) => {

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [picture, setPicture] = useState('');
  const [team, setTeam] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teamColor, setTeamColor] = useState('#000000');


  const onHandleSubmit = (event) => {
    event.preventDefault();
  
    registeredContributor({
      name,
      position,
      picture,
      team,
    })

    setName('');
    setPosition('');
    setPicture('');
    setTeam('');
  }

  return (
    <section className="form-container">
      <form className="form" onSubmit={onHandleSubmit}>
        <h2>Preencha os dados para criar um card de colaborador</h2>
        <Input 
          type="text" 
          label="Nome:" 
          placeholder="Digite seu nome" 
          value={name} 
          setValue={ value => setName(value)}
        />

        <Input
        type="text"  
        label="Cargo:" 
        placeholder="Digite seu cargo" 
        value={position} 
        setValue={ value => setPosition(value)}
        />

        <Input
        type="text" 
        label="Imagem:" 
        placeholder="Digite o endereço da imagem" 
        value={picture} 
        setValue={value => setPicture(value)}
        />

        <Dropdown
        label="Time"
        itens={ teams }
        value={ team }
        setValue={value => setTeam(value)}
        />

        <Button type="submit" label={"Criar card"} />
      </form>

      <form className="form" onSubmit={(e) => { 
        e.preventDefault() 
        registerNewTeam({ name: teamName, color: teamColor })
        }}>
        <h2>Preencha os dados para criar um novo time.</h2>
        <Input 
          type="text" 
          label="Nome:" 
          placeholder="Digite o nomr do time" 
          value={teamName} 
          setValue={ value => setTeamName(value)}
        />

        <Input
          type="color" 
          label='Cor'
          placeholder="Digite a cor do time" 
          value={teamColor} 
          setValue={ value => setTeamColor(value)}
        />

        <Button type="submit" label={"Criar novo time"} />
      </form>
    </section>
  )
}

export default Formulario;
