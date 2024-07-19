import Input from "../Input"
import Dropdown from "../Dropdown";
import './Formulario.css'
import Button from "../Button";
import { useState } from "react";

const Formulario = (props) => {

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [picture, setPicture] = useState('');
  const [team, setTeam] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
  
    props.registeredContributor({
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
      <form className="form" onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar um card de colaborador</h2>
        <Input 
          type={ "text" } 
          label={"Nome:"} 
          placeholder={"Digite seu nome"} 
          value={name} 
          setValue={setName}
        />

        <Input
        type={ "text" } 
        label={"Cargo:"} 
        placeholder={"Digite seu cargo"} 
        value={position} 
        setValue={setPosition}
        />

        <Input
        type={ "text" } 
        label={"Imagem:"}  
        placeholder={"Digite o endereço da imagem"} 
        value={picture} 
        setValue={setPicture}
        />

        <Dropdown
        label={ "Time" }
        itens={props.teams}
        value={team}
        setValue={setTeam}
        />

        <Button type="submit" label={"Criar card"} />
      </form>
    </section>
  )
}

export default Formulario;
