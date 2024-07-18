import './Dropdown.css'

const Dropdown = ({label, itens, value, setValue}) => {
  return (
    <div className='dropdown'>
      <label htmlFor={ label }>{ label }</label>
      <select value={value} id={ label } onChange={(event) => setValue(event.target.value)}>
        <option value=" "></option>
        {itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default Dropdown;
