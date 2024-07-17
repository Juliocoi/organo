import Input from "../Input"
import Dropdown from "../Dropdown";
import './Formulario.css'
import Button from "../Button";
import { useState } from "react";

const Formulario = (props) => {

  const [name, setName] = useState('');
  const [cargo, setCargo] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Formulário submetido com sucesso")
   
    props.registeredContributor({
      name,
      cargo,
      image,
      team,
    })
  }

  return (
    <section className="formulario">
      <form onSubmit={handleSubmit}>
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
        value={cargo} 
        setValue={setCargo}
        />

        <Input
        type={ "text" } 
        label={"Imagem:"}  
        placeholder={"Digite o endereço da imagem"} 
        value={image} 
        setValue={setImage}
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
