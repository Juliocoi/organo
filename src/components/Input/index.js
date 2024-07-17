import './Input.css'


const Input = ({ type, label, placeholder, value, setValue }) => {
  return (
    <div className="input">
      <label htmlFor={ label }>{ label }</label>
      <input type={ type }
        placeholder={ placeholder }
        required
        id= { label }
        value={ value }
        onChange={( event ) => setValue(event.target.value)}
      />
    </div>
  )
} 

export default Input;