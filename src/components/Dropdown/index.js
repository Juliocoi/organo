import './Dropdown.css'

const Dropdown = ({label, itens, value, setValue}) => {
  return (
    <div className='dropdown'>
      <label>{ label }</label>
      <select value={value} onChange={(event) => setValue(event.target.value)}>
        {itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default Dropdown;
